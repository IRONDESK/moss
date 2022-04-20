import styled from '@emotion/styled';
import { User } from '@prisma/client';
import Link from 'next/link';
import useUser from 'src/libs/client/useUser';
import useSWR from 'swr';
import { COLOR } from '../../constants';
import { MemberData } from '../../types/Member';

interface IMember {
  ok: boolean;
  allUsers: User[];
}

export const Member = () => {
  const MemberData: MemberData[] = [
    { id: 1, name: '손수철', image: '/images/profile.svg' },
    { id: 2, name: '박유진', image: '/images/profile.svg' },
    { id: 3, name: '김준우', image: '/images/profile.svg' },
    { id: 4, name: '최성이', image: '/images/profile.svg' },
    { id: 5, name: '심영은', image: '/images/profile.svg' },
    { id: 6, name: '강혜진', image: '/images/profile.svg' },
  ];

  const { data } = useSWR<IMember>('/api/users');
  console.log(data);

  //
  return (
    <Container>
      <Title>스터디원</Title>
      <SubTitle>People</SubTitle>
      <Contents>
        <MemberLength>
          <strong>{MemberData.length}</strong>/10
        </MemberLength>
        <MemberDetail>
          {data?.allUsers?.map((member) => (
            <MemberList key={member.id}>
              <Link href={`/users/profile/${member.id}`}>
                <a>
                  <Img src="/images/profile.svg" alt="스터디원 이미지" />
                  <p>{member.username}</p>
                </a>
              </Link>
            </MemberList>
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
