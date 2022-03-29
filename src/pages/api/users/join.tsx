import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // return res.status(200).end();
  return res.json({ test: '백엔드 연결 성공' });
}

//!!중요!! NextJs에서 api route를 만들때는 항상 export default를 해줘야 함!
export default withHandler('POST', handler);
