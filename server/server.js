import express from "express";

const app = express();

const handleAPI = (req, res) => {
  res.json({ users: ["user 1", "user 2", "user 3"] });
};
app.use("/api", handleAPI);
app.use("/", (req, res) => {
  res.send(`<h1>MOSS BACK-END PAGE!</h1>`);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ MOSS server listening on ${PORT}!!🔥`));
