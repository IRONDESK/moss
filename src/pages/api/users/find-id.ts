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
  아이디 찾을 때 조건
  - 이미 로그인이 되어있다면 로그아웃을 해야한다.
  - 이메일 또는 휴대폰 번호가 있어야 한다.
  - 이메일로 찾을때 이메일과 일치하는 데이터를 찾는다 / 휴대폰 이하동문
  */
  const { user } = req.session;
  if (user)
    return res.json({
      ok: false,
      error: '로그아웃한 후에 이용하시길 바랍니다.',
    });
  //
  const { email, phone } = req.body;
  //
  if (email) {
    const foundUser = await client.user.findUnique({
      where: { email },
      select: { id: true, userId: true },
    });
    if (!foundUser)
      return res.json({ ok: false, error: '등록된 이메일이 아닙니다.' });
    //
    return res.json({
      ok: true,
      foundUser,
      message: `귀하의 아이디는 ${foundUser?.userId} 입니다.`,
    });
  }
  if (phone) {
    const foundUser = await client.user.findUnique({
      where: { phone },
      select: { id: true, phone: true },
    });
    if (!foundUser)
      return res.json({ ok: false, error: '등록된 휴대폰 번호가 아닙니다.' });
    //
    return res.json({
      ok: true,
      foundUser,
      message: `귀하의 휴대폰 번호는 ${foundUser?.phone} 입니다.`,
    });
  }
  return res.json({ ok: false, error: '데이터가 미입력 되었습니다.' });
}

export default withApiSession(
  withHandler({ methods: ['POST'], handler, isPrivate: false }),
);
