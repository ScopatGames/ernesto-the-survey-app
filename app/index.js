import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import { getLocalSurvey, getSurvey } from './utils/utils';

require('./style.css');

//The code below would be used to retrieve survey data asynchronously from a server
//const SURVEY_NAME = "sampleSurvey";
//const surveyData = getSurvey(SURVEY_NAME);

//We are using the local data instead
const surveyData = getLocalSurvey();
console.log(surveyData);





ReactDOM.render(<Layout/>, document.getElementById('app'));
