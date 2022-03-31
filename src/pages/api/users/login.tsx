import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  //1. FE에서 받은 유저 데이터
  const { email, phone, userId, password } = req.body;

  //유저 찾기용
  const toFindUser =
    userId && password
      ? { userId_password: { userId, password } }
      : email
      ? { email }
      : { phone: +phone };

  //유저 생성용
  const toCreateUser =
    userId && password
      ? { userId, password }
      : email
      ? { email }
      : { phone: +phone };

  const payload = Math.floor(100000 + Math.random() * 900000) + ''; //6자리 랜덤숫자 string

  //2. 토큰 생성 -> 유저가 존재? -> 유저를 연결 // 유저가 없으면? -> 유저를 생성하고 연결
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...toFindUser,
          },
          create: {
            username: 'Anonymous',
            ...toCreateUser,
          },
        },
      },
    },
  });

  //확인
  console.log('Token here!', token);
  return res.status(200).end();
}

export default withHandler('POST', handler);
