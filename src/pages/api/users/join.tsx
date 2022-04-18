import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, password, username, location, email, phone, avatar } =
      req.body;

    //1. 유저 찾기
    const registerdUser = await client.user.findFirst({
      where: {
        userId,
        password,
        username,
        location,
        email,
        phone,
      },
    });

    //2. 이미 유저가 있다면?
    if (registerdUser)
      return res.json({ ok: false, errMsg: '이미 가입한 유저입니다!' });

    //해당하는 유저가 db에 없다면? -> 유저를 생성한다.
    if (!registerdUser) {
      const user = await client.user.create({
        data: {
          email,
          phone,
          userId,
          password,
          username,
          location,
        },
      });
      console.log(user);
      return res.json({ ok: true });
    }
  }
}

export default withHandler({
  methods: ['GET', 'POST'],
  handler,
  isPrivate: false,
});
