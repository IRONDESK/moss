import styled from '@emotion/styled';
import { COLOR } from '../../constants/index';
import { UserInfo } from './UserInfo';
import { MyStudyChart } from './MyStudyChart';

export const MyPageBanner = () => {
  return (
    <MyPageBanners>
      <UserInfo />
      <MyStudyChart />
    </MyPageBanners>
  );
};

const MyPageBanners = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${COLOR.main};
  padding: 51px 48px;

  @media (max-width: 1024px) {
    position: relative;
  }
`;
