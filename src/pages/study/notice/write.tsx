import styled from '@emotion/styled';
import { StudyBanner } from '../../../components/StudyMain/StudyBanner';
import { COLOR } from '../../../constants';
import dynamic from 'next/dynamic';
import useMutation from 'src/libs/client/useMutation';
import { FieldErrors, useForm } from 'react-hook-form';
import { NoticeTitle } from '../../../components/Notice/NoticeTitle';
import { Button } from '../../../components/Notice/Button';
import React, { useState } from 'react';
import { ThisMonthInstance } from 'twilio/lib/rest/api/v2010/account/usage/record/thisMonth';
const PostEditor = dynamic(
  () => import('../../../components/Notice/PostEditor'),
  {
    ssr: false,
  },
);

interface NoticeForm {
  category?: string;
  title?: string;
  author?: string;
  content?: string;
}

export default function NoticePage(): JSX.Element {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [newNotice, setNewnotice] = useState({});

  const [notice, { loading, data, error }] = useMutation('/api/notice');
  console.log(loading, data, error);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NoticeForm>({
    mode: 'onBlur',
  });

  const onValid = (data: NoticeForm) => {
    notice(data);
  };

  const InValid = (errors: FieldErrors) => {
    console.log(errors);
  };

  const editor = (editor: string) => {
    setContent(editor);
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
      <NoticeForm onSubmit={handleSubmit(onValid, InValid)}>
        <div className="list">
          <label htmlFor="input-category">말머리</label>
          <input
            {...register('category', { required: '카테고리가 필요합니다!' })}
            list="category-list"
            id="input-category"
            name="input-category"
            placeholder="최대 4자까지 입력할 수 있습니다."
          />
          <datalist id="category-list">
            <option value="장소" />
            <option value="미션" />
            <option value="일반공지" />
          </datalist>
        </div>
        <div className="list">
          <label htmlFor="input-title">제목</label>
          <input
            {...register('title', { required: '제목이 필요합니다!' })}
            name="title"
            type="text"
            id="input-title"
            className="w100"
          />
        </div>
        <div className="list">
          <PostEditor editor={editor} register={register('content')} />
        </div>
        <BtnGroup>
          <Button
            text="글게시"
            href="/study/notice/view"
            className="write"
            type="submit"
          />
          <Button
            text="취소"
            href="/study/notice/view"
            className="cancel"
            type="#"
          />
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
