import { List, Map } from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function increment(state) {
  const count = state.get('count');
  return state.set('count', count+1);
}


export default function(state = Map(), action){
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'SELECT':
    return 0;
  case 'INCREMENT':
    return increment(state);
  case 'CLEAN_RESULTS':
    return 0;
  }
  return state;
}
