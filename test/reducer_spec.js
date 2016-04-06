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
          responses: List.of(
            Map({
              answer: "1A",
              message: "1AM"
            }),
            Map({
              answer: "1B",
              message: "1BM"
            })
          )
        }),Map({
          question: "Q2",
          responses: List.of(
            Map({
              answer: "2A",
              message: "2AM"
            }),
            Map({
              answer: "2B",
              message: "2BM"
            })
          )
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
        responses: List.of(
          Map({
            answer: "1A",
            message: "1AM"
          }),
          Map({
            answer: "1B",
            message: "1BM"
          })
        )
      }),Map({
        question: "Q2",
        responses: List.of(
          Map({
            answer: "2A",
            message: "2AM"
          }),
          Map({
            answer: "2B",
            message: "2BM"
          })
        )
      })),
      closing: Map({
        message: "Closing message",
        buttonLabel: "Submit"
      })
    }));
  });

  it('handles INCREMENT', ()=> {
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

  it('handles SELECT_ANSWER', ()=>{
    const initialState = Map({
      count: 0,
      intro: Map({
        message: "Intro message",
        buttonLabel: "Start"
      }),
      survey: List.of(Map({
        question: "Q1",
        responses: List.of(
          Map({
            answer: "1A",
            message: "1AM"
          }),
          Map({
            answer: "1B",
            message: "1BM"
          })
        )
      }),Map({
        question: "Q2",
        responses: List.of(
          Map({
            answer: "2A",
            message: "2AM"
          }),
          Map({
            answer: "2B",
            message: "2BM"
          })
        )
      })),
      closing: Map({
        message: "Closing message",
        buttonLabel: "Submit"
      })
    });
    const action = {
      type: 'SELECT_ANSWER',
      answer: 0
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      count: 1,
      intro: Map({
        message: "Intro message",
        buttonLabel: "Start"
      }),
      survey: List.of(Map({
        question: "Q1",
        responses: List.of(Map({
            answer: "1A",
            message: "1AM"
          }))
      }),Map({
        question: "Q2",
        responses: List.of(
          Map({
            answer: "2A",
            message: "2AM"
          }),
          Map({
            answer: "2B",
            message: "2BM"
          })
        )
      })),
      closing: Map({
        message: "Closing message",
        buttonLabel: "Submit"
      })
    }));

  });

});
