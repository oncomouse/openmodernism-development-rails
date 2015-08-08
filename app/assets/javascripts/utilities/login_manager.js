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
	LoginModalComponent
){
	var LoginManager = Backbone.Model.extend({
		initialize: function() {
			this.channel = {};
			this.channel.subscriptions = {};
			this.channel['route'] = postal.channel('route');
			
			this.original_sync = true;
			this.channel.subscriptions['route:ready'] = this.channel['route'].subscribe('ready', _.bind(function(data, envelope) {
				// Override Backbone.sync to send our API headers. This is the major work of the LoginManager:
				Backbone.original_sync = Backbone.sync;
				Backbone.sync = function(method, model, options) {
				    _.defaults(options || (options = {}), {
				    	headers: {}
				    });
					if(_.has(window.session_user, 'email')) {
						options.headers['X-API-EMAIL'] = window.session_user['email'];
						options.headers['X-API-TOKEN'] = window.session_user['authentication_token'];
					}
				
					return Backbone.original_sync(method, model, options);
				};
				this.original_sync = false;
				postal.unsubscribe(this.channel.subscriptions['route:ready']);
			}, this));
			
			
			
			window.session_user = {};
			if(this.getCookie('API-USER') != "not_logged_in") {
				window.session_user['email'] = decodeURIComponent(this.getCookie('API-USER'));
				window.session_user['authentication_token'] = decodeURIComponent(this.getCookie('API-TOKEN'));
			}
			
			React.render(
				React.createElement(LoginLinkComponent),
				$('nav .collapse ul.navbar-right').get(0)
			);
			$('body').append($('<div id="LoginModal"></div>'));
			React.render(
				React.createElement(LoginModalComponent),
				$('#LoginModal').get(0)
			);
			
			this.channel['login'] = postal.channel('login');
			this.channel['component'] = postal.channel('component');
			
			// Handle form submission (which is passed through jquery-ujs)
			$('#LoginModal form').on('ajax:success', _.bind(this.login_form_submission, this));
			$('#LoginModal form').on('ajax:error', _.bind(this.login_form_submission_error, this));
			
			this.channel['login'].subscribe('submit', _.bind(function(data, envelope) {
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
						'X-API-EMAIL': window.session_user['email'],
						'X-API-TOKEN': window.session_user['authentication_token']
					}
				}).done(function(data, status, xhr){
					form.trigger('ajax:success', [data, status, xhr]);
				}).fail(function(data, status, xhr) {
					form.trigger('ajax:errors', [xhr,	status, data]);
				});
				
			}, this));
			
			this.channel['login'].subscribe('authenticated?', _.bind(function(data,envelope) {
				envelope.reply(null, {authenticated: this.authenticated()})
			}, this));
			
			this.channel['login'].subscribe('logout-request', _.bind(this.logout, this));
			
			this.authenticate();
			
		},
		authenticate: function() {
			this.channel['login'].publish('change', {loginStatus: _.has(window.session_user, 'email')});
		},
		authenticated: function() {
			return _.has(window.session_user, 'email');
		},
		login_form_submission: function(ev, data){
			ev.stopPropagation();
			if ($(ev.target).attr('id') == 'LoginForm' || $(ev.target).attr('id') == 'CreateAccountForm') {
				this.channel['login'].publish('change', {
					loginStatus: true
				});
				window.session_user['email'] = data['email'];
				window.session_user['authentication_token'] = data['authentication_token'];
				AlertManager.show_alert({
					target: $(ev.target),
					type: 'success',
					timeout: 300,
					message: 'Logged In Succesfully, Welcome Back!',
					clear_callback: _.bind(function() { this.channel['login'].publish('submitted'); }, this)
				});
			}
		},
		login_form_submission_error: function(ev, xhr,	status, error){
			ev.stopPropagation();
			AlertManager.show_alert({
				target: $(ev.target),
				type: 'danger',
				timeout: null,
				message: 'XHR Error: ' + error,
				clear_callback: _.bind(function() { this.channel['login'].publish('submitted'); }, this)
			});
		},
		logout: function() {
			$.ajax('/users/sign_out', {
				method: 'delete',
				headers: {
					'X-API-EMAIL': window.session_user['email'],
					'X-API-TOKEN': window.session_user['authentication_token']
				},
				dataType: 'json'
			}).done(_.bind(function(data) {
				window.session_user = {};
				this.channel['login'].publish('change', {
					loginStatus: false
				});
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
		}
	});
	
	return LoginManager;
})