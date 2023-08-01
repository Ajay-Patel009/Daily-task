import express, { Request, Response } from 'express';
import Product from '../../models/products';


export const deleteProduct = async (req: Request, res: Response) => {
    const decodedToken = req.body.userId;
    const {product_name } = req.body;
    const isAvailable = await Product.findOne({where:{product_name,user_id:decodedToken}});
    
    if(isAvailable)
    {
        await Product.destroy({where:{product_name, user_id:decodedToken}});
        res.status(200).json({ message: 'Product Deleted.' });
        if(!isAvailable)
        {
            res.status(4009).send("Ooops..!!! you have no products to remove");
        }
    }
}