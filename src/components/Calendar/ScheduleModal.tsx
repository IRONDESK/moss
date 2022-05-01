import { useForm } from 'react-hook-form';
import useMutation from 'src/libs/client/useMutation';
import { Btn, Error, H1, InputWrap, ModalCont } from 'src/styles/components';

interface IScheduleForm {
  title: string;
  date?: string;
  content?: string;
}
export const ScheduleModal = () => {
  //POST
  const [createSch, { data, loading, error }] =
    useMutation(`/api/schedule/create`);
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IScheduleForm>();
  const onValid = (data: IScheduleForm) => {
    console.log(data);
    createSch(data);
  };
  //
  return (
    <>
      <ModalCont>
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

            <input {...register('date')} type="date" />

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
