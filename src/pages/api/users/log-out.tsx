import { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  if (req.method === 'GET') {
    //세션을 없애주고 홈페이지로 이동
    await req.session.destroy();
    return res.redirect('/');
  }
}

export default withApiSession(
  withHandler({ methods: ['GET', 'POST'], handler }),
);
