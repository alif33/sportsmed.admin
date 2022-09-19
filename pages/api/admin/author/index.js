import nc from 'next-connect';
import Author from '../../../../models/Author';
import { isAdmin } from '../../../../utils/auth';
import db from '../../../../utils/db';
import { onError } from '../../../../utils/error';

const handler = nc({ onError });
handler.use(isAdmin);

handler.post(async (req, res) => {

    const { name } = req.body;
    await db.connect();

    if(name){
      const author = await Author.findOne({name});

      if(author){
        res.send({
              success: true,
              message: 'Author already exists'
        })
      }else{
        const _author = new Author({
          name
        });

        if(await _author.save()){
          await db.disconnect();
          res.send({
              success: true,
              message: 'Author added successfully'
          })
        }
      }
    }
});


handler.delete(async (req, res) => {
    const { _id }= req.query;
    if(_id){
        Author.find({ _id }).deleteOne(()=>{
            res.send({
                success: true,
                message: 'Author deleted successfully'
            });
        });
    }
});

export default handler;
