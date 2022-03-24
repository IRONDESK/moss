import { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

import { COLOR } from '../../constants';
import { StudyChart } from './StudyChart';
import { StudyTimer } from './StudyTimer';

export const Record = () => {
    return (
    <Container>
        <Title>스터디 기록</Title>
        <SubTitle>Study Record</SubTitle>
        <Contents>
            <StudyChart
                width={400}
                height={200}
                data={66}
            />
            <GoalTime>3시간 30분</GoalTime>
            <StudyTimer
                goalHour={3}
                goalMinute={30}
            />
        </Contents>
        <Link href="/study/notice">
            <Button>목표 설정하기</Button>
        </Link>
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
    color: ${COLOR.main};
    font-size: 14px;
`;