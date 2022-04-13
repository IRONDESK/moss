import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const { userId, password } = req.body;

  //1. 아이디 비번으로 로그인하는 유저를 찾음
  const User = await client.user.findFirst({
    where: { userId, password },
  });

  if (userId && password) {
    //2. 유저가 없으면?
    if (!User) {
      console.log(`일치하는 유저아이디 또는 비번이 없습니다!`);
      res.json({ ok: false, idpw_confirm: false }); //확인메시지 -> front (회원가입페이지로 넘어가게 처리)
    }
    //3. 유저가 있으면?
    req.session.user = { id: User?.id };
    await req.session.save(); //세션에 아이디 넣고, 저장!
    return res.json({ ok: false, idpw_confirm: true }); //확인메시지 -> front (마이페이지로 넘어가게 처리)
  }
  //확인
  return res.json({ ok: true });
}

export default withApiSession(
  withHandler({ method: 'POST', handler, isPrivate: false }),
);
