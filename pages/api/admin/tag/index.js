import nc from 'next-connect';
import { default as Tag, default as Tags } from '../../../../models/Tag';
import { isAdmin } from '../../../../utils/auth';
import db from '../../../../utils/db';
import { onError } from '../../../../utils/error';

const handler = nc({ onError });
handler.use(isAdmin);

handler.post(async (req, res) => {

    const { tagName } = req.body;
    await db.connect();

    if(tagName){
      const tag = await Tag.find({tagName: tagName.toLowerCase()})
      if(tag.length>0){
        res.send({
              success: true,
              message: 'Tag already exists'
        })
      }else{
        const player = new Tags({
          tagName: tagName.toLowerCase()
        });

        if(await player.save()){
          await db.disconnect();
          res.send({
              success: true,
              message: 'Tag added successfully'
          })
        }
      }
    }
});

handler.use(isAdmin).delete(async (req, res) => {
  await db.connect();
  if (req.query?._id) {
    const tag = await Tag.findById(req.query._id);
  if (tag) {
    await tag.remove();
    await db.disconnect();
    res.send({success: true, message: 'Tag Deleted' });
  } else {
    await db.disconnect();
    res.send({ error: 'Tag Not Found' });
  }
  }
});

// handler.delete(async (req, res) => {
//   if(req.query?._id){
//       Tag.find({ _id: req.query._id  }).deleteOne(()=>{
//           res.send({
//               success: true,
//               message: 'Tag deleted successfully'
//           });
//       });
//   }
// });

export default handler;
