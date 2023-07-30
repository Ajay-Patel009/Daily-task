import express from 'express';
import { getUser } from '../controller/userController/getUserController';
import authenticateJWT from '../middleware/jwtMiddleware';
import { deleteUser } from '../controller/userController/deleteUserController';
import { uploadPic } from '../controller/userController/profilePicController';
import { logout } from '../controller/userController/logoutController';
import passwordReset from './passwordReset';



const router = express.Router();


router.post('/getUser',authenticateJWT, getUser);
router.post('/logout',authenticateJWT, logout);
router.post('/deleteUser',authenticateJWT,  deleteUser);
// router.post('/',passwordReset);

router.post('/',uploadPic);

export default router;