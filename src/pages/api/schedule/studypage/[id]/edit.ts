import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;
  const { id } = req.query; //스터디아이디
  const { scheduleId, date, startTime, endTime, content } = req.body;

  if (scheduleId && date && content) {
    //편집할 데이터를 찾는다.
    const chosenData = await client.studySchedule.findUnique({
      where: { id: scheduleId },
      select: { id: true, UserId: true, studyId: true },
    });

    //편집조건: 본인이 만들었고 + 해당스터디에 있는 데이터
    const validate = Boolean(
      chosenData &&
        chosenData?.UserId === user?.id &&
        chosenData?.studyId === +id,
    );
    if (!validate)
      return res.json({ ok: true, error: '수정할 권한이 없습니다.' });

    //조건을 통과하면 편집 해당데이터 편집
    const updatedData = await client.studySchedule.update({
      where: {
        id: chosenData?.id,
      },
      data: {
        date,
        startTime,
        endTime,
        content,
      },
    });
    //
    return res.json({
      ok: true,
      updatedData,
      message: '해당 스터디 일정이 성공적으로 수정되었습니다.',
    });
  }
}

export default withApiSession(withHandler({ methods: ['POST'], handler }));
