import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const { token } = req.body;
  const foundToken = await client.token.findUnique({
    where: { payload: token },
    include: { user: true },
  });
  //
  if (!foundToken) {
    res.json({ ok: false, errorMsg: `일치하는 토큰이 없습니다!` });
    return res.status(404).end();
  }
  //save & delete
  req.session.user = { id: foundToken?.UserId };
  await req.session.save();
  // await client.token.deleteMany({
  //   where: { UserId: foundToken.UserId },
  // });
  //
  return res.json({ ok: true, method: 'tokenLogin' });
}

export default withApiSession(
  withHandler({ methods: ['POST'], handler, isPrivate: false }),
);
