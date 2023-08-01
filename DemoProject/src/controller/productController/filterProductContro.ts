import express, { Request, Response } from 'express';
import Product from '../../models/products';
import { Op } from 'sequelize';



export const filterProduct=async(req:Request,res:Response)=>{

    const minPrice = parseInt(req.query.min_price as string);
    const maxPrice = parseInt(req.query.max_price as string);

    console.log(minPrice);
  
    try {
      const filteredProducts = await Product.findAll({
        where: {
          base_price: {
            [Op.between]: [minPrice, maxPrice],
          },
        },
      });
  
      res.json(filteredProducts);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }

}