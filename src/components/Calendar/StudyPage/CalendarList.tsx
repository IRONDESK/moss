import React, { useState } from 'react';
import moment, { Moment as MomentTypes } from 'moment';
import styled from '@emotion/styled';
import { COLOR } from 'src/constants';

export const CalendarList = ({ studyData }: any) => {
  return (
    <StudyList>
      {studyData.map((item: any) => (
        <li
          key={item.id}
          className={item.date === moment().format('YYYY-MM-DD') ? 'today' : ''}
        >
          <p className="date">
            <strong>{item.date.split('-')[2]}</strong>
            <span>{item.day}</span>
          </p>
          <p className="time">
            {item.start} - {item.end}
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
