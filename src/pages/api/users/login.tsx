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
  const { email, phone, userId, password } = req.body;
  const payload = Math.floor(100000 + Math.random() * 900000) + ''; //토큰번호 (payload); 6자리 랜덤숫자

  //1. 아이디 비번으로 로그인하는 유저를 찾음
  const User = await client.user.findFirst({
    where: { userId, password },
  });

  //1. db에 유저가 없다?
  if (!User) {
    console.log(`일치하는 유저아이디 또는 비번이 없습니다!`);
    //회원가입 페이지로 넘어감
    return res.json({ ok: false, idpw_confirm: false });
    //
  } else if (User) {
    //db에 유저가 있다? -> 쿠키(세션)에 유저아이디 저장
    //
    req.session.user = { id: User?.id };
    await req.session.save();
    return res.json({ ok: false, idpw_confirm: true });
    //
  } else {
    //2. 토큰을 이용해서 로그인하는 유저들
    //
    const tokenUser = email ? { email } : phone ? { phone } : null;
    if (!tokenUser) return res.status(400).json({ ok: false });

    // 토큰 생성 -> 유저가 존재? -> 유저를 연결 // 유저가 없으면? -> 유저를 생성하고 연결
    const token = await client.token.create({
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

    //확인
    return res.json({ ok: true });
  }
}

export default withApiSession(
  withHandler({ method: 'POST', handler, isPrivate: false }),
);
