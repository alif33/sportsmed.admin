import nc from 'next-connect';
import db from '../../utils/db';
import Watch from '../../models/Watch';

const handler = nc();

handler.get(async (req, res) => {
    await db.connect();
    const watches = await Watch.find();
    await db.disconnect();
    res.send(watches.reverse());
});

export default handler;