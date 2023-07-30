import express from 'express';
import { uploadProduct } from '../controller/productController/pruductUploadController';
import authenticateJWT from '../middleware/jwtMiddleware';
import { bidding } from '../controller/productController/biddingController';

const router=express.Router();



router.post('/uploadProducts',authenticateJWT, uploadProduct);
router.post('/bidding',authenticateJWT, bidding);

export default router;