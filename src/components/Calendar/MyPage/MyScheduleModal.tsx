import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useMutation from 'src/libs/client/useMutation';
import {
  AfterModal,
  Btn,
  BtnWrap,
  Circle,
  CloseBtn,
  CreatedSch,
  CreateSch,
  Error,
  H1,
  InputWrap,
  Message,
  SchCont,
  ScheduleList,
  ScheduleWrap,
  SelectBtn,
} from 'src/styles/components';
import {
  IScheduleForm,
  IScheduleModal,
  IScheduleRes,
} from 'src/types/Schedule';

import useSWR from 'swr';

export const MyScheduleModal = ({ date }: IScheduleModal) => {
  //Toggle
  const [toggle, setToggle] = useState(true);
  const [afterModal, setAfterModal] = useState(false);
  const [type, setType] = useState('나의일정');
  const closeModal = () => {
    setToggle((value) => !value);
  };
  const closeAfterModal = () => {
    setAfterModal((value) => !value);
  };
  const createNew = () => {
    setType('새로운일정');
  };
  const clickMySchedule = () => {
    setType('나의일정');
  };

  //API
  const [createSchedule, { data, loading }] =
    useMutation(`/api/schedule/mypage`);
  const { data: givenData } = useSWR<IScheduleRes>(`/api/schedule/mypage`);

  //FORM SUBMIT
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IScheduleForm>();

  const onValid = (formData: IScheduleForm) => {
    if (loading) return;
    createSchedule(formData);
  };

  useEffect(() => {
    if (data?.ok) {
      setToggle(false);
      setAfterModal(true);
    }
  }, [data]);

  return (
    <>
      {afterModal && (
        <AfterModal>
          <Message>{data?.message}</Message>
          <Btn onClick={closeAfterModal}>확인</Btn>
        </AfterModal>
      )}
      {toggle && (
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
                  <Btn>{loading ? '로딩중...' : '일정 기록하기'}</Btn>
                </InputWrap>
              </form>
            </CreateSch>
          )}
        </SchCont>
      )}
    </>
  );
};
