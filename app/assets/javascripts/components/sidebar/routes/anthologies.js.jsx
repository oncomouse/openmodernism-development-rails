define([
	'jquery',
	'lodash',
	'react',
	'postal',
	'mixins/login-dependent/LoginDependentMixin'
], function(
	$,
	_,
	React,
	postal,
	LoginDependentMixin
) {
	var SidebarAnthologies = React.createClass({
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
			return (
				<p>Foobar</p>
			);
		}
	});
	
	return SidebarAnthologies;
})