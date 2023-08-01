import { NextFunction } from 'express';
import Joi from 'joi';
import { Request,Response } from 'express';
import {createValidator} from 'express-joi-validation'


const validate=createValidator();



export const signUpJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const signUpSchema = Joi.object({
        // id: Joi.number().integer().required().min(3).max(10),
        user_name: Joi.string().required().min(3),
        email : Joi.string().email().required(),
        password : Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
        mobile_no: Joi.number().required(),
    });
const {error}=signUpSchema.validate(req.body);
if(error){
    console.log("--------------------------error");
    res.send("name is too short")
}
else
{
    next()
}
};





export const loginJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const signUpSchema = Joi.object({
        user_name: Joi.string().required().min(3),
        password : Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
    });
const {error}=signUpSchema.validate(req.body);
if(error){
    console.log("--------------------------error");
    res.send("name is too short")
}
else
{
    next()
}
};
