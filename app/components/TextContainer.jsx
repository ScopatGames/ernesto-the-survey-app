import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Message from './Message';

const Texts = React.createClass({
  mixins: [PureRenderMixin],
  render: function(){
    const count = this.props.count;
    let renderComponent;

    if(count === -1){
      //intro condition
      renderComponent = <div>
          <Message text={this.props.intro.get('message')}/>
        </div>;
    } else if(count === 0){
      //first question condition
      renderComponent = <div>
          <Message text={this.props.survey.getIn([count, 'question'])} />
        </div>;
    } else if(count < this.props.survey.size){
      //question condition with message
      renderComponent = <div>
          <Message text={this.props.survey.getIn([count-1, 'responses', 0, 'message'])} />
          <Message text={this.props.survey.getIn([count, 'question'])} />
        </div>;
    } else if(count === this.props.survey.size){
     //closing condition
     const surveyComponents = this.props.survey.map((item, index) => {
       const answer = item.get('answer');
       return <div key={index}>
          <Message text={this.props.survey.getIn([index, 'question'])} />
          <Message text={this.props.survey.getIn([index, 'responses', 0, 'message'])} />
       </div>
     });

      renderComponent = <div>
          <Message text={this.props.survey.getIn([count-1, 'responses', 0, 'message'])} />
          <Message text={this.props.closing.get('message')} />
          {surveyComponents}
        </div>;
    } else {
      //parting message condition
      renderComponent = <div>
          <Message text={this.props.closing.get('partingMessage')} />
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

export const TextContainer = connect(
  mapStateToProps,
  actions
)(Texts);
