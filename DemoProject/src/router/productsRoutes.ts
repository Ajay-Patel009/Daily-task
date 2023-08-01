import express from 'express';
import { uploadProduct } from '../controller/productController/pruductUploadController';
import authenticateJWT from '../middleware/jwtMiddleware';
import { bidding } from '../controller/productController/biddingController';
import { getCategory, getProduct, getsubCategory } from '../controller/productController/getproductController';
import { deleteProduct } from '../controller/productController/deleteProductController';
import { sessionManagement } from '../middleware/sessionManagement';

const router=express.Router();



router.post('/uploadProducts',authenticateJWT,sessionManagement, uploadProduct);
router.post('/bidding',authenticateJWT,sessionManagement, bidding);
router.post('/getcategory',authenticateJWT, sessionManagement,getCategory);
router.post('/getSubcategory',getsubCategory);
router.post('/removepProduct',authenticateJWT,sessionManagement, deleteProduct);
router.get('/viewProducts',authenticateJWT, sessionManagement,getProduct);

export default router;