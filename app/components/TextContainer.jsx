import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Texts = React.createClass({
  mixins: [PureRenderMixin],
  render: function(){
    return (
      <div>
        <h1>Text Container</h1>
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    //TODO insert props for text components
  };
}

export const TextContainer = connect(
  mapStateToProps,
  actions
)(Texts);
