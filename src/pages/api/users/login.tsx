import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../libs/server/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.status(401).end(); // BAD REQUEST
  }
  console.log(req.body);
  res.json({
    '프론트로부터 데이터를 잘받았나?':
      'Yes, now this message is going to be shown in the front!',
  });
}
