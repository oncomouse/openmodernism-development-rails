define([
	'jquery',
	'lodash',
	'react',
	'postal',
	'components/login/login_form',
	'mixins/route-architecture/RouteArchitectureMixin',
	'mixins/publish-component-mount/PublishComponentMountMixin',
	'utilities/form_validation',
	'bootstrap/modal',
	'bootstrap/tab'
], function(
	$,
	_,
	React,
	postal,
	LoginForm,
	RouteArchitectureMixin,
	PublishComponentMountMixin,
	FormValidation
) {
	var LoginModal = React.createClass({
		mixins: [
			React.addons.PureRenderMixin,
			RouteArchitectureMixin,
			PublishComponentMountMixin
		],
		getInitialState: function() {
			$('#LoginModal').addClass('modal fade');
			
			if(typeof this.channel !== 'object') {
				this.channel = {};
			}
			this.channel['login'] = postal.channel('login');
			this.channel['component'] = postal.channel('component');
			
			this.channel['component'].subscribe('modal-change-tab', _.bind(this.changeModalTab,this));
			
			this.channel['login'].subscribe('show-modal', function(data, envelope) {
				options = (data.static) ? {show: true, keyboard: false, backdrop: 'static' } : 'show'
				$('#LoginModal').modal(options);
			});
			this.channel['login'].subscribe('submitted', _.bind(function(data, envelope) {
				this.removeModal();
			}, this));
			
			return {
				tab: 'login-tab'
			}
		},
		mountComponent: function(data, envelope) {

			
		},
		componentDidMount: function() {
			this.hookupForm();
			$('#LoginModal').on('hide.bs.modal', _.bind(this.cleanModal, this));
			$('a[data-toggle="tab"]').on('show.bs.tab', _.bind(function (e) {
				FormValidation.clear_errors('#LoginModal .active form');
				FormValidation.clear(e.relatedTarget);
				this.hookupForm();
				this.setState({tab: $(e.target).attr('id')});
			}, this));
		},
		componentDidUpdate: function(prevProps, prevState) {
			this.hookupForm();
		},
		changeModalTab(data, envelope) {
			if(data.modal == 'LoginModal') {
				FormValidation.clear_errors('#LoginModal .active form');
			}
		},
		cleanModal: function() {
			$('#LoginModalTabs #login-tab').tab('show');
			$('#LoginModal input[type!=submit]').val('');
			FormValidation.clear_errors('#LoginModal .active form');
			this.channel['login'].publish('hide-modal', {});
		},
		removeModal: function() {
			$('#LoginModal').modal('hide');
		},
		hookupForm: function() {
			// Hook up form validation:
			FormValidation.setup($('#LoginModal .active form'));
			
			// Resize the modal:
			$('#LoginModal').modal('handleUpdate');
		},
		handleSubmit: function(ev) {
			ev.stopPropagation();
			ev.preventDefault();
			
			this.channel['login'].publish('submit', {
				event: ev,
			});
		},
		render: function() {
			var title;
			switch(this.state.tab) {
				case 'login-tab':
					title = 'Please Login';
					break;
				case 'create-user-tab':
					title = 'Create Account';
					break;
				default:
					title = 'Error';
					break;
			}
			return (
			  <div className='modal-dialog'>
				<div className='modal-content'>
				  <div className='modal-header'>
					<button aria-label='Close' className='close' data-dismiss='modal' type='button'>
					  <span aria-hidden>&times;</span>
					</button>
					<h4 className='modal-title'>{title}</h4>
				  </div>
				  <div className='modal-body'>
					<ul className='nav nav-tabs' id='LoginModalTabs'>
					  <li className='active'><a data-toggle="tab" href="#login-tab">Login</a></li>
					  <li><a data-toggle="tab" href="#create-account-tab">Create Account</a></li>
					</ul>
					<div className='tab-content panel panel-default' id='LoginModalContent'>
					  <div className='tab-pane active panel-body' id='login-tab'>
						<LoginForm modal />
					  </div>
					  <div className='tab-pane panel-body' id='create-account-tab'>
						<form onSubmit={this.handleSubmit} id="CreateAccountForm" action="/users" acceptCharset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="&#x2713;" />
							<div className='form-group'>
							  <label className="control-label" htmlFor="user_email">Email</label>
							  <input placeholder="Your Email Address" className="form-control" required="required"  type="email" name="user[email]" id="user_email" />
							</div>
							<div className='form-group'>
							  <label className="control-label" htmlFor="user_password">Password</label>
							  <input placeholder="Password" className="form-control" required="required"  data-match="#user_password_confirmation" minLength="8" type="password" name="user[password]" id="user_password" />
							</div>
							<div className='form-group'>
							  <label className="control-label" htmlFor="user_password2">Confirm Password</label>
							  <input placeholder="Confirm Password" className="form-control" required="required"  data-match="#user_password" minLength="8" type="password" name="user[password_confirmation]" id="user_password_confirmation" />
							</div>
							<div className='form-group form-group-submit text-right'>
							  <button className='btn btn-default' data-dismiss='modal'>Cancel</button>
							  <input type="submit" value="Sign in" className="btn btn-primary" />
							</div>
						</form>
					  </div>
					</div>
				  </div>
				</div>
			</div>
			);
		}
	});
	return LoginModal;
});