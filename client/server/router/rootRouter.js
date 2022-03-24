import express from 'express';
import { postJoin, postLogin } from '../controllers/userController';

const rootRouter = express.Router();

rootRouter.route('/api/join').post(postJoin);
rootRouter.route('/login').post(postLogin);

export default rootRouter;
