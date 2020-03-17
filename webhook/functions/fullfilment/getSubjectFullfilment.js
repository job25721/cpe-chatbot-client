const db = require('../database/db');

async function getSubjectFullfilment(agent, queryResult){
    try {

        const subject = await db.doc(`/subject/${queryResult.parameters.subject}`).get();
        agent.add(`${subject.data().description} `);
    } catch (error) {
        console.log(error)
        agent.add('ไม่มีวิชาที่ท่านถามหา');
    }
}

module.exports = getSubjectFullfilment;