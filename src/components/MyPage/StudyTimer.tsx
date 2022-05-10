import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import { COLOR } from '../../constants';

type TimeProps = {
  goalHour: number;
  goalMinute: number;
  getPercent: any;
  percent: number;
  getTimeList: any;
  TimeList: any;
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
  getPercent,
  percent,
  getTimeList,
  TimeList,
}: TimeProps) => {
  const [remainTime, setRemainTime] = useState(defaultTime);
  const [playStatus, setPlayStatus] = useState(false);
  const [alreadyStart, setAlreadyStart] = useState(false);
  const [startTime, setStartTime] = useState<string | undefined>();
  const targetTime = goalMinute * 60 + goalHour * 60 * 60;
  const { data } = useSWR<any>('/api/goal');
  let [attandenceDay, setAttandenceDay] = useState(0);
  let [studyTime, setStudyTime] = useState(0);

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

  function attandence() {
    if (data?.goalData) {
      setAttandenceDay((attandenceDay = data?.goalData?.day + 1));
      alert('출석하셨습니다! 오늘도화이팅!!');
    } else {
      setAttandenceDay(+1);
      alert('출석하셨습니다! 오늘도화이팅!!');
    }
  }

  function ChangePlayStatus() {
    if (!playStatus && (goalHour > 0 || goalMinute > 0)) {
      setPlayStatus(true);
    } else {
      getPercent(
        (percent = Math.floor((1 - remainTime.time / targetTime) * 100)),
      );
      if (data?.goalData) {
        setStudyTime(
          (studyTime = data?.goalData?.time + (targetTime - remainTime.time)),
        );
      } else {
        setStudyTime(targetTime - remainTime.time);
      }
      getTimeList((TimeList = { day: attandenceDay, time: studyTime }));
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

  return (
    <Wrap>
      <AllBtnWrap>
        <TimerControl>
          <PlayBtn
            onClick={ChangePlayStatus}
            defaultChecked={playStatus}
          ></PlayBtn>
          <StopBtn onClick={StopTimerReset}></StopBtn>
        </TimerControl>
        <AttendanceBtn onClick={attandence}>출석</AttendanceBtn>
      </AllBtnWrap>
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

const AllBtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const TimerControl = styled.div`
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
