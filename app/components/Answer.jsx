import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass ({
  mixins: [PureRenderMixin],
  render: function(){
    return (
      <div className='answer'>
        <a href={'#'}>
          <button onClick={this.props.handleOnclick}>{this.props.text}</button>
        </a>
      </div>
    )
  }
});
