import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Control from './Control';
import Answer from './Answer';

const Controls = React.createClass({
  mixins: [PureRenderMixin],
  render: function(){
    const count = this.props.count;
    let renderComponent;

    if(count === -1){
      //intro condition
      renderComponent = <div>
          <Control label={this.props.intro.get('buttonLabel')}
                   handleOnclick={()=>this.props.increment()}/>
        </div>;
    } else if(count < this.props.survey.size){
      //question condition with message
      const answerArray = this.props.survey.get(count).get('responses');
      const answerComponents = answerArray.map((item, index) => {
        const answer = item.get('answer');
        return <Answer key={answer}
                       text={answer}
                       handleOnclick={()=>this.props.selectAnswer(index)}/>;
      });

      renderComponent = <div>
          {answerComponents}
          <Control label={"Restart"}
                   handleOnclick={()=>this.props.restart()}/>
        </div>;
    } else if(count === this.props.survey.size){
      //closing condition
      renderComponent = <div>
          <Control label={this.props.closing.get('buttonLabel')}
                   handleOnclick={()=>this.props.submit()}/>
          <Control label={"Restart"}
                   handleOnclick={()=>this.props.restart()}/>
        </div>;
    } else {
      //parting message condition
      renderComponent = <div>
          <Control label={"Restart"}
                   handleOnclick={()=>this.props.restart()}/>
        </div>
    }

    return (
      <div>
        {renderComponent}
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
