import styled from '@emotion/styled';
import { StudyBanner } from '../../components/StudyMain/StudyBanner';
import { COLOR } from '../../constants';
import { NoticeTitle } from '../../components/Notice/NoticeTitle';
import { Button } from '../../components/Notice/Button';

export default function NoticePage(): JSX.Element {
  return (
    <>
      <StudyBanner
        logo="../images/StudyLogo.png"
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
          <p className="category">일반공지</p>
          <h4>스터디 공지사항입니다. </h4>
        </div>
        <div className="editor-content">
          <p>매주 월,목 13:00 프로젝트 회의를 진행합니다.</p>
        </div>
        <div className="btn-group">
          <Button href="/notice" text="목록" className="list" />
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
