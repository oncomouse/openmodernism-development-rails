'use strict';

define(['jquery', 'lodash', 'react', 'postal', 'mixins/route-architecture/RouteArchitectureMixin', 'mixins/publish-component-mount/PublishComponentMountMixin', 'utilities/form_validation', 'bootstrap/modal'], function ($, _, React, postal, RouteArchitectureMixin, PublishComponentMountMixin, FormValidation) {
	var LoginModal = React.createClass({
		displayName: 'LoginModal',

		mixins: [React.addons.PureRenderMixin, RouteArchitectureMixin, PublishComponentMountMixin],
		getInitialState: function getInitialState() {
			$('#LoginModal').addClass('modal fade');

			if (typeof this.channel !== 'object') {
				this.channel = {};
			}
			this.channel['login'] = postal.channel('login');
			this.channel['component'] = postal.channel('component');

			this.channel['component'].subscribe('modal-change-tab', _.bind(this.changeModalTab, this));

			this.channel['login'].subscribe('show-modal', function (data, envelope) {
				$('#LoginModal').modal('show');
			});
			this.channel['login'].subscribe('submitted', _.bind(function (data, envelope) {
				this.removeModal();
			}, this));

			return {
				tab: 'login'
			};
		},
		mountComponent: function mountComponent(data, envelope) {},
		componentDidMount: function componentDidMount() {
			this.hookupForm();
			$('#LoginModal').on('hide.bs.modal', _.bind(this.cleanModal, this));
		},
		componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
			this.hookupForm();
		},
		changeModalTab: function changeModalTab(data, envelope) {
			if (data.modal == 'LoginModal') {
				this.setState({ tab: data.tab });
				FormValidation.clear_errors('#LoginModal form');
			}
		},
		cleanModal: function cleanModal() {
			if ($('#LoginModal form').attr('action') != '#login-form') {
				this.load_pane_template('login-form');
			}
			$('#LoginModal input').val('');
			FormValidation.clear_errors('#LoginModal form');
			this.channel['login'].publish('hide-modal', {});
		},
		removeModal: function removeModal() {
			$('#LoginModal').modal('hide');
		},
		hookupForm: function hookupForm() {
			// Turn off form submission after the form validator:
			$('#LoginModal form').attr('data-nosubmit', 'data-nosubmit');

			// Hook up form validation:
			FormValidation.setup($('#LoginModal form'));

			// Trigger the modal submission handler when validation is finished:
			$('#LoginModal form').on('success.validation', _.bind(this.handleModalSubmit, this));

			// Resize the modal:
			$('#LoginModal').modal('handleUpdate');
		},
		handleModalSubmit: function handleModalSubmit(ev) {
			ev.stopPropagation();
			ev.preventDefault();

			this.channel['login'].publish('submit', {
				event: ev,
				formType: this.state.tab
			});
		},
		render: function render() {
			var title;
			switch (this.state.tab) {
				case 'login':
					title = 'Please Login';
					break;
				case 'create_user':
					title = 'Create Account';
					break;
				default:
					title = 'Error';
					break;
			}
			return React.createElement(
				'div',
				{ className: "modal-dialog" },
				React.createElement(
					'div',
					{ className: "modal-content" },
					React.createElement(
						'div',
						{ className: "modal-header" },
						React.createElement(
							'button',
							{ type: "button", className: "close", 'data-dismiss': "modal", 'aria-label': "Close" },
							React.createElement(
								'span',
								{ 'aria-hidden': "true" },
								'×'
							)
						),
						React.createElement(
							'h4',
							{ className: "modal-title" },
							title
						)
					),
					React.createElement(LoginModalForm, { tab: this.state.tab })
				)
			);
		}
	});
	var LoginModalForm = React.createClass({
		displayName: 'LoginModalForm',

		mixins: [React.addons.PureRenderMixin],
		propTypes: {
			tab: React.PropTypes.string.isRequired
		},
		getInitialState: function getInitialState() {
			if (typeof this.channel !== 'object') {
				this.channel = {};
			}
			this.channel['component'] = postal.channel('component');
			return null;
		},
		handleTabChange: function handleTabChange(ev) {
			ev.stopPropagation();
			ev.preventDefault();

			if (!$(ev.target).parent().hasClass('active')) {
				this.channel['component'].publish('modal-change-tab', {
					modal: 'LoginModal',
					tab: $(ev.target).attr('data-tab')
				});
			}
		},
		render: function render() {
			var loginFormContent, loginFooter;
			return React.createElement(
				'form',
				{ action: '#' + this.props.tab + '-form' },
				React.createElement(
					'div',
					{ className: "modal-body" },
					React.createElement(
						'ul',
						{ className: "nav nav-tabs" },
						React.createElement(
							'li',
							{ role: "presentation", className: this.props.tab == 'login' ? 'active' : '' },
							React.createElement(
								'a',
								{ href: "#", className: "login-modal-tab", 'data-tab': "login", onClick: this.handleTabChange },
								'Login'
							)
						),
						React.createElement(
							'li',
							{ role: "presentation", className: this.props.tab == 'create_user' ? 'active' : '' },
							React.createElement(
								'a',
								{ href: "#", className: "login-modal-tab", 'data-tab': "create_user", onClick: this.handleTabChange },
								'Create Account'
							)
						)
					),
					React.createElement(
						'div',
						{ id: "LoginModalContent", className: "panel panel-default" },
						React.createElement(LoginModalFormContent, { tab: this.props.tab })
					)
				),
				React.createElement(
					'div',
					{ className: "modal-footer" },
					React.createElement(LoginModalFooter, { tab: this.props.tab })
				)
			);
		}
	});

	var LoginModalFormContent = React.createClass({
		displayName: 'LoginModalFormContent',

		mixins: [React.addons.PureRenderMixin],
		propTypes: {
			tab: React.PropTypes.string.isRequired
		},
		render: function render() {
			var formContent;
			switch (this.props.tab) {
				case 'login':
					formContent = React.createElement(
						'div',
						{ className: "login-form body" },
						React.createElement(
							'div',
							{ className: "panel-body" },
							React.createElement(
								'div',
								{ className: "form-group" },
								React.createElement(
									'label',
									{ className: "control-label", htmlFor: "email" },
									'Email Address:'
								),
								React.createElement('input', { type: "email", className: "form-control", id: "email", placeholder: "Email", required: true })
							),
							React.createElement(
								'div',
								{ className: "form-group" },
								React.createElement(
									'label',
									{ className: "control-label", htmlFor: "password" },
									'Password'
								),
								React.createElement('input', { type: "password", className: "form-control", id: "password", placeholder: "Password", required: true })
							)
						)
					);
					break;
				case 'create_user':
					formContent = React.createElement(
						'div',
						{ className: "create-form body" },
						React.createElement(
							'div',
							{ className: "panel-body" },
							React.createElement(
								'div',
								{ className: "form-group" },
								React.createElement(
									'label',
									{ className: "control-label", htmlFor: "name" },
									'Your Name:'
								),
								React.createElement('input', { type: "input", className: "form-control", id: "name", placeholder: "Name", required: true })
							),
							React.createElement(
								'div',
								{ className: "form-group" },
								React.createElement(
									'label',
									{ className: "control-label", htmlFor: "email" },
									'Email Address:'
								),
								React.createElement('input', { type: "email", className: "form-control", id: "email", placeholder: "Email", required: true })
							),
							React.createElement(
								'div',
								{ className: "form-group" },
								React.createElement(
									'label',
									{ className: "control-label", htmlFor: "password" },
									'Password'
								),
								React.createElement('input', { type: "password", className: "form-control", id: "password", placeholder: "Password", required: true, 'data-match': "password2", minLength: "6" })
							),
							React.createElement(
								'div',
								{ className: "form-group" },
								React.createElement(
									'label',
									{ className: "control-label", htmlFor: "password2" },
									'Verify Password'
								),
								React.createElement('input', { type: "password", className: "form-control", id: "password2", placeholder: "Verify Password", required: true, 'data-match': "password", minLength: "6" })
							)
						)
					);
					break;
				default:
					formContent = React.createElement('div', { className: "body" });
					break;
			}
			return formContent;
		}
	});

	var LoginModalFooter = React.createClass({
		displayName: 'LoginModalFooter',

		propTypes: {
			tab: React.PropTypes.string.isRequired
		},
		render: function render() {
			var footerContent;
			switch (this.props.tab) {
				case 'login':
					footerContent = React.createElement(
						'div',
						null,
						React.createElement(
							'button',
							{ type: "button", className: "btn btn-default", 'data-dismiss': "modal" },
							'Cancel'
						),
						React.createElement(
							'button',
							{ type: "submit", className: "btn btn-primary submit", 'data-action': "login" },
							'Login'
						)
					);
					break;
				case 'create_user':
					footerContent = React.createElement(
						'div',
						null,
						React.createElement(
							'button',
							{ type: "button", className: "btn btn-default", 'data-dismiss': "modal" },
							'Cancel'
						),
						React.createElement(
							'button',
							{ type: "submit", className: "btn btn-primary submit", 'data-action': "create" },
							'Create Account'
						)
					);
					break;
				default:
					footerContent = React.createElement('div', { className: "body" });
					break;
			}

			return footerContent;
		}
	});

	return LoginModal;
});