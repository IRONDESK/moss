import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const { token } = req.body;

  //1. db에서 일치하는 토큰 찾기
  const tokenExists = await client.token.findUnique({
    where: { payload: token },
    include: { user: true },
  });

  //Token Match Fail!
  if (!tokenExists) {
    console.log(`일치하는 토큰이 없습니다!`);
    return res.status(404).end();
  }
  //
  console.log(tokenExists);

  //2. Session(쿠키)에 <- 토큰 정보저장!
  req.session.user = { id: tokenExists?.UserModelId };
  await req.session.save();

  //
  res.status(200).end();
}

export default withIronSessionApiRoute(withHandler('POST', handler), {
  cookieName: 'moss-session',
  password: 'asdlfjkasdjflkasdjkfjkjasdkkljasdfasldfkj',
});
