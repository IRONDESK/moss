import type { NextPage } from 'next';
import { Banner } from '../components/Banner';
import { Backgroud } from 'src/components/StyleComponents';
import { TitleSearch } from 'src/components/Search/TitleSearch';

const Home: NextPage = () => {
  return (
    <>
      <Backgroud />
      <Banner />
      <TitleSearch />
    </>
  );
};

export default Home;
