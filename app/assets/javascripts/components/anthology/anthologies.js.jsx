define([
	'lodash',
	'react',
	'mixins/publish-component-mount/PublishComponentMountMixin',
	'components/sidebar/sidebar',
	'components/sidebar/routes/anthologies'
], function(
	_,
	React,
	PublishComponentMountMixin,
	Sidebar,
	SidebarAnthologies
) {
	var Anthologies = React.createClass({
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
					<h1>Your Anthologies: <span className="subtitle"></span></h1>

					<AnthologyList collection={this.props.collection} />
					<Sidebar attach={true} title="Anthologies List">
						<SidebarAnthologies collection={this.props.collection} />
					</Sidebar>
				</div>
			);
		}
	});
	
	var AnthologyList = React.createClass({
		createChildren: function() {
			return _.map(this.props.collection.models, function (element) {
					return React.createElement(AnthologyShortView, {model: element, key: JSON.stringify(element)});
				});
		},
		render: function() {
			return (
				<ul id="AnthologiesView">
					{this.createChildren()}
				</ul>
			)
		}
	});
	
	var AnthologyShortView = React.createClass({
		editThisDocument: function(ev) {
			ev.preventDefault();
			var id = this.props.model.id;
		},
		render: function() {
			return(
				<li>
					<a href={ '#/anthology/' + this.props.model.id }>
						{this.props.model.get('title')}
					</a>
					<small><a href="#" onClick={this.editThisDocument}>Add Documents</a></small>
				</li>
			);
		}
	});
	
	return Anthologies;
});