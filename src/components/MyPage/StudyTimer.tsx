import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { COLOR } from '../../constants';

type TimeProps = {
  goalHour: number;
  goalMinute: number;
  getTime: any;
  percent: number;
  day: number;
};

const defaultTime = {
  time: 0,
  seconds: 0,
  minutes: 0,
  hours: 0,
};
export const StudyTimer = ({
  goalHour,
  goalMinute,
  getTime,
  percent,
  day,
}: TimeProps) => {
  const [remainTime, setRemainTime] = useState(defaultTime);
  const [playStatus, setPlayStatus] = useState(false);
  const [alreadyStart, setAlreadyStart] = useState(false);
  const [startTime, setStartTime] = useState<string | undefined>();
  const targetTime = goalMinute * 60 + goalHour * 60 * 60;

  useEffect(() => {
    setRemainTime({
      time: goalMinute * 60 + goalHour * 60 * 60,
      seconds: 0,
      hours: goalHour,
      minutes: goalMinute,
    });
  }, [alreadyStart]);

  useEffect(() => {
    setTimeout(() => {
      if (remainTime.time === 0) {
        return;
      }
      if (playStatus) {
        setRemainTime({
          time: remainTime.time - 1,
          seconds:
            remainTime.time - Math.floor((remainTime.time - 1) / 60) * 60 - 1,
          minutes:
            Math.floor((remainTime.time - 1) / 60) -
            Math.floor((remainTime.time - 1) / 60 / 60) * 60,
          hours: Math.floor((remainTime.time - 1) / 60 / 60),
        });
      }
    }, 1000);
  }, [remainTime.time, playStatus]);

  useEffect(() => {
    if (remainTime.time < targetTime) {
      setAlreadyStart(true);
    }
  }, [playStatus]);

  useEffect(() => {
    getStartTime();
  }, [alreadyStart]);

  function ChangePlayStatus() {
    if (!playStatus && (goalHour > 0 || goalMinute > 0)) {
      setPlayStatus(true);
    } else {
      getTime((percent = Math.floor((1 - remainTime.time / targetTime) * 100)));
      setPlayStatus(false);
    }
  }

  function getStartTime() {
    const today = new Date();
    const now = today.toLocaleString().split(' ');
    setStartTime(now[3] + ' ' + now[4]);
  }
  function StopTimerReset() {
    setPlayStatus(false);
    setAlreadyStart(false);
  }
  function ChangeDigit(nums: number) {
    return ('00' + nums).slice(-2);
  }

  function attendance() {
    getTime(day + 1);
  }

  return (
    <Wrap>
      <BtnWrap>
        <PlayBtn
          onClick={ChangePlayStatus}
          defaultChecked={playStatus}
        ></PlayBtn>
        <StopBtn onClick={StopTimerReset}></StopBtn>
      </BtnWrap>
      <AttendanceBtn onClick={attendance}>출석하기</AttendanceBtn>
      <TimeWrap>
        <Timer>
          {ChangeDigit(remainTime.hours)}:{ChangeDigit(remainTime.minutes)}:
          {ChangeDigit(remainTime.seconds)}
        </Timer>
        <StartTime>{alreadyStart ? '시작시간 ' + startTime : null}</StartTime>
      </TimeWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const BtnWrap = styled.div`
  button {
    margin-right: 3px;
    display: inline-block;
    width: 32px;
    height: 32px;
    border: 1px solid ${COLOR.boxBorder};
    background-image: url('/images/timer_sprite.png');
    background-position-y: center;
    background-size: 88px;
    background-repeat: no-repeat;
  }
`;
const PlayBtn = styled.button<{ defaultChecked: boolean }>`
  background-position-x: ${(props) =>
    props.defaultChecked ? '3px' : 'center'};
`;
const StopBtn = styled.button`
  background-position-x: -62px;
`;
const AttendanceBtn = styled.button`
  border: 1px solid ${COLOR.boxBorder};
  width: 80px;
  height: 32px;
  margin-right: 280px;
`;

const TimeWrap = styled.div`
  text-align: right;
  line-height: 2.05rem;
`;
const Timer = styled.p`
  font-weight: 700;
  font-size: 2.1rem;
`;
const StartTime = styled.p`
  color: ${COLOR.grayText};
`;
