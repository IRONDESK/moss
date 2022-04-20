import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, password, username, location, email, phone, avatar } =
      req.body;
    if (userId && password && username && location && email && phone) {
      const alreadyExists = await client.user.findFirst({
        where: {
          userId,
          password,
          username,
          location,
          email,
          phone,
        },
      });
      //
      if (alreadyExists)
        return res.json({ ok: false, error: '이미 가입한 유저입니다!' });
      //
      await client.user.create({
        data: {
          email,
          phone,
          userId,
          password,
          username,
          location,
        },
      });
      //
      return res.json({ ok: true });
    }
  }
}

export default withHandler({
  methods: ['GET', 'POST'],
  handler,
  isPrivate: false,
});
