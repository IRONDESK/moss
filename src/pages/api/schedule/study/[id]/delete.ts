import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;
  const { schId } = req.body; //프론트에서 받은 스케줄아이디
  const { id } = req.query; //프론트에서 받은 스터디아이디

  const chosenSch = await client.studySchedule.findUnique({
    where: { id: schId },
    select: {
      id: true,
      studyId: true,
      UserId: true,
    },
  });

  //본인이 만들었고, 스터디아이디가 일치하는 데이터일때 삭제가 허용된다.
  const DelConfirm = Boolean(
    chosenSch?.studyId === +id && chosenSch.UserId === user?.id,
  );
  if (!DelConfirm)
    return res.json({ ok: false, error: '삭제할 권한이 없습니다.' });

  //위를 통과한 데이터 삭제
  const DeletedSch = await client.studySchedule.delete({
    where: { id: chosenSch?.id },
    select: { id: true, content: true },
  });

  return res.json({
    ok: true,
    DeletedSch,
    message: '선택한 일정이 삭제되었습니다.',
  });
}

export default withApiSession(withHandler({ methods: ['POST'], handler }));
