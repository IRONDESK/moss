import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { useSpring, animated } from 'react-spring';

interface IModal {
  modal: boolean;
  setModal: Function;
}

export const JoinStudyModal = ({ modal, setModal }: IModal) => {
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: modal ? 1 : 0,
    transfrom: modal ? `translateY(0%)` : `translateY(-100%)`,
  });
  return (
    <>
      {modal ? (
        <animated.div style={animation}>
          <Container>
            <button onClick={() => setModal((prev: boolean) => !prev)}>
              ❌
            </button>
            <h1>
              <div>로그인</div>
            </h1>
            <form action="">
              <div>
                <label htmlFor="goal">각오한마디</label>
                <input id="goal" type="text" placeholder="placeholder" />
              </div>
              <div>
                <label htmlFor="reason">참여목적</label>
                <textarea id="reason" type="text" placeholder="placeholder" />
              </div>
              <button>스터디 신청</button>
            </form>
          </Container>
        </animated.div>
      ) : null}
    </>
  );
};
const Container = styled.section`
  position: absolute;
  top: 15vh;
  left: 50%;
  transform: translate(-50%);
  background-color: #ffff;
  z-index: 999;
  border: 1px solid ${COLOR.gray};
  padding: 90px 50px;
  height: 600px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    &:nth-child(1) {
      border: none;
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }
  h1 {
    width: 60px;
    border-bottom: 4px solid #34c88a;
    padding-bottom: 16px;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    position: relative;
  }
  h1 > div {
    position: absolute;
    width: 200px;
    bottom: 16px;
    text-align: center;
    font-size: 32px;
  }
  form {
    width: 100%;
    height: 100%;
    font-size: 12px;
    input {
      margin-top: 4px;
      border: 1px solid ${COLOR.gray};
      width: 100%;
      padding: 16px 12px;
      display: block;
      font-size: 14px;
      &::placeholder {
        font-size: 14px;
        color: ${COLOR.grayText};
      }
      &:focus {
        outline: 1px solid ${COLOR.main};
      }
    }
    div:nth-child(1) {
      input {
        margin-bottom: 20px;
      }
    }
    div:nth-child(2) {
      textarea {
        margin-top: 4px;
        width: 100%;
        height: 140px;
        border: 1px solid ${COLOR.gray};
        width: 100%;
        padding: 16px 12px;
        font-size: 14px;
        font-family: Gmarket Sans;
        &::placeholder {
          font-size: 14px;
          color: ${COLOR.grayText};
        }
        &:focus {
          outline: 1px solid ${COLOR.main};
        }
      }
    }
    button {
      margin-top: 12px;
      background-color: ${COLOR.gray};
      color: ${COLOR.grayText};
      font-size: 16px;
      width: 100%;
      padding: 17px 0;
    }
  }
`;
