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
			return (
				<ul id="LoginButtons" className="nav navbar-nav navbar-right">
					<DashboardLink loginStatus={this.state.loginStatus} />
					<LoginButton onClick={this.state.loginStatus ? this.clickLogout : this.clickLogin}>
						{this.state.loginStatus ? 'Logout' : 'Login'}
					</LoginButton>
				</ul>
			);
		}
	});
	
	var LoginButton = React.createClass({
		mixins: [
			React.addons.PureRenderMixin,
		],
		render: function() {
			return (
				<li><a href="#" id="LoginLink" onClick={this.props.onClick}>{this.props.children}</a></li>
			)
		}
	});
	
	var DashboardLink = React.createClass({
		mixins: [
			React.addons.PureRenderMixin,
		],
		render: function() {
			return (
				<li>{this.props.loginStatus ? <a href="#/anthologies/">Anthology Dashboard</a> : '' }</li>
			)
		}
	})
	
	return LoginLink;
});
