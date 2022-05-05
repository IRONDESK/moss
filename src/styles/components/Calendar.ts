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

  & + .dim,
  & + .dim2 {
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
export const DeleteConfirmModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  button {
    margin: 0;
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
    font-style: italic;
    font-size: 15px;
  }
`;
export const ConfirmModal = styled(DeleteConfirmModal)`
  background-color: white;
  border: 1px solid ${COLOR.boxBorder};
  p {
    &.success {
      color: ${COLOR.main};
    }
    &.fail {
      color: ${COLOR.error};
    }
    margin: 15px auto;
    font-size: 20px;
    font-style: normal;
  }
  button {
    &.success {
      background-color: ${COLOR.main};
      &:hover {
        background-color: #00b894;
      }
    }
    &.fail {
      background-color: ${COLOR.error};
      &:hover {
        background-color: #c0392b;
      }
    }
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
export const EditBtn = styled.input`
  background-color: white;
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
export const CalendarHead = styled.div`
  .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .title {
    font-size: 24px;
    strong {
      font-weight: bold;
    }
  }
  .prev,
  .next {
    position: relative;
    width: 24px;
    height: 24px;
    margin-left: 8px;
    font-size: 10px;
    padding: 0;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .prev::before {
    background: #fff url('/images/arrow-left.svg') no-repeat 50% 50% / cover;
  }
  .next::before {
    background: #fff url('/images/arrow-right.svg') no-repeat 50% 50% / cover;
  }
`;
export const CalendarBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .week {
    font-family: 'Noto Sans KR', sans-serif;
  }
  .row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3em;
      height: 3em;
      border-radius: 50%;
      position: relative;
      border: 1px solid transparent;

      &.selected {
        border: 1px solid ${COLOR.main};
      }
      &.today {
        &::before {
          content: '';
          display: block;
          width: 8px;
          height: 8px;
          box-sizing: border-box;
          border-top: 8px solid ${COLOR.main};
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          position: absolute;
          top: -3px;
        }
      }
      &.yes {
        &::after {
          content: '';
          display: block;
          width: 8px;
          height: 8px;
          background: ${COLOR.point};
          border-radius: 50%;
          position: absolute;
          bottom: 2px;
        }
      }
    }
  }

  .grayed {
    color: #ccc;
  }
`;
