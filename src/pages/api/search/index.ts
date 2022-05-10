import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const frontData = req.body;
  // Prisma Full-text Search를 위한 함수
  let array = frontData.split(' ');
  array.push('');
  const keywords = array.join('* ');
  //
  if (frontData) {
    const result = await client.study.findMany({
      where: {
        studyName: {
          search: keywords,
        },
        category: {
          search: keywords,
        },
      },
    });
    if (result.length > 0) {
      return res.json({ ok: true, result });
    }
    return res.json({ ok: false, error: '찾으신 결과가 없습니다.' });
  }
  return res.json({ ok: false, error: '데이터가 미입력 되었습니다.' });
}

export default withApiSession(
  withHandler({ methods: ['POST'], handler, isPrivate: false }),
);
