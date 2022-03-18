import Head from 'next/head';
import { JoinPage } from '../components/Join/Join';
import { Title } from '../components/layouts';

export default function Join() {
  return (
    <section>
      <Title title="회원가입" />
      <h1 className="sr-only">회원가입</h1>
      <JoinPage />
    </section>
  );
}
