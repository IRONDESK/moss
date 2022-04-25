import styled from '@emotion/styled';

import { useEffect, useState } from 'react';
import { Container } from 'src/styles/loginStyles';
import { Calendar } from './Calendar';
import { CalendarList } from './CalendarList';

const studyData = [
  {
    id: '202204111900',
    content: '스터디 정기회의',
    date: '2022-04-10',
    day: '일요일',
    start: '19:00',
    end: '20:00',
  },
  {
    id: '1',
    content: '스터디 정기회의',
    date: '2022-04-11',
    day: '월요일',
    start: '19:00',
    end: '20:00',
  },
  {
    id: '2',
    content: '스터디 정기회의',
    date: '2022-04-14',
    day: '목요일',
    start: '19:00',
    end: '20:00',
  },
  {
    id: '3',
    content: '스터디 정기회의',
    date: '2022-04-18',
    day: '월요일',
    start: '19:00',
    end: '20:00',
  },
  {
    id: '4',
    content: '스터디 정기회의',
    date: '2022-04-21',
    day: '목요일',
    start: '19:00',
    end: '20:00',
  },
  {
    id: '5',
    content: '스터디 정기회의',
    date: '2022-04-25',
    day: '월요일',
    start: '19:00',
    end: '20:00',
  },
  {
    id: '6',
    content: '스터디 정기회의',
    date: '2022-04-28',
    day: '목요일',
    start: '19:00',
    end: '20:00',
  },
];

export const CalendarComponents = () => {
  return (
    <Wrapper>
      <Calendar studyData={studyData} />
      <StudyListWrap>
        <h3>
          스터디 일정 <span>Calendar</span>
        </h3>
        <button>스터디 일정 등록</button>
        <CalendarList studyData={studyData} />
      </StudyListWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  border: 1px solid #ddd;
  padding: 40px;
`;
const StudyListWrap = styled.div`
  flex-grow: 1;
  border-left: 1px solid #eee;
  padding-left: 24px;
`;
