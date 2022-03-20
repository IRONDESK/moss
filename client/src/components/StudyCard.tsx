import styled from '@emotion/styled';
import Link from 'next/link';
import { COLOR } from "../constants";

interface CardProps {
  category: string;
  title: string;
  hashtag: string;
  member: number;
  link: string;
  leader: boolean;
}

export const StudyCard = ({
  category,
  title,
  hashtag,
  member,
  link,
  leader = false,
}: CardProps) => {
  return (
    <CardWrap>
      <Thumbnail>
        <Header>
          <Category>{category}</Category>
          <Title>{title}</Title>
          <Hashtag>{hashtag}</Hashtag>
        </Header>
      </Thumbnail>
      <Join>
        <Detail>
          <MemberIcon src='/images/login.svg' />
          <Member>{member}/10</Member>
          <LeaderTag default={leader}>스터디장</LeaderTag>
        </Detail>

        <Link href="/study">
          <StudyBtn href={link}>
            <EnterImg src="/images/ArrowGreen.svg" alt="스터디 자세히 보기" />
          </StudyBtn>
        </Link>
      </Join>
    </CardWrap>
  );
};

const CardWrap = styled.article`
  padding: 16px;
  border: 2px solid #eeeeee;
  box-sizing: border-box;
`;

const Thumbnail = styled.div`
  position: relative;
  height: 180px;
  background: skyblue;
`;

const Header = styled.div`
  position: absolute;
  padding: 14px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Category = styled.span`
  display: inline-block;
  padding: 4px 8px;
  background-color: rgba(0, 0, 0, 0.2);
  font-family: 'Noto Sans KR';
  font-size: 0.8rem;
  color: #fff;
  border-radius: 40px;
  box-sizing: border-box;
  z-index: 1;
`;
const Title = styled.h3`
  position: absolute;
  bottom: calc(14px + 1rem);
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
`;
const Hashtag = styled.p`
  position: absolute;
  bottom: 14px;
  font-size: 0.85rem;
  font-weight: 300;
  color: #fff;
`;

const Join = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 9px;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;
const MemberIcon = styled.img`
  width: 17px;
`;
const Member = styled.span`
  padding-top: 6px;
  font-size: 0.9rem;
`;
const LeaderTag = styled.div<{default: boolean}>`
  display: ${props => props.default ? 'block' : 'none'};
  padding: 4px 7px 1px 19px;
  font-size: 0.85rem;
  background-color: #EB5757;
  color: #fff;
  border-radius: 20px;
  box-sizing: border-box;
  background-image: url('/images/goal.svg');
  background-size: 13px;
  background-position: 5px;
  background-repeat: no-repeat;
`;
const StudyBtn = styled.a`
  display: flex;
  flex-direction: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: ${COLOR.white};
  border: 1px solid rgba(52, 200, 138, 0.4);
`;
const EnterImg = styled.img`
  width: 17px;
`;
