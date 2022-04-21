import styled from '@emotion/styled';
import Link from 'next/link';
import { IUser } from 'src/libs/client/useUser';
import useSWR from 'swr';
import { COLOR } from '../../constants';

export const Member = () => {
  const { data } = useSWR<IUser>('/api/users');
  const maxNumber = 10;
  //
  return (
    <Container>
      <Title>스터디원</Title>
      <SubTitle>People</SubTitle>
      <Contents>
        <MemberLength>
          <strong>{data?.userCount}</strong>/{maxNumber}
        </MemberLength>
        <MemberDetail>
          {data?.users?.map((member) => (
            <Link key={member.id} href={`/users/profile/${member.id}`}>
              <a>
                <MemberList>
                  <Img src="/images/profile.svg" alt="스터디원 이미지" />
                  <p>{member.username}</p>
                </MemberList>
              </a>
            </Link>
          ))}
        </MemberDetail>
      </Contents>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  padding: 48px 24px 16px;
  border: 1px solid ${COLOR.boxBorder};
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 32px;
    width: 40px;
    height: 48px;
    background: #5885f8 url('/images/members.svg') no-repeat 50% 70%;
  }
`;

const Title = styled.h2`
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

const Contents = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  padding: 48px 24px 16px;
  display: flex;
  gap: 60px;
  @media (max-width: 1024px) {
    position: inherit;
    padding: 0;
    flex-direction: column;
    gap: 3px;
  } ;
`;

const MemberLength = styled.p`
  position: relative;
  width: 100px;
  margin: 77px 8px;
  padding-left: 29px;
  line-height: 31px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 27px;
    height: 29px;
    background: url('/images/login.svg');
    background-size: cover;
    background-position-x: -3px;
  }
  strong {
    font-weight: 700;
    font-size: 1.3rem;
  }
  @media (max-width: 1024px) {
    margin: 5px 8px;
  } ;
`;

const MemberDetail = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  @media (max-width: 1024px) {
    justify-content: space-evenly;
  } ;
`;

const MemberList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  margin-bottom: 6px;
  width: 64px;
`;
