import { v2 as cloudinary } from 'cloudinary';
import multer from "multer";
import nc from "next-connect";
import slugify from 'slugify';
import streamifier from 'streamifier';
import Post from "../../../../models/Post";
import { isAdmin } from "../../../../utils/auth";
import db from "../../../../utils/db";

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

handler.use(isAdmin, upload.single("image")).post(async (req, res) => {
  const { title, league, playersName, description, tags } = req.body;
  try {
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

    if (url) {
      await db.connect();
      const post = new Post({
        title: title,
        slug: slugify(title, "-"),
        description: description,
        league: league,
        image: url,
        playersName: playersName,
        tags: tags,
      });

      if (await post.save()) {
        await db.disconnect();
        res.send({
          success: true,
          message: "Post added successfully",
        });
      }
    }
  } catch (err) {
    res.send({ error: "Sever side error" });
    
  }

});


export default handler;
