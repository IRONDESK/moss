import React from "react";
import styled from '@emotion/styled';
import { Header, Footer } from "./";


export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.section`
  width: 1224px;
  max-width: calc(100% - 60px);
  margin: 0 auto 80px auto;
`;

