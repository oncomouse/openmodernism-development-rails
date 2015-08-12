define([
	'lodash',
	'jquery',
	'react',
	'postal',
	'components/anthology/current_anthology',
	'mixins/login-dependent/LoginDependentMixin'
], function(
	_,
	$,
	React,
	postal,
	CurrentAnthology,
	LoginDependentMixin
) {
	var SidebarDocuments = React.createClass({
		mixins: [
			React.addons.PureRenderMixin,
			LoginDependentMixin
		],
		getInitialState: function() {
			if(typeof this.channel !== 'object') {
				this.channel = {};
			}
			this.channel['component'] = postal.channel('component');
			return null;
		},
		render: function() {
			var content;
			if(this.state.loginStatus) {
				content = (
					<CurrentAnthology />
				);
			} else {
				content = (
					<p>Foobar</p>
				);
			}
			
			return content;
		}
	});
	
	return SidebarDocuments;
})