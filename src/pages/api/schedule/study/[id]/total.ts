import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;
  const { id } = req.query;

  //스터디의 아이디와 일치하는 스터디일정을 찾는다.
  const totalSchedule = await client.studySchedule.findMany({
    where: {
      studyId: +id,
    },
    select: {
      id: true,
      date: true,
      startTime: true,
      endTime: true,
      content: true,
      user: { select: { id: true, username: true } },
      study: { select: { id: true, studyName: true } },
    },
    orderBy: { createdAt: 'desc' },
  });
  //스터디 일정이 없을때
  if (!totalSchedule)
    return res.json({ ok: false, error: '등록된 스터디 일정이 없습니다.' });

  //
  return res.json({ ok: true, totalSchedule });

  //스터디에 가입된 유저의 아이디와 일치하는 스터디일정을 찾는다. (추후작업)
}

export default withApiSession(withHandler({ methods: ['GET'], handler }));
