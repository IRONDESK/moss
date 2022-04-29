import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { memberList, studyid } = req.body;

    if (req.method === 'POST') {
        const studyinfo = await client.studyinfo.findUnique({
            where: {
                studyId: studyid,
            }
        });

        if (studyinfo) {
            const updated = await client.studyinfo.update({
                where: {
                    studyId: studyinfo.studyId,
                },
                data: {
                    joinMember: memberList,
                }
            });
            res.json({ok: true, updated})
        }
    }
}

export default withHandler({
    methods: ['POST'],
    handler,
    isPrivate: false,
});
