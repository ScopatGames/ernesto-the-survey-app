import React from 'react';
import Header from './Header';
import { TextContainer } from './TextContainer';
import { ControlsContainer } from './ControlsContainer';

export default class Layout extends React.Component {
  render() {
    return (
      <div className='flexContainer'>
        <Header />
        <TextContainer />
        <ControlsContainer />
      </div>
    )
  }
};
