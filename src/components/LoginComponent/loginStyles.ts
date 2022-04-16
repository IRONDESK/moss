import styled from '@emotion/styled';
import { COLOR } from 'src/constants';

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  width: 60px;
  font-size: 30px;
  margin: 10px auto 66px;
  border-bottom: 4px solid ${COLOR.main};
  position: relative;
  span {
    width: 200px;
    position: absolute;
    bottom: 16px;
    text-align: center;
  }
`;

export const Error = styled.span`
  background: #fff5f5;
  color: ${COLOR.error};
  width: 100%;
  padding: 12px;
  text-align: center;
  font-size: 14px;
  margin-bottom: 12px;
`;

export const Container = styled.section`
  padding: 10px;
  margin: 0 auto;
  width: 50%;
  width: 340px;
  select,
  form {
    width: 100%;
  }
  form > input,
  select {
    height: 48px;
    text-align: center;
    font-size: 14px;
  }
  select {
    color: ${COLOR.deepGray};
    border: none;
    border-bottom: 3px solid ${COLOR.main};
    font-size: 20px;
    outline: none;
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    input {
      color: ${COLOR.grayText};
      border: 1px solid ${COLOR.gray};
      margin-bottom: 10px;
      &::placeholder {
        color: ${COLOR.grayText};
      }
      &:focus {
        outline: 1px solid ${COLOR.main};
      }
    }
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
