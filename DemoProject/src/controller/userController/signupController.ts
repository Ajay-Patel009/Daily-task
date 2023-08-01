
import { Request,Response } from "express";
import User from "../../models/users";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';



export const signup= async(req:Request,res:Response)=>{

    
    const data =req.body;
    // const user_name=req.body.user_name;


    
    try{
         const isUser = await User.findOne({where:{user_name:data.user_name}});
        //  console.log("find");
        //  console.log(data);
        //  console.log(isUser);
        //  console.log(req.body.user_name);
  
    
    if(!isUser){
     const { password } = data;
      const hashpassword= await bcrypt.hash(password, 10);
      data.password=hashpassword;
       var user = await User.create(data);
    //    const token= jwt.sign({id:user.id},'mykey');
        res.send("registered sucessfully");
        console.log("registered successfully");
    }
    else{
        console.log("user already exist");
        res.send("user already exist");
    }

    
}
catch(err){
    console.log(err);
}
}
