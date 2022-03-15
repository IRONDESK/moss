import styled from '@emotion/styled';

export const StudyCard = (props: {
    category: string,
    title: string,
    hashtag: string,
    member: number,
    link: string}) => {
    return (
        <CardWrap>
        <Thumbnail>
            <Detail>
            <Category>{props.category}</Category>
            <Title>{props.title}</Title>
            <Hashtag>{props.hashtag}</Hashtag>
            </Detail>
        </Thumbnail>
        <Join>
            <Member>{props.member}/10</Member>
            <StudyBtn href={props.link}>
                <EnterImg src='/images/ArrowGreen.svg' alt="스터디 자세히 보기" />
            </StudyBtn>
        </Join>
        </CardWrap>
    )
}

const CardWrap = styled.article`
    padding: 16px;
    border: 2px solid #eeeeee;
    box-sizing: border-box;
`;

const Thumbnail = styled.div`
    position: relative;
    height: 180px;
    background: skyblue;
`;

const Detail = styled.div`
    position: absolute;
    padding: 14px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
`;

const Category = styled.span`
    display: inline-block;
    padding: 4px 8px;
    background-color: rgba(0, 0, 0, 0.2);
    font-family: 'Noto Sans KR';
    font-size: 0.8rem;
    color: #fff;
    border-radius: 40px;
    box-sizing: border-box;
    z-index: 1;
`;
const Title = styled.h3`
    position: absolute;
    bottom: calc(14px + 1rem);
    font-size: 1.4rem;
    font-weight: 700;
    color: #fff;
`;
const Hashtag = styled.p`
    position: absolute;
    bottom: 14px;
    font-size: 0.85rem;
    font-weight: 300;
    color: #fff;
`;

const Join = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 9px;
`;

const Member = styled.span`
    position: relative;
    margin-top: 5px;
    padding-left: 24px;
    font-size: 0.9rem;
    &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 0;
    background: url('/images/login.svg');
    background-position: top;
    background-size: 16px;
    width: 15px;
    height: 15px;
    }
`;
const StudyBtn = styled.a`
    display: flex;
    flex-direction: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: #fff;
    border: 1px solid rgba(52, 200, 138, 0.4);
`;
const EnterImg = styled.img`
    width: 17px;
`;