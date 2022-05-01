import React, { useState } from 'react';
import moment, { Moment as MomentTypes } from 'moment';
import styled from '@emotion/styled';
import { COLOR } from 'src/constants';
import { ScheduleModal } from './ScheduleModal';

export const Calendar = ({ studyData }: any) => {
  const [date, setdate] = useState<moment.Moment>(() => moment());
  //일정모달
  const [modal, setModal] = useState(false);
  const handleDayClick = (current: moment.Moment) => {
    setdate(current);
    setModal((value) => !value);
  };

  const returnToday = () => setdate(moment());
  const jumpToMonth = (num: number) =>
    num
      ? setdate(date.clone().add(30, 'day'))
      : setdate(date.clone().subtract(30, 'day'));

  function generate() {
    // 클릭한 날짜 (초기값은 오늘)
    const today = date;

    // startOf('month') : 이번 달의 첫번 째 날로 설정 set to the first of this month, 12:00 am
    // week() : Week of Year. 이번 년도의 몇번째 주인가? => 3월 8일이면 10이겠죠?
    const startWeek = today.clone().startOf('month').week();

    // endOf('month').week() : 이번 달의 마지막 날로 설정 한 후 그것이 이번 년도의 몇번째 주인지 체크
    // 만약 이번 해의 첫번째 주(1월 1일이 속한 주)라면 53으로 세팅, 아니라면 그대로 유지
    // 이런 작업의 이유는 마지막 주가 첫 주가 될 수 없기 때문에 당연한 것임
    const endWeek =
      today.clone().endOf('month').week() === 1
        ? 53
        : today.clone().endOf('month').week();

    let calendar = [];

    // 시작 주부터 마지막 주까지 +1 씩 증가시킴
    // 이제 주마다 일을 표기해야 하므로 len이 7인 arr를 생성 후 index를 기반으로 day를 표기하자
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="row" key={week}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              // 오늘 => 주어진 주의 시작 => n + i일 만큼 더해서 각 주의 '일'을 표기한다.
              let current = today
                .clone()
                .week(week)
                .startOf('week')
                .add(n + i, 'day');

              // 오늘이 current와 같다면 우선 '선택'으로 두자
              let isSelected =
                today.format('YYYYMMDD') === current.format('YYYYMMDD')
                  ? 'selected'
                  : '';

              let isToday =
                current.format('YYYYMMDD') === moment().format('YYYYMMDD')
                  ? 'today'
                  : '';

              // 만약, 이번 달이 아닌 다른 달의 날짜라면 회색으로 표시하자
              let isGrayed =
                current.format('MM') !== today.format('MM') ? 'grayed' : '';

              let yesDate = studyData.map((item: any) => item.date);
              let isDate = '';
              for (let i = 0; i < yesDate.length; i++) {
                if (yesDate[i] === current.format('YYYY-MM-DD')) {
                  isDate = 'yes';
                }
              }

              return (
                <div
                  className={`box ${isSelected} ${isGrayed} ${isToday} ${isDate}`}
                  key={i}
                  onClick={() => handleDayClick(current)}
                >
                  <span className="text">{current.format('D')}</span>
                </div>
              );
            })}
        </div>,
      );
    }

    return calendar;
  }

  return (
    <>
      {modal ? <ScheduleModal /> : null}
      <div>
        <CalendarHead>
          <div className="head">
            <span className="title">
              <span>{date.format('YYYY')}.</span>
              <strong>{date.format('MM')}</strong>
            </span>

            <div className="util-button">
              <button onClick={returnToday}>Today</button>
              <button className="prev" onClick={() => jumpToMonth(0)}>
                &lt;
              </button>
              <button className="next" onClick={() => jumpToMonth(1)}>
                &gt;
              </button>
            </div>
          </div>
        </CalendarHead>
        <CalendarBody>
          <div className="row">
            {['일', '월', '화', '수', '목', '금', '토'].map((el) => (
              <div className="box" key={el}>
                <span className="text">{el}</span>
              </div>
            ))}
          </div>
          {generate()}
        </CalendarBody>
      </div>
    </>
  );
};

const CalendarHead = styled.div`
  .head {
    display: flex;
    justify-content: space-between;
  }
  .title {
    font-size: 24px;
    strong {
      font-weight: bold;
    }
  }
`;
const CalendarBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 8px;
    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3em;
      height: 3em;
      border-radius: 50%;
      position: relative;
      border: 1px solid transparent;
      &.selected {
        border: 1px solid ${COLOR.main};
      }
      &.today {
        &::before {
          content: '';
          display: block;
          width: 8px;
          height: 8px;
          box-sizing: border-box;
          border-top: 8px solid ${COLOR.main};
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          position: absolute;
          top: -3px;
        }
      }
      &.yes {
        &::after {
          content: '';
          display: block;
          width: 8px;
          height: 8px;
          background: ${COLOR.point};
          border-radius: 50%;
          position: absolute;
          bottom: 2px;
        }
      }
    }
  }

  .grayed {
    color: #ccc;
  }
`;
