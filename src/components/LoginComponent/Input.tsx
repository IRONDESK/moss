import { UseFormRegisterReturn } from 'react-hook-form';
import styled from '@emotion/styled';
import { COLOR } from 'src/constants';

interface InputProps {
  name: string;
  register: UseFormRegisterReturn;
  register2?: UseFormRegisterReturn;
  required?: boolean;
  [key: string]: any;
}
export default function Input({
  name,
  method,
  register,
  register2,
  required,
  errorMsg,
  errorMsg2,
  ...rest
}: InputProps) {
  return (
    <>
      <input {...register} required={required} {...rest} />
      {method === 'userId' ? (
        <input
          {...register2}
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요."
        />
      ) : null}
      {errorMsg ? (
        <Error>{errorMsg}</Error>
      ) : errorMsg2 ? (
        <Error>{errorMsg2}</Error>
      ) : null}
    </>
  );
}
const Error = styled.span`
  background: #fff5f5;
  color: ${COLOR.error};
  width: 100%;
  padding: 12px;
  text-align: center;
  font-size: 14px;
  margin-bottom: 12px;
`;
