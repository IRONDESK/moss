import express from "express";

const app = express();

// const handleAPI = (req, res) => {
//   res.json({ users: ["user 1", "user 2", "user 3"] });
// };
const handleAPI = (req, res) => {
  res.json({
    user: { name: "김이끼", email: "moss@111", password: 111 },
    user1: { name: "김준우", email: "moss@111", password: 111 },
    user2: { name: "강혜진", email: "moss@222", password: 222 },
    user3: { name: "박유진", email: "moss@222", password: 222 },
    user4: { name: "손수철", email: "moss@222", password: 222 },
    user5: { name: "심영은", email: "moss@222", password: 222 },
    user6: { name: "최성이", email: "moss@222", password: 222 },
  });
};

app.use("/api", handleAPI);
app.use("/", (req, res) => {
  res.send(`<h1>MOSS BACK-END PAGE!</h1>`);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ MOSS server listening on ${PORT}!!🔥`));
