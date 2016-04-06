import { List, Map } from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function increment(state) {
  return state.update('count', value => value + 1);
}

function selectAnswer(state, answer){
  const count = state.get('count');
  const response = state.getIn(['survey', count, 'responses', answer]);
  return state.updateIn(['survey', count, 'responses'], () => List.of(response));
}


export default function(state = Map(), action){
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'SELECT_ANSWER':
    return increment(selectAnswer(state, action.answer));
  case 'INCREMENT':
    return increment(state);
  case 'CLEAN_RESULTS':
    return 0;
  }
  return state;
}
