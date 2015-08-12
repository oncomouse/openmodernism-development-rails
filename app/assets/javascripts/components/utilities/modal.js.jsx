define([
	'react',
	'postal',
	'jquery',
	'lodash',
	'bootstrap/modal'
], function(
	React,
	postal,
	$,
	_
) {
	var Modal = React.createClass({
		getDefaultProps: function() {
			return {
				title: '',
				onHide: null,
				onShow: null,
				static: false,
				children: undefined
			}
		},
		showModal: function() {
			this.channel.component.publish('modal:show', {
				modal: this.getDOMNode()
			});
		},
		hideModal: function() {
			this.channel.component.publish('modal:hide', {
				modal: this.getDOMNode()
			});
		},
		componentDidMount: function() {
			this.channel = {
				'component': postal.channel('component')
			};
			
			this.channel.component.subscribe('modal:show', _.bind(function(data, envelope) {
				if(data.modal === this.getDOMNode()) {
					$(this.getDOMNode()).modal('show');
				}
			},this));
			
			this.channel.component.subscribe('modal:hide', _.bind(function(data, envelope) {
				if(data.modal == React.findDOMNode(this)) {
					$(React.findDOMNode(this)).modal('hide');
				}
			},this));
			
			$(React.findDOMNode(this)).on('hide.bs.modal', _.bind(function(ev) {
				ev.target = this.getDOMNode();
				(typeof this.props.onHide === 'function') ? this.props.onHide.apply(ev) : false;
			}, this));
			$(React.findDOMNode(this)).on('show.bs.modal', _.bind(function(ev) {
				ev.target = this.getDOMNode();
				(typeof this.props.onShow === 'function') ? this.props.onShow.apply(ev) : false;
			}, this));
		},
		render: function() {
			var closeButton = this.props.static ? '' : (<button aria-label='Close' className='close' data-dismiss='modal' type='button'><span aria-hidden>&times;</span></button>);
			return (
				<div className='modal fade' data-keyboard={this.props.static} data-backdrop={this.props.static ? 'static' : false} >
					<div className='modal-dialog'>
						<div className='modal-content'>
							<div className='modal-header'>
							{closeButton}
							<h4 className='modal-title'>{this.props.title}</h4>
							</div>
							<div className='modal-body'>
								{typeof this.props.children !== 'undefined' ? this.props.children : ''}
							</div>
						</div>
					</div>
				</div>
			)
		}
	});
	
	return Modal;
})