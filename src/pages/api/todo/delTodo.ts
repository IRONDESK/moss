import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {    
  const id = req.body
  
  if(req.method === 'POST') {
    const todo = await client.todo.findUnique({
      where: {
        id: id
      }
    })

    if(todo) {
      const delTodo = await client.todo.delete({
        where: {
          id: todo.id,
        }
      })
      res.json({ok: true, delTodo})
    }
  }
}

export default withHandler({
  methods: ['POST'],
  handler,
  isPrivate: false,
});