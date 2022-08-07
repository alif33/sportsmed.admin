import nc from 'next-connect';
import db from '../../../../utils/db';
import Player from '../../../../models/Player';

const handler = nc();

handler.get(async (req, res) => {
    await db.connect();
    const players = await Player.find();
    await db.disconnect();
    res.send(players.reverse());
});

export default handler;