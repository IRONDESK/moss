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
  font-size: 20px;
  .btn {
    color: white;
    font-size: inherit;
    padding: 10px 20px;
    width: 50%;
    border: none;
    border-radius: 10px;
    background-color: ${COLOR.main};
    &:hover {
      color: #27ae60;
    }
  }
  a {
    text-decoration: underline;
    font-style: italic;
    &:hover {
      color: ${COLOR.main};
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
