import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { StudyBanner } from '../../../components/StudyMain/StudyBanner';
import { COLOR } from '../../../constants';
import { NoticeTitle } from '../../../components/Notice/NoticeTitle';
import { Button } from '../../../components/Notice/Button';
import { useRouter } from 'next/router';
import view from '../../api/notice/view';
import useSWR from 'swr';

interface NoticeData {
  category: string;
  title: string;
  content: string;
}

export default function NoticePage() {
  const router = useRouter();
  const { id } = router.query;

  const [notice, setNotice] = useState<NoticeData[]>([
    {
      category: '',
      title: '',
      content: '',
    },
  ]);

  const res = view(id);
  useEffect(() => {
    setNotice(res);
  }, [res]);

  console.log(notice);

  return (
    <>
      <StudyBanner
        logo="../../images/StudyLogo.png"
        category="카테고리"
        title="React 스터디"
        des="혼자 코딩하기 싫은 개발자들 모여라! 누구나 자유롭게 모여서 각자 코딩해요"
        hashtag="#개발"
        member={7}
        link="#"
      />

      <NoticeTitle />

      <ViewSection>
        <div className="title">
          <p className="category">{notice?.noticeData?.category}</p>
          <h4>{notice?.noticeData?.title}</h4>
        </div>
        <div className="editor-content">
          <p>{notice?.noticeData?.content}</p>
        </div>
        <div className="btn-group">
          <Button href="/study/notice" text="목록" className="list" />
          <Button href="#" text="수정" className="modify" />
          <Button href="#" text="삭제" className="delete" />
        </div>
      </ViewSection>
    </>
  );
}

const ViewSection = styled.section`
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  .title {
    padding: 16px 24px;
    h4 {
      font-weight: bold;
      font-size: 24px;
    }
    .category {
      display: inline-block;
      font-family: 'Gmarket Sans';
      background: ${COLOR.main};
      color: #fff;
      font-weight: normal;
      padding: 4px 12px;
      border-radius: 20px;
      margin-bottom: 8px;
    }
  }

  .editor-content {
    border: 1px solid ${COLOR.gray};
    border-width: 1px 0;
    padding: 24px;
    min-height: 200px;
  }

  .btn-group {
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
    gap: 8px;
  }
`;
function noticeId(noticeId: any) {
  throw new Error('Function not implemented.');
}
