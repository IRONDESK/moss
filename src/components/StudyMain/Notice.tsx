import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import Link from 'next/link';
import { INotice, ITotalNoticeRes } from '../../types/Notice';
import useSWR from 'swr';
import { useRouter } from 'next/router';

export const Notice = ({ studyId }: INotice) => {
  //GET
  const { data } = useSWR<ITotalNoticeRes>(`/api/notice/${studyId}/total`);

  //페이지이동
  const router = useRouter();
  const handleClick = () => {
    if (data?.ok) {
      router.push(`/study/${studyId}/notice`);
    }
  };
  //
  return (
    <Container>
      <Title>공지사항</Title>
      <SubTitle>Notice</SubTitle>
      <article>
        <ul>
          {data?.allNotice?.map((data) => {
            return (
              <NoticeList key={data.id}>
                <NoticeTitle>
                  <Tag>{data.category}</Tag>
                  <Link href={`/study/${data.studyId}/notice/${data.id}`}>
                    <a>{data.title}</a>
                  </Link>
                </NoticeTitle>
                <CreatedDate>{data.createdAt}</CreatedDate>
              </NoticeList>
            );
          })}
        </ul>
      </article>
      <Button onClick={handleClick}>더보기</Button>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  padding: 48px 24px 16px;
  min-height: 250px;
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
`;

const NoticeList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3px;
  padding: 12px 8px;
  border-bottom: 1px solid ${COLOR.ListBorder};
  font-family: 'Noto Sans KR';
  font-size: 14px;
  &:last-child {
    border: none;
  }
`;

const NoticeTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  white-space: nowrap;
  a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Tag = styled.span`
  padding: 4px 10px;
  border: 1px solid ${COLOR.gray};
  border-radius: 50px;
  color: ${COLOR.black};
`;

const CreatedDate = styled.span`
  color: ${COLOR.deepGray};
`;

const Button = styled.button`
  position: absolute;
  top: 57px;
  right: 33px;
  padding: 10px 30px 8px;
  border: 1px solid ${COLOR.main};
  border-radius: 40px;
  color: ${COLOR.main};
  font-size: 14px;
`;
