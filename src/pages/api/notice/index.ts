import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;
  const { inputData, studyId } = req.body;
  const { category, title, content } = inputData;

  if (user) {
    const noticeData = await client.notice.create({
      data: {
        category,
        title,
        content,
        author: {
          connect: {
            id: user?.id,
          },
        },
        study: {
          connect: {
            id: +studyId,
          },
        },
      },
    });
    //
    return res.json({ ok: true, noticeData });
  }
  return res.json({ ok: false, error: '로그인이 필요한 기능입니다.' });
}

export default withApiSession(withHandler({ methods: ['POST'], handler }));
