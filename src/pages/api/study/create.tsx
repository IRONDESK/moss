import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      studyName,
      image,
      introduce,
      tag,
      membersLimit,
      chatLink,
      joinMsg,
    } = req.body;
    let study = await client.studyinfo.create({
      data: {
        studyName,
        image,
        introduce,
        tag,
        membersLimit,
        chatLink,
        joinMsg,
      },
    });
    return res.json({ ok: true, data: study });
  }
}

export default withHandler({
  methods: ['GET', 'POST'],
  handler,
  isPrivate: false,
});
