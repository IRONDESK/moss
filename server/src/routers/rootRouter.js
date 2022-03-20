import express from "express";
import { getJoin, postJoin, getLogin, postLogin } from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);

export default rootRouter;
