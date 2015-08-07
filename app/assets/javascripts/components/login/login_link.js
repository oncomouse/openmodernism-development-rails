'use strict';

define(['jquery', 'lodash', 'react', 'postal', 'mixins/route-architecture/RouteArchitectureMixin', 'mixins/publish-component-mount/PublishComponentMountMixin', 'mixins/login-dependent/LoginDependentMixin', 'postal.request-response'], function ($, _, React, postal, RouteArchitectureMixin, PublishComponentMountMixin, LoginDependentMixin) {
	var LoginLink = React.createClass({
		displayName: 'LoginLink',

		mixins: [React.addons.PureRenderMixin, RouteArchitectureMixin, PublishComponentMountMixin, LoginDependentMixin],
		/*mountComponent: function() {
  	React.render(
  		<LoginLink />,
  		$('nav .collapse ul.navbar-right').get(0)
  	);
  },*/
		clickLogin: function clickLogin(ev) {
			ev.stopPropagation();
			ev.preventDefault();
			this.channel['login'].publish('show-modal', {});
		},
		clickLogout: function clickLogout(ev) {
			ev.stopPropagation();
			ev.preventDefault();
			this.channel['login'].publish('logout-request', {});
		},
		render: function render() {
			var loginButton = React.createElement(LoginButton, { onClick: this.clickLogin });
			if (this.state.loginStatus) {
				loginButton = React.createElement(LogoutButton, { onClick: this.clickLogout });
			}
			return loginButton;
		}
	});

	var LoginButton = React.createClass({
		displayName: 'LoginButton',

		mixins: [React.addons.PureRenderMixin],
		render: function render() {
			return React.createElement(
				'li',
				null,
				React.createElement(
					'a',
					{ href: "#", id: "LoginLink", onClick: this.props.onClick },
					'Login'
				)
			);
		}
	});

	var LogoutButton = React.createClass({
		displayName: 'LogoutButton',

		mixins: [React.addons.PureRenderMixin],
		render: function render() {
			return React.createElement(
				'li',
				null,
				React.createElement(
					'a',
					{ href: "#", id: "LoginLink", onClick: this.props.onClick },
					'Logout'
				)
			);
		}
	});

	return LoginLink;
});