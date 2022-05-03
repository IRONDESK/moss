import styled from '@emotion/styled';
import { StudyBanner } from '../../../../components/StudyMain/StudyBanner';
import { COLOR } from '../../../../constants';
import dynamic from 'next/dynamic';
import useMutation from 'src/libs/client/useMutation';
import { NoticeTitle } from '../../../../components/Notice/NoticeTitle';
import { Button } from '../../../../components/Notice/Button';
import { NoticeData } from 'src/types/Notice';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const PostEditor = dynamic(
  () => import('../../../../components/Notice/PostEditor'),
  {
    ssr: false,
  },
);

export default function NoticePage(): JSX.Element {
  const router = useRouter();
  const { studyId } = router.query;
  const StudyId = Number(studyId);
  //
  const [notice, { loading, data, error }] = useMutation('/api/notice');

  //SUBMIT FORM
  const { register, handleSubmit } = useForm();
  const onValid = (formData: any) => {
    console.log(formData, content);
  };

  //에디터
  const [content, setContent] = useState('');
  const editor = (editor: string) => {
    setContent(editor);
  };

  return (
    <>
      <StudyBanner />
      <NoticeTitle />
      <NoticeForm onSubmit={handleSubmit(onValid)}>
        <div className="list">
          <label htmlFor="input-category">말머리</label>
          <input
            {...register('category', { required: true })}
            list="category-list"
            id="input-category"
            name="category"
            placeholder="최대 4자까지 입력할 수 있습니다."
          />
        </div>
        <div className="list">
          <label htmlFor="input-title">제목</label>
          <input
            {...register('category', { required: true })}
            name="title"
            type="text"
            id="input-title"
            className="w100"
          />
        </div>
        <div className="list"></div>

        <BtnGroup>
          <Button text="글게시" className="write" type="submit" />
          <Button text="취소" className="cancel" type="#" />
        </BtnGroup>
      </NoticeForm>
      <PostEditor editor={editor} />
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
