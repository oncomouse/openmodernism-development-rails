'use strict';

define([
	'jquery',
	'lodash',
	'collections/anthology_collection',
	'models/anthology',
	'components/anthology/anthologies',
	'postal',
	'react'
], function(
	$,
	_,
	AnthologyCollection,
	Anthology,
	Anthologies,
	postal,
	React
) {
	var AnthologiesRoute = function(app) {
		var fetch_collection = false;
		
		var channel = {};
		channel.route = postal.channel('route');
		channel.component = postal.channel('component');
	
		if(!_.has('anthologyList', app)) {
			fetch_collection = true;
			app.anthologyList = new AnthologyCollection();
		}
		if(fetch_collection) {
			app.anthologyList.fetch().then(function() { 
				React.render(React.createElement(Anthologies, {collection: app.anthologyList}), $('#app').get(0));
				channel.route.publish('ready');
			});
		} else {
			React.render(React.createElement(Anthologies, {collection: app.anthologyList}), $('#app').get(0));
			channel.route.publish('ready');
		}
		channel.component.subscribe('create:anthology', function(data, envelope) {
			var anthology = {};
			_.each(data.form, function(input) {
				var m = input.name.match(/anthology\[([^\]]+)\]/)
				if(m && m.length > 1) {
					anthology[m[1]] = input.value; 
				}
			});
			anthology = new Anthology(anthology);
			anthology.save().then(function() {
				app.anthologyList.push(anthology);
				React.render(React.createElement(Anthologies, {collection: app.anthologyList}), $('#app').get(0));
			});
			
			
		});
	}
	return AnthologiesRoute;
});