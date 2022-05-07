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
  const { data } = useSWR<any>('/api/goal');
  useEffect(() => {
    if (data) {
      timeSet();
    }
  }, [data]);
  function timeSet() {
    if (data?.goalData) {
      setTimedata(data?.goalData?.time);
    } else {
      setTimedata(0);
    }
  }
  const studiedTime = Math.floor(timeData / 60);
  const hour = Math.floor(studiedTime / 60);
  const minute = Math.floor(studiedTime % 60);
  const upData = data?.goalData?.updatedAt.slice(5, 7)[1];

  return (
    <MyStudyCharts>
      <GoalDay>
        <p>출석일</p>
        <p className="content">{data?.goalData?.day}일</p>
        <p>{upData}월 공부시간</p>
        <p className="content">
          {hour}시간{minute}분
        </p>
      </GoalDay>
    </MyStudyCharts>
  );
};

const MyStudyCharts = styled.section`
  width: 50vw;
  color: #fff;
`;

const GoalDay = styled.section`
  display: flex;
  margin-top: 30px;
  align-items: center;
  margin-bottom: 43px;
  .content {
    font-size: 32px;
    margin: 0 24px 0 17px;
    vertical-align: top;
  }
`;
