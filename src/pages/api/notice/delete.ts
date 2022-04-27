import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.body;

  if (req.method === 'POST') {
    const noticeData = await client.notice.findUnique({
      where: {
        id: id,
      },
    });

    if (noticeData) {
      const deleteData = await client.notice.delete({
        where: {
          id: noticeData.id,
        },
      });
      res.json({ ok: true, deleteData });
    }
  }
}

export default withHandler({
  methods: ['POST'],
  handler,
  isPrivate: false,
});
