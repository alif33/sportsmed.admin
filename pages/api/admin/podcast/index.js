import nc from 'next-connect';
import Podcast from '../../../../models/Podcast';
import db from '../../../../utils/db';

const handler = nc();

handler.post(async (req, res) => {
    const { title, description, audioUri } = req.body;
    await db.connect();

    const podcast = new Podcast({
        title, description, audioUri
    });

    if(await podcast.save()){
        await db.disconnect();
        res.send({
            success: true,
            message: 'Podcast added successfully.'
        })
    }
});

export default handler;
