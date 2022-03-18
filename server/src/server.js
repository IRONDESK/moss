import express from "express";
import cors from "cors";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/post_name", async (req, res) => {
  let { name } = req.body;
  console.log(name);
});
app.get("/home", async (req, res) => {
  res.send(`This is a data from Backend!`);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ MOSS server listening on ${PORT}!!🔥`));
