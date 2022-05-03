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

interface ISave {
  saved: number | null | undefined;
}

export default function NoticePage() {
  const router = useRouter();
  const { studyId, id } = router.query;

  //현재보고있는 공지데이터를 불러옵니다.
  const { data } = useSWR<INoticeRes>(`/api/notice/${Number(id)}/current`);

  //현재보고있는 공지데이터의 삭제요청을 POST 합니다.
  const [deleteNotion, { loading, data: receivedData }] =
    useMutation('/api/notice/delete');

  //공지사항 삭제후 처리

  const deleteAlert = () => {
    if (loading) return;
    deleteNotion(data?.notice?.id);
    alert('해당 게시글이 삭제되었습니다.');
  };

  //페이지 이동
  useEffect(() => {
    if (receivedData?.ok) {
      router.push(`/study/${studyId}/notice`);
    }
  }, [data, router]);
  //
  return (
    <>
      <StudyBanner />
      <NoticeTitle />
      <ViewSection>
        <div className="title">
          <p className="category">{data?.notice?.category}</p>
          <h4>{data?.notice?.title}</h4>
        </div>
        <div className="editor-content">
          <p>{data?.notice?.content}</p>
        </div>
        <div className="btn-group">
          <Link href={`/study/${data?.notice?.studyId}/notice`}>
            <a>
              <Button text="목록" className="list" />
            </a>
          </Link>

          <Link
            href={`/study/${data?.notice?.studyId}/notice/edit/${data?.notice?.id}`}
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
