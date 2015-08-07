'use strict';

define(['lodash', 'react', 'mixins/publish-component-mount/PublishComponentMountMixin'], function (_, React, PublishComponentMountMixin) {
	var Sidebar = React.createClass({
		displayName: 'Sidebar',

		mixins: [React.addons.PureRenderMixin, PublishComponentMountMixin],
		routes: ['documents', 'anthologies'],
		getDefaultProps: function getDefaultProps() {
			return {
				cols: 5,
				affix: true,
				route: null
			};
		},
		renderSidebar: function renderSidebar() {
			var output;

			if (_.includes(this.routes, this.props.route)) {
				require(['react', 'components/sidebar/routes/' + this.props.route], _.bind(function (React, ReactComponent) {
					React.render(React.createElement(ReactComponent, this), $('.sidebar-body .sidebar-mountpoint').get(0));
				}, this.props));
			}

			return React.createElement('div', { className: "sidebar-mountpoint" });
		},
		render: function render() {
			//{'sidebar col-md-' + this.props.cols}
			return React.createElement(
				'aside',
				{ className: 'sidebar', 'data-affix': this.props.affix },
				React.createElement(
					'div',
					{ className: 'sidebar-body' },
					this.renderSidebar()
				)
			);
		}
	});

	return Sidebar;
});