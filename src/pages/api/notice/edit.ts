import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const [{ id, category, title, content }] = req.body;

  if (req.method === 'POST') {
    const noticeData = await client.notice.findUnique({
      where: {
        id: id,
      },
    });

    if (noticeData) {
      const editData = await client.notice.update({
        where: {
          id: noticeData.id,
        },
        data: {
          category: category,
          title: title,
          content: content,
        },
      });
      res.json({ ok: true, editData });
    }
  }
}

export default withHandler({
  methods: ['POST'],
  handler,
  isPrivate: false,
});
