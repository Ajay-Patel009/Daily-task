// import { Category } from "../models/product.category.schema";
import { Request, Response } from "express";
import sequelize from "../../db/connection";
import { QueryTypes } from "sequelize";

const getCategory=async(req:Request,res:Response)=> {
    try{
     const recursiveQuery = `
     WITH RECURSIVE category_recursive AS (
         -- Anchor member
         SELECT id, category_name, parent_id
         FROM "Categories"
         WHERE parent_id IS NULL
       
         UNION ALL
       
         -- Recursive member
         SELECT c.id, c.name, c.parent_id
         FROM "Categories" c
         INNER JOIN category_recursive cr ON c.parent_id = cr.id
       )
       
       SELECT *
       FROM category_recursive
     `;

     const categoriesWithSubcategories = await sequelize.query(recursiveQuery, {
         type: QueryTypes.SELECT,
     });
     res.status(200).json(categoriesWithSubcategories);
 
 }catch(error){
     res.status(500).json({message: "Server Error"});
}
}
export {getCategory};