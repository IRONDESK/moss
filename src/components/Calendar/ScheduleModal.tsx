import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useMutation from 'src/libs/client/useMutation';
import {
  Btn,
  CloseBtn,
  Error,
  H1,
  InputWrap,
  ModalCont,
} from 'src/styles/components';

interface IScheduleForm {
  title: string;
  date: string;
  content?: string;
}
export const ScheduleModal = () => {
  //Toggle
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((value) => !value);
    console.log(toggle);
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
        <ModalCont>
          <CloseBtn onClick={handleClick}>
            <img src="images/close.svg" alt="x 버튼" />
          </CloseBtn>
          <H1>
            <span>캘린더 일정</span>
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
        </ModalCont>
      )}
    </>
  );
};
