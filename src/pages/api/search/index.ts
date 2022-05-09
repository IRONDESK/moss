import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { search } = req.body;
  //
  let array = search.split(' ');
  array.push('');
  const keywords = array.join('* ');
  console.log(keywords);
  //
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
  console.log(result);
  return res.json({ ok: false, error: '데이터가 미입력 되었습니다.' });
}
export default withApiSession(
  withHandler({ methods: ['POST'], handler, isPrivate: false }),
);
