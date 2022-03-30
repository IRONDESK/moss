import styled from '@emotion/styled';
import Link from 'next/link';
import { COLOR } from '../../../constants';

export const Footer = () => {
  return (
    <FooterCont>
      <section className="max-width">
        <FooterLogo>
          <img src="/images/footer_logo.svg" alt="푸터로고" />
          <h1>모여라 스터디</h1>
        </FooterLogo>
        <MemberList>
          <li>
            <small>강혜진</small>
          </li>
          <li>
            <small>김준우</small>
          </li>
          <li>
            <small>박유진</small>
          </li>
          <li>
            <small>손수철</small>
          </li>
          <li>
            <small>심영은</small>
          </li>
          <li>
            <small>최성이</small>
          </li>
        </MemberList>
        <Link href="#header" passHref>
          <Top>Top</Top>
        </Link>
      </section>
    </FooterCont>
  );
};

// 반응형 컴포넌트 대기?
// const breakpoints = [390, 1440];

// const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const FooterCont = styled.footer`
  position: relative;
  margin-top: 100px;
  border-top: 1px solid #ddd;
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
  }
`;

const FooterLogo = styled.div`
  img {
    height: 30px;
    width: 73px;
    vertical-align: -10px;
  }
  h1 {
    font-size: 12px;
    font-weight: 400;
  }
`;
const MemberList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 280px;
  li > small {
    color: #666666;
    font-size: 14px;
  }
  @media (max-width: 640px) {
    display: grid;
    grid: repeat(2, 20px) / auto-flow 45px;
    width: calc(100% / 2.3);
  }
`;

const Top = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -28px;
  right: 28px;
  width: 48px;
  height: 48px;
  border: 1px solid ${COLOR.point};
  border-radius: 50%;
  background: ${COLOR.white};
  font-size: 10px;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    display: block;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%) rotate(135deg);
    transition: all 0.2s;
  }
  &::before {
    background: #fff;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    top: 50%;
  }
  &::after {
    border: 1px solid ${COLOR.black};
    border-width: 0 0 2px 2px;
    width: 10px;
    height: 10px;
    top: 55%;
  }

  &:hover {
    &::before {
      background: ${COLOR.point};
    }
    &::after {
      border-color: #fff;
    }
  }
`;
