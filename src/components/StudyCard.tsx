import styled from '@emotion/styled';
import Link from 'next/link';
import { COLOR } from '../constants';

interface CardProps {
  category: string|undefined;
  title: string|undefined;
  hashtag: string|undefined;
  members: number|undefined;
  membersLimit: number|undefined;
  link: string;
  leader: boolean|undefined;
}

export const StudyCard = ({
  category,
  title,
  hashtag,
  members,
  membersLimit,
  link,
  leader = false,
}: CardProps) => {
  return (
    <CardWrap>
      <Thumbnail>
        <Header>
          <StudyTag>
            <Category>{category}</Category>
            <LeaderTag default={leader}>
              <img src="/images/crown.svg" alt="스터디장" />
            </LeaderTag>
          </StudyTag>
          <Title>{title}</Title>
          <Hashtag>{hashtag}</Hashtag>
        </Header>
      </Thumbnail>
      <Join>
        <Detail>
          <MemberIcon src="/images/login.svg" />
          <Member>{members}/{membersLimit}</Member>
        </Detail>

        <Link href={link}>
          <StudyBtn>
            <EnterImg src="/images/ArrowGreen.svg" alt="스터디 자세히 보기" />
          </StudyBtn>
        </Link>
      </Join>
    </CardWrap>
  );
};

const CardWrap = styled.article`
  background: #fff;
  padding: 16px;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.05);
`;

const Thumbnail = styled.div`
  position: relative;
  height: 180px;
  background: skyblue;
`;

const Header = styled.div`
  position: absolute;
  padding: 10px 14px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const StudyTag = styled.div`
  display: flex;
  height: 31px;
  justify-content: space-between;
  align-items: center;
`;
const Category = styled.span`
  display: inline-block;
  padding: 6px 12px;
  background-color: rgba(0, 0, 0, 0.2);
  font-family: 'Noto Sans KR';
  font-size: 0.8rem;
  color: #fff;
  border-radius: 40px;
  box-sizing: border-box;
  z-index: 1;
`;
const LeaderTag = styled.div<{ default: boolean }>`
  display: ${(props) => (props.default ? 'flex' : 'none')};
  justify-content: center;
  background-color: ${COLOR.main};
  width: 31px;
  height: 31px;
  font-size: 0.85rem;
  border-radius: 100%;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.1);
  img {
    width: 21px;
  }
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
