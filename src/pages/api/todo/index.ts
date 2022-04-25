import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title, completed } = req.body;
  
  if (req.method === 'GET') {
    const todo = await client.todo.findMany();
    return res.json({ ok: true, todo });
  }

  if (req.method === 'POST') {
    const todo = await client.todo.create({
      data: {
        title,
        completed,
      },
    });

    return res.json({ ok: true, todo });
  }
}

export default withHandler({
  methods: ['POST', 'GET'],
  handler,
  isPrivate: false,
});