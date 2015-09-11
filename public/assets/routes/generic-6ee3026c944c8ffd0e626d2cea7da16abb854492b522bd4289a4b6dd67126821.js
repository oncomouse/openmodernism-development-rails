

define('routes/generic',[
	'postal'
], function(
	postal
) {
	var GenericRoute = function(app) {
		
		var channel = {};
		channel['route'] = post.channel('route');
		
		// Your code goes here:
		
		channel['route'].publish('ready');
	}
	return GenericRoute;
});

