import styled from '@emotion/styled';
import * as d3 from 'd3';
import { COLOR } from '../../constants';

export const MyStudyChart = (props: {
  percent: Number;
  attendance: Number;
  month: Number;
  studyhour: number;
}) => {
  let hour: number = Math.floor(props.studyhour / 60);
  let minute: number = props.studyhour % 60;
  return (
    <MyStudyCharts>
      <GoalDay>
        <p>출석일</p>
        <p className="content">{props.attendance}일</p>
        <p>{props.month}월 중 공부시간</p>
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
