import nc from 'next-connect';
import db from '../../../utils/db';
import Team from '../../../models/Team';

const handler = nc();

handler.get(async (req, res) => {

    await db.connect();
    const teams = await Team.find();
    await db.disconnect();
    res.send(teams.reverse());
    
});

export default handler;