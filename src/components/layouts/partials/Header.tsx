import styled from '@emotion/styled';
import Link from 'next/link';
import useUser from 'src/libs/client/useUser';
import { COLOR } from '../../../constants';

export const Header = () => {
  const { username, loggedIn } = useUser();

  return (
    <HeaderCont className="max-width" id="header">
      <div className="left">
        <Link href="/">
          <a>
            <h1>
              <img src="/images/header_logo.svg" alt="MOSS" />
              <strong>모여라 스터디</strong>
            </h1>
          </a>
        </Link>
      </div>
      <div className="right">
        {!loggedIn ? (
          <>
            <Link href="/join" passHref>
              <a className="join">회원가입</a>
            </Link>

            <Link href="/login" passHref>
              <a className="login">로그인</a>
            </Link>
          </>
        ) : (
          <>
            <Link href="/my-page" passHref>
              <a className="mypage">{username}님의 마이페이지</a>
            </Link>
            <Link href="/api/users/login" passHref>
              <a className="logout">로그아웃</a>
            </Link>
          </>
        )}
      </div>
    </HeaderCont>
  );
};
const HeaderCont = styled.header`
  display: flex;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 640px) {
    height: 60px;
  }

  .left {
    h1 {
      display: flex;
      align-items: center;
      gap: 10px;
      strong {
        font-weight: 400;
      }
    }

    @media (max-width: 640px) {
      img {
        height: 30px;
      }
      strong {
        position: absolute;
        width: 1px;
        height: 1px;
        clip: rect(0 0 0 0);
        overflow: hidden;
      }
    }
  }
  .right {
    display: flex;
    gap: 8px;
    a {
      border: 1px solid #e7e6e2;
      padding: 9px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      font-size: 14px;
      line-height: 14px;
      transition: all 0.2s;
      &:hover {
        background: #eee;
      }
      &:not(.join) {
        &::before {
          content: '';
          width: 24px;
          height: 24px;
          transition: all 0.2s;
        }
      }
      &.login,
      &.mypage {
        border: 1px solid ${COLOR.main};
        color: ${COLOR.main};
        &:hover {
          background: ${COLOR.main};
          color: #fff;
        }
      }
      &.login {
        &::before {
          background: url(../../images/login.svg) no-repeat 50% 50% / 20px;
        }
        &:hover {
          &::before {
            background: url(../../images/login_white.svg) no-repeat 50% 50% /
              20px;
          }
        }
      }
      &.logout::before {
        background: url(../../images/icons/logout.svg) no-repeat 50% 50% / 20px;
      }
      &.mypage {
        &::before {
          background: url(../../images/icons/mypage.svg) no-repeat 50% 50% /
            22px;
        }
        &:hover {
          &::before {
            background: url(../../images/mypage_white.svg) no-repeat 50% 50% /
              22px;
          }
        }
      }
      @media (max-width: 640px) {
        &.join {
          display: none;
        }
        &:not(.join) {
          padding: 0;
          width: 40px;
          height: 40px;
          font-size: 10px;
          position: relative;
          border: none;
          border-radius: 50%;
          overflow: hidden;
        }
        &:not(.join) {
          &::before {
            position: absolute;
            top: 0;
            left: 0;
            width: 40px;
            height: 40px;
          }
        }
        &.login {
          &::before {
            background: #fff url(../../images/login.svg) no-repeat 50% 50% /
              24px;
          }
          &:hover::before {
            background: ${COLOR.main} url(../../images/login_white.svg)
              no-repeat 50% 50% / 24px;
          }
        }

        &.mypage {
          &::before {
            background: #fff url(../../images/icons/mypage_color.svg) no-repeat
              50% 50% / 28px;
          }
          &:hover::before {
            background: ${COLOR.main} url(../../images/mypage_white.svg)
              no-repeat 50% 50% / 28px;
          }
        }
        &.logout {
          &::before {
            background: #fff url(../../images/icons/logout.svg) no-repeat 50%
              50% / 24px;
          }
          &:hover::before {
            background-color: #eee;
          }
        }
      }
    }
  }
`;

const Mypage = styled.img`
  display: none;
  @media (max-width: 440px) {
    display: block;
    width: 2rem;
  }
`;
