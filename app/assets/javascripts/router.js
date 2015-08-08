/*!
 * Router.js
 */
define([
	'jquery',
	'underscore',
	'backbone',
	'postal',
	'react',
	'utilities/login_manager',
	'utilities/form_validation',
	'jquery-ui/effect-blind'
], function(
	$,
	_,
	Backbone,
	postal,
	React,
	LoginManager,
	FormValidation
){
	var Router = Backbone.Router.extend({
		routeReady: function() {				
			$('body').addClass('loaded');
			$('#loading .fa-spin').removeClass('fa-spin');
			$('#loading').hide('blind', {}, 500);
			
			FormValidation.setup();
		},
		// Initialization code to run every time a route is rendered (similar to $(document).ready on a normal web page):
		initialize: function(options) {
			options || (options = {});
			
			this.context = options.context;
			
			this.current_route = "";
			
			this.protected_routes = this.context.protected_routes;
		
			this.channel = {};
			this.channel['route'] = postal.channel('route');
			
			this.channel['route'].subscribe('ready', _.bind(function(data, envelope) {
				this.routeReady();
			}, this));
			
			this.channel['route'].subscribe('route?', _.bind(function(data,envelope) {
				envelope.reply({
					route: this.current_route,
					protected: _.has(this.protected_routes, this.current_route)
				});
			}, this));
			
			this.channel['route'].subscribe('change', _.bind(function(data, envelope) {
				
				React.unmountComponentAtNode($('#app').get(0));
				$('#app').html('').append('<h1 class="state-loading text-center">Loading</h1>');
				
				$('body').attr('class','loaded').addClass(data.route);
				
				this.current_route = _.findLastKey(this.routes, function(route) { return route == data.route; });
				
				/*
				This is not a good solution:
				The problem is that Rails renames assets with a cache buster, which means that r.js
				has routes named in compiled files that no longer match their file name on the server.
				
				To solve this, we check if there's a manifest (which means we're in production) and
				build a require call to that file if so. If not, the require call is empty, which is
				just a pass-through. Then, inside of that first require call, we can actually call 
				call the route.
				
				In production, this means we just call the defined route (which has loaded) by its name
				and go.
				
				In development, this is where we actualy load the file.
				
				This is weird, but seems the best way to deal with Rail's weird cache-busting.
				*/
				
				var route_file = (typeof window.manifest === 'undefined') ? '' : window.manifest['assets']['routes/' + data.route+'.js'].replace(/\.js$/,'');
				if(typeof window.manifest !== 'undefined' && _.has(window.manifest.assets,'routes/' + data.route+'_wo_citeproc.js') && require.defined('citeproc/citeproc') && !require.defined('routes/' + data.route)) {
					route_file = window.manifest['assets']['routes/' + data.route+'_wo_citeproc.js'].replace(/\.js$/,'')
				}
				require([route_file], _.bind(function() {
					require(['routes/'+data.route], _.bind(function(route) {
						route(this.context, data.params);
					}, this));
				}, this));
			}, this));
			
			_.each(this.routes, function(val, key) {
				if (key == '') { return; }
				this.on('route:' + val, function(params) {
					this.channel['route'].publish('change',{
						params: params,
						route: val
					});
				});
			}, this);
			
			this.login_manager = new LoginManager();
			

		}
	});
	return Router;
});