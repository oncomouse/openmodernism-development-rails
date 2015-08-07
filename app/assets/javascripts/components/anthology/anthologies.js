'use strict';

define(['lodash', 'react', 'mixins/publish-component-mount/PublishComponentMountMixin', 'components/sidebar/sidebar'], function (_, React, PublishComponentMountMixin, Sidebar) {
	var Anthologies = React.createClass({
		displayName: 'Anthologies',

		mixins: [PublishComponentMountMixin],
		getPropDefaults: function getPropDefaults() {
			return {
				collection: []
			};
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: "row" },
				React.createElement(
					'h1',
					null,
					'List of Available Anthologies ',
					React.createElement('span', { className: "subtitle" })
				),
				React.createElement(AnthologyList, { collection: this.props.collection }),
				React.createElement(Sidebar, { attach: true, route: "anthologies" })
			);
		}
	});

	var AnthologyList = React.createClass({
		displayName: 'AnthologyList',

		createChildren: function createChildren() {
			return _.map(this.props.collection.models, function (element) {
				return React.createElement(AnthologyShortView, { model: element, key: JSON.stringify(element) });
			});
		},
		render: function render() {
			return React.createElement(
				'ul',
				{ id: "AnthologiesView" },
				this.createChildren()
			);
		}
	});

	var AnthologyShortView = React.createClass({
		displayName: 'AnthologyShortView',

		render: function render() {
			return React.createElement(
				'li',
				null,
				React.createElement('a', { href: '#/anthology/' + this.props.model.id, dangerouslySetInnerHTML: { __html: this.props.model.get('metadata').to_s() } })
			);
		}
	});

	return Anthologies;
});