import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const { user } = req.session;
  const loggedInUser = await client.user.findUnique({
    where: { id: user?.id },
  });

  //GET
  if (req.method === 'GET') {
    //모든 유저
    const users = await client.user.findMany({
      select: {
        id: true,
        username: true,
        avatar: true,
      },
    });
    //모든유저 카운트
    const userCount = await client.user.count();

    //
    return res.json({ ok: true, loggedInUser, users, userCount });
  }

  //POST
  if (req.method === 'POST') {
    const { email, phone, username, location } = req.body;

    //이름, 위치 편집
    if (username || location) {
      await client.user.update({
        where: { id: loggedInUser?.id },
        data: { username, location },
      });
    }

    //이메일 편집
    if (email && email !== loggedInUser?.email) {
      const joinedUser = Boolean(
        await client.user.findUnique({
          where: { email },
          select: { id: true },
        }),
      );
      //이메일 중복체크
      if (joinedUser) {
        res.json({ ok: false, errorMessage: '이미 등록한 이메일입니다.' });
        console.log('이미 등록한 이메일입니다.');
      }
      await client.user.update({
        where: { id: user?.id },
        data: { email },
      });
    }

    //휴대폰 편집
    if (phone && phone !== loggedInUser?.phone) {
      const joinedUser = Boolean(
        await client.user.findUnique({
          where: { phone },
          select: { id: true },
        }),
      );
      //휴대폰 중복체크
      if (joinedUser) {
        res.json({ ok: false, errorMessage: '이미 등록한 휴대폰 번호입니다.' });
      }
      await client.user.update({
        where: { id: user?.id },
        data: { phone },
      });
    }

    //
    return res.json({
      ok: true,
      editMessage: '프로필 편집이 성공적으로 완료되었습니다.',
    });
  }
}

export default withApiSession(
  withHandler({ methods: ['GET', 'POST'], handler }),
);
