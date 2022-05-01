import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;
  const { title, date, content } = req.body;
  if (req.method === 'POST') {
    if (title && date) {
      const schedule = await client.schedule.create({
        data: {
          title,
          date,
          content,
          user: {
            connect: { id: user?.id },
          },
        },
      });
      return res.json({
        ok: true,
        schedule,
        message: '새로운 일정이 추가되었습니다.',
      });
    }
    //
    return res.json({ ok: false, error: '필수데이터가 미입력 되었습니다.' });
  }
  if (req.method === 'GET') {
    //유저가 만든 모든 스케줄
    const dailySchedule = await client.schedule.findMany({
      where: {
        user: { id: user?.id },
      },
      include: {
        user: { select: { id: true, username: true } },
      },
    });

    if (dailySchedule) {
      return res.json({ ok: true, dailySchedule });
    }

    //
    return res.json({ ok: false, message: '생성된 일정이 없습니다.' });
  }
}

export default withApiSession(
  withHandler({ methods: ['POST', 'GET'], handler }),
);
