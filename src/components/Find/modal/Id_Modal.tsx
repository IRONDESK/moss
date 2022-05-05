import Link from 'next/link';
import { Dim, FoundResultModal } from 'src/styles/components/Find-id-pw';

export const Id_Modal = ({ message, modalClick }: any) => {
  return (
    <>
      <FoundResultModal>
        <p>{message}</p>
        <input
          className="btn"
          type="button"
          value="확인"
          onClick={modalClick}
        />
        <Link href="/login">
          <a>로그인 페이지로 이동 &rarr;</a>
        </Link>
      </FoundResultModal>
      <Dim onClick={modalClick} />
    </>
  );
};
