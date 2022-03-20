import styled from '@emotion/styled';
import { COLOR } from '../../constants';

export const StudyBanner = (props: {
  logo: string;
  category: string;
  title: string;
  des: string;
  hashtag: string;
  member: number;
  link: string;
}) => {
  return (
    <Banner>
      <StudyIntro>
        <StudyImg src={props.logo} alt="study-logo" />
        <StudyDescription>
          <StudyDetail>
            <Category>{props.category}</Category>
            <Title>{props.title}</Title>
            <Des>{props.des}</Des>
          </StudyDetail>
          <Join>
            <Member>{props.member}/10</Member>
            <StudyBtn href={props.link}>스터디 신청하기</StudyBtn>
          </Join>
        </StudyDescription>
      </StudyIntro>
      <Hashtag>{props.hashtag}</Hashtag>
    </Banner>
  );
};

const Banner = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: url('/images/background.png');
  background-size: cover;
  padding: 24px 0 24px 24px;
`;

const StudyIntro = styled.section`
  width: 700px;
  height: 272px;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
`;

const StudyImg = styled.img`
  width: 102px;
  height: 102px;
  margin: 40px 48px 130px 0;
`;
const StudyDescription = styled.article`
  width: 100%;
`;

const StudyDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;
`;

const Category = styled.div`
  width: 72px;
  height: 22px;
  padding: 6px 12px;
  margin-bottom: 11px;
  background-color: rgba(0, 0, 0, 0.2);
  font-family: 'Noto Sans KR';
  font-size: 12px;
  color: #fff;
  border-radius: 40px;
`;
const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 40px;
  line-height: 50px;
  font-weight: 700;
`;

const Des = styled.div`
  font-family: 'Noto Sans KR';
  width: 246px;
`;

const Join = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 9px;
`;

const Member = styled.span`
  position: relative;
  margin-top: 5px;
  padding-left: 24px;
  font-size: 0.9rem;
  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 0;
    background: url('/images/login.svg');
    background-position: top;
    background-size: 16px;
    width: 15px;
    height: 15px;
  }
`;
const StudyBtn = styled.a`
  width: 260px;
  height: 48px;
  background-color: ${COLOR.main};
  color: #fff;
  text-align: center;
  padding-top: 16px;
  box-sizing: border-box;
`;
const Hashtag = styled.div`
  margin-right: 32px;
  padding: 3px 10px;
  background-color: #fff;
  color: #767676;
  font-size: 14px;
  border-radius: 10px;
`;
