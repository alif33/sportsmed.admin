import { v2 as cloudinary } from 'cloudinary';
import multer from "multer";
import nc from 'next-connect';
import slugify from 'slugify';
import streamifier from 'streamifier';
import Post from '../../../../../models/Post';
import { isAdmin } from '../../../../../utils/auth';
import db from '../../../../../utils/db';



cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};




const handler = nc();
const upload = multer();


handler.get(async (req, res) => {
  await db.connect();
  const post = await Post.findById(req.query.id);
  await db.disconnect();
  res.send(post);
});

//post update

handler.use(isAdmin, upload.single("image")).put(async (req, res) => {

  const { title, league, playersName, description, tags } = req.body;

  let newImage;
  if(req.file){
    const streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };
    const { url } = await streamUpload(req);
    newImage = url;
  }

  await db.connect();
  const post = await Post.findById(req.query.id);

  if (post) {
    post.title = title || post.title;
    post.slug = title ? slugify(title, '-') : post.slug;
    post.league = league || post.league;
    post.image = newImage  || post.image;
    post.playersName = playersName || post.playersName;
    post.tags = tags || post.tags;
    post.description = description || post.description;

    await post.save();
    await db.disconnect();
    res.send(
      {success: true, message: 'Post Updated Successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ error: 'Post Not Found' });
  }
});


//post delete

handler.use(isAdmin).delete(async (req, res) => {
  await db.connect();
  const post = await Post.findById(req.query.id);
  if (post) {
    await post.remove();
    await db.disconnect();
    res.send({success: true, message: 'Post Deleted' });
  } else {
    await db.disconnect();
    res.send({ error: 'Post Not Found' });
  }
});

export default handler;
