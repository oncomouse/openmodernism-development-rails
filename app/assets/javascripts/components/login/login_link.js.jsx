define([
	'jquery',
	'lodash',
	'react',
	'postal',
	'mixins/route-architecture/RouteArchitectureMixin',
	'mixins/publish-component-mount/PublishComponentMountMixin',
	'mixins/login-dependent/LoginDependentMixin',
	'postal.request-response'
], function(
	$,
	_,
	React,
	postal,
	RouteArchitectureMixin,
	PublishComponentMountMixin,
	LoginDependentMixin
) {
	var LoginLink = React.createClass({
		mixins: [
			React.addons.PureRenderMixin,
			RouteArchitectureMixin,
			PublishComponentMountMixin,
			LoginDependentMixin
		],
		/*mountComponent: function() {
			React.render(
				<LoginLink />,
				$('nav .collapse ul.navbar-right').get(0)
			);
		},*/
		clickLogin: function(ev) {
			ev.stopPropagation();
			ev.preventDefault();
			this.channel['login'].publish('show-modal',{});
		},
		clickLogout: function(ev) {
			ev.stopPropagation();
			ev.preventDefault();
			this.channel['login'].publish('logout-request',{});
		},
		render: function() {
			var loginButton = <LoginButton onClick={this.clickLogin}/>;
			var loginContent = <ul id="LoginButtons" className="nav navbar-nav navbar-right">{loginButton}</ul>;
			if(this.state.loginStatus) {
				loginButton = <LogoutButton onClick={this.clickLogout}/>;
				loginContent = <ul id="LoginButtons" className="nav navbar-nav navbar-right">
					<li><a href="#/anthologies/">Anthology Dashboard</a></li>
					{loginButton}
				</ul>
			}
			return loginContent;
		}
	});
	
	
	var LoginButton = React.createClass({
		mixins: [
			React.addons.PureRenderMixin,
		],
		render: function() {
			return (
				<li><a href="#" id="LoginLink" onClick={this.props.onClick}>Login</a></li>
			)
		}
	});
	
	var LogoutButton = React.createClass({
		mixins: [
			React.addons.PureRenderMixin,
		],
		render: function() {
			return (
				<li><a href="#" id="LoginLink" onClick={this.props.onClick}>Logout</a></li>
			)
		}
	})
	
	return LoginLink;
});
