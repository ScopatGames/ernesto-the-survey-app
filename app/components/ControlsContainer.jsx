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
    count: state.get('count'),
    survey: state.get('survey'),
    intro: state.get('intro'),
    closing: state.get('closing')
  };
}

export const ControlsContainer = connect(
  mapStateToProps,
  actions
)(Controls);
