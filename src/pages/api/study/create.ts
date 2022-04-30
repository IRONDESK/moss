import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { user } = req.session;
    const { studyName, introduce, category, tag, membersLimit, chatLink } =
      req.body;
    const study = await client.study.create({
      data: {
        studyName,
        introduce,
        category,
        tag,
        membersLimit,
        chatLink,
        user: {
          connect: { id: user?.id },
        },
      },
    });
    return res.json({ ok: true, data: study });
  }

  if (req.method === 'GET') {
    const queryid = req.query.id;

    if (queryid !== 'many') {
      let studydata = await client.study.findUnique({
        where: {
          id: +queryid,
        },
      });
      return res.json(studydata);
    } else {
      let studydata = await client.study.findMany();
      return res.json(studydata);
    }
  }
}

export default withHandler({
  methods: ['GET', 'POST'],
  handler,
  isPrivate: false,
});
