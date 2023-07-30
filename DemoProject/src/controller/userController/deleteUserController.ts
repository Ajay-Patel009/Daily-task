import { Request,Response } from "express";
import User from "../../models/users";



export const deleteUser =async(req:Request,res:Response)=>{
   
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Token not found in the request header' });
    }

    try {
        // const decodedToken = jwt_decode(token) as DecodedToken;
        const decodeId = req.body.userId;
        const user = await User.destroy({ where: { id: decodeId } });
        if(!user)
        {
            res.send("user not found");
        }
        res.send("User Deleted");
    }
        catch(err){
            console.log(err)
        }

    


}