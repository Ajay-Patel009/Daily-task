import { signup} from "../controller/signupController";
import express from 'express';
import {signUpJoiMiddleware} from "../middleware/joiValidationMiddleware";
import { Router } from "express";



const router = express.Router();

router.post('/', signUpJoiMiddleware, signup);




export default router;