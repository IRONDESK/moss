import { useRouter } from 'next/router';
import { StudyBanner } from '../../components/StudyMain/StudyBanner';
import { StudyComponents } from '../../components/StudyMain/Container';
import getInfo from '../api/study/getInfo';
import { useEffect, useState } from 'react';

interface studyForm {
    studyName?: string;
    leader?: number;
    image: string;
    introduce?: string;
    tag?: string;
    membersLimit?: number;
    chatLink: string;
    joinMsg?: string;
}

export default function StudyPage() {
    const router = useRouter();
    const { studyId } = router.query;
    const loading: studyForm = {
        studyName: '',
        image: '',
        introduce: '',
        tag: '',
        membersLimit: 0,
        chatLink: '',
        joinMsg: '',
    }
    const [data, setData] = useState<studyForm>(loading);

    const res = getInfo(studyId);
    useEffect(() => {
        res?.then((value) => {
            setData(value)
        })
    }, [res])
    
    return (
    <>
        <StudyBanner
        logo=""
        category="카테고리"
        title={data.studyName}
        des={data.introduce}
        hashtag={data.tag}
        member={data.membersLimit}
        link={data.chatLink}
        />
        <StudyComponents />
    </>
    );
}