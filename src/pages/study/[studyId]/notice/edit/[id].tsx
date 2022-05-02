import styled from '@emotion/styled';
import { StudyBanner } from 'src/components/StudyMain/StudyBanner';
import { COLOR } from 'src/constants';
import dynamic from 'next/dynamic';
import useMutation from 'src/libs/client/useMutation';
import { NoticeTitle } from 'src/components/Notice/NoticeTitle';
import { Button } from 'src/components/Notice/Button';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import view from '../../../../api/notice/view';

const PostEditor = dynamic(
  () => import('../../../../../components/Notice/PostEditor'),
  {
    ssr: false,
  },
);

interface NoticeData {
  id: number;
  category: string;
  title: string;
  content: string;
}

export default function NoticePage(): JSX.Element {
  let [noticeList, setNoticeList] = useState<NoticeData[]>([]);
  const router = useRouter();
  const { id } = router.query;
  const [beforeNotice, setBeforeNotice] = useState<NoticeData[]>([]);
  const beforeNoticeData = view(id);
  useEffect(() => {
    setBeforeNotice(beforeNoticeData);
  }, [beforeNoticeData]);

  const [category, setCategory] = useState(
    beforeNoticeData?.noticeData?.category,
  );
  const [title, setTitle] = useState(beforeNoticeData?.noticeData?.title);
  const [content, setContent] = useState(beforeNoticeData?.noticeData?.content);

  const [edit] = useMutation('/api/notice/edit');

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

  const onSubmit = async (e: any) => {
    setNoticeList(
      (noticeList = [
        { id: +id, category: category, title: title, content: content },
      ]),
    );
    const data = noticeList;
    edit(data);
  };

  const reset = () => {
    setNoticeList([]);
    setCategory('');
    setTitle('');
    setContent('');
  };

  return (
    <>
      <StudyBanner
        logo="../../images/StudyLogo.png"
        category="카테고리"
        title="React 스터디"
        des="혼자 코딩하기 싫은 개발자들 모여라! 누구나 자유롭게 모여서 각자 코딩해요"
        hashtag="#개발"
        member={7}
        link="#"
      />
      <NoticeTitle />
      <NoticeForm onSubmit={onSubmit} action="/study/notice/">
        <div className="list">
          <label htmlFor="input-category">말머리</label>
          <input
            onChange={onChange}
            list="category-list"
            id="input-category"
            name="category"
            placeholder={`${beforeNoticeData?.noticeData?.category}`}
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
            placeholder={`${beforeNoticeData?.noticeData?.title}`}
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
