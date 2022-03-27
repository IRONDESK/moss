import styled from '@emotion/styled';
import Link from 'next/link';

import { StudyBanner } from '../../components/StudyMain/StudyBanner';
import { Button } from '../../components/Notice/Button';
import { NoticeTitle } from '../../components/Notice/NoticeTitle';
import { COLOR } from '../../constants';

export default function NoticePage(): JSX.Element {
  return (
    <>
      <StudyBanner
        logo="./images/StudyLogo.png"
        category="카테고리"
        title="React 스터디"
        des="혼자 코딩하기 싫은 개발자들 모여라! 누구나 자유롭게 모여서 각자 코딩해요"
        hashtag="#개발"
        member={7}
        link="#"
      />

      <NoticeTitle />

      <Table>
        <caption>
          스터디 공지사항 번호, 말머리, 제목, 작성일, 등록일시 정보 제공
        </caption>
        <colgroup>
          <col className="col-num" />
          <col className="col-category " />
          <col />
          <col className="col-writer" />
          <col className="col-date" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">말머리</th>
            <th scope="col">제목</th>
            <th scope="col">작성일</th>
            <th scope="col">등록일시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2</td>
            <td>장소</td>
            <td className="notice-title">
              <Link href="/notice/view">스터디 공지사항입니다</Link>
            </td>
            <td>손수철</td>
            <td>2021.11.30 00:00</td>
          </tr>
          <tr>
            <td>1</td>
            <td>장소</td>
            <td className="notice-title">
              <Link href="/notice/view">스터디 공지사항입니다</Link>
            </td>
            <td>손수철</td>
            <td>2021.11.30 00:00</td>
          </tr>
        </tbody>
      </Table>
      <Page>
        <ol>
          <li>
            <a href="#" className="active">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
        </ol>
      </Page>
      <BtnGroup>
        <Button text="글작성" href="/notice/write" className="write" />
      </BtnGroup>
    </>
  );
}

const Table = styled.table`
  font-family: 'Noto Sans KR';
  width: 100%;

  caption {
    overflow: hidden;
    position: static;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  }
  .col-num {
    width: 10rem;
  }
  .col-category {
    width: 10rem;
  }
  .col-writer {
  }
  .col-date {
    width: 12rem;
  }

  th {
    color: ${COLOR.main};
    border-bottom: 1px solid ${COLOR.main};
    padding: 1rem;
    font-weight: bold;
    font-size: 14px;
  }
  tr {
    transition: all 0.3s;
    &:hover {
      background: #f9f9f9;
    }
  }
  td {
    border-bottom: 1px solid #ddd;
    padding: 0.4rem;
    text-align: center;
    &.notice-title {
      text-align: left;
      a {
        display: block;
        padding: 0.8rem;
      }
    }
  }
`;

const Page = styled.div`
  margin: 2rem 0;
  position: relative;
  ol {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: #999;
    li {
      a {
        padding: 0.3rem 0.3rem;
        border-bottom: 2px solid transparent;
        &.active {
          font-weight: bold;
          color: #000;
          border-bottom: 2px solid #000;
        }
      }
    }
  }
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;
