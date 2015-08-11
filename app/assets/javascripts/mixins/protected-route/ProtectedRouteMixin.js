define([
	'lodash',
	'postal'
], function(
	_,
	postal
){
	var ProtectedRouteMixin = {
		getInitialState: function() {
			if(typeof this.channel === 'undefined') {
				this.channel = {};
			}
			if(!_.has(this.channel, 'component')) {
				this.channel['component'] = postal.channel('component');
			}
			if(!_.has(this.channel, 'login')) {
				this.channel['login'] = postal.channel('login');
			}
			
			this.channel['component'].subscribe('anthology:doneEditing', _.bind(this.doneEditing,this));
			this.channel['login'].subscribe('change', _.bind(function(data, envelope){
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
			this.channel['login'].request({
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