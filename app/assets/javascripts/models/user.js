'use strict';

define([
	'backbone'
], function (Backbone) {

	var User = Backbone.Model.extend({
		idAttribute: 'id',
		defaults: {
			//id: 0,
			email: null,
			authentication_token: null
		}
	});
	
	return User;
});