import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'GET') {
        const user = req.query.user;
        let findUserName = await client.user.findUnique({
        where: {
            userId: String(user),
        },
    });
    return res.json(findUserName);
    }
}

export default withHandler({
    methods: ['GET'],
    handler,
    isPrivate: false,
});