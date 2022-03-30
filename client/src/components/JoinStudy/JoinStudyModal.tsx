import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';

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
  const [goal, setGoal] = useState('');
  const [reason, setReason] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'goal') {
      setGoal(e.target.value);
    } else if (name === 'reason') {
      setReason(e.target.value);
    }
  };
  return (
    <>
      {modal ? (
        <animated.div style={animation}>
          <Container>
            <Button onClick={() => setModal((prev: boolean) => !prev)}>
              <Img src="/images/icons/close.png"></Img>
            </Button>
            <h1>
              <div>스터디 신청</div>
            </h1>
            <form action="">
              <div>
                <label htmlFor="goal">각오한마디</label>
                <input
                  name="goal"
                  id="goal"
                  type="text"
                  onChange={onChange}
                  placeholder="placeholder"
                />
              </div>
              <div>
                <label htmlFor="reason">참여목적</label>
                <textarea
                  name="reason"
                  id="reason"
                  onChange={onChange}
                  placeholder="placeholder"
                />
              </div>
              <button className="apply-btn" disabled={!(goal && reason)}>
                스터디 신청
              </button>
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
    .apply-btn {
      margin-top: 12px;
      background-color: ${COLOR.main};
      color: #fff;
      font-size: 16px;
      width: 100%;
      padding: 17px 0;
    }
    &:disabled {
      background-color: ${COLOR.gray};
      color: ${COLOR.grayText};
    }
  }
`;

const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Img = styled.img``;
