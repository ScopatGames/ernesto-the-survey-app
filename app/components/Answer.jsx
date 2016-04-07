import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass ({
  mixins: [PureRenderMixin],
  render: function(){
    return (
      <div className='answer'>
        <button onClick={this.props.handleOnclick}>{this.props.text}</button>
      </div>
    )
  }
});
