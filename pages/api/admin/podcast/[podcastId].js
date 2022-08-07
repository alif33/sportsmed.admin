import nc from 'next-connect';
import Podcast from '../../../../models/Podcast';
import db from '../../../../utils/db';
import { isAdmin, isAuth } from '../../../../utils/auth';
const handler = nc();




handler.get(async (req, res) => {
  await db.connect();
  const podcast = await Podcast.findById(req.query.podcastId);
  await db.disconnect();
  res.send(podcast);
});


handler.use(isAdmin).put(async (req, res) => {

  const { title, description, audioUri} = req.body;
  await db.connect();
  const podcast = await Podcast.findById(req.query.podcastId);
  if (podcast) {

      podcast.title = title || podcast.title;
      podcast.audioUri = audioUri || podcast.audioUri;
      podcast.description = description || podcast.description;

      await podcast.save();
      await db.disconnect();
      res.send(
          { success: true, message: 'Podcast Updated Successfully' });
  } else {
      await db.disconnect();
      res.send({ error: 'Podcast Not Found' });
  }
});



handler.use(isAdmin).delete(async (req, res) => {
    await db.connect();
    const podcast = await Podcast.findById(req.query.podcastId);
    if (podcast) {
      await podcast.remove();
      await db.disconnect();
      res.send({success: true, message: 'Podcast Deleted' });
    } else {
      await db.disconnect();
      res.send({ error: 'Podcast Not Found' });
    }
  });

  export default handler;