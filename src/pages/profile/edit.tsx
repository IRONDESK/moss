import useUser from 'src/libs/client/useUser';
import { Btn, Container, H1, InputWrap } from 'src/styles/componentsStyles';

function Edit() {
  const { loggedInUser } = useUser();
  console.log(loggedInUser);
  //
  return (
    <>
      <Container>
        <H1>
          <span>아이디 | 비밀번호 수정</span>
        </H1>
        <form>
          <InputWrap>
            <input type="text" placeholder="새로운 아이디를 입력하세요." />
            <input type="text" placeholder="새로운 비밀번호를 입력하세요." />
            <input type="text" placeholder="비밀번호를 재입력하세요." />
            <Btn type="submit">아이디 및 비밀번호 수정하기</Btn>
          </InputWrap>
        </form>
      </Container>
    </>
  );
}

export default Edit;
