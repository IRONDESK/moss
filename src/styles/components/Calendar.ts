import styled from '@emotion/styled';
import { COLOR } from 'src/constants';

export const Modal = styled.section`
  width: 500px;
  max-width: calc(100% - 60px);
  padding: 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 20;

  & + .dim {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 10;
  }

  .label-text {
    display: block;
    margin: 20px 0 10px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
  }
  input {
    height: 48px;
    width: 100%;
    border: 1px solid ${COLOR.gray};
    padding: 0 10px;
    &::placeholder {
      color: ${COLOR.grayText};
    }
  }
  .timeWrap {
    display: flex;
    gap: 8px;
  }
  button {
    margin-top: 24px;
  }
  .btn-close {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: 40px;
  }
`;
export const DeleteSchModal = styled.div`
  & + .dim {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
  width: 400px;
  height: 250px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 444;
  background-color: ${COLOR.errorBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    width: 80%;
    height: 50px;
    &.cancel {
      &:hover {
        background-color: #27ae60;
        color: white;
      }
    }
    &.delete {
      background-color: #e74c3c;
      &:hover {
        background-color: #c0392b;
        color: white;
      }
    }
  }
  p {
    color: #e74c3c;
    margin: 15px auto;
    font-style: italic;
    font-size: 15px;
  }
`;
export const ConfirmModal = styled(DeleteSchModal)`
  background-color: white;
  p {
    color: ${COLOR.main};
    margin: 15px auto;
    font-size: 20px;
    font-style: normal;
  }
`;

export const StudyList = styled.ul`
  font-family: 'Noto Sans KR', sans-serif;
  height: 300px;
  overflow-y: scroll;
  li {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:nth-of-type(odd) {
      background: #f9f9f9;
    }
    div {
      height: 64px;
    }
    &.today .date {
      background: ${COLOR.main};
      color: #fff;
    }
    .date {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 80px;
      strong {
        font-size: 24px;
      }
    }
  }
`;
export const Container = styled.div`
  display: flex;
  gap: 24px;
  border: 1px solid #ddd;
  padding: 40px;
  grid-column-start: 1;
  grid-column-end: 3;

  & > div:first-of-type {
    padding-right: 24px;
    border-right: 1px solid #eee;
  }
  @media (max-width: 1024px) {
    flex-direction: column;

    & > div:first-of-type {
      padding-right: 0;
      border-right: 0;
      border-bottom: 1px solid #eee;
      padding-bottom: 24px;
      margin-bottom: 24px;
    }
  }
`;
export const StudyListWrap = styled.div`
  flex-grow: 1;
  position: relative;
  h3 {
    font-size: 24px;
    margin-bottom: 16px;
    span {
      font-size: 16px;
      color: ${COLOR.grayText};
    }
  }
  .btn {
    position: absolute;
    top: -10px;
    right: 0;
    border: 1px solid ${COLOR.main};
    color: ${COLOR.main};
    height: 32px;
    border-radius: 20px;
    padding: 0 16px;
    transition: all 0.2s;
    &:hover {
      background: ${COLOR.main};
      color: #fff;
    }
  }

  .modal {
    width: 500px;
    padding: 50px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    z-index: 20;
  }
  .modal + .dim {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
`;
export const Wrap = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  .content {
    width: 80%;
    text-align: center;
  }
`;
export const SecondWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .time {
    width: 100px;
  }
`;
export const BtnWrap = styled.div`
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
export const EditBtn = styled.button`
  border-radius: 10px;
  padding: 5px 10px;
  border: 2px solid ${COLOR.main};
  &:hover {
    background-color: ${COLOR.main};
    color: white;
  }
`;
export const DelBtn = styled(EditBtn)`
  border: 2px solid #e74c3c;
  &:hover {
    background-color: #e74c3c;
    color: white;
  }
`;
