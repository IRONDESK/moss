import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../libs/server/client';
import withHandler from '../../../libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  // return res.status(200).end();
  return res.json({
    '백엔드와 프론트 연결성공?':
      'YES, if it is succeed, it will be shown on the FRONT!',
  });
  //prisma작업이 들어갈거임
}

//!!중요!!
//NextJs에서 api route를 만들때는 항상 export default를 해줘야 함!
export default withHandler('POST', handler);
