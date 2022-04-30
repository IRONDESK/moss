import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;

  if (req.method === 'POST') {
    const {
      studyName,
      introduce,
      category,
      tag,
      membersLimit,
      chatLink,
      imageId,
    } = req.body;

    const study = await client.study.create({
      data: {
        studyName,
        introduce,
        category,
        tag,
        membersLimit,
        chatLink,
        image: imageId,
        user: {
          connect: { id: user?.id },
        },
      },
    });
    return res.json({ ok: true, study });
  }
}

export default withApiSession(withHandler({ methods: ['POST'], handler }));
