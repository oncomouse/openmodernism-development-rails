define([
	'lodash',
	'react',
	'postal',
	'components/sidebar/sidebar',
	'components/sidebar/routes/documents',
	'components/document/short_view',
	'jquery-ui/sortable'
], function(
	_,
	React,
	postal,
	Sidebar,
	SidebarDocuments,
	DocumentShortView
) {
	var Documents = React.createClass({
		getPropDefaults: function() {
			return {
				collection: []
			};
		},
		componentDidMount: function() {
			postal.channel('component').subscribe('anthology:edit', function(data, envelope) {
				$('#DocumentsView').addClass('sortable target list-group').find('li').addClass('list-group-item');
			});
			postal.channel('component').subscribe('anthology:done-editing', function(data, envelope) {
				$('#DocumentsView').removeClass('sortable target list-group').find('li').removeClass('list-group-item');
			});
		},
		render: function() {
			return(
				<div className="row">
					<h1>List of Available Documents <span className="subtitle"></span></h1>

					<DocumentList collection={this.props.collection} ref="DocumentList"/>
					<Sidebar attach={true} title="Documents List">
						<SidebarDocuments collection={this.props.collection} />
					</Sidebar>
				</div>
			);
		}
	});
	
	var DocumentList = React.createClass({
		createChildren: function() {
			return _.map(this.props.collection.models, function (element) {
				return (<DocumentShortView model={element} key={JSON.stringify(element)}/>);
			});
		},
		render: function() {
			return (
				<ul id="DocumentsView">
					{this.createChildren()}
				</ul>
			)
		}
	});
	
	return Documents;
});