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
		channel.route = postal.channel('route');
		channel.component = postal.channel('component');
		currentAnthology = new Anthology({'id': id});
		var options = (typeof app.documentList !== 'undefined') ? {data: { no_preload: true }} : {};
		currentAnthology.fetch(options).then(function() {
			window.currentAnthology = currentAnthology;
			var current_documents = new DocumentCollection;
			var document_list = (typeof app.documentList !== 'undefined') ? JSON.parse(currentAnthology.get('toc')) : currentAnthology.get('documents');
			_.each(document_list, function(document) {
				current_documents.add(new Document(document));
			});
			currentAnthology.set('documents', current_documents);
			React.render(React.createElement(AnthologyComponent, {model: currentAnthology}), $('#app').get(0));
			channel.route.publish('ready');
			
			channel.component.subscribe('model-has-changed', function(data, envelope) {
				_.each(data, function(value, key) {
					currentAnthology.set(key, value);
				});
				currentAnthology.save();
				React.render(React.createElement(AnthologyComponent, {model: currentAnthology}), $('#app').get(0));
			});
		});
	}
	
	return AnthologyRoute;
})