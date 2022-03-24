import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { COLOR } from '../../constants';

type TimeProps = {
    goalHour: number,
    goalMinute: number,
};
export const StudyTimer = ({goalHour, goalMinute}: TimeProps) => {
    return (
    <Wrap>
        <BtnWrap>
            <PlayBtn></PlayBtn>
            <StopBtn></StopBtn>
        </BtnWrap>
        <TimeWrap>
            <Timer>02:53:13</Timer>
            <StartTime>시작시간 20:20:13</StartTime>
        </TimeWrap>
    </Wrap>
    )
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
const PlayBtn = styled.button`
    background-position: center;
`;
const StopBtn = styled.button`
    background-position-x: -62px;
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