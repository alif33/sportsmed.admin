import nc from 'next-connect';
import db from '../../../utils/db';
import Post from '../../../models/Post';

const handler = nc();

handler.get(async (req, res) => {
    await db.connect();
    const posts = await Post.aggregate([
        { 
            $group: { 
                _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt"} }, 
                items: { $push: "$$ROOT" }
            }
        }
    ]);
    await db.disconnect();
    res.send(posts);
});

export default handler;