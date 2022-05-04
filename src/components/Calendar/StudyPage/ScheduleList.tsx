import moment from 'moment';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { ITotalStudyScheduleRes } from 'src/types/Schedule';
import {
  BtnWrap,
  DelBtn,
  EditBtn,
  SecondWrap,
  StudyList,
  Wrap,
} from 'src/styles/components/Calendar';
import styled from '@emotion/styled';
import { COLOR } from 'src/constants';

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

  //
  return (
    <StudyList>
      {data?.totalSchedule?.map((item) => (
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
          <BtnWrap>
            <EditBtn>수정</EditBtn>
            <DelBtn>삭제</DelBtn>
          </BtnWrap>
        </li>
      ))}
    </StudyList>
  );
};
