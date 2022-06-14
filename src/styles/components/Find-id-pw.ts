import styled from '@emotion/styled';
import { COLOR } from 'src/constants';
import { Error } from '../components';

export const FindError = styled(Error)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  div {
    color: black;
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      &.move {
        &:hover {
          color: ${COLOR.main};
        }
      }
      &.cancel {
        &:hover {
          color: ${COLOR.error};
        }
      }
    }
  }
`;

export const Modal = styled.article`
  width: 600px;
  height: 300px;
  max-width: calc(100% - 60px);
  padding: 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  background: #fff;
  z-index: 20;
`;
export const FoundResultModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-family: 'Gmarket Sans';
  .btn-wrap {
    display: flex;
    gap: 20px;
  }
  .btn {
    cursor: pointer;
    background-color: #fff;
    padding: 9px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-family: 'Gmarket Sans';
    font-size: 14px;
    line-height: 14px;
    transition: all 0.2s;
    border: 1px solid #e7e6e2;
    &:hover {
      background: #eee;
    }
  }
  a {
    padding: 9px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLOR.main};
    font-size: 14px;
    line-height: 14px;
    transition: all 0.2s;
    border: 1px solid ${COLOR.main};
    &:hover {
      background: ${COLOR.main};
      color: #fff;
    }
  }
`;
export const Dim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;
