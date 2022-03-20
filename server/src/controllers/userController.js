import User from "../model/User";

//CREATE
export const getJoin = (req, res) => {
  return res.send("join");
};
export const postJoin = async (req, res) => {
  const { userId, password, password2, name, email, location } = req.body;
  console.log(userId, password, password2, name, email, location);
  //유저생성
  await User.create({
    userId,
    password,
    name,
    email,
    location,
  });
};
//READ
export const getLogin = (req, res) => {
  return res.send(`login`);
};
export const postLogin = async (req, res) => {};
//UPDATE
//DELETE
