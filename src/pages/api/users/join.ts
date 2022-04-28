import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    username,
    userId,
    password,
    confirmPassword,
    email,
    phone,
    location,
    avatar,
  } = req.body;

  if (username && userId && password && confirmPassword) {
    //데이터 중복체크
    const dupUserId = Boolean(
      await client.user.findUnique({
        where: {
          userId,
        },
      }),
    );
    if (dupUserId) {
      return res.json({
        ok: false,
        errorMessage: '이미 등록된 아이디 입니다.',
      });
    }
    if (email) {
      const dupEmail = Boolean(
        await client.user.findUnique({
          where: {
            email,
          },
        }),
      );
      if (dupEmail) {
        return res.json({
          ok: false,
          errorMessage: '이미 등록된 이메일 입니다.',
        });
      }
    }
    if (phone) {
      const dupPhone = Boolean(
        await client.user.findUnique({
          where: {
            phone,
          },
        }),
      );
      if (dupPhone) {
        return res.json({
          ok: false,
          errorMessage: '이미 등록된 휴대폰 입니다.',
        });
      }
    }

    //비밀번호 일치체크
    if (password !== confirmPassword)
      return res.json({
        ok: false,
        errorMessage: '비밀번호가 일치하지 않습니다.',
      });

    //유저생성
    await client.user.create({
      data: {
        username,
        userId,
        password,
        email: email ? email.toString() : null,
        phone: phone ? phone.toString() : null,
        location,
        avatar,
      },
    });

    //
    return res.json({ ok: true, message: '회원가입을 축하합니다!' });
  }
}

export default withHandler({
  methods: ['POST'],
  handler,
  isPrivate: false,
});
