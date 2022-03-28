import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

export default function Test() {
  const { register, handleSubmit, watch } = useForm();
  const onValid = () => {
    console.log(`Create Account Succeed!!`);
  };
  console.log(watch());
  return (
    <>
      <H1>회원가입</H1>
      <JoinForm onSubmit={handleSubmit(onValid)}>
        <input
          {...register('userId', { required: true })}
          type="text"
          placeholder="아이디"
        />
        <input
          {...register('password', { required: true })}
          type="password"
          placeholder="비밀번호"
        />
        <input
          {...register('name', { required: true })}
          type="text"
          placeholder="이름"
        />
        <input
          {...register('location', { required: true })}
          type="text"
          placeholder="거주지"
        />
        <input
          {...register('email', { required: true })}
          type="text"
          placeholder="이메일"
        />
        <input type="submit" value="회원가입" />
      </JoinForm>
    </>
  );
}

const H1 = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  gap: 10px;
`;
