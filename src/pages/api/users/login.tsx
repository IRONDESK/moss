import mail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';
import twilio from 'twilio';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const payload = Math.floor(100000 + Math.random() * 900000) + '';
  const { userId, password, email, phone } = req.body;

  if (req.method === 'POST') {
    //유저아이디로 로그인
    if (userId && password) {
      const User = await client.user.findFirst({
        where: { userId, password },
      });
      if (!User) {
        res.json({
          ok: false,
          errorMsg: `일치하는 유저아이디 또는 비밀번호가 없습니다!`,
        });
      }
      req.session.user = { id: User?.id };
      await req.session.save();
      //
      return res.json({ ok: true });
    }

    //이메일 또는 휴대폰으로 인증하여 로그인
    if (email || phone) {
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
        /*
        const message = await twilioClient.messages.create({
          messagingServiceSid: process.env.TWILIO_MSID,
          to: process.env.MY_PHONE!, //현재 tiwilio trial 계정임으로 실제 서비스를 구동할때 유저의 번호를 넣어주면 된다.
          body: `6자리 토큰번호는 ${payload}`,
        });
        console.log(message);
        */
      } else if (email) {
        /*
        const email = await mail.send({
          from: 'zero2one23581@gmail.com', // 보내는 메일
          to: 'zero2one23581@gmail.com', // 받는 메일 (유저의 이메일)
          subject: 'MOSS Verification Email',
          text: `6자리 토큰번호는 ${payload}`,
          html: `<h1>6자리 토큰번호는 ${payload}</h1>`,
        });
        console.log(email);
        */
      }
      //
      return res.json({ ok: true });
    }
  }

  //로그아웃
  if (req.method === 'GET') {
    await req.session.destroy();
    return res.redirect('/');
    //세션을 없애주고 홈페이지로 이동
  }
}

export default withApiSession(
  withHandler({ methods: ['GET', 'POST'], handler, isPrivate: false }),
);

//FOR Email and Phone Auth login
mail.setApiKey(process.env.SENDGRID_KEY!);
const twilioClient = twilio(process.env.TWILIO_ACCT, process.env.TWILIO_TOKEN);
