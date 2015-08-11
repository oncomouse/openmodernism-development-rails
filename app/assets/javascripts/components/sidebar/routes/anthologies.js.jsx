define([
	'jquery',
	'lodash',
	'react',
	'postal',
	'mixins/login-dependent/LoginDependentMixin'
], function(
	$,
	_,
	React,
	postal,
	LoginDependentMixin
) {
	var SidebarAnthologies = React.createClass({
		mixins: [
			React.addons.PureRenderMixin,
			LoginDependentMixin
		],
		getInitialState: function() {
			if(typeof this.channel !== 'object') {
				this.channel = {};
			}
			this.channel['component'] = postal.channel('component');
			return null;
		},
		loggedIn: function() {
			return (
				<div>
					<CreateAnthologyForm />
				</div>
			);
		},
		loggedOut: function() {
			return (<span>
					Not Logged In
				</span>);
		},
		render: function() {
			var content = this.state.loginStatus ? this.loggedIn() : this.loggedOut();
			return content;
		}
	});
	
	var CreateAnthologyForm = React.createClass({
		mixins: [
			React.addons.PureRenderMixin,
		],
		componentDidMount: function() {
			if(typeof this.channel !== 'object') {
				this.channel = {};
			}
			this.channel['component'] = postal.channel('component');
		},
		handleSubmit: function(ev) {
			ev.preventDefault();
			this.channel.component.publish('create:anthology', {
				form: $(ev.target).serializeArray()
			});
		},
		render: function() {
			return (
				<form onSubmit={this.handleSubmit} className="create-anthology" acceptCharset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="&#x2713;" />
					<h4>Create a New Anthology!</h4>
					<div>
						<label htmlFor="anthology_title">Anthology Title</label>
						<input placeholder="Title" className="form-control" required="required"	type="text" name="anthology[title]" id="anthology_title" />
					</div>
					<div>
						<input type="submit" value="Create" />
					</div>
				</form>
			);
		}
	});
	
	return SidebarAnthologies;
})