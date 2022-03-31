import Head from 'next/head';

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <Head>
      <title>{title} | MOSS</title>

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="Description" content="" />
      <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      <meta property="og:title" content="MOSS 모여라 스터디" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MOSS 모여라 스터디" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="./images/ogimage.jpg" />
    </Head>
  );
};
