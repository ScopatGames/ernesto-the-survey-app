import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../app/reducer';

describe('reducer', ()=>{

  it('handle setting the initial state', ()=>{
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        count: -1,
        intro: Map({
          message: "Intro message",
          buttonLabel: "Start"
        }),
        survey: List.of({
          question: "Q1",
          answer: List.of('1A', '1B'),
          message: List.of('1A', '1B')
        },{
          question: "Q2",
          answer: List.of('2A', '2B'),
          message: List.of('2A', '2B')
        }),
        closing: Map({
          message: "Closing message",
          buttonLabel: "Submit"
        })
      })
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      count: -1,
      intro: Map({
        message: "Intro message",
        buttonLabel: "Start"
      }),
      survey: List.of({
        question: "Q1",
        answer: List.of('1A', '1B'),
        message: List.of('1A', '1B')
      },{
        question: "Q2",
        answer: List.of('2A', '2B'),
        message: List.of('2A', '2B')
      }),
      closing: Map({
        message: "Closing message",
        buttonLabel: "Submit"
      })
    }));
  });

});