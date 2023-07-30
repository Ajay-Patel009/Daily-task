
import express from 'express';
import multer from 'multer';
import { Request,Response } from 'express';
import fs from 'fs';




const app=express();
// app.use(bodyParser.json());
const port=3000;





const upload=multer({
    storage : multer.diskStorage({
    destination: (req:Request, file, cb) => {
      cb(null,"upload");
    },
    filename: (req: any, file: { originalname: any; }, cb: (arg0: null, arg1: any, arg2: string) => void) => {
      console.log(file.originalname);
      cb(null, file.originalname,'.txt');
    },
  })
})
export const uploadPic =(upload.single("file"), function (req:Request, res:Response) {
  
    console.log("file uploaded");
    res.status(200).json({ message: 'file uploaded sucessfully' });
});