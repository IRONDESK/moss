import mail from '@sendgrid/mail';
import twilio from 'twilio';
import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

mail.setApiKey(process.env.SENDGRID_KEY!);
const twilioClient = twilio(process.env.TWILIO_ACCT, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  if (req.method === 'POST') {
    const payload = Math.floor(100000 + Math.random() * 900000) + ''; //토큰번호 (payload); 6자리 랜덤숫자
    const { email, phone } = req.body;

    const tokenUser = email ? { email } : phone ? { phone } : null;

    if (!tokenUser) return res.status(400).json({ ok: false });

    await client.token.create({
      data: {
        payload,
        user: {
          connectOrCreate: {
            where: {
              ...tokenUser,
            },
            create: {
              username: 'Anonymous',
              ...tokenUser,
            },
          },
        },
      },
    });

    //SMS 토큰 전송
    if (phone) {
      // const message = await twilioClient.messages.create({
      //   messagingServiceSid: process.env.TWILIO_MSID,
      //   to: process.env.MY_PHONE!, //현재 tiwilio trial 계정임으로 실제 서비스를 구동할때 유저의 번호를 넣어주면 된다.
      //   body: `6자리 토큰번호는 ${payload}`,
      // });
      // console.log(message);
    } else if (email) {
      //EMAIL 토큰 전송
      // const email = await mail.send({
      //   from: 'zero2one23581@gmail.com', // 보내는 메일
      //   to: 'zero2one23581@gmail.com', // 받는 메일 (유저의 이메일)
      //   subject: 'MOSS Verification Email',
      //   text: `6자리 토큰번호는 ${payload}`,
      //   html: `<h1>6자리 토큰번호는 ${payload}</h1>`,
      // });
      // console.log(email);
    }

    return res.json({ ok: true });
  }
}

export default withApiSession(
  withHandler({ methods: ['GET', 'POST'], handler, isPrivate: false }),
);
