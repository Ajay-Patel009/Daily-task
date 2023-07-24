import  { Request, Response } from 'express';
import mongoose from 'mongoose';
import followers from '../models/follower';





export const follower= async(req:Request,res:Response)=>{
    try {
        const data = req.body.followee_id;
        // console.log(data)
        if (!mongoose.isValidObjectId(data)) {
          return res.status(400).json({ error: "Invalid Object ID" });
        }
        const id = await followers.find({followee_id:data},{_id : 0,follower_id : 1});
        
    
    
        if (!id) {
          return res.status(404).json({ error: "Student not found" });
        }
        return res.json({follower_id :id});
      } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
      }
    }
    
    
