import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { StudyBanner } from '../../../../components/StudyMain/StudyBanner';
import { COLOR } from '../../../../constants';
import { NoticeTitle } from '../../../../components/Notice/NoticeTitle';
import { Button } from '../../../../components/Notice/Button';
import { useRouter } from 'next/router';
import view from '../../../api/notice/view';
import Link from 'next/link';
import useMutation from 'src/libs/client/useMutation';
import { INoticeData, INoticeRes } from 'src/types/Notice';
import useSWR from 'swr';

export default function NoticePage() {
  //ROUTER
  const router = useRouter();
  const { id } = router.query;

  //GET DATA
  const { data: currentData } = useSWR<INoticeRes>(`/api/notice/${Number(id)}`);
  console.log(currentData?.notice);
  //
  const [del] = useMutation('/api/notice/delete');
  const [notice, setNotice] = useState<INoticeData[]>([
    {
      id: 0,
      category: '',
      title: '',
      content: '',
    },
  ]);

  const data = view(id);
  useEffect(() => {
    setNotice(data);
  }, [data]);

  const deleteAlert = () => {
    const Id = parseInt(id);
    del(Id);
    alert('해당 게시글이 삭제되었습니다.');
    window.location.href = '/study/notice';
  };

  return (
    <>
      <StudyBanner />
      <NoticeTitle />
      <ViewSection>
        <div className="title">
          <p className="category">{currentData?.notice?.category}</p>
          <h4>{currentData?.notice?.title}</h4>
        </div>
        <div className="editor-content">
          <p>{currentData?.notice?.content}</p>
        </div>
        <div className="btn-group">
          <Link href={`/study/${currentData?.notice?.studyId}/notice`}>
            <a>
              <Button text="목록" className="list" />
            </a>
          </Link>

          <Link
            href={`/study/${currentData?.notice?.studyId}/notice/edit/${currentData?.notice?.id}`}
          >
            <a>
              <Button text="수정" className="modify" />
            </a>
          </Link>
          <button className="delete" onClick={deleteAlert}>
            삭제
          </button>
        </div>
      </ViewSection>
    </>
  );
}

const ViewSection = styled.section`
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  .title {
    padding: 16px 24px;
    h4 {
      font-weight: bold;
      font-size: 24px;
    }
    .category {
      display: inline-block;
      font-family: 'Gmarket Sans';
      background: ${COLOR.main};
      color: #fff;
      font-weight: normal;
      padding: 4px 12px;
      border-radius: 20px;
      margin-bottom: 8px;
    }
  }

  .editor-content {
    border: 1px solid ${COLOR.gray};
    border-width: 1px 0;
    padding: 24px;
    min-height: 200px;
  }

  .btn-group {
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
    gap: 8px;
    .delete {
      max-width: 120px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      text-align: center;
      padding: 0 20px 0 40px;
      background: url(../../images/notice_delete.svg) no-repeat 12px 50% / 20px;
      color: #ff6347;
      border: 1px solid rgba(255, 99, 71, 0.2);
      transition: all 0.3s;
      &:hover {
        background: #ff6347 url(../../images/notice_delete_white.svg) no-repeat
          12px 50% / 20px;
        color: #fff;
        border-color: #ff6347;
      }
    }
  }
`;
