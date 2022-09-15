import nc from 'next-connect';
import db from '../../../../utils/db';
import multer from 'multer';
import { onError } from '../../../../utils/error';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
import Player from '../../../../models/Player';

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
  
const handler = nc({ onError });
const upload = multer();


handler.use(upload.single('image')).post(async (req, res) => {
    const { firstName, lastName, description, playerTeam, league } = req.body;

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
        const player = new Player({
            firstName, 
            lastName, 
            slug: firstName + "-" + lastName,
            description,
            playerTeam,
            league,
            image: url
        });
        if(await player.save()){
            await db.disconnect();
            res.send({
                success: true,
                message: 'Player added successfully'
            })
        }
    }
});

handler.delete(async (req, res) => {
  if(req.query?._id){
      Player.find({ _id: req.query._id  }).remove(()=>{
          res.send({
              success: true,
              message: 'Player deleted successfully'
          });
      });
  }
});

export default handler;
  