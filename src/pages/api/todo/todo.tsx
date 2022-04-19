import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, id, completed } = req.body;

<<<<<<< HEAD:src/pages/api/todoList/todo.tsx
    return res.json({ ok: true });
=======
  const title = req.body;

  if(req.method === "POST") {
    const todo = await client.todo.create({
      data: {
        title,
      }
    })
    return res.json({ ok: true, todo });  
>>>>>>> front:src/pages/api/todo/todo.tsx
  }
}

<<<<<<< HEAD:src/pages/api/todoList/todo.tsx
export default withHandler({
  methods: ['GET', 'POST'],
  handler,
  isPrivate: false,
});
=======
  
}

export default withHandler({ method: 'POST', handler, isPrivate: false});
>>>>>>> front:src/pages/api/todo/todo.tsx
