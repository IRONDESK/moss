import User from "../model/User";

//CREATE
export const getJoin = (req, res) => res.send(`data from back`);
export const postJoin = async (req, res) => {
  const { userId, password, password2, name, email, location } = req.body;
  console.log(userId, password, name, password2, email, location);
  //유저생성
  try {
    await User.create({
      userId,
      password,
      password2,
      name,
      email,
      location,
    });
  } catch (error) {
    console.log(error);
  }
};
//READ
export const getLogin = (req, res) => {
  return res.send(`login`);
};
export const postLogin = async (req, res) => {};
//UPDATE
//DELETE
