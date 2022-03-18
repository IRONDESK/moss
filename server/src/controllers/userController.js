import User from "../model/User";

//CREATE
export const getJoin = (req, res) => {
  return res.send(`join`);
};
export const postJoin = async (req, res) => {
  const { userId, password, name, email, location } = req.body;
  //유저생성
  await User.create({
    userId,
    password,
    name,
    email,
    location,
  });
  return res.redirect("http://localhost:3000");
};
//READ
export const getLogin = (req, res) => {
  return res.send(`login`);
};
export const postLogin = async (req, res) => {};
//UPDATE
//DELETE
