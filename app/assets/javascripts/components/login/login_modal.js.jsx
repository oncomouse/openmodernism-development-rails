define([
	'jquery',
	'lodash',
	'react',
	'postal',
	'components/login/login_form',
	'components/utilities/modal',
	'utilities/form_validation'

], function(
	$,
	_,
	React,
	postal,
	LoginForm,
	Modal,
	FormValidation
) {
	var LoginModal = React.createClass({
		mixins: [
			React.addons.PureRenderMixin
		],
		getInitialState: function() {
			return {
				tab: 'login-tab'
			}
		},
		componentDidMount: function() {
			postal.channel('login').subscribe('show-modal', _.bind(function(data, envelope) {
				this.refs.LoginModal.showModal();
			}, this));
			postal.channel('login').subscribe('submitted', _.bind(function(data, envelope) {
				this.removeModal();
			}, this));
			
			$(this.refs.LoginModal.getDOMNode()).on('hide.bs.modal', _.bind(this.cleanModal, this));
			$(this.refs.LoginModal.getDOMNode()).find('a[data-toggle="tab"]').on('show.bs.tab', _.bind(function (e) {
				console.log(e);
				this.setState({tab: $(e.target).attr('id')});
			}, this));
		},
		changeModalTab(data, envelope) {
			if(data.modal == 'LoginModal') {
				FormValidation.clear_errors($(this.refs.LoginModal.getDOMNode()).find('.active form'));
			}
		},
		cleanModal: function() {
			$(this.refs.LoginModal.getDOMNode()).find('.login-tab').tab('show');
			$(this.refs.LoginModal.getDOMNode()).find('input[type!=submit]').val('');
			FormValidation.clear_errors($(this.refs.LoginModal.getDOMNode()).find('.active form'));
		},
		removeModal: function() {
			this.refs.LoginModal.hideModal();
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
			  	<Modal ref='LoginModal' title={title}>
					<LoginForm ref='LoginForm' modal={true} static={false} />
				</Modal>
			);
		}
	});
	return LoginModal;
});