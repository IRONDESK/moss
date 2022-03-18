import express from "express";
import cors from "cors";
import rootRouter from "./routers/rootRouter";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", rootRouter);

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ MOSS server listening on ${PORT}!!🔥`));