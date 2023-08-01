import express, { Request, Response } from 'express';
import Product from '../../models/products';





export const updateProduct= async(req: Request, res: Response) => {
  const productId = req.body.product_id;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Update the product properties
    product.product_name = req.body.product_name || product.product_name;
    product.description = req.body.description || product.description;
    product.title = req.body.title || product.title;
    product.base_price = req.body.base_price || product.base_price;
   


    await product.save();

    return res.json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};


