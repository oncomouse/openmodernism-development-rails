'use strict';

define(['react'], function (React) {
	var SidebarAnthologies = React.createClass({
		displayName: 'SidebarAnthologies',

		mixins: [React.addons.PureRenderMixin],
		render: function render() {
			return React.createElement(
				'p',
				null,
				'Foobar'
			);
		}
	});

	return SidebarAnthologies;
});