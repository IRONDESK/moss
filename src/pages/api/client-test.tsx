import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../libs/server/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await client.user.create({
    data: {
      name: 'junwoo',
      email: 'test@moss.com',
    },
  });
  res.json({
    ok: true,
    data: 'hello world',
  });
}
