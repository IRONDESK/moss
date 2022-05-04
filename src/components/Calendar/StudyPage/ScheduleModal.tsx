import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useMutation from 'src/libs/client/useMutation';
import { Btn, Error } from 'src/styles/components';
import { ConfirmModal, Modal } from 'src/styles/components/Calendar';
import { IStudySchedule, IStudyScheduleRes } from 'src/types/Schedule';
import { Button } from './Button';
import { H } from './Title';

export const ScheduleModal = ({ onClick }: any) => {
  //QUERY
  const router = useRouter();
  const { studyId } = router.query;

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
    recordSchedule({ studyId, date, startTime, endTime, content });
    setTimeout(() => {
      setClose(true);
    }, 1000);
  };

  //생성후 처리
  const [close, setClose] = useState(false);
  const [verify, setVerify] = useState(false);
  useEffect(() => {
    if (data?.ok) {
      setVerify(true);
    }
  }, [data]);

  //
  return (
    <>
      {verify && (
        <ConfirmModal>
          {data?.message && <p className="success">{data?.message}</p>}
          {data?.error && <p className="fail">{data?.error}</p>}
          <Btn onClick={() => setVerify((value) => !value)}>확인</Btn>
        </ConfirmModal>
      )}
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
                        // required: '시작시간을 선택해주세요.',
                      })}
                      type="time"
                      id="time"
                    />
                    <label htmlFor="time" className="a11y-hidden">
                      종료 시간
                    </label>
                    <input
                      {...register('endTime', {
                        // required: '종료시간을 선택해주세요.',
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
