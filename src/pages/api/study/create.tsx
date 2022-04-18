import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
    const {
        studyName,
        image,
        introduce,
        tag,
        membersLimit,
        chatLink,
        joinMsg } = req.body;

        let study = await client.studyinfo.create({
        data : {
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

export default withHandler({
    method: 'POST',
    handler,
    isPrivate: false
});