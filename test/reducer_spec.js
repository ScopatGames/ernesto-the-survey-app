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
        survey: List.of(Map({
          question: "Q1",
          answer: List.of('1A', '1B'),
          message: List.of('1A', '1B')
        }),Map({
          question: "Q2",
          answer: List.of('2A', '2B'),
          message: List.of('2A', '2B')
        })),
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
      survey: List.of(Map({
        question: "Q1",
        answer: List.of('1A', '1B'),
        message: List.of('1A', '1B')
      }),Map({
        question: "Q2",
        answer: List.of('2A', '2B'),
        message: List.of('2A', '2B')
      })),
      closing: Map({
        message: "Closing message",
        buttonLabel: "Submit"
      })
    }));
  });

  it('handle INCREMENT', ()=> {
    const initialState = Map({
      count: -1
    });
    const action = {
      type: 'INCREMENT'
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      count: 0
    }));
  });

});
