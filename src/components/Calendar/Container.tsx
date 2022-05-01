import styled from '@emotion/styled';

import { useState } from 'react';
import { COLOR } from 'src/constants';
import { Calendar } from './Calendar';
import { CalendarList } from './CalendarList';
import { Schedule } from './Schedule';

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
  const [click, setClick] = useState(false);
  function onClick() {
    click ? setClick(false) : setClick(true);
  }
  return (
    <Wrapper>
      <Calendar studyData={studyData} />
      <StudyListWrap>
        <h3>
          스터디 일정 <span>Calendar</span>
        </h3>
        <button type="button" className="btn" onClick={onClick}>
          일정 등록
        </button>
        {click && <Schedule onClick={onClick} />}
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

  & > div:first-child {
    padding-right: 24px;
    border-right: 1px solid #eee;
  }
  @media (max-width: 1024px) {
    flex-direction: column;

    & > div:first-child {
      padding-right: 0;
      border-right: 0;
      border-bottom: 1px solid #eee;
      padding-bottom: 24px;
      margin-bottom: 24px;
    }
  }
`;
const StudyListWrap = styled.div`
  flex-grow: 1;
  position: relative;
  h3 {
    font-size: 24px;
    margin-bottom: 16px;
    span {
      font-size: 16px;
      color: ${COLOR.grayText};
    }
  }
  .btn {
    position: absolute;
    top: -10px;
    right: 0;
    border: 1px solid ${COLOR.main};
    color: ${COLOR.main};
    height: 32px;
    border-radius: 20px;
    padding: 0 16px;
    transition: all 0.2s;
    &:hover {
      background: ${COLOR.main};
      color: #fff;
    }
  }

  .modal {
    width: 500px;
    padding: 50px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    z-index: 20;
  }
  .modal + .dim {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
`;
