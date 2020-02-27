const db = require('../database/db');

async function getTeacherFullfilment(agent, queryResult){
    try {

        const teacher = await db.doc(`/cpe-teacher/${queryResult.parameters.cpeTeacher}`).get();
        agent.add(`ชื่อ : ${teacher.data().name} <br>การติดต่อ : '${teacher.data().detail} <br>ห้องพัก : ${teacher.data().office} <br> <img src="${teacher.data().picture}"`);
    } catch (error) {
        console.log(error)
        agent.add('ไม่มีอาจารย์ที่ท่านถามหา');
    }
}

module.exports = getTeacherFullfilment;