import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import Link from 'next/link';
import { NoticeData } from '../../types/Notice';

export const Notice = () => {

  const noticeData: NoticeData[] = [
    {
      id: 1,
      tag: "일반공지",
      title: "스터디 공지사항입니다.",
      author: "최성이",
      createddate: "2022.04.01"
    },
    {
      id: 2,
      tag: "미션",
      title: "아침 4시 기상 도전!",
      author: "강혜진",
      createddate: "2022.03.25"
    },
    {
      id: 3,
      tag: "미션",
      title: "백엔드 모여라!~!",
      author: "김준우",
      createddate: "2022.03.22"
    },
    {
      id: 4,
      tag: "일반공지",
      title: "스터디 공지사항입니다.",
      author: "최성이",
      createddate: "2022.03.01"
    },       
  ]

  return (
    <Container>
      <Title>공지사항</Title>
      <SubTitle>Notice</SubTitle>
      <article>
        <ul>
          {noticeData.slice(0, 3).map((notice) => {
            return (
              <NoticeList key={notice.id}>
                <NoticeTitle>
                  <Tag>{notice.tag}</Tag>
                  <Link href={`/study/notice/${notice.id}`}>
                    <a>{notice.title}</a>  
                  </Link>
                </NoticeTitle>
                <CreatedDate>{notice.createddate}</CreatedDate>
              </NoticeList>
            )
          })}
        </ul>
      </article>
      <Link href="/study/notice">
        <Button>더보기</Button>
      </Link>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  padding: 48px 24px 16px;
  margin: 16px 0;
  width: 496px;
  border: 1px solid ${COLOR.boxBorder};
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 32px;
    width: 40px;
    height: 48px;
    background: ${COLOR.point} url('/images/notice.svg') no-repeat 50% 70%;
  }
`;

const Title = styled.h2`
  position: relative;
  margin: 16px 8px 0;
  color: ${COLOR.black};
  font-size: 24px;
`;

const SubTitle = styled.span`
  margin: 0 8px;
  color: ${COLOR.grayText};
  font-size: 16px;
  line-height: 24px;
`

const NoticeList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px;
  border-bottom: 1px solid ${COLOR.ListBorder};
  font-family: 'Noto Sans KR';
  font-size: 14px;
  &:last-child {
    border: none;
  }
`

const NoticeTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Tag = styled.span`
  padding: 4px 12px;
  border: 1px solid ${COLOR.gray};
  border-radius: 50px;
  color: ${COLOR.black};
`

const CreatedDate = styled.span`
  color: ${COLOR.deepGray};
`

const Button = styled.a`
  position: absolute;
  top: 57px;
  right: 33px;
  padding: 10px 30px 8px;
  border: 1px solid ${COLOR.main};
  border-radius: 40px;
  color: ${COLOR.main};
  font-size: 14px;
`;
