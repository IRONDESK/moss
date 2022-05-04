import { useState } from 'react';
import { Container, StudyListWrap } from 'src/styles/components/Calendar';
import { Calendar } from '../Calendar';
import { ScheduleList } from './ScheduleList';
import { ScheduleModal } from './ScheduleModal';

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
        {click && <ScheduleModal onClick={onClick} postType={'create'} />}
        <ScheduleList />
      </StudyListWrap>
    </Container>
  );
};
