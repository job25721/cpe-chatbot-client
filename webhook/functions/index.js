const functions = require('firebase-functions');

const { WebhookClient } = require('dialogflow-fulfillment');

const getSongFullfilment = require('./fullfilment/getSongFullfilment');
const getTeacherFullfilment = require('./fullfilment/getTeacherFullfilment');
const getSubjectFullfilment = require('./fullfilment/getSubjectFullfilment');
const addQuestionToDB = require('./fullfilment/addQuestionToDB');

exports.dialogflowFirebaseFulfillment = functions.region('asia-east2')
    .https.onRequest((request, response) => {
        const agent = new WebhookClient({ request, response });

        const queryResult = request.body.queryResult;

        async function getSongRequest(agent) {
            await getSongFullfilment(agent, queryResult);
        }

        async function getTeacherRequest(agent){
            await getTeacherFullfilment(agent, queryResult);
        }

        async function getSubjectRequest(agent){
            await getSubjectFullfilment(agent, queryResult);
        }

        async function addQuestion(agent){
            await addQuestionToDB(agent, queryResult);
        }

        let intentMap = new Map();
        intentMap.set('CpeBot.songRequest', getSongRequest);
        intentMap.set('computerEng.teacherRequest',getTeacherRequest);
        intentMap.set('computerEng.subject',getSubjectRequest);
        intentMap.set('Chatbot.questionRequest - newQuestion', addQuestion);

        agent.handleRequest(intentMap);
    });