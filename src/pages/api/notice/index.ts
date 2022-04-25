import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const [{ category, title, content }] = req.body;
    let noticeData = await client.notice.create({
      data: {
        category: category,
        title: title,
        content: content,
      },
    });
    return res.json({
      ok: true,
      noticeData,
    });
  }

  if (req.method === 'GET') {
    const queryid = req.query.id;
    if (queryid !== 'many') {
      let noticeData = await client.notice.findUnique({
        where: {
          id: Number(queryid),
        },
      });
      return res.json({ ok: true, noticeData });
    } else {
      let noticeData = await client.notice.findMany();
      return res.json({ ok: true, noticeData });
    }
  }
}

export default withHandler({
  methods: ['POST', 'GET'],
  handler,
  isPrivate: false,
});
