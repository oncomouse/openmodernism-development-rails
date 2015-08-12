define([
	'jquery',
	'lodash',
	'react',
	'postal',
	'mixins/publish-component-mount/PublishComponentMountMixin',
	'mixins/login-dependent/LoginDependentMixin',
	'mixins/protected-route/ProtectedRouteMixin',
	'components/document/short_view',
	'components/utilities/modal',
	'jquery-ui/sortable',
	'postal.request-response'
], function(
	$,
	_,
	React,
	postal,
	PublishComponentMountMixin,
	LoginDependentMixin,
	ProtectedRouteMixin,
	DocumentShortView,
	Modal
) {
	var Anthology = React.createClass({
		mixins: [
			PublishComponentMountMixin,
			LoginDependentMixin,
			ProtectedRouteMixin
		],
		propTypes: {
			model: function(props, propName, componentName) { return (_.has(props, propName) && typeof props[propName].get === 'function' && typeof props[propName].set === 'function'); } /* Best we can do to check that model is a Backbone Model */
		},
		reorder: function(toc) {
			
		},
		doneEditing: function(data, envelope) {
			this.refs.AnthologyModal.showModal();
		},
		saveChanges: function() {
			var new_toc = _.map($('#AnthologyContent li a'), _.bind(function(document) {
				return parseInt($(document).attr('data-id'));
			}, this));
			
			this.channel.component.publish('model-has-changed', { toc: JSON.stringify(new_toc) });
			
			this.refs.AnthologyModal.hideModal();
		},
		cancelChanges: function() {
			this.reorder(JSON.parse(this.props.model.get('toc')));
			
			this.refs.AnthologyModal.hideModal();
		},
		render: function() {
			var renderedChildren = 	_.map(this.props.model.get('documents').models, function (element) {
				return (<DocumentShortView model={element} key={JSON.stringify(element)}/>);
			});
			return(
				<div className="row">
					<section id="currentAnthology" className="anthology col-md-10 center-block">
						<hgroup className="anthology-metadata">
							<h1 id="anthology-title" dangerouslySetInnerHTML={{ __html: this.props.model.get('title') }} />
							<h2 id="anthology-author" dangerouslySetInnerHTML={{ __html: 'by ' + this.props.model.get('user')['email'] }} />
						</hgroup>
						<p className="text-center" id="AnthologyEditContainer">
							<AnthologyEditButton model={this.props.model} authorized={this.authorizedForRoute()} ref="AnthologyEditButton"/>
						</p>
						<ul id="AnthologyContent" className="list-group">
							{renderedChildren}
						</ul>
					</section>
					<Modal title="Save Changes?" ref="AnthologyModal" static={true}>
						<h2>Would You Like to Save Changes?</h2>
						<p className="text-center">
							<button onClick={this.saveChanges} className='btn btn-primary btn-lg'>Yes</button>
							<button onClick={this.cancelChanges}  className='btn btn-default btn-lg'>No</button>
						</p>
					</Modal>
				</div>
			);
		}
	});
	
	var AnthologyEditButton = React.createClass({
		mixins: [
			React.addons.PureRenderMixin
		],
		getInitialState: function() {
			this.channel = {}
			this.channel['component'] = postal.channel('component');
			return null;
		},
		toggleEdit: function(ev) {
			ev.preventDefault();
			if($('#AnthologyEdit').html() == 'Done Editing') {
				$('#AnthologyContent').sortable('disable');
				$('#AnthologyEdit').html('Edit This Anthology');
				this.channel['component'].publish('anthology:doneEditing', {});
			} else {
				$('#AnthologyContent').sortable({
					disabled: false,
					update: this.update_sortable
				});
				$('#AnthologyEdit').html('Done Editing');
			}
		},
		update_sortable: function() {
			this.channel['component'].publish('anthology:update_sortable', {});
		},
		render: function() {
			var content = (<span></span>);
			if (this.props.authorized){
				content = (
					<a className="btn btn-default btn-lg" id="AnthologyEdit" href="#" onClick={this.toggleEdit}>Edit This Anthology</a>							
				);
			}
			return content;
		}
	});
	
	return Anthology;
});