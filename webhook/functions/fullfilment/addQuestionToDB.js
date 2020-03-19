const db = require('../database/db');

async function addQuestionToDB(agent, queryResult) {
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

module.exports = addQuestionToDB;