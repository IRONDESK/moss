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

  if (req.method === 'POST') {
    const { email, phone, username, location, avatarId } = req.body;

    //아바타 수정
    if (avatarId)
      await client.user.update({
        where: { id: loggedInUser?.id },
        data: { avatar: avatarId },
      });

    //이름 수정
    if (username)
      await client.user.update({
        where: { id: loggedInUser?.id },
        data: { username },
      });

    //위치 수정
    if (location)
      await client.user.update({
        where: { id: loggedInUser?.id },
        data: { location },
      });

    //이메일 수정
    if (email && email !== loggedInUser?.email) {
      const dupEmail = Boolean(
        await client.user.findUnique({
          where: { email },
          select: { id: true },
        }),
      );
      //handling error
      if (dupEmail)
        return res.json({
          ok: false,
          errorMessage: '이미 등록한 이메일입니다.',
        });
      await client.user.update({
        where: { id: loggedInUser?.id },
        data: { email },
      });
    }

    //휴대폰 수정
    if (phone && phone !== loggedInUser?.phone) {
      const dupPhone = Boolean(
        await client.user.findUnique({
          where: { phone },
          select: { id: true },
        }),
      );
      //handling error
      if (dupPhone)
        return res.json({
          ok: false,
          errorMessage: '이미 등록한 휴대폰 번호입니다.',
        });
      await client.user.update({
        where: { id: loggedInUser?.id },
        data: { phone },
      });
    }

    //데이터 입력 X
    if (!email && !phone && !username && !location)
      return res.json({ ok: false, errorMessage: '입력데이터가 없습니다!' });

    //
    return res.json({ ok: true, message: '프로필을 성공적으로 수정했습니다!' });
  }
}

export default withApiSession(
  withHandler({ methods: ['GET', 'POST'], handler }),
);
