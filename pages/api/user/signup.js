
import nc from "next-connect";
import bcrypt from "bcryptjs";
import User from "../../../models/User";
import db from "../../../utils/db";
import { onError } from "../../../utils/error";

const handler = nc({ onError });

handler.post(async (req, res) => {
    const { email } = req.body
    await db.connect();

    const user = await User.findOne({ email });

        if(user){
            return res.send({
                success: false,
                exists: true,
                message: "Already registered.",
            });
        }

        res.send({
            success: true,
        })

});

export default handler;