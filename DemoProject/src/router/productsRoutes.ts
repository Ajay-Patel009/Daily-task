import express from 'express';
import { uploadProduct } from '../controller/productController/pruductUploadController';
import authenticateJWT from '../middleware/jwtMiddleware';
import { bidding } from '../controller/productController/biddingController';
import { getCategory} from '../controller/productController/getproductController';
import { deleteProduct } from '../controller/productController/deleteProductController';
import { sessionManagement } from '../middleware/sessionManagement';
import { filterProduct } from '../controller/productController/filterProductContro';
import { updateProduct } from '../controller/productController/updateProductController';
import { viewProducts } from '../controller/productController/viewProductController';

const router=express.Router();



router.post('/uploadProducts',authenticateJWT,sessionManagement, uploadProduct);
router.post('/bidding',authenticateJWT,sessionManagement, bidding);
router.get('/getcategory',authenticateJWT, sessionManagement,getCategory);
router.delete('/removepProduct',authenticateJWT,sessionManagement, deleteProduct);
router.get('/viewProducts',authenticateJWT, sessionManagement,viewProducts);
router.get('/filterProducts',authenticateJWT,sessionManagement, filterProduct)
router.put('/updateProduct',authenticateJWT,sessionManagement,updateProduct)

export default router;