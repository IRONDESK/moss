import styled from '@emotion/styled';
import * as d3 from 'd3';
import { COLOR } from '../../constants';

export const UserInfo = (props: { image: string; name: string }) => {
  return (
    <UserInfos>
      <UserImg src="./images/studyLogo.png" alt="user-image" />
      <p className="title">할수있다!</p>
      <p className="user-name">{props.name}</p>
    </UserInfos>
  );
};

const UserInfos = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 37px;
  .title {
    font-size: 40px;
    line-height: 50px;
    font-weight: 700;
    color: #fff;
  }
  .user-name {
    font-size: 40px;
    line-height: 50px;
    color: #fff;
  }
`;

const UserImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
`;
