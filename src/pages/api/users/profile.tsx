import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  if (req.method === 'GET') {
    const { user } = req.session;
    const profile = await client.user.findUnique({
      where: {
        id: user?.id,
      },
    });

    return res.json({ ok: true, profile });
  }
}

export default withApiSession(
  withHandler({ methods: ['GET', 'POST'], handler }),
);
