'use strict';

define([
	'postal'
], function(
	postal
) {
	var GenericRoute = function(app) {
		
		var channel = {};
		channel['route'] = post.channel('route');
		
		// Your code goes here:
		
		channel['route'].dispatch({actionType: 'route:ready' });
	}
	return GenericRoute;
});
