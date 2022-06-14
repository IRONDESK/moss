import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Btn, Error, InputWrap } from 'src/styles/components';
import { FindError } from 'src/styles/components/Find-id-pw';
import { IFindForm, IFindProps, ILoginForm } from 'src/types/Login';
import Input from '../Login/LoginInput';
import { FindModal } from './modal/FindModal';

export const FindForm = ({
  method,
  findId,
  findPw,
  loading,
  data,
}: IFindProps) => {
  //

  //FORM SUBMIT
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFindForm>({
    mode: 'onChange',
  });

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

  //확인모달
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
      <>
        {data?.error && <Error>{data?.error}</Error>}
        {method === 'user-id' && data?.userIdFail && (
          <FindError>
            <p>{data?.userIdFail}</p>
            <p>아이디찾기 페이지로 이동하시겠습니까?</p>
            <div>
              <Link href="/login/find_id">
                <a className="move">이동</a>
              </Link>
              <button onClick={() => window.location.reload()}>취소</button>
            </div>
          </FindError>
        )}
      </>
      <form onSubmit={handleSubmit(onValid)}>
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
      <>
        {(method === 'email' || 'phone') && modal ? (
          <FindModal message={data?.message} modalClick={modalClick} />
        ) : null}
        {method === 'user-id' && modal ? (
          <FindModal message={data?.message} modalClick={modalClick} />
        ) : null}
      </>
    </>
  );
};
