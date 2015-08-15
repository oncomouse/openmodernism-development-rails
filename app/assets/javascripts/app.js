'use strict';

define([
	'jquery',
	'lodash',
	'backbone',
	'has',
	'router',
	'react',
	'postal',
	'collections/anthology_collection',
	'bootstrap/transition',
	'bootstrap/collapse',
	'postal.request-response'
],function(
	$,
	_,
	Backbone,
	has,
	Router,
	React,
	postal,
	AnthologyCollection
){
	var start = function() {
		var DEBUG = true;

		var app = {};

		app.routes = {
			'': 'documents', // SET THIS TO THE DEFAULT ROUTE
			'documents': 'documents',
			'document/:id': 'document',
			'anthology/:id': 'anthology'
		};
		
		app.protected_routes = {
			'anthologies': 'anthologies'
		};

		app.clearAppCanvas = function() {
			$('#app').html('');
		}
		
		app.currentAnthology = {
			id: null,
			contents: null
		}
		
		postal.channel('cache').subscribe('document?', function(data, envelope) {
			var document = undefined;
			if(typeof app.documentList !== 'undefined') {
				document = app.documentList.get(data.id);
			}
			envelope.reply(null, {
				document: document
			});
		});
		
		postal.channel('login').subscribe('change', function(data, envelope) {
			if(!data.loginStatus && _.has(app, 'anthologyList')) {
				app.anthologyList = null;
				app.currentAnthology = {
					id: null,
					contents: null
				}
			}
			postal.channel('component').publish('anthology:logged-out');
		});
		postal.channel('component').subscribe('anthology:list', function(data, envelope) {
			if(!_.has(app, 'anthologyList')) {
				app.anthologyList = new AnthologyCollection();
				app.anthologyList.fetch().then(function() {
					envelope.reply(null, {
						anthologyList: app.anthologyList
					});
				});
			} else {
				envelope.reply(null, {
					anthologyList: app.anthologyList
				});
			}
		});
		postal.channel('component').subscribe('anthology:edit', function(data, envelope) {
			app.currentAnthology = {
				id: data.id
			}
			var contents = undefined;
			if(typeof app.anthonologyList === 'undefined') {
				contents = app.anthologyList.get(id);
			} else {
				contents = new Anthology({id: id});
				contents.fetch().then(function() {
					postal.channel('component').publish('anthology:edit-contents', {
						contents: contents.documents
					});
				});
			}
		});
		postal.channel('component').subscribe('anthology:done-editing', function(data, envelope) {
			app.currentAnthology = {
				id: null,
				contents: null
			}
		});
		postal.channel('component').subscribe('anthology:current-anthology?', function(data, envelope) {
			envelope.reply(null, {
				id: app.currentAnthology.id,
				contents: app.currentAnthology.contents
			})
		});

		$(document).ready(function() {
			// Generate the router:
			app.router = new Router({routes: _.merge(app.routes, app.protected_routes), context: app});
			
			// Attach screen size tests (they depend on jQuery):
			_.each(['xs','sm','md','lg'], function(size) { 
				has.add('screen-' + size, function() { 
					var ret;

					ret = ($('<div class="visible-'+size+'-block"></div>')).appendTo('body').css('display') === 'block';
					$('body > .visible-'+size+'-block').remove();
					return ret;
				});
			});
			
			has.add('screen-xs-up', function() { return true; });
			has.add('screen-sm-up', function() { return has('screen-sm') || has('screen-md') || has('screen-lg'); });
			has.add('screen-md-up', function() { return has('screen-md') || has('screen-lg'); });
			has.add('screen-lg-up', function() { return has('screen-lg'); });

			if (window.development && DEBUG) {
				require([
					'postal.diagnostics'
				], function(DiagnosticsWireTap) {
					var dwt = new DiagnosticsWireTap({
						name: 'console',
						writer: function(output) { console.log(output); }
					});
				});
				/*app.router.on('all', function(route, params) {
					console.log('Route', arguments);
				});
				Backbone.Model.prototype.trigger = function() {
					console.log('Event', arguments);
					Backbone.Events.trigger.apply(this, arguments);
				}*/
			}

			Backbone.history.start();

		});
	};
	return {
		'start': start
	}
});