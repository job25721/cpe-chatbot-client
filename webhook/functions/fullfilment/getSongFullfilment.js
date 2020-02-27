const db = require('../database/db');

async function getSongFullfilment(agent, queryResult){
    try {
        const song = await db.doc(`/song/${queryResult.parameters.song}`).get();
        agent.add(`<iframe class="w-100 " src="${song.data().verse}" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>`);
    } catch (error) {
        console.log(error)
        agent.add('ฉันไม่รู้จักเพลงนั้น');
    }
}

module.exports = getSongFullfilment;