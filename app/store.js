import { fromJS } from 'immutable';
import { createStore } from 'redux';
import reducer from './reducer';
import { setState } from './actions';
import { getLocalSurvey, getSurvey } from './utils/utils';

//The code below would be used to retrieve survey data asynchronously from a server
//const SURVEY_NAME = "sampleSurvey";
//const surveyData = getSurvey(SURVEY_NAME);

//We are using the local data instead
let surveyData = getLocalSurvey();
//set and initialize count on the data
surveyData.count = -1;
export const INITIAL_STATE = surveyData;

export function createReduxStore(){
  // create redux store
  const store = createStore(reducer);
  //initialize survey data
  store.dispatch(setState(fromJS(INITIAL_STATE)));
  return store;
}
