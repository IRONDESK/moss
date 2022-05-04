import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;
  const { scheduleId } = req.body; //프론트에서 받은 스케줄아이디
  //프론트에서 이미 체크된 조건: 스터디아이디와 일치하는 데이터 (O)

  const chosenSch = await client.studySchedule.findUnique({
    where: { id: scheduleId },
    select: {
      id: true,
      UserId: true,
    },
  });
  //본인이 만든 데이터일때 삭제가 허용된다.
  if (chosenSch?.UserId !== user?.id)
    return res.json({ ok: true, error: '삭제할 권한이 없습니다.' });

  //위를 통과한 데이터 삭제
  const DeletedSch = await client.studySchedule.delete({
    where: { id: chosenSch?.id },
    select: { id: true },
  });
  //
  return res.json({
    ok: true,
    DeletedSch,
    message: '선택한 일정이 삭제되었습니다.',
  });
}

export default withApiSession(withHandler({ methods: ['POST'], handler }));
