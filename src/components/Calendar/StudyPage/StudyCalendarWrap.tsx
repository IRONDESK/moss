import styled from '@emotion/styled';
import { useState } from 'react';
import { COLOR } from 'src/constants';
import { Calendar } from '../Calendar';
import { CalendarList } from './CalendarList';
import { StudySchedule } from './StudySchedule';

export const StudyCalendarWrap = () => {
  const [click, setClick] = useState(false);
  function onClick() {
    click ? setClick(false) : setClick(true);
  }
  //
  return (
    <Container>
      <Calendar />
      <StudyListWrap>
        <h3>
          스터디 일정 <span>Calendar</span>
        </h3>
        <button type="button" className="btn" onClick={onClick}>
          일정 등록
        </button>
        {click && <StudySchedule onClick={onClick} />}
        <CalendarList />
      </StudyListWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 24px;
  border: 1px solid #ddd;
  padding: 40px;
  grid-column-start: 1;
  grid-column-end: 3;

  & > div:first-of-type {
    padding-right: 24px;
    border-right: 1px solid #eee;
  }
  @media (max-width: 1024px) {
    flex-direction: column;

    & > div:first-of-type {
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
