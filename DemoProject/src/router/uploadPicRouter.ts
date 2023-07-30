import express from 'express';
import { uploadPic } from '../controller/userController/profilePicController';

const router = express.Router();


router.post('/',uploadPic);

export default router;