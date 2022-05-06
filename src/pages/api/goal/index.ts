import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { day, time } = req.body;
  const { user } = req.session;

  if (req.method === 'GET') {
    const goalData = await client.goal.findUnique({
      where: {
        id: user?.id,
      },
    });
    return res.json({ ok: true, goalData });
  }

  if (req.method === 'POST') {
    const goal = await client.goal.findUnique({
      where: {
        id: user?.id,
      },
    });

    if (goal) {
      const goalData = await client.goal.update({
        where: {
          id: goal.id,
        },
        data: {
          day: day,
          time: time,
        },
      });
      res.json({ ok: true, goalData });
    } else {
      const goalData = await client.goal.create({
        data: {
          day,
          time,
          user: {
            connect: {
              id: user?.id,
            },
          },
        },
      });
      return res.json({ ok: true, goalData });
    }
  }
}

export default withApiSession(
  withHandler({ methods: ['GET', 'POST'], handler }),
);
