'use strict';

define([
	'lodash',
	'backbone',
	'postal',
	'jsyaml',
	'models/document',
	'collections/document_collection'
], function (_,Backbone,postal,jsyaml, Document, DocumentCollection) {
	var Anthology = Backbone.Model.extend({
		urlRoot: '/anthologies',
		idAttribute: 'id',
		defaults: {
			title: '',
			toc: '[]',
			documents: [],
			'_has_documents': false
		},
		get: function(attr) {
			var output = this.attributes[attr];
			if(attr === 'documents' && !this.attributes['_has_documents']) {
				output = new DocumentCollection;
				if(this.attributes.documents.length == 0) {
					var toc_internal = JSON.parse(this.attributes.toc);
					_.each(toc_internal, function(n){ output.push(new Document); }); // Make sure the document is the right length
					_.each(toc_internal, function(document_id, i) {
						postal.channel('cache').request({topic: 'document?'}).then(function(data) {
							if(typeof data.document === 'undefined') {
								document = new Document({id: document_id});
								document.fetch().then(function() {
									output.push(document);
								});
							} else {
								output.push(document);
							}
						});
					});
				} else {
					_.each(this.attributes.documents, function(document, i) {
						output.push(new Document(document));
					});
				}
				this.attributes['_has_documents'] = true;
				this.attributes.documents = output;
			}
			return output;
		},
		set: function(key, val, options) {
			var self = this,
					attrs;
			if (key == null) return this;

			if (typeof key === 'object') {
				attrs = key;
				options = val;
			} else {
				(attrs = {})[key] = val;
			}
			if ('toc' in attrs) {
				if (typeof attrs['toc'] === 'String') {
					this.attributes['toc'] = jsyaml.safeLoad(attrs['toc']);
				} else {
					this.attributes['toc'] = attrs['toc'];
				}
				delete attrs['toc'];
				this.trigger('change change:toc');
			}
			
			return Backbone.Model.prototype.set.call(this, attrs, options);
		}
	});
	return Anthology;
});