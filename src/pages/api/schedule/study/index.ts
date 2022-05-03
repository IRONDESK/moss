import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;
  const { studyId, date, startTime, endTime, content } = req.body;

  if (user && studyId && date && startTime && endTime && content) {
    const studySchedule = await client.studySchedule.create({
      data: {
        date,
        startTime,
        endTime,
        content,
        user: { connect: { id: user?.id } },
        study: { connect: { id: +studyId } },
      },
    });
    //
    return res.json({
      ok: true,
      studySchedule,
      message: '새로운 스터디 일정이 등록되었습니다.',
    });
  }
  return res.json({ ok: false, error: '스터디 일정등록을 실패했습니다.' });
}

export default withApiSession(withHandler({ methods: ['POST'], handler }));
