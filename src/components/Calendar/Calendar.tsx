import React, { useState } from 'react';
import moment, { Moment as MomentTypes } from 'moment';
import styled from '@emotion/styled';
import { COLOR } from 'src/constants';
import { CalendarBody, CalendarHead } from 'src/styles/components/Calendar';

export const Calendar = () => {
  const [date, setdate] = useState<moment.Moment>(() => moment());
  const handleDayClick = (current: moment.Moment) => setdate(current);
  const returnToday = () => setdate(moment());
  const jumpToMonth = (num: number) =>
    num
      ? setdate(date.clone().add(30, 'day'))
      : setdate(date.clone().subtract(30, 'day'));

  function generate() {
    const today = date;

    const startWeek = today.clone().startOf('month').week();

    const endWeek =
      today.clone().endOf('month').week() === 1
        ? 53
        : today.clone().endOf('month').week();

    let calendar = [];

    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="row" key={week}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              let current = today
                .clone()
                .week(week)
                .startOf('week')
                .add(n + i, 'day');

              let isSelected =
                today.format('YYYYMMDD') === current.format('YYYYMMDD')
                  ? 'selected'
                  : '';

              let isToday =
                current.format('YYYYMMDD') === moment().format('YYYYMMDD')
                  ? 'today'
                  : '';

              let isGrayed =
                current.format('MM') !== today.format('MM') ? 'grayed' : '';

              let yesDate = [].map((item: any) => item.date);
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
              <span>이전</span>
            </button>
            <button className="next" onClick={() => jumpToMonth(1)}>
              <span>이후</span>
            </button>
          </div>
        </div>
      </CalendarHead>
      <CalendarBody>
        <div className="row week">
          {['일', '월', '화', '수', '목', '금', '토'].map((el) => (
            <div className="box" key={el}>
              <span className="text">{el}</span>
            </div>
          ))}
        </div>
        {generate()}
      </CalendarBody>
    </div>
  );
};
