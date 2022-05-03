import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;
  const { inputData, studyId, id } = req.body;
  const { category, title, content } = inputData;
  console.log('확인!', category, title, content, studyId, id);

  //수정할 현재 일정데이터를 찾습니다.
  const foundNotice = await client.notice.findUnique({
    where: {
      id: +id,
    },
  });
  if (!foundNotice)
    return res.json({ ok: false, error: '데이터가 일치하지 않습니다.' });

  //본인이 만든 데이터인지 확인합니다.
  if (foundNotice.authorId !== user?.id)
    return res.json({ ok: false, error: '수정 권한이 없습니다.' });

  //위를 통과하면 데이터를 수정합니다.
  const updatedNotice = await client.notice.update({
    where: {
      id: +id,
    },
    data: {
      category,
      title,
      content,
    },
  });
  //
  return res.json({ ok: true, updatedNotice });
}

export default withApiSession(withHandler({ methods: ['POST'], handler }));
