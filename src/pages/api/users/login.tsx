import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, phone, userId, password } = req.body; //1. fe에서 받은 데이터
  let user;
  if (email) {
    //2. 이메일을 입력했다면 ->  그 이메일과 일치하는 유저를 찾는다
    user = await client.user.findUnique({
      where: { email },
    });
    //2-1. 해당하는 유저가 있다면?
    if (user) console.log(`유저를 찾았습니다!`);
    //2-2. 해당하는 유저가 db에 없다면? -> 유저를 생성한다.
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
    //2-1. 해당하는 유저가 있다면?
    if (user) console.log(`유저를 찾았습니다!`);
    //2-2. 해당하는 유저가 db에 없다면? -> 유저를 생성한다.
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
  return res.status(200).end();
}

//!!중요!!
//NextJs에서 api route를 만들때는 항상 export default를 해줘야 함!
export default withHandler('POST', handler);
