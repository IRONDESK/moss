import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { category, title, author, content } = req.body;
    console.log(req.body);

    let notice;
    if (category && title && author && content) {
      notice = await client.notice.findFirst({
        where: {
          category,
          title,
          author,
          content,
        },
      });
      if (notice) console.log(`이미 등록된 글이 있습니다.`);
      if (!notice) {
        notice = await client.notice.create({
          data: {
            category,
            title,
            author,
            content,
          },
        });
        console.log(`등록되었습니다.`);
      }
    }
    return res.status(200).end();
  }
}
export default withHandler({
  methods: ['GET', 'POST'],
  handler,
  isPrivate: false,
});
