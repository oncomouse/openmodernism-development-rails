define([
	'react',
	'postal',
	'components/login/login_form',
	'mixins/login-dependent/LoginDependentMixin',
	'utilities/alert_manager'
], function(
	React,
	postal,
	LoginForm,
	LoginDependentMixin,
	AlertManager
) {
	var LoginPage = React.createClass({
		mixins: [
			React.addons.PureRenderMixin
		],
		getDefaultProps: function() {
			return {
				message: ''
			};
		},
		componentWillMount: function() {
			if(typeof this.channel === 'undefined') {
				this.channel = {}
			}
			if(!_.has(this.channel, 'route')) {
				this.channel.route = postal.channel('route');
			}
		},
		componentDidMount: function() {
			AlertManager.show_alert({
				type: 'danger',
				message: this.props.message,
				target: $(this.refs.LoginForm.getDOMNode()),
				timeout: null,
				dismissable: false
			});
		},
		render: function() {
			return (
				<div className="row">
					<div className="col-md-6 center-block">
						<LoginForm ref='LoginForm'/>
					</div>
				</div>
			);
		}
	});
	
	return LoginPage;
});