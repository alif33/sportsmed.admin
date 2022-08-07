import nc from 'next-connect';
import db from '../../../utils/db';
import Player from '../../../models/Player';

const handler = nc();

handler.get(async (req, res) => {
    if(req.query?._id){
        await db.connect();
    const player = await Player.findById(req.query._id);
        await db.disconnect();
        res.send(player);
    }
});

export default handler;