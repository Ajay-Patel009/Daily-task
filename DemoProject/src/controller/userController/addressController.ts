import { Request, Response } from "express";
import Address from "../../models/address";
import User from "../../models/users";




export const addAddress = async (req: Request, res: Response) => {
    const userId = req.body.userId;
    const { house_no, area, landmark, city, district, state, country, zipCode, status } = req.body;
    // const { user_name, password,confirm_password, mobile_no } = req.body;
    // var data=req.body;
    var user = await User.findOne({ where: { id: userId } })
    if (!user) {
        return res.status(404).json({ error: 'Record not found' });
    }
    if (user) {
        const newAddress = new Address({
            user_id: userId,
            house_no,
            area,
            landmark,
            city,
            district,
            state,
            country,
            zipCode,
            status

        }
        )
        newAddress.save();
        res.status(200).json({newAddress});
    }
}


export const getAddress = async (req: Request, res: Response) => {
    const userId = req.body.userId;
    const address=await Address.findAll({where:{user_id:userId}})
    if(!addAddress)
    {
        return res.status(400).send('address not found');
    }
    else{
        res.status(200).json({address});;
    }
    
}


