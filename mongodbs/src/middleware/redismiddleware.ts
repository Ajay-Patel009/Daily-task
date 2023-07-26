import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { createClient } from "redis";
import session from "../models/session";



export default async function auth(req:Request,res:Response,next:NextFunction){
    const client = createClient()

    client.on("error", (err) => console.log("Redis Client Error", err));

    await client.connect();

    const token: any = req.headers.authorization;
    if(!token)
    {
        res.send("token not found")
    }
    const verifyToken :any = jwt.verify(token,'8765');
    console.log(verifyToken);
    console.log(verifyToken.userId);
    
    if(verifyToken.userId){
        let findSession:any = await client.get(`${verifyToken.userId}_session`) || await session.find(verifyToken.userId)



        if(findSession.length!=0){
            req.body.id= verifyToken.id;
            next()
        }else{
            res.send("Session out")
        }


    }else{
        res.send({message:"invalid token"})
    }

}