import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  //1. FE에서 받은 유저 데이터
  const { email, phone, userId, password } = req.body;
  const user = email ? { email } : { phone: +phone };

  const payload = Math.floor(100000 + Math.random() * 900000) + ''; //6자리 랜덤숫자 string
  //토큰 생성
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...(userId && password
              ? { userId_password: { userId, password } }
              : {}),
          },
          create: {
            username: 'Anonymous',
            ...(userId && password ? { userId, password } : {}),
          },
        },
      },
    },
  });
  //
  console.log('Token here!', token);
  return res.status(200).end();
}

//!!중요!! NextJs에서 api route를 만들때는 항상 export default를 해줘야 함!
export default withHandler('POST', handler);
//2-1. 아이디 비번으로 로그인시
// if (userId && password) {
//   const user = await client.user.findFirst({
//     where: { userId, password },
//   });
//   if (user) console.log(`유저를 찾았습니다!`);
//   if (!user) {
//     console.log(`해당하는 유저가 없습니다.`);
//   }
//   console.log(user);
// }
