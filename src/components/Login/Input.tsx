import { UseFormRegisterReturn } from 'react-hook-form';
import styled from '@emotion/styled';

interface InputProps {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  register2?: UseFormRegisterReturn;
  required?: boolean;
  [key: string]: any;
}
export default function Input({
  name,
  label,
  method,
  register,
  register2,
  btnTitle,
  required,
  errorMsg,
  errorMsg2,
  ...rest
}: InputProps) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      {method === 'email' ? (
        <InputContainer>
          <input {...register} required={required} {...rest} />
          <button type="submit">{btnTitle}</button>
          {errorMsg}
        </InputContainer>
      ) : null}

      {method === 'phone' ? (
        <InputContainer>
          <input {...register} required={required} {...rest} />
          <button type="submit">{btnTitle}</button>
          {errorMsg}
        </InputContainer>
      ) : null}
      {method === 'userId' ? (
        <InputContainer>
          <input {...register} required={required} {...rest} />
          <input
            {...register2}
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
          />
          <button type="submit">{btnTitle}</button>
          {errorMsg}
          {errorMsg2}
        </InputContainer>
      ) : null}
    </Container>
  );
}
const Container = styled.div`
  /* background-color: red; */
  padding: 10px;
  label {
    display: block;
    margin-bottom: 5px;
  }
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  input {
    padding: 10px;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: red;
  }
`;
