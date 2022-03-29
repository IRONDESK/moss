import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId, password, username, location, email } = req.body;
  let user;
  if (userId && password && username && location && email) {
    user = await client.user.findFirst({
      where: { userId, password, username, location, email },
    });
    //해당하는 유저가 있다면?
    if (user) console.log(`유저를 찾았습니다!`);
    //해당하는 유저가 db에 없다면? -> 유저를 생성한다.
    if (!user) {
      user = await client.user.create({
        data: {
          userId,
          password,
          username,
          location,
          email,
        },
      });
      console.log(`해당하는 유저가 없습니다. 입력한 정보로 유저를 생성합니다.`);
    }
    console.log(user);
  }

  return res.status(200).end();
}

export default withHandler('POST', handler);
