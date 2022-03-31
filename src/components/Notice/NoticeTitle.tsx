import styled from '@emotion/styled';
import { COLOR } from '../../constants';

export const NoticeTitle = () => {
  return <H2Title>공지사항</H2Title>;
};

const H2Title = styled.h3`
  height: 44px;
  margin-top: 3rem;
  padding: 8px 40px;
  box-sizing: border-box;
  background: ${COLOR.main} url(../../images/notice.svg) no-repeat 12px 10px /
    24px;
  color: #fff;
  line-height: 30px;
  font-size: 20px;
  font-weight: 700;
`;
