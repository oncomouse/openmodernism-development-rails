define([
	'lodash',
	'react',
	'mixins/publish-component-mount/PublishComponentMountMixin',
	'components/sidebar/sidebar',
	'components/sidebar/routes/documents',
	'components/document/short_view'
], function(
	_,
	React,
	PublishComponentMountMixin,
	Sidebar,
	SidebarDocuments,
	DocumentShortView
) {
	var Documents = React.createClass({
		mixins: [
			PublishComponentMountMixin
		],
		getPropDefaults: function() {
			return {
				collection: []
			};
		},
		render: function() {
			return(
				<div className="row">
					<h1>List of Available Documents <span className="subtitle"></span></h1>

					<DocumentList collection={this.props.collection} />
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