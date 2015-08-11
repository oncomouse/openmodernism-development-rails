define([
	'jquery',
	'lodash',
	'react',
	'postal',
	'mixins/publish-component-mount/PublishComponentMountMixin',
	'mixins/login-dependent/LoginDependentMixin',
	'components/document/short_view',
	'jquery-ui/sortable',
	'postal.request-response',
	'bootstrap/modal'
], function(
	$,
	_,
	React,
	postal,
	PublishComponentMountMixin,
	LoginDependentMixin,
	DocumentShortView
) {
	var Anthology = React.createClass({
		mixins: [
			PublishComponentMountMixin,
			React.addons.PureRenderMixin,
			LoginDependentMixin
		],
		propTypes: {
			model: function(props, propName, componentName) { return (_.has(props, propName) && typeof props[propName].get === 'function' && typeof props[propName].set === 'function'); } /* Best we can do to check that model is a Backbone Model */
		},
		getInitialState: function() {
			this.channel['component'] = postal.channel('component');
			this.channel['component'].subscribe('anthology:done_editing', _.bind(this.done_editing,this));
			this.channel['login'].subscribe('change', _.bind(function(data, envelope){
				this.channel['login'].request({
					topic: 'can-user-edit?',
					data: {
						object_owner: this.props.model.get('user')
					}
				}).then(_.bind(function(data) {
					if(data.user_can_edit) {
						this.setState({authorized: true});
					}
				}, this));
			}, this));
			return {
				authorized: false,
				toc: JSON.parse(this.props.model.get('toc'))
			};
		},
		done_editing: function(data, envelope) {
			
		},
		componentDidMount: function() {
			this.channel['login'].request({
				topic: 'can-user-edit?',
				data: {
					object_owner: this.props.model.get('user')
				}
			}).then(_.bind(function(data) {
				if(data.user_can_edit) {
					this.setState({authorized: true});
				}
			}, this));
		},
		render: function() {
			console.log(this.props.model.get('documents'));
			var renderedChildren = 	_.map(this.props.model.get('documents').models, function (element) {
				console.log(element);
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
							<AnthologyEditButton model={this.props.model} authorized={this.state.authorized}/>
						</p>
						<ul id="AnthologyContent" className="list-group">
							{renderedChildren}
						</ul>
					</section>
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
			} else {
				$('#AnthologyContent').sortable({
					disabled: false,
					update: this.update_sortable
				});
				$('#AnthologyEdit').html('Done Editing');
				this.channel['component'].publish('anthology:done_editing', {});
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