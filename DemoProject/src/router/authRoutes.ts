
import express from 'express';

import { loginJoiMiddleware, signUpJoiMiddleware } from "../middleware/joiValidationMiddleware";
import { login } from '../controller/userController/loginController';
import { signup } from '../controller/userController/signupController';



const router = express.Router();

router.post('/login',loginJoiMiddleware, login);
router.post('/signup', signUpJoiMiddleware, signup);




export default router;