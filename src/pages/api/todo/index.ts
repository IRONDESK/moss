import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import useSWR from 'swr';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title, studyId } = req.body;
  const { user } = req.session;

  if (req.method === 'GET') {
    const studyTodo = await client.studyTodo.findMany({
      include: {
        user: {
          select: {
            id: true,
          },
        },
        study: {
          select: {
            studyName: true,
          },
        },
      },
    });
    return res.json({ ok: true, studyTodo });
  }

  if (studyId) {
    if (req.method === 'POST') {
      const studyTodo = await client.studyTodo.create({
        data: {
          title,
          user: {
            connect: {
              id: user?.id,
            },
          },
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
          user: {
            connect: {
              id: user?.id,
            },
          },
        },
      });
      return res.json({ ok: true, studyTodo });
    }
  }
}

export default withApiSession(
  withHandler({
    methods: ['POST', 'GET'],
    handler,
    isPrivate: false,
  }),
);
