import styled from '@emotion/styled';
import Link from 'next/link';

export const Header = () => {
  return (
    <HeaderCont>
      <section>
        <article>
          <button>
            <Link href="/">
              <img src="/images/header_logo.svg" alt="헤더로고" />
            </Link>
          </button>
          <h1>모여라 스터디</h1>
        </article>
        <article>
          <Link href="/join">
            <button>회원가입</button>
          </Link>
          <Link href="/login">
            <button>로그인</button>
          </Link>
        </article>
      </section>
    </HeaderCont>
  );
};
const HeaderCont = styled.header`
  display: flex;
  padding: 0 100px;
  height: 100px;
  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    article {
      &:nth-of-type(1) {
        display: flex;
        align-items: center;
        gap: 10px;
        img {
          width: 124px;
          height: 32px;
        }
        h1 {
          font-weight: 400;
        }
      }
      &:nth-of-type(2) {
        display: flex;
        gap: 8px;
        button {
          border: 1px solid #e7e6e2;
          padding: 9px 20px;
          width: 100px;
          font-size: 14px;
          line-height: 14px;
          &:nth-child(2) {
            border: 1px solid #34c88a;
            color: #34c88a;
          }
        }
      }
    }
  }
`;
