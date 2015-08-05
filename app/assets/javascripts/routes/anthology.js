'use strict';

define([
	'jquery',
	'lodash',
	'models/anthology',
	'components/anthology/anthologies',
	'postal',
	'react'
], function(
	$,
	_,
	Anthology,
	AnthologyComponent,
	postal,
	React
){
	var AnthologyRoute = function(app,id) {
		var currentAnthology;
		var channel = {};
		channel['route'] = postal.channel('route');
		if (typeof app.anthologyList !== 'undefined') {
			currentAnthology = app.anthologyList.get(parseInt(id));
			React.render(React.createElement(AnthologyComponent, {model: currentAnthology}), $('#app').get(0));
			channel['route'].publish('ready');
		} else {
			currentAnthology = new Anthology({'id': id});
			currentAnthology.fetch().then(function() {
				React.render(React.createElement(AnthologyComponent, {model: currentAnthology}), $('#app').get(0));
				channel['route'].publish('ready');
			});
		}
	}
	
	return AnthologyRoute;
})