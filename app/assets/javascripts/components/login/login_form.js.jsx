define([
	'jquery',
	'lodash',
	'react',
	'postal',
	'utilities/form_validation',
	'bootstrap/tab'
], function(
	$,
	_,
	React,
	postal,
	FormValidation
) {
	var LoginFormContainer = React.createClass({
		getDefaultProps: function() {
			return {
				modal: false,
				static: false
			}
		},
		componentDidUpdate: function(prevProps, prevState) {
			this.hookupForm();
		},
		componentWillMount: function() {
			if(typeof this.channel !== 'object') {
				this.channel = {};
			}
			this.channel['login'] = postal.channel('login');
		},
		hookupForm: function() {
			// Hook up form validation:
			FormValidation.setup($(this.getDOMNode()).find('.active form'));
			
			// Resize the modal:
			$(this.getDOMNode()).modal('handleUpdate');
		},
		componentDidMount: function() {
			this.hookupForm();
			$(this.getDOMNode()).find('a[data-toggle="tab"]').on('show.bs.tab', _.bind(function (e) {
				FormValidation.clear_errors($(this.getDOMNode()).find('.active form'));
				this.hookupForm();
			}, this));
		},
		handleSubmit: function(ev) {
			ev.preventDefault();
	
			this.channel['login'].publish('submit', {
				event: ev,
			});
		},
		render: function() {
				return(
					<div className='login-form'>
						<ul className='nav nav-tabs'>
							<li className='active'><a data-toggle="tab" href=".login-tab">Login</a></li>
							<li><a data-toggle="tab" href=".create-account-tab">Create Account</a></li>
						</ul>
						<div className='tab-content panel panel-default login-form-body' data-title='Please Login'>
							<div className='tab-pane active panel-body login-tab'>
								<LoginForm modal={this.props.modal} static={this.props.static} onSubmit={this.handleSubmit} />
							</div>
							<div className='tab-pane panel-body create-account-tab' data-title='Create Account'>
								 <LoginCreateForm modal={this.props.modal} static={this.props.static} onSubmit={this.handleSubmit} />
							</div>
						</div>
					</div>
				);
		}
	})
	var LoginForm = React.createClass({
		mixins: [
			React.addons.PureRenderMixin
		],
		getDefaultProps: function() {
			return {
				modal: false,
				static: false,
				onSubmit: function(){}
			}
		},
		render: function() {
			return (
				<form onSubmit={this.props.onSubmit} id="LoginForm" className="new_user" action="/users/sign_in" acceptCharset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="&#x2713;" />
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
						<LoginFormCancelButton modal={this.props.modal} static={this.props.static} />
					</div>
				</form>
			);
		}
	});
	
	
	var LoginCreateForm = React.createClass({
		mixins: [
			React.addons.PureRenderMixin
		],
		getDefaultProps: function() {
			return {
				modal: false,
				static: false,
				onSubmit: (function(){})
			}
		},
		render: function() {
			return (
				<form onSubmit={this.props.onSubmit} id="CreateAccountForm" action="/users" acceptCharset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="&#x2713;" />
					<div className='form-group'>
						<label className="control-label" htmlFor="user_email">Email</label>
						<input placeholder="Your Email Address" className="form-control" required="required"	type="email" name="user[email]" id="user_email" />
					</div>
					<div className='form-group'>
						<label className="control-label" htmlFor="user_password">Password</label>
						<input placeholder="Password" className="form-control" required="required"	data-match="#user_password_confirmation" minLength="8" type="password" name="user[password]" id="user_password" />
					</div>
					<div className='form-group'>
						<label className="control-label" htmlFor="user_password2">Confirm Password</label>
						<input placeholder="Confirm Password" className="form-control" required="required"	data-match="#user_password" minLength="8" type="password" name="user[password_confirmation]" id="user_password_confirmation" />
					</div>
					<div className='form-group form-group-submit text-right'>
						<input type="submit" value="Create Account" className="btn btn-primary" />
						<LoginFormCancelButton modal={this.props.modal} static={this.props.static} />
					</div>
				</form>
			);
		}
	});
	var LoginFormCancelButton = React.createClass({
		mixins: [
			React.addons.PureRenderMixin
		],
		getDefaultProps: function() {
			return {
				modal: false,
				static: false
			}
		},
		render: function() {
			content = <span></span>;
			if(this.props.modal && !this.props.static) {
				<button className='btn btn-default' data-dismiss='modal'>Cancel</button>
			}
			
			return content;
		}
	});
	
	return LoginFormContainer;
});