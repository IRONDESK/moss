import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { COLOR } from 'src/constants';
import useMutation from 'src/libs/client/useMutation';
import { Error } from 'src/styles/components';
import { IStudySchedule, IStudyScheduleRes } from 'src/types/Schedule';
import { Button } from './Button';
import { H } from './Title';

export const StudySchedule = ({ onClick }: any) => {
  //QUERY
  const router = useRouter();
  const { studyId } = router.query;
  console.log(studyId);

  //POST
  const [recordSchedule, { loading, data, error }] =
    useMutation<IStudyScheduleRes>(`/api/schedule/study`);

  //FORM SUBMIT
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IStudySchedule>();

  const onValid = ({ date, startTime, endTime, content }: IStudySchedule) => {
    if (loading) return;
    setClose(true);
    return recordSchedule({ studyId, date, startTime, endTime, content });
  };

  //AFTER SUBMIT
  const [close, setClose] = useState(false);
  useEffect(() => {
    if (data?.ok) {
      alert(data?.message);
    }
    if (data?.error) {
      alert(data?.error);
    }
  }, [data]);
  console.log(data);
  //

  //
  return (
    <>
      {!close && (
        <>
          <Modal className="modal">
            <H>스터디 일정 등록</H>
            <form onSubmit={handleSubmit(onValid)}>
              <ul>
                <li>
                  <label htmlFor="date" className="label-text">
                    날짜
                  </label>
                  <input
                    {...register('date', { required: '날짜를 선택해주세요.' })}
                    type="date"
                    id="date"
                  />
                  {errors.date && <Error>{errors.date.message}</Error>}
                </li>

                <li>
                  <p className="label-text">시간</p>
                  <div className="timeWrap">
                    <label htmlFor="time" className="a11y-hidden">
                      시작 시간
                    </label>
                    <input
                      {...register('startTime', {
                        required: '시작시간을 선택해주세요.',
                      })}
                      type="time"
                      id="time"
                    />
                    <label htmlFor="time" className="a11y-hidden">
                      종료 시간
                    </label>
                    <input
                      {...register('endTime', {
                        required: '종료시간을 선택해주세요.',
                      })}
                      type="time"
                      id="time2"
                    />
                  </div>
                  {errors.startTime && (
                    <Error>{errors.startTime.message}</Error>
                  )}
                  {errors.endTime && <Error>{errors.endTime.message}</Error>}
                </li>

                <li>
                  <label htmlFor="content" className="label-text">
                    일정 내용
                  </label>
                  <input
                    {...register('content', {
                      required: '내용을 입력해 주세요.',
                    })}
                    type="text"
                    id="content"
                    placeholder="내용을 입력해 주세요"
                  />
                  {errors.content && <Error>{errors.content.message}</Error>}
                </li>
              </ul>
              <Button type="submit">
                {loading ? '로딩중...' : '일정 등록'}
              </Button>
              <button type="button" className="btn-close" onClick={onClick}>
                <img src="/images/close.svg" alt="닫기" />
              </button>
            </form>
          </Modal>
          <div className="dim" onClick={onClick}></div>
        </>
      )}
    </>
  );
};

const Modal = styled.section`
  width: 500px;
  max-width: calc(100% - 60px);
  padding: 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 20;

  & + .dim {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 10;
  }

  .label-text {
    display: block;
    margin: 20px 0 10px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
  }
  input {
    height: 48px;
    width: 100%;
    border: 1px solid ${COLOR.gray};
    padding: 0 10px;
    &::placeholder {
      color: ${COLOR.grayText};
    }
  }
  .timeWrap {
    display: flex;
    gap: 8px;
  }
  button {
    margin-top: 24px;
  }
  .btn-close {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: 40px;
  }
`;
