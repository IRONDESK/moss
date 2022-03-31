import twilio from 'twilio';
import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';

const twilioClient = twilio(process.env.TWILIO_ACCT, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  //1. FE에서 받은 유저 데이터
  const { email, phone, userId, password } = req.body;

  //유저 찾기용
  const toFindUser =
    userId && password
      ? { userId_password: { userId, password } }
      : email
      ? { email }
      : { phone: +phone };

  if (!toFindUser) return res.status(400).json({ ok: false }); // Bad Request

  //유저 생성용
  const toCreateUser =
    userId && password
      ? { userId, password }
      : email
      ? { email }
      : { phone: +phone };

  const payload = Math.floor(100000 + Math.random() * 900000) + ''; //6자리 랜덤숫자 string

  //2. 토큰 생성 -> 유저가 존재? -> 유저를 연결 // 유저가 없으면? -> 유저를 생성하고 연결
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...toFindUser,
          },
          create: {
            username: 'Anonymous',
            ...toCreateUser,
          },
        },
      },
    },
  });
  //SMS 전송
  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE!, //현재 tiwilio trial 계정임으로 실제 서비스를 구동할때 유저의 번호를 넣어주면 된다.
      body: `당신 받을 토큰번호는 ${payload}`,
    });
    console.log(message);
  }

  //확인
  return res.json({ ok: true });
}

export default withHandler('POST', handler);
