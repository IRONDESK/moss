import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  //프론트에서 이미 체크된 조건: 스터디아이디와 일치하는 데이터 (O)
}

export default withApiSession(withHandler({ methods: ['POST'], handler }));
