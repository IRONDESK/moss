import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  let updatedId;
  let updatedPw;
  const { user } = req.session;
  const loggedInUser = await client.user.findUnique({
    where: { id: user?.id },
    select: { id: true, userId: true, password: true },
  });
  const { userId, password, confirmPassword } = req.body;
  console.log(userId, password, confirmPassword);

  //아이디 수정
  if (userId && userId !== loggedInUser?.userId) {
    //중복 데이터 -> error
    const dupData = Boolean(
      await client.user.findUnique({
        where: { userId },
        select: { id: true },
      }),
    );
    if (dupData) {
      return res.json({
        ok: false,
        errorMessage: '이미 존재하는 아이디 입니다.',
      });
    }
    //
    updatedId = await client.user.update({
      where: { id: loggedInUser?.id },
      data: { userId },
    });
  }

  //비밀번호 수정
  if (password && confirmPassword && password !== loggedInUser?.password) {
    //비밀번호 일치여부 확인
    if (password !== confirmPassword) {
      return res.json({
        ok: false,
        errorMessage: '비밀번호가 일치하지 않습니다.',
      });
    }
    //
    updatedPw = await client.user.update({
      where: { id: user?.id },
      data: { password },
    });
  }

  if (updatedId || updatedPw) {
    return res.json({
      ok: true,
      message: `아이디 | 비밀번호를 성공적으로 수정했습니다!`,
    });
  }
  //
  return res.json({ ok: false, errorMessage: '변경사항이 없습니다.' });
}

export default withApiSession(withHandler({ methods: ['POST'], handler }));
