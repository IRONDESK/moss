import styled from '@emotion/styled';

export const Backgroud = styled.div`
  background: #f0efed;
  width: 100%;
  height: 600px;
  position: absolute;
  left: 0;
  z-index: -1;
  overflow: hidden;
  &::before {
    content: '';
    display: block;
    width: 500px;
    height: 500px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    position: absolute;
    top: -30%;
    left: 60%;
  }
`;
