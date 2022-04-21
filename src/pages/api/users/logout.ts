import { NextApiRequest, NextApiResponse } from 'next';

import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  await req.session.destroy();
  return res.redirect('/');
  //세션을 없애주고 홈페이지로 이동
}

export default withApiSession(
  withHandler({ methods: ['GET'], handler, isPrivate: false }),
);
