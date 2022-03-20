import React from 'react';
import styled from '@emotion/styled';
import { Header, Footer } from './';
import { Title } from './partials/Title';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Title title="모여라 스터디" />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

const Container = styled.section`
  width: 1224px;
  max-width: calc(100% - 60px);
  margin: 0 auto 80px auto;

  @media (max-width: 440px) {
    width: 100%;
    scrollbar-width: none;
  }
`;
