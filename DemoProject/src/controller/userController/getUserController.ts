import express,{ Request,Response } from "express";
import User from "../../models/users";
import jwt_decode from "jwt-decode";
import Session from "../../models/session";






// interface DecodedToken {
//     userId: string; // Change the type of userId accordingly
//     // Add other fields from the decoded token if necessary
// }

export const getUser = async (req: Request, res: Response) => {
    const token = req.header('Authorization');
    const decodedToken=req.body.userId;
    console.log(decodedToken);

    if (!token) {
        return res.status(401).json({ error: 'Token not found in the request header' });
    }

    try {
        // const decodedToken = jwt_decode(token) as DecodedToken;
        // const userId = decodedToken.userId;
        // const isSession= await Session.findOne({where:{user_id:userId},})
        const user = await User.findOne({ where: { id: decodedToken} });
       
        
                if (!user) {
                    return res.status(404).json({ error: 'User not found' });
                }
                const isSession= await Session.findOne({where:{user_id:decodedToken, status:true},})
                if(isSession){
                res.json(user);
                   }
                   else{
                    res.send("user already logged out")
                   }
            }
        
     catch (error) {
        console.log('Error decoding token or querying user:');
        res.status(500).json({ error: 'Internal server error' });
    }

}


// export const getUser = async (req: Request, res: Response) => {
//     const token = req.header('Authorization');

//     if (!token) {
//         return res.status(401).json({ error: 'Token not found in the request header' });
//     }

//     try {
//         const decodedToken = jwt_decode(token);
//         // Assuming your decoded token has a field 'userId' containing the user's ID
//         const userId = decodedToken.userId;

//         // Query the database to find the user with the given ID
//         const user = await User.findOne({ where: { id: userId } });

//         if (!user) {
//             return res.status(404).json({ error: 'User not found' });
//         }

//         // If the user is found, you can send the user's data in the response
//         res.json(user);
//     } catch (error) {
//         console.error('Error decoding token or querying user:', error.message);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }





