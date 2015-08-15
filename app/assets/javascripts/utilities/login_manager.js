'use strict';

define([
	'jquery',
	'lodash',
	'backbone',
	'postal',
	'react',
	'utilities/form_validation',
	'utilities/alert_manager',
	'components/login/login_link',
	'components/login/login_modal',
	'components/login/login_page',
	'bootstrap/tab',
	'bootstrap/modal',
	'postal.request-response'
], function(
	$,
	_,
	Backbone,
	postal,
	React,
	FormValidation,
	AlertManager,
	LoginLinkComponent,
	LoginModalComponent,
	LoginPageComponent
){
	var User = Backbone.Model.extend({
		idAttribute: 'id',
		defaults: {
			email: null,
			authentication_token: null
		}
	});
	
	var LoginManager = Backbone.Model.extend({
		initialize: function() {
			var postal_subscriptions = {};
			
			postal_subscriptions['route:ready'] = postal.channel('route').subscribe('ready', _.bind(function(data, envelope) {
				// Override Backbone.sync to send our API headers. This is the major work of the LoginManager:
				Backbone.original_sync = Backbone.sync;
				Backbone.sync = function(method, model, options) {
				    _.defaults(options || (options = {}), {
				    	headers: {}
				    });
					if(window.session_user.has('email') && window.session_user.get('email')) {
						options.headers['X-API-EMAIL'] = window.session_user.get('email');
						options.headers['X-API-TOKEN'] = window.session_user.get('authentication_token');
					}
				
					return Backbone.original_sync(method, model, options);
				};
				postal.unsubscribe(postal_subscriptions['route:ready']);
			}, this));
			
			window.session_user = new User;
			if(this.getCookie('API-USER') != "not_logged_in") {
				window.session_user.set('email', decodeURIComponent(this.getCookie('API-USER')));
				window.session_user.set('authentication_token', decodeURIComponent(this.getCookie('API-TOKEN')));
			}
			
			// Mount React Components:
			React.render(
				React.createElement(LoginLinkComponent),
				$('#LoginButtonsContainer').get(0)
			);
			$('body').append($('<div id="LoginModal"></div>'));
			React.render(
				React.createElement(LoginModalComponent),
				$('#LoginModal').get(0)
			);

			postal.channel('route').subscribe('ready', _.bind(function() {
				// Handle form submission
				$('.login-form form').on('ajax:success', _.bind(this.login_form_submission_success, this));
				$('.login-form form').on('ajax:error', _.bind(this.login_form_submission_error, this));				
			}, this));
			
			postal.channel('login').subscribe('submit', _.bind(this.postal_subscription_responders.login, this));
			postal.channel('login').subscribe('authenticated?', _.bind(this.postal_subscription_responders.is_authenticated, this));
			postal.channel('login').subscribe('can-user-edit?', _.bind(this.postal_subscription_responders.can_user_edit, this))
			postal.channel('login').subscribe('logout-request', _.bind(this.postal_subscription_responders.logout_request, this));
			
			this.authenticate();
			
		},
		postal_subscription_responders: {
			is_authenticated: function(data, envelope) {
				envelope.reply(null, this.login_postal_message());
			},
			can_user_edit: function(data, envelope) {
				envelope.reply(null, {
					user_can_edit: data.object_owner['email'] == this.current_user()
				});
			},
			logout_request: function(data, envelope) {
				this.logout();
			},
			login: function(data, envelope) {
				var ev = data.event;
				var form = $(ev.target);
				
				var method,url,data;
				
	            method = form.attr('method');
	            url = form.attr('action');
	            data = form.serializeArray();
				
				$.ajax(url, {
					method: method,
					data: data,
					dataType: 'json',
					headers: {
						'X-API-EMAIL': window.session_user.get('email'),
						'X-API-TOKEN': window.session_user.get('authentication_token')
					}
				}).done(function(data, status, xhr){
					form.trigger('ajax:success', [data, status, xhr]);
				}).fail(function(data, status, xhr) {
					form.trigger('ajax:errors', [xhr,	status, data]);
				});
				
			}
		},
		login_postal_message: function () {
			return {loginStatus: this.authenticated(), loginUser: this.current_user()}
		},
		authenticate: function() {
			postal.channel('login').publish('change', this.login_postal_message());
		},
		authenticated: function() {
			return typeof window.session_user.get('email') !== 'undefined';
		},
		current_user: function() {
			return this.authenticated() ? window.session_user.get('email') : null;
		},
		login_form_submission_success: function(ev, data){
			ev.stopPropagation();
			if ($(ev.target).attr('id') == 'LoginForm' || $(ev.target).attr('id') == 'CreateAccountForm') {
				window.session_user = new User({email: data['email'], authentication_token: data['authentication_token']});
				
				postal.channel('login').publish('change', this.login_postal_message());
				
				AlertManager.show_alert({
					target: $(ev.target),
					type: 'success',
					timeout: 300,
					message: 'Logged In Succesfully, Welcome Back!',
					clear_callback: _.bind(function() { postal.channel('login').publish('submitted'); }, this)
				});
				
				// Router handles redirect.
			}
		},
		login_form_submission_error: function(ev, xhr,	status, error){
			ev.stopPropagation();
			AlertManager.show_alert({
				target: $(ev.target),
				type: 'danger',
				timeout: null,
				message: 'XHR Error: ' + error,
				clear_callback: _.bind(function() { postal.channel('login').publish('submitted'); }, this)
			});
		},
		logout: function() {
			$.ajax('/users/sign_out', {
				method: 'delete',
				headers: {
					'X-API-EMAIL': window.session_user.get('email'),
					'X-API-TOKEN': window.session_user.get('authentication_token')
				},
				dataType: 'json'
			}).done(_.bind(function(data) {
				window.session_user = new User();
				postal.channel('login').publish('change', this.login_postal_message());
			}, this));
		},
		getCookie: function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
					var c = ca[i];
					while (c.charAt(0)==' ') c = c.substring(1,c.length);
					if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		},
		show_login_page: function() {			
			React.render(React.createElement(LoginPageComponent, {
				message: "Unauthorized Route. Please Login To Continue."
			}), $('#app').get(0));
			postal.channel('route').publish('ready');
		}
	});
	
	return LoginManager;
})