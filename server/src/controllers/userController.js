import User from "../model/User";
import bcrypt from "bcrypt";

//CREATE (회원가입)
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
//READ (로그인)
export const getLogin = (req, res) => {
  return res.send(`login`);
};
export const postLogin = async (req, res) => {
  const { userId, password } = req.body;
  const user = await User.findOne({ userId });
  //아이디 존재유무확인
  if (!user) {
    return console.log(`존재하지 않는 아이디 입니다!`);
  }
  //비번 일치여부 확인
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return console.log(`비밀번호가 일치하지 않습니다!`);
  }
  return console.log(`로그인 성공!!`);
};
//UPDATE
//DELETE
