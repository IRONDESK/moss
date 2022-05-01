import { useForm } from 'react-hook-form';
import { Btn, H1, InputWrap, ModalCont } from 'src/styles/components';

export const ScheduleModal = () => {
  const { register } = useForm();

  //
  return (
    <>
      <ModalCont>
        <H1>
          <span>캘린더 일정</span>
        </H1>
        <form>
          <InputWrap>
            <input {...register('date')} type="date" />
            <input
              {...register('title')}
              type="text"
              placeholder="제목을 입력하세요"
            />
            <textarea
              {...register('content')}
              placeholder="일정내용을 입력하세요"
            />
            <Btn>일정 기록하기</Btn>
          </InputWrap>
        </form>
      </ModalCont>
    </>
  );
};
