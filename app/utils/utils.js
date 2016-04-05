import axios from 'axios';
const localSurveyData = require('../data/sampleSurvey.json');

function retrieveData(surveyName) {
  return axios.get(`http://server/${surveyName}.json`);
}

export function getLocalSurvey(){
  return localSurveyData;
}

//This is where the data would be retrieved asynchronously from a server
export async function getSurvey(surveyName) {
  try {
    const surveyData = await retrieveData(surveyName);
    return surveyData;
  } catch (error) {
    console.warn('Error in retrieveData() in utils: ', error);
  }
}
