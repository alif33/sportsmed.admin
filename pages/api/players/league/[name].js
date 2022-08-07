import nc from 'next-connect';
import db from '../../../../utils/db';
import Player from '../../../../models/Player';

const handler = nc();

handler.get(async (req, res) => {
    if(req.query?.name){
        await db.connect();
        const players = await Player.find({
            league: req.query.name
        });
        await db.disconnect();
        res.send(players.reverse());
    }
});

export default handler;