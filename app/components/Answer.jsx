import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass ({
  mixins: [PureRenderMixin],
  render: function(){
    return (
      <button onClick={this.props.handleOnclick}>{this.props.text}</button>
    )
  }
});
