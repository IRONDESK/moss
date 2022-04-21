import styled from '@emotion/styled';
import { useState } from 'react';
import { COLOR } from '../../constants';
import { JoinStudyModal } from '../JoinStudy/JoinStudyModal';

interface bannerType {
  logo?: string;
  category: string;
  title: string;
  des: string;
  hashtag: string;
  members?: number;
  memberlimit: number;
  link: string;
}

export const StudyBanner = ({
  logo = "/images/StudyLogo.png",
  category, title, des, hashtag, members, memberlimit, link,
}: bannerType) => {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal((prev) => !prev);
  return (
    <Banner>
      <StudyIntro>
        <StudyImg src={logo} alt="study-logo" />
        <StudyDescription>
          <StudyDetail>
            <TagWrap>
              <Category>{category}</Category>
              <Hashtag>{hashtag}</Hashtag>
            </TagWrap>
            <Title>{title}</Title>
            <Des>{des}</Des>
          </StudyDetail>
          <Join>
            <Member>{members}/{memberlimit}</Member>
            <StudyBtn onClick={openModal} href={link}>
              스터디 신청하기
            </StudyBtn>
          </Join>
        </StudyDescription>
      </StudyIntro>
      <JoinStudyModal modal={modal} setModal={setModal} />
    </Banner>
  );
};

const Banner = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: url('/images/background.png');
  background-size: cover;
  padding: 24px;
  @media (max-width: 1024px) {
    flex-direction: column;
  };
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
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 18px;
    flex-direction: column;
  };
`;

const StudyImg = styled.img`
  width: 102px;
  height: 102px;
  margin: 40px 48px 130px 0;
  @media (max-width: 1024px) {
    margin: 0;
  };
`;
const StudyDescription = styled.article`
  width: 100%;
`;

const StudyDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;
  @media (max-width: 1024px) {
    margin: 19px 0;
    align-items: center;
  };
`;

const TagWrap = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    gap: 8px;
  };
`;
const Category = styled.div`
  width: 81px;
  height: 22px;
  padding: 6px 12px;
  margin-bottom: 11px;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 14px;
  text-align: center;
  border-radius: 40px;
`;
const Hashtag = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 22px;
  margin: 24px;
  padding: 6px 12px;
  background-color: #fff;
  color: #767676;
  font-size: 14px;
  text-align: center;
  border-radius: 40px;
  @media (max-width: 1024px) {
    margin: 0;
    position: static;
    border: 1px solid ${COLOR.boxBorder};
  };
`;
const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 40px;
  line-height: 50px;
  font-weight: 700;
  @media (max-width: 1024px) {
    margin: 7px 0;
    font-size: 29px;
    line-height: 32px;
    text-align: center;
    word-break: keep-all;
  };
`;

const Des = styled.div`
  font-family: 'Noto Sans KR';
  width: 246px;
  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
    line-height: 1.2rem;
    word-break: keep-all;
  };
`;

const Join = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 9px;
  @media (max-width: 1024px) {
    margin: 0;
    flex-direction: column;
    gap: 9px;
  };
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