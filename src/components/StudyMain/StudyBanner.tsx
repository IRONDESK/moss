import styled from '@emotion/styled';
import { useState } from 'react';
import { COLOR } from '../../constants';
import { ApplyStudyModal } from './ApplyStudyModal';
import useUser from 'src/libs/client/useUser';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { IStudyResponse } from 'src/types/study';

export const StudyBanner = () => {
  const router = useRouter();
  const { studyId } = router.query;
  const StudyId = Number(studyId);
  const { isLoggedIn, loggedInUser } = useUser();

  const { data } = useSWR<IStudyResponse>(`/api/study/${studyId}`);
  const logoImg = `https://imagedelivery.net/akzZnR6sxZ1bwXZp9XYgsg/${data?.study?.image}/avatar`;

  const [modal, setModal] = useState(false);
  const openModal = () => setModal((prev) => !prev);

  return (
    <Banner>
      <StudyIntro>
        {data?.study ? (
          <StudyImg src={logoImg} alt="study-logo" />
        ) : (
          <StudyImg src={'/images/StudyLogo.svg'} alt="study-logo" />
        )}
        <StudyDescription>
          <StudyDetail>
            <TagWrap>
              <Category>{data?.study?.category}</Category>
              <Hashtag>{data?.study?.tag}</Hashtag>
            </TagWrap>
            <Title>{data?.study?.studyName}</Title>
            <Des>{data?.study?.introduce}</Des>
          </StudyDetail>
          <Join>
            <Member>
              {data ? data?.study?.joinMember?.length + 1 : 0} / {data?.study?.membersLimit}
            </Member>
            {data ? (
            data?.study?.joinMember?.indexOf(loggedInUser?.userId) !== -1 ? (
              <StudyBtn
                joincheck={data?.study?.joinMember?.indexOf(loggedInUser?.userId) !== -1}
                href={String(data?.study?.chatLink)}
              >
                오픈채팅 참여하기
              </StudyBtn>
            ) : (
              <StudyBtn
                joincheck={data?.study?.joinMember?.indexOf(loggedInUser?.userId) !== -1}
                onClick={openModal}
              >
                스터디 신청하기
              </StudyBtn>
            ) )
            : ""
            }
          </Join>
        </StudyDescription>
      </StudyIntro>
      <ApplyStudyModal
        modal={modal}
        setModal={setModal}
        studyid={StudyId}
        joinMsg={data?.study?.joinMsg}
        joinMember={data?.study?.joinMember}
      />
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
  } ;
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
  } ;
`;

const StudyImg = styled.img`
  border-radius: 100%;
  width: 102px;
  height: 102px;
  margin: 40px 48px 130px 0;
  @media (max-width: 1024px) {
    margin: 0;
  } ;
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
  } ;
`;

const TagWrap = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    gap: 8px;
  } ;
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
  } ;
`;
const Title = styled.h2`
  width: 470px;
  margin-bottom: 16px;
  font-size: 38px;
  line-height: 45px;
  font-weight: 700;
  @media (max-width: 1024px) {
    margin: 7px 0;
    font-size: 29px;
    line-height: 32px;
    text-align: center;
    word-break: keep-all;
  } ;
`;

const Des = styled.div`
  font-family: 'Pretendard';
  width: 246px;
  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
    line-height: 1.2rem;
    word-break: keep-all;
  } ;
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
  } ;
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
const StudyBtn = styled.a<{ joincheck: boolean }>`
  display: flex;
  padding-top: 2px;
  width: 260px;
  height: 48px;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: 400;
  background-color: ${(props) => (props.joincheck ? COLOR.point : COLOR.main)};
  color: ${(props) => (props.joincheck ? COLOR.black : COLOR.white)};
`;
