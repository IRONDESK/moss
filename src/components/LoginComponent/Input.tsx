import { UseFormRegisterReturn } from 'react-hook-form';
import styled from '@emotion/styled';
import { COLOR } from 'src/constants';

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
  required,
  errorMsg,
  errorMsg2,
  ...rest
}: InputProps) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      {method === 'token' ? (
        <InputContainer>
          <input {...register} required={required} {...rest} />
          <span>{errorMsg}</span>
        </InputContainer>
      ) : null}

      {method === 'email' ? (
        <InputContainer>
          <input {...register} required={required} {...rest} />
          <span>{errorMsg}</span>
        </InputContainer>
      ) : null}

      {method === 'phone' ? (
        <InputContainer>
          <input {...register} required={required} {...rest} />
          <span>{errorMsg}</span>
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
          <span>
            {errorMsg} {errorMsg2}
          </span>
        </InputContainer>
      ) : null}
    </Container>
  );
}
const Container = styled.div`
  padding: 10px;
  label {
    display: block;
    text-align: center;
    margin: 5%;
    font-size: 1.2rem;
    color: ${COLOR.point};
  }
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  input {
    padding: 20px 30px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    margin-bottom: 10px;
    &::placeholder {
      color: ${COLOR.grayText};
      font-size: 20px;
    }
    &:focus {
      outline: 3px solid ${COLOR.main};
    }
    border: 1px solid ${COLOR.gray};
    font-size: 20px;
  }
  span {
    text-align: center;
    color: ${COLOR.error};
  }
`;
