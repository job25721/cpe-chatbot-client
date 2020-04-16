require('dotenv').config({ path: 'variables.env' });

const express = require('express');
const cors = require('cors');
const httpStatus = require('http-status');
const processMessage = require('./process-message');
const { WebhookClient } = require('dialogflow-fulfillment');
const admin = require('firebase-admin');

const serviceAccount = require("./cpe-chatbot-d4ebc-firebase-adminsdk-vz8fi-130fb09f43.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://cpe-chatbot-d4ebc.firebaseio.com"
});

const app = express();

const db = admin.firestore();


// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors({ origin: true }));

// initial route
app.get('/', (req, res) => {
    res.send('API RUNNING')
});

app.post('/api/dialogflowGateway', async (req, res) => {
    try {

        const message = req.body.message;
        const sessionId = req.body.sessionId;

        const responseChat = await processMessage(message, sessionId);
        console.log(`responseText: ${responseChat.fulfillmentText}`);
        res.json({
            fulfillmentText: responseChat.fulfillmentText
        });

    } catch (error) {

        console.error(error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            error: error
        });
    }

});

app.post("/webhookGateway", async (request, response) => {
    const agent = new WebhookClient({ request, response });

    const queryResult = request.body.queryResult;

    async function getSongRequest(agent) {
        try {
            const song = await db.doc(`/song/${queryResult.parameters.song}`).get();
            agent.add(`<iframe class="w-100 " src="${song.data().verse}" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>`);
        } catch (error) {
            console.log(error)
            agent.add('ฉันไม่รู้จักเพลงนั้น');
        }
    }

    async function getTeacherRequest(agent) {
        try {
            const teacher = await db.doc(`/cpe-teacher/${queryResult.parameters.cpeTeacher}`).get();
            agent.add(`ชื่อ : ${teacher.data().name} <br>การติดต่อ : '${teacher.data().detail} <br>ห้องพัก : ${teacher.data().office} <br> <img src="${teacher.data().picture}"/>`);
        } catch (error) {
            console.log(error)
            agent.add('ไม่มีอาจารย์ที่ท่านถามหา');
        }
    }

    async function getSubjectRequest(agent) {
        try {

            const subject = await db.doc(`/subject/${queryResult.parameters.subject}`).get();
            agent.add(`${subject.data().description} `);
        } catch (error) {
            console.log(error)
            agent.add('ไม่มีวิชาที่ท่านถามหา');
        }
    }

    async function addQuestion(agent) {
        try {
            const question = queryResult.parameters.question;

            await db.collection("Question").add({
                question
            });

        } catch (error) {
            console.log(error)
            agent.add('เกิดข้อผิดพลาดระหว่างบันทึกข้อมูลลง internet');
        }
    }

    let intentMap = new Map();
    intentMap.set('CpeBot.songRequest', getSongRequest);
    intentMap.set('computerEng.teacherRequest', getTeacherRequest);
    intentMap.set('computerEng.subject', getSubjectRequest);
    intentMap.set('Chatbot.questionRequest - newQuestion', addQuestion);

    agent.handleRequest(intentMap);
});

// start server
app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});