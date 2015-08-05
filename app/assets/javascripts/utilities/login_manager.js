'use strict';

define([
	'jquery',
	'postal',
	'react',
	'components/login/login_link',
	'components/login/login_modal',
	'postal.request-response'
], function(
	$,
	postal,
	React,
	LoginLinkComponent,
	LoginModalComponent
){
	var LoginManager = Backbone.Model.extend({
		initialize: function() {
			
			React.render(
				React.createElement(LoginLinkComponent),
				$('nav .collapse ul.navbar-right').get(0)
			);
			$('body').append($('<div id="LoginModal"></div>'));
			React.render(
				React.createElement(LoginModalComponent),
				$('#LoginModal').get(0)
			);
			
			this.channel = {};
			this.channel['login'] = postal.channel('login');
			this.channel['component'] = postal.channel('component');
			
			this.channel['login'].subscribe('submit', _.bind(function(data, envelope) {
				this.form_submit(data.formType, data.event);
			}, this));
			
			this.channel['login'].subscribe('authenticated?', _.bind(function(data,envelope) {
				envelope.reply(null, {authenticated: this.authenticated()})
			}, this));
			
			/*this.channel['component'].subscribe('register', _.bind(function(data, envelope) {
				if(data.component == 'LoginLink') {
					this.authenticate();
				}
			},this));*/
			
			this.authenticate();
			
		},
		authenticate: function() {
			this.channel['login'].publish('change', {loginStatus: false});
		},
		authenticated: function() {
			return false;
		},
		form_submit: function(form_type, ev) {
			switch(form_type) {
				case 'login':
					this.form_submit_login();
					break;
				case 'create_user':
					this.form_submit_create();
					break;
			}
		},
		form_submit_login: function(ev) {
			// Some kind of AJAX call:
			this.channel['login'].publish('submitted');
		},
		form_submit_create: function(ev) {
			// Some kind of AJAX call:
			this.channel['login'].publish('submitted');
		},
	});
	
	return LoginManager;
})