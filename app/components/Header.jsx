import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

const HeaderShell = React.createClass({
  mixins: [PureRenderMixin],
  render: function(){
    let eyeClass;
    if(this.props.count === -1){
      eyeClass = "character-eye turnOn";
    }
    else if(this.props.count < this.props.survey.size + 1){
      eyeClass = "character-eye";
    } else {
      eyeClass = "character-eye turnOff";
    }
    return (
      <div className="header">
        <div className='character-base'>
          <div className={eyeClass}>
          </div>
          <div className='character-shine'>
          </div>
        </div>
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    count: state.get('count'),
    survey: state.get('survey')
  };
}

export const Header = connect(
  mapStateToProps
)(HeaderShell);
