import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, id, completed } = req.body;

    return res.json({ ok: true });
  }
}

export default withHandler({
  methods: ['GET', 'POST'],
  handler,
  isPrivate: false,
});
