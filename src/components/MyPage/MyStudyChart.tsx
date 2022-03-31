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
      <Goal>
        <p className="title">목표 공부 시간 달성률</p>
        <p className="percent">{props.percent}%</p>
      </Goal>
      <GoalBar>
        <BigImg src="./images/icons/bigBar.png" alt="목표까지 남은 퍼센트" />
        <SmallImg
          src="./images/icons/smallBar.png"
          alt="목표까지 남은 퍼센트"
          width={`${props.percent}%`}
        />
      </GoalBar>
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

const Goal = styled.section`
  display: flex;
  width: 80%;
  justify-content: space-between;
  .title {
    margin: 0 0 27px 20px;
    position: relative;
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      left: -20px;
      background: url('/images/icons/flag.png') no-repeat;
      width: 18px;
      height: 20px;
    }
  }
  .percent {
    font-size: 24px;
  }
`;

const GoalBar = styled.section`
  width: 80%;
  position: relative;
`;
const BigImg = styled.img`
  width: 100%;
  position: absolute;
`;
const SmallImg = styled.img`
  position: absolute;
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
