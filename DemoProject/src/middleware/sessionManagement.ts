import express, { NextFunction, Request, Response } from 'express';
import Session from '../models/session';
import { createClient } from "redis";

// const client = createClient();
// client.connect();
export const sessionManagement = async (req: Request, res: Response, next: NextFunction) => {
  const decodedToken = req.body.userId;
  try {
    const isSession =await Session.findOne({ where: { user_id: decodedToken, status: true }, })
    if (!isSession) {
      res.send("user already logged out")
    }
    if (isSession) {
      next()
    } else {
      res.status(401).send("Authorization Error")
    }
 } catch (e) {
    res.send(e);
  }

}


