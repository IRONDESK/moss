import styled from '@emotion/styled';
import * as d3 from 'd3';
import { COLOR } from '../../constants';

type ChartProps = {
    width: number;
    height: number;
    data: number;
};
export const StudyChart = ({width, height, data}: ChartProps) => {
    const MARGIN = 15;
    const radius = Math.min(width, height*2) / 2 - MARGIN;
    const arcPathGenerator = d3.arc();
    const angle = .5 * Math.PI;
    const studyArc = arcPathGenerator({
        innerRadius: 130,
        outerRadius: (radius - 10),
        startAngle : -1*angle,
        endAngle : -angle + (data/100*angle*2),
        padAngle: 0.03,
    });
    const leftArc = arcPathGenerator({
        innerRadius: 130,
        outerRadius: (radius - 10),
        startAngle : -angle + (data/100*angle*2),
        endAngle : angle,
        padAngle: 0.03,
    });
    const bgArc = arcPathGenerator({
        innerRadius: 110,
        outerRadius: radius - 2,
        startAngle : -angle,
        endAngle : angle,
    });

    return (
        <>
        <ChartWrap>
            <ChartSvg width={width} height={height}>
                <g transform={`translate(${width / 2}, ${height})`}>
                    <ChartBgPath key={1} d={bgArc ? bgArc : undefined} />
                    {data <= 0 ? null : <ChartStudyPath key={2} d={studyArc ? studyArc : undefined} />}
                    {data >= 100 ? null : <ChartLeftPath key={3} d={leftArc ? leftArc : undefined} /> }
                    <linearGradient id="MyGradient">
                        <stop offset="0%" stop-color="rgba(178,253,186,1)" ></stop>
                        <stop offset="85%" stop-color="rgba(52,200,138,1)" ></stop>
                    </linearGradient>
                </g>
            </ChartSvg>
            <ChartDot src='/images/ChartDot.svg' />
            <GaugeDot src='/images/GaugeDot.svg' />
            <PercentText>{data}<small>%</small></PercentText>
        </ChartWrap>
        </>
    )
};

const ChartWrap = styled.div`
    position: relative;
`;
const ChartSvg = styled.svg`
    display: inline-block;
`;

const ChartStudyPath = styled.path`
    fill: url('#MyGradient');
    stroke: ${COLOR.main};
    stroke-width: 2px;
    transform: scale(0.96) translateY(-9px);
`;
const ChartLeftPath = styled.path`
    fill: #E8E9EB;
    stroke: #D4D6DA;
    stroke-width: 2px;
    transform: scale(0.96) translateY(-9px);
`;
const ChartBgPath = styled.path`
    fill: #F9F9F9;
    stroke: #F5F5F5;
    stroke-width: 2px;
    transform: translateY(-6px);
    filter: drop-shadow( 0px 0px 10px rgba(146, 98, 6, .08));
`;

const ChartDot = styled.img`
    position: absolute;
    width: 290px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -52%);
`;
const GaugeDot = styled.img`
    position: absolute;
    width: 190px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -15px);
`;
const PercentText = styled.p`
    position: absolute;
    width: 170px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -10px);
    font-size: 52px;
    font-weight: 700;
    small {
        font-size: 27px;
        font-weight: 500;
    }
`;