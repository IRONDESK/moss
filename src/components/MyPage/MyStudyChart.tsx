import styled from '@emotion/styled';
import * as d3 from 'd3';
import { COLOR } from '../../constants';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
interface Studygoal {
  percent: Number;
  attendance: Number;
  month: Number;
  studyhour: number;
}
export const MyStudyChart = () => {
  const [timeData, setTimedata] = useState(0);
  const [dayData, setDayData] = useState(0);
  const { data } = useSWR<any>('/api/goal');
  useEffect(() => {
    if (data) {
      timeSet();
    }
  }, [data]);
  function timeSet() {
    if (data?.goalData) {
      setTimedata(data?.goalData?.time);
      setDayData(data?.goalData?.day);
    } else {
      setTimedata(0);
      setDayData(0);
    }
  }
  const studiedTime = Math.floor(timeData / 60);
  const hour = Math.floor(studiedTime / 60);
  const minute = Math.floor(studiedTime % 60);

  return (
    <MyStudyCharts>
      <GoalDay>
        <div className="flex">
          <p>출석일</p>
          <p className="content">{dayData}일</p>
        </div>
        <div className="flex">
          <p>공부시간</p>
          <p className="content">
            {hour}시간{minute}분
          </p>
        </div>
      </GoalDay>
    </MyStudyCharts>
  );
};

const MyStudyCharts = styled.section`
  /* width: 50vw; */
  color: #fff;
`;

const GoalDay = styled.section`
  display: flex;
  margin-top: 30px;
  align-items: center;
  margin-bottom: 43px;
  width: max-content;
  @media (max-width: 640px) {
    gap: 50px;
  }
  .flex {
    display: flex;
    align-items: center;
    @media (max-width: 640px) {
      align-items: flex-start;
      flex-direction: column;
      gap: 10px;
    }
  }
  .content {
    font-size: 32px;
    margin: 0 24px 0 17px;
    vertical-align: top;
    @media (max-width: 640px) {
      margin: unset;
      font-size: 25px;
    }
  }
`;
