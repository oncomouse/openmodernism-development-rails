define([
	'lodash',
	'react'
], function(
	_,
	React
) {
	var DocumentShortView = React.createClass({
		getDefaultProps: function() {
			return {
				className: ''
			}
		},
		render: function() {
			return(
				<li>
					<a href={ '#/document/' + this.props.model.id } data-id={this.props.model.id} className={this.props.className} dangerouslySetInnerHTML={{ __html: this.props.model.get('metadata').to_s() }} />
				</li>
			);
		}
	});
	
	return DocumentShortView;
});