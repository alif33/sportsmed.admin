import { v2 as cloudinary } from 'cloudinary';
import multer from "multer";
import nc from 'next-connect';
import streamifier from 'streamifier';
import Player from '../../../../models/Player';
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

handler.get(async (req, res) => {
    await db.connect();
    const player = await Player.findById(req.query._id);
    await db.disconnect();
    res.send(player);
});


//player update

handler.use(isAdmin, upload.single("image")).put(async (req, res) => {

    const { firstName, lastName, league, playerTeam, description } = req.body;
    
    let newImage;

    if (req.file) {
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

    const player = await Player.findById(req.query._id);
    if (player) {
        player.firstName = firstName || player.firstName;
        player.lastName = lastName || player.lastName;
        player.league = league || player.league;
        player.image = newImage || player.image;
        player.playerTeam = playerTeam || player.playerTeam;
        player.description = description || player.description;

        await player.save();
        await db.disconnect();
        res.send(
            { success: true, message: 'Player Updated Successfully' });
    } else {
        await db.disconnect();
        res.send({ error: 'Player Not Found' });
    }
});


//post delete

handler.use(isAdmin).delete(async (req, res) => {
    await db.connect();
    const player = await Player.findById(req.query._id);
    if (player) {
        await player.remove();
        await db.disconnect();
        res.send({success: true, message: 'Player Deleted' });
    } else {
        await db.disconnect();
        res.send({ error: 'Player Not Found' });
    }
});

export default handler;