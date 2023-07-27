
import express from 'express';
import { login } from "../controller/loginController";
import { loginJoiMiddleware } from "../middleware/joiValidationMiddleware";



const router = express.Router();

router.post('/',loginJoiMiddleware, login);




export default router;