import styled from '@emotion/styled';
import { StudyBanner } from '../../../../components/StudyMain/StudyBanner';
import { COLOR } from '../../../../constants';
import dynamic from 'next/dynamic';
import useMutation from 'src/libs/client/useMutation';
import { NoticeTitle } from '../../../../components/Notice/NoticeTitle';
import { Button } from '../../../../components/Notice/Button';
import { NoticeData } from 'src/types/Notice';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const PostEditor = dynamic(
  () => import('../../../../components/Notice/PostEditor'),
  {
    ssr: false,
  },
);

export default function NoticePage(): JSX.Element {
  //ROUTER
  const router = useRouter();
  const { studyId } = router.query;

  //POST
  const [notice, { loading, data }] = useMutation('/api/notice/create');

  //FORM
  const [noticeList, setNoticeList] = useState<NoticeData[]>([]);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name },
    } = e;
    if (name === 'category') {
      setCategory(e.target.value);
    }
    if (name === 'title') {
      setTitle(e.target.value);
    }
  };
  const editor = (editor: string) => {
    setContent(editor);
  };

  //SUBMIT
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setNoticeList(
      (noticeList = [{ category: category, title: title, content: content }]),
    );
    const data = { ...noticeList };
    const inputData = data[0];
    //POST
    notice({ inputData, studyId });
    reset();
  };
  const reset = () => {
    setNoticeList([]);
    setCategory('');
    setTitle('');
    setContent('');
  };

  //페이지 이동
  useEffect(() => {
    if (data?.ok) {
      router.push(`/study/${studyId}/notice`);
    }
  }, [data, router]);

  //
  return (
    <>
      <StudyBanner />
      <NoticeTitle />
      <NoticeForm onSubmit={onSubmit} action="/study/notice">
        <div className="list">
          <label htmlFor="input-category">말머리</label>
          <input
            onChange={onChange}
            list="category-list"
            id="input-category"
            name="category"
            placeholder="최대 4자까지 입력할 수 있습니다."
          />
        </div>
        <div className="list">
          <label htmlFor="input-title">제목</label>
          <input
            onChange={onChange}
            name="title"
            type="text"
            id="input-title"
            className="w100"
          />
        </div>
        <div className="list">
          <PostEditor editor={editor} />
        </div>
        <BtnGroup>
          <Button text="글게시" className="write" type="submit" />
          <Button text="취소" className="cancel" type="#" />
        </BtnGroup>
      </NoticeForm>
    </>
  );
}

const NoticeForm = styled.form`
  .list {
    margin-top: 16px;
  }
  label {
    display: block;
    margin-bottom: 8px;
    font-family: 'Noto Sans KR', sans-serif;
  }
  input {
    width: 320px;
    height: 48px;
    box-sizing: border-box;
    padding: 12px;
    border: 1px solid #e7e6e2;
    color: #aaa;
    &:focus {
      outline: 0;
      border-color: ${COLOR.main};
      color: ${COLOR.black};
    }
    &.w100 {
      width: 100%;
    }
  }
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  gap: 8px;
`;
