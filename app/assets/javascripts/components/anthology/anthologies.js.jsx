define([
	'lodash',
	'react',
	'postal',
	'components/sidebar/sidebar',
	'components/sidebar/routes/anthologies',
	'components/utilities/modal'
], function(
	_,
	React,
	postal,
	Sidebar,
	SidebarAnthologies,
	Modal
) {
	var Anthologies = React.createClass({
		getPropDefaults: function() {
			return {
				collection: []
			};
		},
		getInitialState: function() {
			return {
				deleteModalID: null
			}
		},
		componentDidMount: function() {
			postal.channel('component').subscribe('confirm-delete-modal', _.bind(function(data, envelope) {
				this.setState({deleteModalID: data.id });
				this.refs.ConfirmDeleteModal.showModal();
			},this));
		},
		deleteAnthology: function(ev) {
			ev.preventDefault();
			
			if(this.state.deleteModalID && typeof this.state.deleteModalID === 'number') {
				postal.channel('component').publish('anthology:delete', { anthology_id: this.state.deleteModalID });
				this.setState({deleteModalID: null });
			}
			this.refs.ConfirmDeleteModal.hideModal();
		},
		cancelDeleteAnthology: function(ev) {
			ev.preventDefault();
			this.setState({deleteModalID: null });
			this.refs.ConfirmDeleteModal.hideModal();
		},
		render: function() {
			return(
				<div className="row">
					<h1>Your Anthologies: <span className="subtitle"></span></h1>

					<AnthologyList collection={this.props.collection} />
					<Sidebar attach={true} title="Anthologies List">
						<SidebarAnthologies collection={this.props.collection} />
					</Sidebar>
					<Modal title="Are You Sure?" static={true} ref="ConfirmDeleteModal">
						<h2>Delete This Anthology?</h2>
						<p className="text-center">
							<button onClick={this.deleteAnthology} className='btn btn-primary btn-lg'>Yes</button>
							<button onClick={this.cancelDeleteAnthology}  className='btn btn-default btn-lg'>No</button>
						</p>
					</Modal>
							
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
		deleteThisDocument: function(ev) {
			ev.preventDefault();
			postal.channel('component').publish('confirm-delete-modal', {id: parseInt($(ev.target).attr('data-id'))});
		},
		render: function() {
			return(
				<li>
					<a href={ '#/anthology/' + this.props.model.id }>
						{this.props.model.get('title')}
					</a>
					<small><a href="#" onClick={this.editThisDocument}>Add Documents</a></small>
					<small><a href="#" data-id={this.props.model.id} onClick={this.deleteThisDocument}>Delete Anthology</a></small>
				</li>
			);
		}
	});
	
	return Anthologies;
});