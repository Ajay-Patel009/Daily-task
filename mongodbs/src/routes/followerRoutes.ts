import express from 'express';
import { follower } from '../controllers/getFollowersController';


const router = express.Router();

router.post('/',follower);

export default router;
