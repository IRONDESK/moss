import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.body;
  const { user } = req.session;

  //선택한 공지사항이어야 합니다.
  const chosenNotice = await client.notice.findUnique({
    where: {
      id,
    },
  });
  if (!chosenNotice)
    return res.json({ ok: false, error: '삭제할 데이터가 일치하지 않습니다.' });

  //본인이 만든 공지사항이어야 합니다.
  if (chosenNotice.authorId !== user?.id)
    return res.json({ ok: false, error: '삭제 권한이 없습니다.' });

  //위 사항을 모두 통과하면 데이터를 삭제해줍니다.
  const removedData = await client.notice.delete({
    where: {
      id,
    },
  });
  //
  return res.json({ ok: true, removedData });
}

export default withApiSession(withHandler({ methods: ['POST'], handler }));
