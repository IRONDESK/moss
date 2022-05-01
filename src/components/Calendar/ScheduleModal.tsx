import styled from '@emotion/styled';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useMutation from 'src/libs/client/useMutation';
import {
  Btn,
  BtnWrap,
  Circle,
  CloseBtn,
  CreatedSch,
  CreateSch,
  Error,
  H1,
  InputWrap,
  SchCont,
  SelectBtn,
} from 'src/styles/components';

interface IScheduleForm {
  title: string;
  date: string;
  content?: string;
}
export const ScheduleModal = () => {
  //Toggle
  const [toggle, setToggle] = useState(false);
  const [type, setType] = useState('나의일정');
  const closeModal = () => {
    setToggle((value) => !value);
  };
  const createNew = () => {
    setType('새로운일정');
  };
  const clickMySchedule = () => {
    setType('나의일정');
  };

  //POST
  const [createSch, { data, loading }] = useMutation(`/api/schedule/create`);
  console.log(data);

  //FORM SUBMIT
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IScheduleForm>();
  const onValid = (data: IScheduleForm) => {
    if (loading) return;
    return createSch(data);
  };
  //
  return (
    <>
      {!toggle && (
        <SchCont>
          <CloseBtn onClick={closeModal}>
            <img src="images/close.svg" alt="x 버튼" />
          </CloseBtn>
          <BtnWrap>
            <SelectBtn onClick={clickMySchedule} type="button">
              <p>나의 일정</p>
              {type === '나의일정' && <Circle />}
            </SelectBtn>
            <SelectBtn onClick={createNew} type="button">
              <p>새로운 일정</p>
              {type === '새로운일정' && <Circle />}
            </SelectBtn>
          </BtnWrap>

          {type === '나의일정' ? (
            <CreatedSch>
              <H1>
                <span>나의 일정</span>
              </H1>
            </CreatedSch>
          ) : (
            <CreateSch>
              <H1>
                <span>새 일정 만들기</span>
              </H1>
              <form onSubmit={handleSubmit(onValid)}>
                <InputWrap>
                  <input
                    {...register('title', { required: '제목을 입력해주세요.' })}
                    type="text"
                    placeholder="제목을 입력하세요"
                  />
                  {errors.title && (
                    <Error className="error">{errors.title.message}</Error>
                  )}

                  <input
                    {...register('date', { required: '날짜를 선택해주세요.' })}
                    type="date"
                  />
                  {errors.date && (
                    <Error className="error">{errors.date.message}</Error>
                  )}

                  <textarea
                    {...register('content')}
                    placeholder="일정내용을 입력하세요"
                  />
                  <Btn>일정 기록하기</Btn>
                </InputWrap>
              </form>
            </CreateSch>
          )}
        </SchCont>
      )}
    </>
  );
};
