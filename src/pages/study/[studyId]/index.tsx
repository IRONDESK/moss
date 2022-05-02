import { useRouter } from 'next/router';
import { StudyBanner } from '../../../components/StudyMain/StudyBanner';
import { StudyComponents } from '../../../components/StudyMain/Container';
import getInfo from '../../api/study/getInfo';
import { useEffect, useState } from 'react';

interface studyForm {
  studyName?: string;
  leader?: number;
  image: string;
  introduce?: string;
  tag?: string;
  membersLimit?: number;
  chatLink: string;
  joinMember?: string[] | undefined;
  joinMsg?: string;
}

export default function StudyPage() {
  const router = useRouter();
  const { studyId } = router.query;
  console.log(studyId);
  const loading: studyForm = {
    studyName: '',
    image: '',
    introduce: '',
    tag: '',
    membersLimit: 0,
    joinMember: [],
    chatLink: '',
    joinMsg: '',
  };
  const [data, setData] = useState<studyForm>();

  const res = getInfo(studyId);
  useEffect(() => {
    setData(res);
  }, [res]);

  return (
    <>
      <StudyBanner
        studyId={Number(studyId)}
        category="카테고리"
        title={data?.studyName}
        des={data?.introduce}
        hashtag={data?.tag}
        joinMember={data?.joinMember}
        memberlimit={data?.membersLimit}
        link={data?.chatLink}
        joinMsg={data?.joinMsg}
      />
      <StudyComponents studyinfo={data} />
    </>
  );
}
