import { Request,Response } from "express";
import User from "../models/users";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login= async(req:Request,res:Response)=>{

   
        const { user_name, password } = req.body;
      
         try {
          const user: any = await User.findOne({ where: {user_name} });
      
          if (!user) {
            return res.status(404).send('User not found');
          }

          console.log(user.password)
         const comp= await bcrypt.compare(password,user.password);
         if(comp){
          const token = jwt.sign({ userId: user.id }, 'mykey');
          res.send({ token });
          console.log("login sucessfull");
         }
         else{
            res.send("incorrect password")
         }
         } catch (error) {
           console.error('Failed to login:', error);
           res.status(500).json({ error: 'Failed to login' });
        }
      };

    








