import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import JoinInput from 'src/components/Join/components/JoinInput';
import { Btn, Container, H1, InputWrap } from 'src/styles/componentsStyles';

//ts
export interface joinForm {
  username?: string;
  userId?: string;
  password?: string;
  password2?: string;
  email?: string;
  phone?: string;
  location?: string;
  avatar?: string;
}
function Profile() {
  const { register, handleSubmit } = useForm();
  const onValid = (data: joinForm) => {
    console.log(data);
  };
  //
  return (
    <Container>
      <H1>
        <span>프로필 편집</span>
      </H1>
      <form onSubmit={handleSubmit(onValid)}>
        <InputWrap>
          <JoinInput
            register={register('username')}
            required={false}
            name="username"
            type="text"
            placeholer="수정할 이름을 적어주세요."
          />

          <JoinInput
            register={register('email')}
            required={false}
            name="email"
            type="email"
            placeholer="수정할 이메일를 적어주세요."
          />

          <JoinInput
            register={register('phone')}
            required={false}
            name="phone"
            type="number"
            placeholer="수정할 휴대폰 번호를 적어주세요."
          />

          <JoinInput
            register={register('location')}
            required={false}
            name="location"
            type="text"
            placeholer="수정할 위치를 적어주세요."
          />
          <Btn type="submit">프로필 수정</Btn>
        </InputWrap>
      </form>
    </Container>
  );
}

export default Profile;
