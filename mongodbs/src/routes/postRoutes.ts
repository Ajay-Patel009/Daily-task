import express from 'express';
import {editPost, post} from '../controllers/postController';
import auth from '../middleware/redismiddleware';


const router = express.Router();

router.post('/',auth,post);
router.post('/editpost',editPost);

export default router;