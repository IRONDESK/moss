import User from "../model/User";

//CREATE
export const getJoin = (req, res) => {};

export const postJoin = async (req, res) => {
  const { userId, password, password2, name, email, location } = req.body;
  const dupUserId = await User.exists({ userId });
  const dupEmail = await User.exists({ email });

  //비밀번호 매칭 필터링
  if (password !== password2) {
    return console.log(`❌ 비밀번호가 일치하지 않습니다!`);
  }
  //중복 아이디 필터링
  if (dupUserId) {
    return console.log("❌ 이미 가입된 아이디 입니다!!");
  }
  //중복 이메일 필터링
  if (dupEmail) {
    return console.log("❌ 이미 가입된 이메일 입니다!!");
  }
  //유저생성
  try {
    await User.create({
      userId,
      password,
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
export const postLogin = async (req, res) => {
  const {
    body: { userId, password },
  } = req;
  const exists = await User.exists({ userId });
  if (!exists) {
    return console.log(`존재하지 않는 아이디 입니다!`);
  }
};
//UPDATE
//DELETE
