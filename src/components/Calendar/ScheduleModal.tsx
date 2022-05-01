import { Schedule } from '@prisma/client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useMutation from 'src/libs/client/useMutation';
import {
  Blank,
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
  ScheduleList,
  ScheduleWrap,
  SelectBtn,
} from 'src/styles/components';
import useSWR from 'swr';

interface IScheduleForm {
  title: string;
  date: string;
  content?: string;
}
interface IScheduleModal {
  date?: string;
}
interface IScheduleRes {
  ok: boolean;
  dailySchedule: Schedule[];
}
export const ScheduleModal = ({ date }: IScheduleModal) => {
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

  //API
  const [createSchedule, { data, loading }] = useMutation(`/api/schedule`);

  const { data: givenData } = useSWR<IScheduleRes>(`/api/schedule`);

  //FORM SUBMIT
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IScheduleForm>();

  const onValid = (formData: IScheduleForm) => {
    if (loading) return;
    return createSchedule(formData);
  };

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
              <ScheduleWrap>
                <H1>
                  <span>{date}</span>
                </H1>
                {givenData?.dailySchedule?.map((info) => (
                  <div key={info.id}>
                    {info.date === date && (
                      <ScheduleList>
                        <h3>
                          <span>제목: </span>
                          {info.title}
                        </h3>
                        <li>
                          <p>
                            <span>내용: </span>
                            {info.content}
                          </p>
                        </li>
                      </ScheduleList>
                    )}
                  </div>
                ))}
              </ScheduleWrap>
            </CreatedSch>
          ) : (
            <CreateSch>
              <H1>
                <span>새 일정 만들기</span>
              </H1>
              <form onSubmit={handleSubmit(onValid)}>
                <InputWrap>
                  <input {...register('date')} type="date" value={date} />
                  <input
                    {...register('title', { required: '제목을 입력해주세요.' })}
                    type="text"
                    placeholder="제목을 입력하세요"
                  />
                  {errors.title && (
                    <Error className="error">{errors.title.message}</Error>
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
