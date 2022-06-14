import Link from 'next/link';
import { Dim, FoundResultModal } from 'src/styles/components/Find-id-pw';

export const FindModal = ({ message, modalClick }: any) => {
  return (
    <>
      <FoundResultModal>
        <p>{message}</p>
        <article className="btn-wrap">
          <input
            className="btn"
            type="button"
            value="닫기"
            onClick={modalClick}
          />
          <Link href="/login">
            <a>로그인 화면으로</a>
          </Link>
        </article>
      </FoundResultModal>
      <Dim onClick={modalClick} />
    </>
  );
};
