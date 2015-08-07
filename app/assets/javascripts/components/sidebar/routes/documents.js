'use strict';

define(['lodash', 'jquery', 'react', 'postal', 'mixins/login-dependent/LoginDependentMixin', 'postal.request-response'], function (_, $, React, postal, LoginDependentMixin) {
	var SidebarDocuments = React.createClass({
		displayName: 'SidebarDocuments',

		mixins: [React.addons.PureRenderMixin, LoginDependentMixin],
		getInitialState: function getInitialState() {
			if (typeof this.channel !== 'object') {
				this.channel = {};
			}
			this.channel['component'] = postal.channel('component');
			return null;
		},
		render: function render() {
			var content;
			if (this.state.loginStatus) {
				content = React.createElement(
					'p',
					null,
					'Logged In'
				);
			} else {
				content = React.createElement(
					'p',
					null,
					'Foobar'
				);
			}

			return content;
		}
	});

	return SidebarDocuments;
});