import styled from '@emotion/styled';
import useUser from 'src/libs/client/useUser';

export const UserInfo = () => {
  const { loggedInUser } = useUser();
  return (
    <UserInfos>
      {loggedInUser?.avatar ? (
        <UserImg
          src={`https://imagedelivery.net/akzZnR6sxZ1bwXZp9XYgsg/${loggedInUser?.avatar}/avatar`}
          alt="user-image"
        />
      ) : (
        <UserImg src="./images/studyLogo.png" alt="user-image" />
      )}
      <p className="title">할수있다!</p>
      <p className="user-name">{loggedInUser?.username}</p>
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
