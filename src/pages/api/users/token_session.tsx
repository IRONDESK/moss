import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const { token } = req.body;

  //1. db에서 일치하는 토큰 찾기
  const confirmedToken = await client.token.findUnique({
    where: { payload: token },
    include: { user: true },
  });

  //Token Match Fail!
  if (!confirmedToken) {
    console.log(`일치하는 토큰이 없습니다!`);
    return res.status(404).end();
  }
  //
  console.log(confirmedToken);

  //2. Session(쿠키)에 <- 토큰 정보저장!
  req.session.user = { id: confirmedToken?.UserModelId };
  await req.session.save();

  //3. 세션저장후 이전 토큰전부 지워주기!
  await client.token.deleteMany({
    where: { UserModelId: confirmedToken.UserModelId },
  });

  //로그인 됬음을 FrontEnd에 전달! -> login page
  return res.json({ ok: true });
}

export default withApiSession(
  withHandler({ method: 'POST', handler, isPrivate: false }),
);
