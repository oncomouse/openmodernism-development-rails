'use strict';

define(['lodash', 'react'], function (_, React) {
	var DocumentShortView = React.createClass({
		displayName: 'DocumentShortView',

		render: function render() {
			return React.createElement(
				'li',
				null,
				React.createElement('a', { href: '#/document/' + this.props.model.id, dangerouslySetInnerHTML: { __html: this.props.model.get('metadata').to_s() } })
			);
		}
	});

	return DocumentShortView;
});