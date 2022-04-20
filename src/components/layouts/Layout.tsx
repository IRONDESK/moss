import React from 'react';
import { Header, Footer } from './';
import { Title } from './partials/Title';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Title title="모여라 스터디" />
      <Header />
      <section className="max-width">{children}</section>
      <Footer />
    </>
  );
};
