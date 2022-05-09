import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { search } = req.body;
  const frontData = Boolean(search);
  let results = [];

  if (frontData) {
    const keywords = search.split(' ');
    let i: number;
    for (i = 0; i < Number(keywords.length); i++) {
      const result = await client.study.findMany({
        where: {
          studyName: {
            contains: keywords[i].toString(),
          },
        },
        select: { id: true, studyName: true },
      });
      results.push(...result);
      if(results.map(object=>object.id))
    }
    if (results.length > 0) return res.json({ ok: true, results });
    return res.json({ ok: true, message: '검색된 스터디가 없습니다.' });
  }
  return res.json({ ok: false, error: '데이터가 미입력 되었습니다.' });
}
export default withApiSession(
  withHandler({ methods: ['POST'], handler, isPrivate: false }),
);
