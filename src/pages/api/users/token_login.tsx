import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const { token } = req.body; //프론트에서 입력한 토큰

  //1. db에서 토큰찾기
  const foundToken = await client.token.findUnique({
    where: { payload: token },
    include: { user: true },
  });

  //2. 일치하는 토큰이 없다면
  if (!foundToken) {
    res.json({ ok: false, errorMsg: `일치하는 토큰이 없습니다!` });
    return res.status(404).end();
  }

  //3. 토큰을 찾으면 -> Session(쿠키)에 토큰 정보저장!
  req.session.user = { id: foundToken?.UserModelId };
  await req.session.save();

  //4. 세션저장후 이전 토큰전부 지워주기!
  await client.token.deleteMany({
    where: { UserModelId: foundToken.UserModelId },
  });

  //로그인 됬음을 FrontEnd에 전달! -> login page
  return res.json({ ok: true });
}

export default withApiSession(
  withHandler({ methods: ['POST'], handler, isPrivate: false }),
);
