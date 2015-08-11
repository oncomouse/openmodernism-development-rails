'use strict';

define([
	'jquery',
	'lodash',
	'models/anthology',
	'models/document',
	'collections/document_collection',
	'components/anthology/anthology',
	'postal',
	'react'
], function(
	$,
	_,
	Anthology,
	Document,
	DocumentCollection,
	AnthologyComponent,
	postal,
	React
){
	var AnthologyRoute = function(app,id) {
		var currentAnthology;
		var channel = {};
		channel['route'] = postal.channel('route');
		currentAnthology = new Anthology({'id': id});
		var options = (typeof app.documentList !== 'undefined') ? {data: { no_preload: true }} : {};
		currentAnthology.fetch(options).then(function() {
			var current_documents = new DocumentCollection;
			var document_list = (typeof app.documentList !== 'undefined') ? JSON.parse(currentAnthology.get('toc')) : currentAnthology.get('documents');
			_.each(document_list, function(document) {
				current_documents.add(new Document(document));
			});
			currentAnthology.set('documents', current_documents);
			React.render(React.createElement(AnthologyComponent, {model: currentAnthology}), $('#app').get(0));
			channel['route'].publish('ready');
		});
	}
	
	return AnthologyRoute;
})