import express from 'express';
import {
  getLogin,
  getRegister,
  home,
  postLogin,
  postRegister,
} from '../controllers/userController';

const rootRouter = express.Router();

// rootRouter.route('/').get(home);
rootRouter.route('/join').get(getRegister).post(postRegister);
rootRouter.route('/login').get(getLogin).post(postLogin);

export default rootRouter;
