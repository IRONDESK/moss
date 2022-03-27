import styled from '@emotion/styled';
import Link from 'next/link';

export const Header = () => {
  return (
    <HeaderCont>
      <LeftHeader>
        <button>
          <Link href="/">
            <Logo src="/images/header_logo.svg" alt="헤더로고" />
          </Link>
        </button>
        <h1>모여라 스터디</h1>
      </LeftHeader>
      <RightHeader>
        <Link href="/join">
          <button>회원가입</button>
        </Link>
        <Link href="/login">
          <button>로그인</button>
        </Link>
      </RightHeader>
      <Link href="/join">
        <Mypage src="images/login.svg" alt="로그인 아이콘" />
      </Link>
    </HeaderCont>
  );
};
const HeaderCont = styled.header`
  display: flex;
  padding: 0 2.5rem;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 440px) {
    height: 60px;
    padding: 0 1rem;
  } ;
`;

const LeftHeader = styled.article`
  display: flex;
  align-items: center;
  gap: 10px;
  h1 {
    font-weight: 400;
  }
  @media (max-width: 440px) {
    h1 {
      position: absolute;
      width: 1px;
      height: 1px;
      clip: rect(0 0 0 0);
      overflow: hidden;
    }
  }
`;

const RightHeader = styled.article`
  display: flex;
  gap: 8px;
  button {
    border: 1px solid #e7e6e2;
    padding: 9px 20px;
    width: 100px;
    font-size: 14px;
    line-height: 14px;
    &:nth-child(1) {
      border: 1px solid #34c88a;
      color: #34c88a;
    }
  }
  @media (max-width: 440px) {
    display: none;
  }
`;
const Logo = styled.img`
  width: 10rem;
  height: 32px;
  @media (max-width: 440px) {
    width: 6rem;
  }
`;

const Mypage = styled.img`
  display: none;
  @media (max-width: 440px) {
    display: block;
    width: 2rem;
  }
`;
