define([
	'react',
	'postal',
	'components/login/login_form'
], function(
	React,
	postal,
	LoginForm
) {
	var LoginPage = React.createClass({
		mixins: [
			React.addons.PureRenderMixin
		],
		render: function() {
			return (
				<div className="row">
					<div className="col-md-6 center-block">
						<LoginForm />
					</div>
				</div>
			);
		}
	});
	
	return LoginPage;
});