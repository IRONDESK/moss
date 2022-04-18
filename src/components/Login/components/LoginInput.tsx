import { UseFormRegisterReturn } from 'react-hook-form';
import { Error } from '../../../styles/loginStyles';

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

//TS
interface InputProps {
  name: string;
  register: UseFormRegisterReturn;
  register2?: UseFormRegisterReturn;
  required?: boolean;
  [key: string]: any;
}
