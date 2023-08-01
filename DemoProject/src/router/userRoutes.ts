import express from 'express';
import { getUser } from '../controller/userController/getUserController';
import {authenticateJWT} from '../middleware/jwtMiddleware';
import { deleteUser } from '../controller/userController/deleteUserController';
import { uploadPic } from '../controller/userController/profilePicController';
import { logout } from '../controller/userController/logoutController';
import { EditUserDetails } from '../controller/userController/updateUser';
import { sessionManagement } from '../middleware/sessionManagement';
// import { addAddress } from '../controller/userController/addressController';
import { addAddress, getAddress } from '../controller/userController/addressController';



const router = express.Router();


router.get('/getUser',authenticateJWT,sessionManagement,getUser);
router.post('/logout',authenticateJWT,sessionManagement, logout);
router.delete('/deleteUser',authenticateJWT,sessionManagement,deleteUser);
router.put('/editUserDetails',authenticateJWT,sessionManagement, EditUserDetails)
router.post('/uploadpic',authenticateJWT,sessionManagement, uploadPic);
router.post('/addAddress',authenticateJWT,sessionManagement,addAddress);
router.get('/getAddress',authenticateJWT,sessionManagement,getAddress);


export default router;