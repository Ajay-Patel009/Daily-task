import express, { Request, Response } from 'express';
import User from '../../models/users';


export const EditUserDetails = async (req: Request, res: Response) => {
    const decodedToken = req.body.userId;
    const { user_name, password,confirm_password, mobile_no } = req.body;
    var user = await User.findOne({ where: { id: decodedToken } })
    if (!user) {
        return res.status(404).json({ error: 'Record not found' });
    }
    if (user) {
        if (user_name) {
            user.user_name = user_name;
            user.save();

        }
        if (mobile_no) {
            user.mobile_no= mobile_no;
            user.save();
        }
        if (password) {
            if(password==confirm_password)
            {
            user.password= password;
            user.save();
            }
            else{
                return res.status(404).json({ error: 'Ooops !!!!!  Password mismatch' });  
            }
        }
        user.save();
        return res.status(404).json({ sucess:'record upldated' });  
    }
  
}