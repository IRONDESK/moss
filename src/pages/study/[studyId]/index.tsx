import { useRouter } from 'next/router';
import { StudyBanner } from '../../../components/StudyMain/StudyBanner';
import { StudyComponents } from '../../../components/StudyMain/StudyComponents';

export default function StudyPage() {
  //
  return (
    <>
      <StudyBanner />
      <StudyComponents />
    </>
  );
}
