import styled from '@emotion/styled';
import { COLOR } from '../../constants/index';
import { UserInfo } from './UserInfo';
import { MyStudyChart } from './MyStudyChart';
import useLoggedIn from 'src/libs/client/useLoggedIn';

export const MyPageBanner = () => {
  const { username } = useLoggedIn();

  return (
    <MyPageBanners>
      <UserInfo image="./images/studyLogo.png" name={username} />
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
