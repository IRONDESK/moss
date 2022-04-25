import styled from '@emotion/styled';
import { COLOR } from 'src/constants';

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  width: 60px;
  font-size: 25px;
  margin: 10px auto 66px;
  border-bottom: 4px solid ${COLOR.main};
  position: relative;
  span {
    width: 700px;
    position: absolute;
    bottom: 16px;
    text-align: center;
  }
`;

export const Error = styled.div`
  background: #fff5f5;
  color: ${COLOR.error};
  width: 100%;
  padding: 12px;
  text-align: center;
  font-size: 14px;
  margin-bottom: 10px;
  &:first-of-type {
    margin: 10px 0;
  }
`;

export const Message = styled(Error)`
  background-color: ${COLOR.main};
  background-color: #2ecc71;
  color: white;
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  input {
    padding: 16px;
    width: 100%;
    height: 48px;
    font-size: 14px;
    color: ${COLOR.grayText};
    border: 1px solid ${COLOR.gray};
    &::placeholder {
      color: ${COLOR.grayText};
    }
    &:focus {
      outline: 1px solid ${COLOR.main};
    }
  }
`;

export const Container = styled.section`
  padding: 10px;
  margin: 100px auto;
  width: 400px;
  text-align: center;
  select,
  form {
    width: 100%;
    margin: 10px auto;
    padding: 0 20px;
  }
  select {
    height: 48px;
    text-align: center;
    font-size: 14px;
    color: ${COLOR.deepGray};
    border: none;
    border-bottom: 3px solid ${COLOR.main};
    font-size: 20px;
    outline: none;
    margin-bottom: 20px;
  }
`;

export const Btn = styled.button`
  background-color: ${COLOR.main};
  color: white;
  width: 100%;
  padding: 10px 5px;
  border-radius: 5px;
  font-size: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const EditBtn = styled.button`
  font-size: 15px;
  margin: 10px auto;
  text-align: center;
  &:hover {
    color: ${COLOR.main};
  }
`;
