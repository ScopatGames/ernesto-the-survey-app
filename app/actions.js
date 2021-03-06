export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function selectAnswer(answer) {
  return {
    type: 'SELECT_ANSWER',
    answer
  };
}

export function increment(){
  return {
    type: 'INCREMENT'
  };
}

export function restart(){
  return {
    type: 'RESTART'
  };
}

export function submit(){
  return {
    type: 'SUBMIT'
  }
}
