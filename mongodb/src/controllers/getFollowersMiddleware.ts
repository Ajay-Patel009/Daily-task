import express, { Request, Response } from 'express';




export const follower= async(req:Request,res:Response)=>{
    const user=req.body.followee_id;
    
}