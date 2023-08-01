// import { Category } from "../models/product.category.schema";
import { Request, Response } from "express";


import sequelize from "../../db/connection";
import User from "../../models/users";
import Category from "../../models/categoris";
import Product from "../../models/products";




const getProduct = async(req:Request,res:Response)=>{
    const decodedToken=req.body.userId;
    console.log(decodedToken);
    try{
        const data=await Product.findAll({where:{}});
        if(data){
        
        res.status(200).send({
           data 

        })};
        
    }
    catch(err)
    {
        res.status(400).send("err");
    }
}









const getCategory = async (req: Request,res:Response) => {
    // try {
    //     const categoryData = await Category.findAll({attributes:['category'],group:'category'});
    //     //const subcategoryData = await Category.findAll({ where: { Category:req.body.category},distinct:'Category',attributes: { exclude: ['subcategory', 'createdAt', 'updatedAt'] } });
    //     res.status(400).send({categoryData});
    // }
    // catch {
    //     return false;
    // }

    const data=await Category.findAll();
    res.send(data);
}

const getsubCategory = async (req: Request,res:Response) => {
    try {
        const subcategoryData = await Category.findAll({where:{category:req.body.category},attributes: { exclude: ['createdAt', 'updatedAt'] } });
        res.status(400).send({subcategoryData});
    }
    catch {
        res.status(404).send("not found");
    }
}

export {getCategory,getsubCategory, getProduct};