define([
	'lodash',
	'postal'
], function(
	_,
	postal
){
	var ProtectedRouteMixin = {
		getInitialState: function() {			
			postal.channel('component').subscribe('anthology:doneEditing', _.bind(this.doneEditing,this));
			postal.channel('login').subscribe('change', _.bind(function(data, envelope){
				this.fireAuthorizedCheck();
			}, this));
			return {
				authorized: false
			};
		},
		componentDidMount: function() {
			this.fireAuthorizedCheck();
		},
		fireAuthorizedCheck: function() {
			postal.channel('login').request({
				topic: 'can-user-edit?',
				data: {
					object_owner: this.props.model.get('user')
				}
			}).then(_.bind(function(data) {
				this.setState({authorized: data.user_can_edit});
			}, this));
		},
		authorizedForRoute: function() {
			return this.state.authorized;
		}
	};

	return ProtectedRouteMixin;	
});