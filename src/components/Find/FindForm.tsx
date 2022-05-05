import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Btn, Error, InputWrap } from 'src/styles/components';
import { IFindForm, IFindProps, ILoginForm } from 'src/types/Login';
import Input from '../Login/LoginInput';
import { Id_Modal } from './modal/Id_Modal';

export const FindForm = ({
  method,
  findId,
  findPw,
  loading,
  data,
}: IFindProps) => {
  //
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFindForm>({
    mode: 'onChange',
  });
  //FORM SUBMIT
  const onValid = ({ email, phone, userId }: ILoginForm) => {
    reset();
    if (loading) return;
    if (method === 'email') {
      return findId({ email });
    }
    if (method === 'phone') {
      phone = phone?.replace(/-/g, '');
      return findId({ phone });
    }
    if (method === 'user-id') {
      return findPw({ userId });
    }
  };

  //Found Id Pw Modal
  const [modal, setModal] = useState(false);
  const modalClick = () => {
    modal ? setModal(false) : setModal(true);
  };
  useEffect(() => {
    if (data?.ok) {
      modalClick();
    }
  }, [data]);
  //
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        {data?.error && <Error>{data?.error}</Error>}
        {method === 'email' && (
          <>
            <InputWrap>
              <Input
                register={register('email', {
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: '이메일 형식이 올바르지 않습니다.',
                  },
                  required: '이메일을 입력하세요!',
                })}
                name="email"
                type="text"
                placeholder="이메일을 입력하세요."
                errorMsg={errors.email?.message}
                label="이메일"
              />
              <Btn>{loading ? '로딩중...' : '이메일로 아이디 찾기'}</Btn>
            </InputWrap>
          </>
        )}

        {method === 'phone' && (
          <>
            <InputWrap>
              <Input
                type="text"
                register={register('phone', {
                  pattern: {
                    value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
                    message: '휴대폰 입력이 올바르지 않습니다.',
                  },
                  required: '휴대폰 번호를 입력하세요!',
                })}
                name="phone"
                placeholder="휴대폰 번호를 입력하세요."
                errorMsg={errors.phone?.message}
                label="휴대폰 번호"
              />
              <Btn>{loading ? '로딩중...' : '휴대폰 번호로 아이디 찾기'}</Btn>
            </InputWrap>
          </>
        )}
        {method === 'user-id' && (
          <>
            <InputWrap>
              <input
                {...register('userId', { required: '아이디를 입력하세요!' })}
                type="text"
                placeholder="아이디를 입력하세요."
              />
              <Btn>{loading ? '로딩중...' : '아이디로 비밀번호 찾기'}</Btn>
            </InputWrap>
          </>
        )}
      </form>
      {modal && <Id_Modal message={data?.message} modalClick={modalClick} />}
    </>
  );
};
