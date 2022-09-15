import nc from 'next-connect';
import { v2 as cloudinary } from 'cloudinary';
import multer from "multer";
import slugify from 'slugify';
import streamifier from 'streamifier';
import Podcast from '../../../../models/Podcast';
import { isAdmin } from '../../../../utils/auth';
import db from '../../../../utils/db';

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
    const { title, description, audioUri } = req.body;

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
      
        if(url){
            await db.connect();
    
            const podcast = new Podcast({
                title, 
                slug: slugify(title, "-"),
                description, 
                audioUri,
                image: url
            });
        
            if(await podcast.save()){
                await db.disconnect();
                res.send({
                    success: true,
                    message: 'Podcast added successfully.'
                })
            }
        }  
    } catch (error) {
        res.send({ error: "Sever side error" });
    }
});

export default handler;
