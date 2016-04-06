import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass ({
  mixins: [PureRenderMixin],
  render: function(){
    return (
      <div className={this.props.classProp || "message"}>
        <p>{this.props.text}</p>
      </div>
    )
  }
});
