import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { memberList, studyid } = req.body;

  if (req.method === 'POST') {
    const studyinfo = await client.study.findUnique({
      where: {
        id: studyid,
      },
    });

    if (studyinfo) {
      const updated = await client.study.update({
        where: {
          id: studyinfo.id,
        },
        data: {
          joinMember: memberList,
        },
      });
      res.json({ ok: true, updated });
    }
  }
}

export default withHandler({
  methods: ['POST'],
  handler,
  isPrivate: false,
});
