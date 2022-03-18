import express from "express";
import cors from "cors";
import rootRouter from "./routers/rootRouter";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", rootRouter);

export default app;
