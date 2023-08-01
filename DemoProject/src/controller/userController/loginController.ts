import { Request, Response } from "express";
import User from "../../models/users";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Session from "../../models/session";
import { createClient } from "redis";





export const login = async (req: Request, res: Response) => {
  // const client = createClient();
  // client.on("error", (err) => console.log("redis client error <-------------", err))
  // client.connect().then(()=>{
  //   console.log("connected")
  // }).then((error)=>{
  //   console.log("he")
  // })

  const { user_name, password } = req.body;

  try {
    const user: any = await User.findOne({ where: { user_name } });
    const x = user.id
    console.log(`=================${user.id}==================`)
    if (!user) {
      return res.status(404).send('User not found');
    }

    console.log(user.password)
    const comp = await bcrypt.compare(password, user.password);
    if (comp) {
      const token = jwt.sign({ userId: user.id }, 'mykey');
      const isSession = await Session.findOne({ where: { user_id: user.id } })
      if(isSession && isSession.status==false)
      {
        isSession.status=true;
        isSession.save();
      }
      if (!isSession) {
        const sess = await Session.create(
          {
            user_id: user.id,
            status: true,
          }
        )
      }
      // const redisSession = await client.get(`${x}`);
      // console.log(redisSession)
      // if (!redisSession) {
      //   let session_payload: any = {
      //     user_id: user.id,
      //     status: true
      //   }
      //   await client.set(`${user.id}_json`, JSON.stringify(session_payload))
      // }
      res.send({ token });
      console.log("login sucessfull");
    }
    else {
      res.send("incorrect password")
    }
  } catch (error) {
    console.error('Failed to login:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
};








