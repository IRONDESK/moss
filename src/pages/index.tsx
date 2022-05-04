import type { NextPage } from 'next';
import { Banner } from '../components/Banner';
import { TitleSearch } from '../components/TitleSearch';
import { StudyList } from 'src/components/StudyList';
import { Backgroud } from 'src/components/StyleComponents';

const Home: NextPage = () => {
  return (
    <>
      <Backgroud />
      <Banner />
      <TitleSearch />
      <StudyList />
    </>
  );
};

export default Home;
