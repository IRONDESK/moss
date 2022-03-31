import styled from '@emotion/styled';
import Link from 'next/link';
import { COLOR } from '../../constants/index';
import { UserInfo } from './UserInfo';
import { MyStudyChart } from './MyStudyChart';
export const MyPageBanner = () => {
  return (
    <MyPageBanners>
      <UserInfo image="./images/studyLogo.png" name="김이끼" />
      <MyStudyChart percent={50} attendance={3} month={4} studyhour={762} />
    </MyPageBanners>
  );
};

const MyPageBanners = styled.section`
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${COLOR.main};
  background-size: cover;
  padding: 51px 48px;
`;
