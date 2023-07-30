import User from '../models/users';
import Token from '../models/token';
import  sendEmail  from '../utils/sendEmail';
import crypto from 'crypto';
import Joi from 'joi';
import express from 'express';
import dotenv from 'dotenv';
const router = express.Router();


dotenv.config();

router.post("/", async (req, res) => {
    try {
        const schema = Joi.object({ email: Joi.string().email().required() });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findOne({where:{ email: req.body.email} });
        if (!user)
            return res.status(400).send("user with given email doesn't exist");

        let token = await Token.findOne({where:{id: user.id }});
        if (!token) {
            token = await Token.create({
                id: user.id,
                token: crypto.randomBytes(32).toString("hex"),
            })
        }

        const link = `${process.env.BASE_URL}/password-reset/${user.id}/${token.token}`;
        await sendEmail(user.email, "Password reset", link);

        res.send("password reset link sent to your email account");
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
});

router.post("/:user_id/:token", async (req, res) => {
    // const {user_id,token} = req.body;
    try {
        const schema = Joi.object({ password: Joi.string().required() });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findByPk(req.params.user_id);
        if (!user) return res.status(400).send("invalid link or expired");

        const token = await Token.findOne({where:{
            id: user.id,
            token: req.params.token,
        }});
        if (!token) return res.status(400).send("Invalid link or expired");

        user.password = req.body.password;
        // await token.delete();
        await user.save();
        // token.delete();

        res.send("password reset sucessfully.");
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
});

export default router;
