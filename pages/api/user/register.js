import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  const { firstName, lastName, email, password } = req.body
  await db.connect();
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  
  const user = await newUser.save();
  await db.disconnect();

  const token = signToken(user);
  res.send({
      success: true,
      message: 'Registered successfully'
  });
});

export default handler;
