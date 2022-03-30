import styled from '@emotion/styled';
import { COLOR } from '../../../constants';

export const Footer = () => {
  return (
    <FooterCont className="max-width">
      <section>
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
      </section>
    </FooterCont>
  );
};

// 반응형 컴포넌트 대기?
// const breakpoints = [390, 1440];

// const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const FooterCont = styled.footer`
  width: 100vw;
  height: 100px;
  margin-top: 10vh;
  section {
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #c4c4c4;
  }
  @media (max-width: 440px) {
    position: relative;
    margin-top: 0;
    height: fit-content;
    padding: 0;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -28px;
      right: 28px;
      width: 48px;
      height: 48px;
      border: 1px solid ${COLOR.point};
      border-radius: 50%;
      background: ${COLOR.white};
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: -7px;
      right: 46px;
      border: 1px solid ${COLOR.black};
      border-width: 0 0 2px 2px;
      width: 10px;
      height: 10px;
      transform: rotate(135deg);
    }
    section {
      padding: 1.5rem 1.5rem;
    }
  } ;
`;

const FooterLogo = styled.div`
  img {
    height: 30px;
    width: 73px;
  }
  h1 {
    font-size: 12px;
    line-height: 1px;
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
