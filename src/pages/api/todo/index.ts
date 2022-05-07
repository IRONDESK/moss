import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import useSWR from 'swr';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title, studyId } = req.body;

  if (req.method === 'GET') {
    const studyTodo = await client.studyTodo.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        study: {
          select: {
            studyName: true,
          }
        }
      }
    });
    return res.json({ ok: true, studyTodo });
  }

  if(studyId) {
    if (req.method === 'POST') {
      const studyTodo = await client.studyTodo.create({
        data: {
          title,
          study: {
            connect: { id: studyId },
          },
        },
      });
      return res.json({ ok: true, studyTodo });
    }
  } else {
    if (req.method === 'POST') {
      const studyTodo = await client.studyTodo.create({
        data: {
          title,
        },
      });
      return res.json({ ok: true, studyTodo });
    }
  }
}

export default withHandler({
  methods: ['POST', 'GET'],
  handler,
  isPrivate: false,
});