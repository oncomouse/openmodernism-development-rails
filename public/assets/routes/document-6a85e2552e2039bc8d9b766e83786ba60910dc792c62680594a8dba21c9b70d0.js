define('components/document/document',['lodash', 'react'], function (_, React) {
	var Document = React.createClass({
		displayName: 'Document',

		propTypes: {
			model: function (props, propName, componentName) {
				return _.has(props, propName) && typeof props[propName].get === 'function' && typeof props[propName].set === 'function';
			} /* Best we can do to check that model is a Backbone Model */
		},
		render: function () {
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


define('routes/document',[
	'models/document',
	'components/document/document',
	'react',
	'postal'
], function(
	Document,
	DocumentComponent,
	React,
	postal
) {
	var DocumentRoute = function(app, id) {
		var currentDocument = {};
	
		var channel = {};
		channel['route'] = postal.channel('route');
		channel['component'] = postal.channel('component');
	
		// Detect if it is possible to extract the document from a preexisting documentList instance:
		if (typeof app.documentList !== 'undefined') {
			currentDocument = app.documentList.get(parseInt(id));
			React.render(React.createElement(DocumentComponent, {model: currentDocument}), $('#app').get(0));
			channel['route'].publish('ready');
		} else {
			currentDocument = new Document({'id': id});
			currentDocument.fetch().then(function() {
				React.render(React.createElement(DocumentComponent, {model: currentDocument}), $('#app').get(0));
				channel['route'].publish('ready');
			});
		}
	}
	
	return DocumentRoute;
});

