import React, { useState } from 'react';
import moment, { Moment as MomentTypes } from 'moment';
import styled from '@emotion/styled';
import { COLOR } from 'src/constants';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { ITotalStudyScheduleRes } from 'src/types/Schedule';

export const CalendarList = () => {
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
  console.log(getDay('2022-05-05'));

  //
  return (
    <StudyList>
      {data?.totalSchedule?.map((item) => (
        <li
          key={item.id}
          className={item.date === moment().format('YYYY-MM-DD') ? 'today' : ''}
        >
          <p className="date">
            <strong>{item.date.split('-')[2]}</strong>
            <span>{getDay(item.date)}</span>
          </p>
          <p className="time">
            {item.startTime} - {item.endTime}
          </p>
          <p className="content">{item.content}</p>
        </li>
      ))}
    </StudyList>
  );
};

const StudyList = styled.ul`
  font-family: 'Noto Sans KR', sans-serif;
  height: 300px;
  overflow-y: scroll;
  li {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    &:nth-of-type(odd) {
      background: #f9f9f9;
    }
    &.today .date {
      background: ${COLOR.main};
      color: #fff;
    }
    .date {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 64px;
      strong {
        font-size: 24px;
      }
    }
  }
`;
