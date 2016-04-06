import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Controls = React.createClass({
  mixins: [PureRenderMixin],
  render: function(){
    return (
      <div>
        <h1>Controls Container</h1>
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    //TODO insert props for controls components
  };
}

export const ControlsContainer = connect(
  mapStateToProps,
  actions
)(Controls);
