define([
	'react',
	'bootstrap/affix'
], function (
	React
) {
	var Sidebar = React.createClass({
		mixins: [
			React.addons.PureRenderMixin
		],
		getDefaultProps: function() {
			return {
				cols: 5,
				affix: true,
				title: ''
			};
		},
		render: function() {
			return (
				<aside id='Sidebar' data-affix={this.props.affix}>
					<div className='sidebar'>
						<div className='sidebar-heading'>
							<h4 className='sidebar-title'>{this.props.title}</h4>
						</div>
						<div className='sidebar-body'>
							{this.props.children}
						</div>
					</div>
				</aside>
			);
		}
	});
	
	return Sidebar;
});
