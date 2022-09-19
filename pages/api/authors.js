import nc from 'next-connect';
import db from '../../utils/db';
import Author from '../../models/Author';

const handler = nc();

handler.get(async (req, res) => {
    await db.connect();
    const authors = await Author.find();
    await db.disconnect();
    res.send(authors.reverse());
});

export default handler;