import Product from "../../models/products";
import express from 'express';
import { Request, Response } from "express";





export const uploadProduct = async(req:Request,res:Response)=>{

    const data=req.body;
    const decodedToken= req.body.userId;
    data.user_id=decodedToken;
    try{
    await Product.create(data);
    res.status(200).json({ message: 'product uploaded sucessfully'});
    

    }
    catch (error) {
        console.error('Failed to login:', error);
        res.status(500).json({ error: 'Failed to login' });
    }

} 