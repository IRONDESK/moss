import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  console.log(req.session);
  const { token } = req.body; // front(login)에서 받은 token

  //1. db에서 일치하는 토큰 찾기
  const tokenExists = await client.token.findUnique({
    where: { payload: token },
    include: { user: true },
  });
  if (!tokenExists) res.status(404).end(); //입력한 토큰 일치안할시

  //확인
  console.log(tokenExists);

  //2. 세션에 user id 저장
  req.session.user = { id: tokenExists?.UserModelId };
  await req.session.save();
  //
  res.status(200).end();
}

export default withIronSessionApiRoute(withHandler('POST', handler), {
  cookieName: 'moss-session',
  //cookie를 암호화 하는 비밀번호
  password: 'asdlfjkasdjflkasdjkfjkjasdkkljasdfasldfkj',
});
