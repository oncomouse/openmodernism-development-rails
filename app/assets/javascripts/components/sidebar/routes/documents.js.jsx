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
		render: function() {
			var content;
			if(this.state.loginStatus) {
				content = (
					<CurrentAnthology sidebar={true}/>
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