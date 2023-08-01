import express,{ Request,Response } from "express";
import User from "../../models/users";
import jwt_decode from "jwt-decode";
import Session from "../../models/session";






// interface DecodedToken {
//     userId: string; // Change the type of userId accordingly
//     // Add other fields from the decoded token if necessary
// }

export const getUser = async (req: Request, res: Response) => {
    // const token = req.header('Authorization');
    const decodedToken=req.body.userId;
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",decodedToken)
    
    // console.log(decodedToken);

    // if (!token) {
    //     return res.status(401).json({ error: 'Token not found in the request header' });
    // }

    try {
        const user = await User.findOne({ where: { id: decodedToken} });
       if (!user) {
                    return res.status(404).json({ error: 'User not found' });
                }
                res.json({user});
             }
        
     catch (error) {
        console.log('Error decoding token or querying user:');
        res.status(500).json({ error: 'Internal server error' });
    }

}


