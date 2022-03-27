import { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

import { COLOR } from '../../constants';
import { StudyChart } from './StudyChart';
import { StudyTimer } from './StudyTimer';

export const Record = () => {
    const [goalHour, setGoalHour] = useState(0);
    const [goalMinute, setGoalMinute] = useState(0);
    const [goalInputBox, setGoalInputBox] = useState(false);

    function HourChange (e : React.ChangeEvent<HTMLInputElement>) {
        if (Number(e.target.value) < 13) {
            setGoalHour(Number(e.target.value));
        } else {
            return ;
        }
    };
    function MinuteChange (e : React.ChangeEvent<HTMLInputElement>) {
        if (Number(e.target.value) < 60) {
            setGoalMinute(Number(e.target.value));
        } else {
            return ;
        }
    };
    function showBox () {
        setGoalInputBox(goalInputBox ? false : true);
    };

    return (
    <Container>
        <Title>스터디 기록</Title>
        <SubTitle>Study Record</SubTitle>
        <Contents>
            { goalInputBox ?
            (<InputWrap>
                <HoursInput onChange={HourChange} value={goalHour} min={0} max={12}></HoursInput>시간 <MinutesInput onChange={MinuteChange} value={goalMinute} min={0} max={59}></MinutesInput>분
            </InputWrap>) : null
            }
            <StudyChart
                width={400}
                height={200}
                data={66}
            />
            <GoalTime>{goalHour > 0 || goalMinute > 0 ? goalHour + "시간 " + goalMinute + "분" : "목표를 설정해주세요"}</GoalTime>
            <StudyTimer
                goalHour={goalHour}
                goalMinute={goalMinute}
            />
        </Contents>
        <Button onClick={showBox} defaultChecked={goalInputBox}>목표 설정하기</Button>
    </Container>
    )
};

const Container = styled.section`
    position: relative;
    padding: 48px 24px 16px;
    margin: 16px 0;
    width: 496px;
    border: 1px solid ${COLOR.boxBorder};
    &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 32px;
    width: 40px;
    height: 48px;
    background: ${COLOR.main} url('/images/notice.svg') no-repeat 50% 70%;
    }
`;

const Title = styled.h2`
    position: relative;
    margin: 16px 8px 0;
    color: ${COLOR.black};
    font-size: 24px;
`;

const SubTitle = styled.span`
    margin: 0 8px;
    color: ${COLOR.grayText};
    font-size: 16px;
    line-height: 24px;
`
const Contents = styled.article`
    text-align: center;
`;

const InputWrap = styled.div`
    margin: 10px 5px;
    padding: 12px 0;
    background: ${COLOR.main};
    color: ${COLOR.white};
    font-size: 1.1rem;
    input {
        margin: 0 3px;
        width: 55px;
        text-align: center;
        background: none;
        color: ${COLOR.white};
        font-size: 1.15rem;
        border: none;
        border-bottom: 3px solid ${COLOR.white};
    }
`
const HoursInput = styled.input``
const MinutesInput = styled.input``

const GoalTime = styled.div`
    position: relative;
    display: inline-block;
    margin: 16px 0;
    padding-left: 30px;
    text-align: center;
    font-size: 1.4rem;
    &::before {
        position: absolute;
        content: '';
        width: 26px;
        height: 26px;
        top: -3px;
        left: 0;
        background-image: url('/images/goal.svg');
        background-size: 26px;
        background-repeat: no-repeat;
    }
`;

const Button = styled.a`
    position: absolute;
    top: 57px;
    right: 33px;
    padding: 10px 30px 8px;
    border: 1px solid ${COLOR.main};
    border-radius: 40px;
    color: ${prop => prop.defaultChecked ? COLOR.white : COLOR.main};
    background-color: ${prop => prop.defaultChecked ? COLOR.main : 'none'};
    font-size: 14px;
`;