import type { NextPage } from 'next';
import { Banner } from '../components/Banner';
import { TitleSearch } from '../components/TitleSearch';
import { Scroll } from '../components/Scroll/Scroll';
import { StudyList } from 'src/components/StudyList';
import { Backgroud } from 'src/components/StyleComponents';

const Home: NextPage = () => {
  return (
    <>
      <Backgroud />
      <Banner />
      <TitleSearch />
      <StudyList />
      <Scroll />
    </>
  );
};

export default Home;
