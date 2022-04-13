import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';

async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
    const { studyName, image, introduce, tag, membersLimit, chatLink, joinMsg } =
    req.body;

    if (studyName && membersLimit && joinMsg) {
    let study = await client.studyinfo.findUnique({
        where: { studyName },
    });

    //동일한 이름의 스터디가 있다면?
    if (study) console.log(`중복되는 이름의 스터디가 있습니다!`);
    //해당하는 스터디가 db에 없다면? -> 스터디를 생성한다.
    if (!study) {
        study = await client.studyinfo.create({
        data: {
            studyName: "Untitled",
            image,
            introduce: "Introduction",
            tag,
            membersLimit: 5,
            chatLink,
            joinMsg: "Welcome to study group!"
        },
        });
        console.log(`입력된 정보로 스터디를 생성합니다.`);
    }
    }
    const studyResult = { studyName, image, introduce, tag, membersLimit, chatLink, joinMsg }
    console.log(studyResult);

    return res.json({ ok: true });
}

export default withHandler({ method: 'POST', handler, isPrivate: false });