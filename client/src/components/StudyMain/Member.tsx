import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { MemberData } from '../../types/Member';

export const Member = () => {
  const MemberData: MemberData[] = [
    { id: 1, name: '손수철', image: '/images/profile.svg' },
    { id: 2, name: '박유진', image: '/images/profile.svg' },
    { id: 3, name: '김준우', image: '/images/profile.svg' },
    { id: 4, name: '최성이', image: '/images/profile.svg' },
    { id: 5, name: '심영은', image: '/images/profile.svg' },
    { id: 6, name: '강혜진', image: '/images/profile.svg' },
  ];
  return (
    <Container>
      <MemberInfo>
        <Title>스터디원</Title>
        <p className="etitle">People</p>
        <p className="member-length">{MemberData.length}/10</p>
      </MemberInfo>
      <MemberDetail>
        {MemberData.map((member) => {
          return (
            <MemberList key={member.id}>
              <Img src={member.image} alt="스터디원 이미지" />
              <p>{member.name}</p>
            </MemberList>
          );
        })}
      </MemberDetail>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 268px;
  border: 1px solid #dddd;
  display: flex;
  align-items: center;
  @media (max-width: 640px) {
    flex-direction: column;
  };
`;

const MemberInfo = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  gap: 12px;
  .etitle {
    color: ${COLOR.grayText};
  }
  .member-length {
    display:flex;
    position: relative;
    margin: 10px 0 0 20px;
    &::before {
    content: '';
    display: block;
    position: absolute;
    left:-20px;
    top: -5px;
    background: url('/images/icons/memberShape.png');
    background-size: cover;
    width: 17px;
    height: 19px;
  }
  }
`;

const Title = styled.h2`
  width: 150px;
  font-size: 24px;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0px;
    background: url('/images/icons/memberBar.png');
    background-size: cover;
    width: 40px;
    height: 48px;
  }
`;

const MemberDetail = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
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
