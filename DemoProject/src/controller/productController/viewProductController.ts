import { Op } from "sequelize";
import Product from "../../models/products";
import { Request,Response } from "express";




export const viewProducts=async(req:Request,res:Response) => {
  
  const decodedToken=req.body.userId;
  console.log(decodedToken);

  try {
    const products = await Product.findAll({
      where: {
        user_id: {
          [Op.not]: [decodedToken],
        },
      },
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

