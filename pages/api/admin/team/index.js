import nc from 'next-connect';
import db from '../../../../utils/db';
import multer from 'multer';
import { onError } from '../../../../utils/error';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
import Team from '../../../../models/Team';


const handler = nc({ onError });

handler.post(async (req, res) => {
    const {             
        name,
        league,
        description } = req.body;

    await db.connect();
        const _team = new Team({
            name,
            league,
            description
        });
        if(await _team.save()){
            await db.disconnect();
            res.send({
                success: true,
                message: 'Team added successfully'
            })
        }


    // return res.send(req.body);

    // const streamUpload = (req) => {
    //   return new Promise((resolve, reject) => {
    //     const stream = cloudinary.uploader.upload_stream((error, result) => {
    //       if (result) {
    //         resolve(result);
    //       } else {
    //         reject(error);
    //       }
    //     });
    //     streamifier.createReadStream(req.file.buffer).pipe(stream);
    //   });
    // };
    // const { url } = await streamUpload(req);

    // if(url){
        
    // }
});

handler.delete(async (req, res) => {
    const { _id } = req.query;
  if(_id){
      Team.find({ _id }).remove(()=>{
          res.send({
              success: true,
              message: 'Team deleted successfully'
          });
      });
  }
});

export default handler;
  