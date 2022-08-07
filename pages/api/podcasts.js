import nc from 'next-connect';
import db from '../../utils/db';
import Podcast from '../../models/Podcast';

const handler = nc();

handler.get(async (req, res) => {
    await db.connect();
    const podcasts = await Podcast.find();
    await db.disconnect();
    res.send(podcasts.reverse());
});

export default handler;