import { useState } from 'react';
import { FindForm } from 'src/components/Find/FindForm';
import useMutation from 'src/libs/client/useMutation';
import { Container, H1 } from 'src/styles/components';

export default function find_id() {
  //아이디는 이메일이나 휴대폰 번호로 찾도록 한다.
  const [method, setMethod] = useState('');
  const onClick = (option: React.FormEvent<HTMLSelectElement>) => {
    setMethod(option.currentTarget.value);
  };
  //POST
  const [findId, { data, loading }] = useMutation(`/api/users/find-id`);

  //
  return (
    <>
      <Container>
        <H1>
          <span>아이디 찾기</span>
        </H1>

        <label htmlFor="login-select" className="a11y-hidden">
          로그인 방식 선택
        </label>
        <select onInput={onClick} value={method} id="login-select">
          <option value="">이메일 또는 휴대폰 번호를 선택해주세요.</option>
          <option value="email">이메일로 아이디 찾기</option>
          <option value="phone">휴대폰 번호로 아이디 찾기</option>
        </select>
        <FindForm
          data={data}
          method={method}
          findId={findId}
          loading={loading}
          errMsg={data?.error}
        />
      </Container>
    </>
  );
}
