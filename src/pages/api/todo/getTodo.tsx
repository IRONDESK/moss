import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {

  if(req.method === "GET") {
    const todo = await client.todo.findMany()
    console.log(todo);
    return todo
  }
   res.json({ ok: true })
}

export default withHandler({ method: 'GET', handler, isPrivate: false});
