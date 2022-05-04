import moment from 'moment';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { ISchDelRes, ITotalStudyScheduleRes } from 'src/types/Schedule';
import {
  BtnWrap,
  ConfirmModal,
  DelBtn,
  DelModal,
  EditBtn,
  SecondWrap,
  StudyList,
  Wrap,
} from 'src/styles/components/Calendar';
import styled from '@emotion/styled';
import { COLOR } from 'src/constants';
import useMutation from 'src/libs/client/useMutation';
import useUser from 'src/libs/client/useUser';
import { useEffect, useState } from 'react';
import { Btn } from 'src/styles/components';

export const ScheduleList = () => {
  //QUERY
  const router = useRouter();
  const { studyId } = router.query;

  //GET
  const { data } = useSWR<ITotalStudyScheduleRes>(
    `/api/schedule/study/${Number(studyId)}/total`,
  );
  //요일계산
  const days = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  const getDay = (date: string) => {
    return days[new Date(date).getDay()];
  };

  //삭제 POST
  const { loggedInUser } = useUser();
  const [delSch, { loading: delLoading, data: delResult }] =
    useMutation<ISchDelRes>(`/api/schedule/study/${Number(studyId)}/delete`);
  const postDelete = (data: any) => {
    setDelModal(true);
    setIdData(data);
    return;
  };
  const confirmDelete = () => {
    if (delLoading) return;
    delSch(idData); //선택한 스케줄데이터의 아이디를 보낸다.
    setTimeout(() => {
      setDelModal(false);
    }, 1000);
  };

  //삭제후 처리
  const [delModal, setDelModal] = useState(false);
  const [idData, setIdData] = useState();
  const [verify, setVerify] = useState(false);
  useEffect(() => {
    if (delResult?.ok) {
      setVerify(true);
    }
  }, [data]);

  //
  return (
    <StudyList>
      {delModal && (
        <DelModal>
          <Btn onClick={confirmDelete} className="delete">
            {delLoading ? '로딩중...' : '해당일정을 삭제하시겠습니까?'}
          </Btn>
          <p>일정은 삭제되면 복구가 불가능합니다.</p>
          <Btn onClick={() => setDelModal((v) => !v)} className="cancel">
            취소
          </Btn>
        </DelModal>
      )}
      {verify && (
        <ConfirmModal>
          {delResult?.message && (
            <p className="success">{delResult?.message}</p>
          )}
          {delResult?.error && <p className="fail">{delResult?.error}</p>}
          <Btn onClick={() => setVerify((value) => !value)}>확인</Btn>
        </ConfirmModal>
      )}
      {data?.totalSchedule?.map((item) => (
        //현재 보고있는 스터디의 일정데이터를 가져온것.
        <li
          key={item.id}
          className={item.date === moment().format('YYYY-MM-DD') ? 'today' : ''}
        >
          <Wrap>
            <SecondWrap>
              <div className="date">
                <strong>{item.date.split('-')[2]}</strong>
                <span>{getDay(item.date)}</span>
              </div>
              <p className="time">
                {item.startTime} - {item.endTime}
              </p>
            </SecondWrap>
            <p className="content">{item.content}</p>
          </Wrap>
          {item.UserId === loggedInUser?.id && (
            //본인이 만든 일정데이터를 수정 또는 삭제
            <BtnWrap>
              <EditBtn>수정</EditBtn>
              <DelBtn onClick={() => postDelete({ scheduleId: item.id })}>
                삭제
              </DelBtn>
            </BtnWrap>
          )}
        </li>
      ))}
    </StudyList>
  );
};
