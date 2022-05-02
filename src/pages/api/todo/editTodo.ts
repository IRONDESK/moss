import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) { 
     
  const {id, title, completed} = req.body

  if(req.method === 'POST') {
    const todo = await client.studyTodo.findUnique({
      where: {
        id: id
      }
    })

    if(todo) {
      const editTodo = await client.studyTodo.update({
        where: {
          id: todo.id,
        },
        data: {
          title: title,
          completed: completed
        }
      })
      res.json({ok: true, editTodo})
    }
  }
}

export default withHandler({
  methods: ['POST'],
  handler,
  isPrivate: false,
});
