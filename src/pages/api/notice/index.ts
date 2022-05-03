import { NextApiRequest, NextApiResponse } from 'next';
import { StudyTimer } from 'src/components/StudyMain/StudyTimer';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { user } = req.session;

    // const { category, title, content } = req.body;
    const { inputData, studyId } = req.body;
    const { category, title, content } = inputData;
    console.log(category, title, content, studyId);

    const noticeData = await client.notice.create({
      data: {
        category,
        title,
        content,
        author: {
          connect: {
            id: user?.id,
          },
        },
        study: {
          connect: {
            id: +studyId,
          },
        },
      },
    });
    return res.json({
      ok: true,
      noticeData,
    });
  }

  // if (req.method === 'GET') {
  //   const queryid = req.query.id;
  //   console.log(queryid);
  //   if (queryid !== 'many') {
  //     let noticeData = await client.notice.findUnique({
  //       where: {
  //         id: Number(queryid),
  //       },
  //     });
  //     return res.json({ ok: true, noticeData });
  //   } else {
  //     let noticeData = await client.notice.findMany({
  //       include: {
  //         study: true,
  //       },
  //     });
  //     return res.json({ ok: true, noticeData });
  //   }
  // }
}

export default withApiSession(
  withHandler({ methods: ['POST', 'GET'], handler, isPrivate: false }),
);
