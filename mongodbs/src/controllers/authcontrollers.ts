import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import registration from '../models/registration';
import User from '../models/user';
import { redisConnect } from '../db/redis';
import session from '../models/session';
import { createClient } from "redis";

const client = createClient();



try {
  redisConnect();
  console.log("redis connected");
}
catch (err) { console.log(err); }


export const signup = async (req: Request, res: Response) => {
  const { user_name, email, password } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to hash password' });
    }
    const newUser = new registration({ user_name, email, password: hashedPassword });
    newUser
      .save()
      .then(() => {
        res.status(201).json({ message: 'User registered successfully' });
      })
      .catch((err) => {
        res.status(500).json({ error: 'Failed to register user' });
      });
  });
};
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const client = createClient();
  client.connect();
  try {
    redisConnect();
    console.log("redis connected");
  }
  
  catch (err) { console.log(err); }
  registration.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: 'Authentication failed' });
      }
      bcrypt.compare(password, user.password, async (err, result) => {
        if (err || !result) {
          return res.status(401).json({ error: 'Authentication failed' });
        }
        const token = jwt.sign({ userId: user._id }, '8765');

        // res.status(200).json({ token });
        console.log("before")
        let session_payload: any = {
          user_id: user._id,
          device_id: "8765",
          IP_address: "876iuyt76jhg",
          isSessionSctive: true

        }
        console.log("after paylod")
        await session.insertMany([
          session_payload
        ])
        console.log(user._id)
        console.log("after insertion in session")
        await client.set(`${user._id}_session`, JSON.stringify(session_payload))
        console.log("after stringfy")
        return res.send({ message: "user login Successfully", token: token })
      });
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to authenticate user' });
    });
};


