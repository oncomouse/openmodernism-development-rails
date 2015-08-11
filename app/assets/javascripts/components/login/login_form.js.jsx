define([
	'react',
	'postal'
], function(
	React,
	postal
) {
	var LoginForm = React.createClass({
		mixins: [
			React.addons.PureRenderMixin
		],
		componentWillMount: function() {
			if(typeof this.channel !== 'object') {
				this.channel = {};
			}
			this.channel['login'] = postal.channel('login');
		},
		getDefaultProps: function() {
			return {
				modal: false,
				static: false
			}
		},
		handleSubmit: function(ev) {
			ev.preventDefault();
	
			this.channel['login'].publish('submit', {
				event: ev,
			});
		},
		render: function() {
			return (
				<form onSubmit={this.handleSubmit} id="LoginForm" className="new_user" action="/users/sign_in" acceptCharset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="&#x2713;" />
					<div className='form-group'>
						<label className="control-label" htmlFor="user_email">Email</label>
						<input placeholder="Your Email Address" className="form-control" required="required"	type="email" name="user[email]" id="user_email" />
					</div>
					<div className='form-group'>
						<label className="control-label" htmlFor="user_password">Password</label>
						<input placeholder="Password" className="form-control" required="required"	type="password" name="user[password]" id="user_password" />
					</div>
					<div className='remember form-group'>
						<input name="user[remember_me]" type="hidden" value="0" /><input type="checkbox" value="1" name="user[remember_me]" id="user_remember_me" />
						<label htmlFor="user_remember_me">Remember me</label>
					</div>
					<div className='form-group form-group-submit text-right'>
						<input type="submit" value="Sign in" className="btn btn-primary" />
						<button className='btn btn-default' data-dismiss={(this.props.modal && !this.props.static) ? 'modal' : ''}>Cancel</button>
					</div>
				</form>
			);
		}
	});
	
	return LoginForm;
});