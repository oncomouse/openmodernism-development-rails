define([
	'lodash',
	'postal',
	'react',
	'mixins/login-dependent/LoginDependentMixin',
	'postal.request-response'
], function(
	_,
	postal,
	React,
	LoginDependentMixin
) {
	var CurrentAnthology = React.createClass({
		mixins: [
			LoginDependentMixin
		],
		setCurrentAnthology: function(ev) {
			ev.preventDefault();
		},
		getInitialState: function() {
			if(typeof this.channel === 'undefined') {
				this.channel = {}
			}
			this.channel.component = postal.channel('component');
			return {
				currentAnthologyID: null,
				currentAnthologyContents: null,
				anthologyList: null
			};
		},
		componentDidMount: function() {
			this.channel.component.request({ topic: 'anthology:list'}).then(_.bind(function(data) {
				this.setState({
					anthologyList: data.anthologyList
				});
			}, this));
			this.channel.component.request({topic: 'anthology:current-anthology?'}).then(_.bind(function(data) {
				this.setState({
					currentAnthologyID: data.id,
					currentAnthologyContents: data.contents
				});
			}, this));
			
			this.channel.component.subscribe('anthology:logged-out', _.bind(function(data, envelope) {
				this.setState({
					anthologyList: null,
					currentAnthology: null
				})
			}, this));
			this.channel.component.subscribe('anthology:edit', _.bind(function(data, envelope) {
				this.setState({
					currentAnthologyID: data.id,
					currentAnthologyContents: data.contents
				});
			}, this));
		},
		render: function() {
			var content;
			if(this.state.loginStatus) {
				content = (
					<CurrentAnthologyContent onSubmit={this.setCurrentAnthology} currentAnthologyID={this.state.currentAnthologyID} currentAnthologyContents={this.state.currentAnthologyContents} anthologyList={this.state.anthologyList} />
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
				currentAnthologyID: null,
				currentAnthologyContents: null,
				anthologyList: null,
				onSubmit: function(){}
			};
		},
		render: function() {
			var content;
			if(this.props.currentAnthologyID != null) {
				content = (
					<span/>
				);
			} else {
				content = (
					<form onSubmit={this.props.onSubmit}>
						<h4>Edit An Anthology</h4>
						<div className="form-group">
							<label htmlFor="anthology_id">Anthology</label>
							<CurrentAnthologySelect anthologyList={this.props.anthologyList} />
						</div>
						<div className="form-group text-center">
							<input type="submit" className="btn btn-primary" value="Edit This Anthology"/>
						</div>
					</form>
				);
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