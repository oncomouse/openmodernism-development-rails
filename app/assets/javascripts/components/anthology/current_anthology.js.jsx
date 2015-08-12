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
		setCurrentAnthology: function(ev) {
			ev.preventDefault();
		},
		getInitialState: function() {
			return {
				currentAnthologyID: null,
				currentAnthologyContents: null,
				anthologyList: null
			};
			if(typeof this.channel === 'undefined') {
				this.channel = {}
			}
			this.channel.component = postal.channel('component');
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
			if(this.state.loginStatus && this.state.currentAnthology) {
				content = (
					<form onSubmit={this.setCurrentAnthology}>
						<div className="form-group">
							<label htmlFor="anthology_id" 
							<select className="form-control" name="anthology[id]" id="anthology_id"></select>
						</div>
						<div className="form-group text-center">
							<input type="submit" className="btn btn-primary" value="Edit This Anthology"/>
						</div>
					</form>
				);
			} else {
				content = (
					<span />
				);
			}
			return content;
		}
	});
	
	return CurrentAnthology;
});