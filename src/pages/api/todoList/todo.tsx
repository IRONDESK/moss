import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {

  const {title, id, completed} = req.body;

    await client.todo.create({
      data: {
        id,
        title: "title",
        completed,
    })

    return res.json({
      ok: true,
      test:"왜 안 됨 왜 안 됨 왜 왜 왜 왜"
    });
  }

export default withHandler({ method: 'POST', handler, isPrivate: false});