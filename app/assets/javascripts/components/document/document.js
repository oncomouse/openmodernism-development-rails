'use strict';

define(['lodash', 'react', 'mixins/publish-component-mount/PublishComponentMountMixin'], function (_, React, PublishComponentMountMixin) {
	var Document = React.createClass({
		displayName: 'Document',

		mixins: [PublishComponentMountMixin],
		propTypes: {
			model: function model(props, propName, componentName) {
				return _.has(props, propName) && typeof props[propName].get === 'function' && typeof props[propName].set === 'function';
			} /* Best we can do to check that model is a Backbone Model */
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: "row" },
				React.createElement(
					'section',
					{ id: "currentDocument", className: "document col-md-10 center-block" },
					React.createElement(
						'hgroup',
						{ className: "document-metadata" },
						React.createElement('h1', { id: "document-title", dangerouslySetInnerHTML: { __html: this.props.model.get('metadata').get('title').to_s() } }),
						React.createElement('h2', { id: "document-author", dangerouslySetInnerHTML: { __html: 'by ' + this.props.model.get('metadata').get('author').to_s(true) } })
					),
					React.createElement('div', { id: "document-content", dangerouslySetInnerHTML: { __html: this.props.model.get('text') } })
				)
			);
		}
	});

	return Document;
});