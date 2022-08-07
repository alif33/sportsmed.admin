import nc from 'next-connect';
import db from '../../../utils/db';
import Player from '../../../models/Player';

const handler = nc();

handler.get(async (req, res) => {
    await db.connect();

    const players = await Player.aggregate([
        { 
            $group: { 
                _id: "$league", 
                items: { $push: "$$ROOT" }
            }
        }
    ]);

    await db.disconnect();
    res.send(players.reverse());
});

export default handler;