import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  //1. FE에서 받은 유저 데이터
  const { email, phone, userId, password } = req.body;
  const payload = email ? { email } : { phone: +phone };

  //2-1. 아이디 비번으로 로그인시
  if (userId && password) {
    const user = await client.user.findFirst({
      where: { userId, password },
    });
    if (user) console.log(`유저를 찾았습니다!`);
    if (!user) {
      console.log(`해당하는 유저가 없습니다.`);
    }
    console.log(user);
  } else {
    //2-2. 아이디 비번으로 로그인시
    const user = await client.user.upsert({
      where: {
        ...payload,
      },
      create: {
        username: 'Anonymous',
        ...payload,
      },
      update: {},
    });
    console.log(user);
  }

  /*
  //2-1. 아이디와 비번으로 로그인 할 경우
  if (userId && password) {
    user = await client.user.findFirst({
      where: { userId, password },
    });
    //해당하는 유저가 있다면?
    if (user) console.log(`유저를 찾았습니다!`);
    //회원가입 페이지로 넘어간다.
    if (!user) {
      console.log(`해당하는 유저가 없습니다.`);
    }
    console.log(user);
  }
  //2-2. 이메일로 로그인 할 경우
  if (email) {
    user = await client.user.findUnique({
      where: { email },
    });
    //해당하는 유저가 있다면?
    if (user) console.log(`유저를 찾았습니다!`);
    //해당하는 유저가 db에 없다면? -> 유저를 생성한다.
    if (!user) {
      user = await client.user.create({
        data: {
          username: 'Anonymous',
          email,
        },
      });
      console.log(
        `해당하는 유저가 없습니다. 입력한 이메일로 유저를 생성합니다.`,
      );
    }
    console.log(user);
  }

  if (phone) {
    //2. 휴대폰 번호를 입력했다면 ->  정보와 일치하는 유저를 찾는다
    user = await client.user.findUnique({
      where: { phone: +phone },
    });
    //해당하는 유저가 있다면?
    if (user) console.log(`유저를 찾았습니다!`);
    //해당하는 유저가 db에 없다면? -> 유저를 생성한다.
    if (!user) {
      user = await client.user.create({
        data: {
          username: 'Anonymous',
          phone: +phone,
        },
      });
      console.log(
        `해당하는 유저가 없습니다. 입력한 휴대폰 번호로 유저를 생성합니다.`,
      );
    }
    console.log(user);
  }
  */

  return res.status(200).end();
}

//!!중요!!
//NextJs에서 api route를 만들때는 항상 export default를 해줘야 함!
export default withHandler('POST', handler);
