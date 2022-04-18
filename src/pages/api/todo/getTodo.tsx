import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {

  const title = req.body;

  if(req.method === "POST") {
    const todo = await client.todo.create({
      data: {
        title,
      }
    })
    return res.json({ ok: true, todo });  
  }

  
}

export default withHandler({ method: 'POST', handler, isPrivate: false});