import { SWRConfig } from 'swr';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layouts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{ fetcher: (url: string) => fetch(url).then((res) => res.json()) }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
