import User from '../models/User';

//CREATE
export const postJoin = async (req, res) => {
  res.send(`hello world`);
  // const { userId, password, password2, name, email, location } = req.body;
  // try {
  //   const user = await User.create({
  //     userId,
  //     password,
  //     name,
  //     email,
  //     location,
  //   });
  //   console.log(user);
  // } catch (error) {
  //   return res.send('error._message');
  // }
};
export const postLogin = (req, res) => {
  return;
};
