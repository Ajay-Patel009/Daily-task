// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
// // import { SECRET_KEY } from './config'; // You should create a separate config file to store your secret key securely.

// // Middleware function to authenticate JWT

// const SECRET_KEY="8765";
// const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.header('Authorization')?.split(' ')[1];
// // console.log(token);
//   if (!token) {
//     return res.status(401).json({ message: 'Missing JWT token.' });
//   }

//   jwt.verify(token, SECRET_KEY, (err: jwt.VerifyErrors | null, user: any) => {
//     if (err) {
//       return res.status(403).json({ message: 'Invalid JWT token.' });
//     }
// // console.log(err)
//     req.body = user;
//     next();
//   });
// };



//export default authenticateJWT;
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export default function auth(req:any,res:Response,next:NextFunction){
    const token = req.headers.authorization;
    console.log(token);
    if(!token) return res.status(401).send("ACCESS_DENIED");
    try{
        req.body.age = 24;
        const decoded :any = jwt.verify(token,'8765');
        console.log(decoded);
        req.body.id= decoded.id;
        next();
    }catch(err:any){
        res.status(400).send("INVALID_TOKEN")
    }
}
