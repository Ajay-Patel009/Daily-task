import express, { Request, Response } from 'express';
import Product from '../../models/products';
import sequelize from '../../db/connection';
import { Sequelize } from 'sequelize';


export const bidding = async (req: Request, res: Response) => {
    const decodedToken = req.body.userId;
    const { bidPrice, product_name } = req.body;



//////////////////////BOTH upading methods are working /////////////////


    const isAvailable = await Product.findOne({where:{product_name}});
    
    if(isAvailable)
    {
        if(isAvailable.user_id==decodedToken)
        {
            res.send("Sorry..!!! Uploader of product cannot bid on their own uploaded product")
        }
        isAvailable.bidder_id=decodedToken,
        isAvailable.bid_price=bidPrice
        await isAvailable.save();
        res.json({ message: 'Bidding Sucessfull.' });
    }
    else{
        res.send("product not available");
    }


    // let product = await Product.update({
        
    //     bid_price:bidPrice,
    //     bidder_id:decodedToken
    // }, 
    // { where: { product_name}})

    //  res.send("bidding sucessfull");
    


    // isAvailable.bidding= isAvailable.bidding+bidPrice;
    // isAvailable.user_id=decodedToken;
}


    


// const product = await Product.create({ product_namename: product_name });
// if (bidPrice > product.base_price) {
//     product.set({
//         user_id: decodedToken,
//         bidding: bidPrice
//     })
//     res.send("bidding sucessfull")
// };
// As above, the database still has "Jane" and "green"
// await product.save();
    // The database now has "Ada" and "blue" for name and favorite color

