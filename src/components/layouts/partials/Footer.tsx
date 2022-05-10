import styled from '@emotion/styled';
import Link from 'next/link';
import { COLOR } from '../../../constants';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  //
  return (
    <FooterCont>
      <section className="max-width">
        <FooterLogo>
          <img src="/images/footer_logo.svg" alt="푸터로고" />
          <h1>모여라 스터디</h1>
        </FooterLogo>
        <div className="project-info">
          <p className="copyright">
            &copy; 2022 - {year !== 2022 && year} MOSS. All rights Reserved.
          </p>
          <Credit>
            <li>
              <small className="madeby">Made by</small>
            </li>
            <li>
              <small>김준우</small>
            </li>
            <Slash />
            <li>
              <small>박유진</small>
            </li>
            <Slash />
            <li>
              <small>손수철</small>
            </li>
            <Slash />
            <li>
              <small>최성이</small>
            </li>
            <Slash />
            <li>
              <small>강혜진</small>
            </li>
          </Credit>
        </div>

        <Link href="#header" passHref>
          <Top>Top</Top>
        </Link>
      </section>
    </FooterCont>
  );
};

const FooterCont = styled.footer`
  position: relative;
  margin-top: 100px;
  border-top: 1px solid #ddd;
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
    .project-info {
      font-size: 0.8rem;
      color: ${COLOR.grayText};
      text-align: end;
      .copyright {
        font-style: italic;
        margin-bottom: 10px;
      }
    }
  }
`;
const Credit = styled.ul`
  display: flex;
  li > small {
    font-size: 0.8rem;
  }
  li {
    .madeby {
      margin-right: 8px;
      font-style: italic;
    }
  }
  @media (max-width: 640px) {
    display: grid;
    grid: repeat(2, 20px) / auto-flow 45px;
    width: calc(100% / 2.3);
  }
`;
const Slash = styled.span`
  border: none;
  border-right: 1px solid ${COLOR.grayText};
  width: 1px;
  height: 10px;
  margin: 0 8px;
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
