import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const [{ category, title, content }] = req.body;
  console.log(req.body);

  if (req.method === 'POST') {
    await client.notice.create({
      data: {
        category,
        title,
        content,
      },
    });
  }

  return res.json({
    ok: true,
    test: '오케',
  });
}

export default withHandler({ method: 'POST', handler, isPrivate: false });
