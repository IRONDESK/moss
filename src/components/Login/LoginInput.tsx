import { Error } from 'src/styles/components';
import { InputProps } from 'src/types/Login';

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
