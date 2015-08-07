'use strict';

define(['lodash', 'react', 'mixins/publish-component-mount/PublishComponentMountMixin', 'components/sidebar/sidebar', 'components/document/short_view'], function (_, React, PublishComponentMountMixin, Sidebar, DocumentShortView) {
	var Documents = React.createClass({
		displayName: 'Documents',

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
					'List of Available Documents ',
					React.createElement('span', { className: "subtitle" })
				),
				React.createElement(DocumentList, { collection: this.props.collection }),
				React.createElement(Sidebar, { attach: true, route: "documents" })
			);
		}
	});

	var DocumentList = React.createClass({
		displayName: 'DocumentList',

		createChildren: function createChildren() {
			return _.map(this.props.collection.models, function (element) {
				return React.createElement(DocumentShortView, { model: element, key: JSON.stringify(element) });
			});
		},
		render: function render() {
			return React.createElement(
				'ul',
				{ id: "DocumentsView" },
				this.createChildren()
			);
		}
	});

	return Documents;
});