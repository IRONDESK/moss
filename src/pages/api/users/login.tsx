import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  //1. FE에서 받은 유저 데이터
  const { email, phone, userId, password } = req.body;
  const user = email ? { email } : { phone: +phone };

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
    const payload = Math.floor(100000 + Math.random() * 900000) + ''; //6자리 랜덤숫자 string
    const token = await client.token.create({
      data: {
        payload,
        //3-1. 토큰 생성 -> 유저와 연결 // 유저가 없다면? -> 유저를 생성 (토큰과 연결됨)
        user: {
          connectOrCreate: {
            where: {
              ...user,
            },
            create: {
              username: 'Anonymous',
              ...user,
            },
          },
        },
      },
    });
    console.log('토큰생성!', token);
  }
  return res.status(200).end();
}

//!!중요!! NextJs에서 api route를 만들때는 항상 export default를 해줘야 함!
export default withHandler('POST', handler);
