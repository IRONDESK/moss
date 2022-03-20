import express from "express";
import { postJoin, getLogin, postLogin } from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.route("/join").post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);

export default rootRouter;
