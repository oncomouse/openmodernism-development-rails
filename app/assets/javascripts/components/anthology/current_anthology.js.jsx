define([
	'lodash',
	'postal',
	'react',
	'mixins/login-dependent/LoginDependentMixin',
	'components/document/short_view',
	'postal.request-response',
	'jquery-ui/sortable'
], function(
	_,
	postal,
	React,
	LoginDependentMixin,
	DocumentShortView
) {
	var CurrentAnthology = React.createClass({
		mixins: [
			LoginDependentMixin
		],
		setCurrentAnthology: function(ev) {
			ev.preventDefault();
			// Get the ID from the select value:
			postal.channel('component').publish('anthology:edit', {
				id: this.refs.CurrentAnthologyContent.refs.CurrentAnthologySelect.getDOMNode().value
			});
		},
		getInitialState: function() {
			return {
				currentAnthology: null,
				anthologyList: null
			};
		},
		getDefaultProps: function() {
			sidebar: false
		},
		componentDidMount: function() {
			postal.channel('component').request({ topic: 'anthology:list'}).then(_.bind(function(data) {
				this.setState({
					anthologyList: data.anthologyList
				});
			}, this));
			postal.channel('component').request({topic: 'anthology:current-anthology?'}).then(_.bind(function(data) {
				this.setState({
					currentAnthology: data.anthology
				});
			}, this));
			postal.channel('component').subscribe('anthology:done-editing', _.bind(function(data, envelope) {
				this.turnOffSortable();
				this.setState({
					currentAnthology: null
				})
			}, this));
			postal.channel('component').subscribe('anthology:logged-out', _.bind(function(data, envelope) {
				this.turnOffSortable();
				this.setState({
					anthologyList: null,
					currentAnthology: null
				})
			}, this));
			postal.channel('component').subscribe('anthology:edit-contents', _.bind(function(data, envelope) {
				this.setState({
					currentAnthology: data.anthology
				});
			}, this));
		},
		turnOffSortable: function() {
			$('ul.sortable').sortable(
				'disable'
			);
		},
		render: function() {
			var content;
			if(this.state.loginStatus) {
				content = (
					<CurrentAnthologyContent ref="CurrentAnthologyContent" sidebar={this.props.sidebar} onSubmit={this.setCurrentAnthology} anthologyList={this.state.anthologyList} currentAnthology={this.state.currentAnthology} />
				);
			} else {
				content = (
					<span />
				);
			}
			return content;
		}
	});
	
	var CurrentAnthologyContent = React.createClass({
		getDefaultProps: function() {
			return {
				currentAnthology: null,
				anthologyList: null,
				onSubmit: function(){}
			};
		},
		turnOnSortable: function() {
			$('ul.sortable').sortable({
				connectWith: 'ul.target'
			});
		},
		stopEditing: function(ev) {
			ev.preventDefault();
			
			postal.channel('component').publish('anthology:done-editing');
		},
		componentDidUpdate() {
			if(this.props.currentAnthology != null) {
				this.turnOnSortable();
			}
		},
		render: function() {
			var content =(<span/>);
			if(this.props.currentAnthology != null) {
				if(this.props.sidebar) {
					var renderedChildren = _.map(this.props.currentAnthology.get('documents').models, function (element) {
						return (<DocumentShortView className="list-group-item" model={element} key={JSON.stringify(element)}/>);
					});
					content = (
						<div>
							<h4>Edit An Anthology</h4>
							<p className="text-center">
								<button onClick={this.stopEditing} className="btn btn-primary">Done Editing</button>
							</p>
							<ul className="list-group sortable target" id="CurrentAnthologyContent" ref="CurrentAnthologyContentList">
								{renderedChildren}
							</ul>
						</div>
					);
				} else {
					content = (
						<span/>
					);
				}
			} else {
				if(this.props.sidebar) {
					content = (
						<form onSubmit={this.props.onSubmit} ref="CurrentAnthologyContentForm">
							<h4>Edit An Anthology</h4>
							<div className="form-group">
								<label htmlFor="anthology_id">Anthology</label>
								<CurrentAnthologySelect anthologyList={this.props.anthologyList} ref="CurrentAnthologySelect"/>
							</div>
							<div className="form-group text-center">
								<input type="submit" className="btn btn-primary" value="Edit This Anthology"/>
							</div>
						</form>
					);
				}
			}
			return content;
		}
	});
	
	var CurrentAnthologySelect = React.createClass({
		getDefaultProps: function() {
			anthologyList: null
		},
		render: function() {
			var content = (<span/>);
			if(this.props.anthologyList) {
				var rendered_content = _.map(this.props.anthologyList.models, function (element) {
					return (<option value={element.id}>{element.get('title')}</option>);
				});
				
				content = (
					<select className="form-control" name="anthology[id]" id="anthology_id">
						{rendered_content}
					</select>
				);
			}
			
			return content;
		}
	});
	
	return CurrentAnthology;
});