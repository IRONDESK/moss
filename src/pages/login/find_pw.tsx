import { useState } from 'react';
import { FindForm } from 'src/components/Find/FindForm';
import useMutation from 'src/libs/client/useMutation';
import { Container, H1 } from 'src/styles/components';

export default function find_pw() {
  //비밀번호는 아이디로 찾도록 한다.

  //POST
  const [findPw, { data, loading }] = useMutation(`/api/users/find-pw`);

  //
  return (
    <>
      <Container>
        <H1>
          <span>비밀번호 찾기</span>
        </H1>
        <FindForm
          method="user-id"
          data={data}
          findPw={findPw}
          loading={loading}
        />
      </Container>
    </>
  );
}
