import { select } from 'd3';
import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  /*
  비밀번호 찾을 때 조건
  - 이미 로그인이 되어있다면 로그아웃을 해야한다.
  - 아이디와 일치하는 유저를 찾는다.
  */
  const { user } = req.session;
  if (user)
    return res.json({
      ok: false,
      error: '로그아웃한 후에 이용하시길 바랍니다.',
    });
  //
  const { userId } = req.body;
  if (userId) {
    const foundUser = await client.user.findUnique({
      where: { userId },
      select: { id: true, password: true },
    });
    if (!foundUser)
      return res.json({
        ok: false,
        noUserIdMessage:
          '아이디를 찾을수 없습니다. 아이디 찾기 페이지로 이동하시겠습니까?',
      });
    //
    return res.json({
      ok: true,
      message: `귀하의 아이디는 "${foundUser?.password}" 입니다.`,
    });
  }
  //
  return res.json({ ok: false, error: '데이터가 미입력 되었습니다.' });
}

export default withApiSession(
  withHandler({ methods: ['POST'], handler, isPrivate: false }),
);
