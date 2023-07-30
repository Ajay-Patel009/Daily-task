import { Request,Response } from "express";
import User from "../../models/users";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Session from "../../models/session";



export const logout= async(req:Request,res:Response)=>{
    const decodedToken=req.body.userId;
    try{
        await Session.update(
            {
               status:false
            },{where:{user_id:decodedToken,status:true}}
            
        )
        res.send("User logged Out Sucessfully");
        }
    catch(err)
    {
        res.status(4002).json({err: "Server err"});
    }
}