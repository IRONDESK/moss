import styled from '@emotion/styled';

export const Footer = () => {
  return (
    <FooterCont>
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
const FooterCont = styled.footer`
  padding: 0 100px;
  margin-top: 10vh;
  section {
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #c4c4c4;
  }
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
`;
