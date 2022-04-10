import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import useLoggedIn from 'src/libs/client/useLoggedIn';
import { COLOR } from '../constants';

export const Banner = () => {
  const router = useRouter();
  const data = useLoggedIn();

  const onClick = () => {
    if (!data.ok) {
      return router.push('/login'); //로그아웃인 경우
    }
    return router.push('/my-page'); //로그인된 경우
  };

  return (
    <BannerPage>
      <h2>Study with MOSS</h2>
      <h3>모여라 스터디!</h3>
      <div className="banner-des">
        <p>혼자 공부하기 힘든 사람 모여라!</p>
        <p>서로 서로자극이 되어 함께 성장해요!</p>
      </div>
      <button onClick={onClick}>시작하기</button>
    </BannerPage>
  );
};

const BannerPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 0;
  h2 {
    margin-bottom: 24px;
    color: ${COLOR.main};
    font-size: 32px;
    font-weight: 700;
  }
  h3 {
    margin-bottom: 24px;
    font-size: 50px;
    color: ${COLOR.black};
  }
  .banner-des {
    font-family: 'Noto Sans KR';
    line-height: 23px;
    color: ${COLOR.deepGray};
  }
  button {
    width: 260px;
    height: 48px;
    margin-top: 37px;
    font-size: 16px;
    background-color: ${COLOR.main};
    color: ${COLOR.white};
    &:hover {
      background-color: ${COLOR.buttonHover};
    }
  }
`;
