import nc from 'next-connect';
import db from '../../utils/db';
import Tag from '../../models/Tag';

const handler = nc();

handler.get(async (req, res) => {
    await db.connect();
    const tags = await Tag.find();
    await db.disconnect();
    res.send(tags.reverse());
});

export default handler;