import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass ({
  mixins: [PureRenderMixin],
  render: function(){
    return (
      <div className='control'>
        <a href={'#'}>
          <button onClick={this.props.handleOnclick}><h2>{this.props.label}</h2></button>
        </a>
      </div>
    )
  }
});
