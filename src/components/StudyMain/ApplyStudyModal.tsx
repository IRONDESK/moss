import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { useEffect, useState } from 'react';
import useMutation from 'src/libs/client/useMutation';
import useUser from 'src/libs/client/useUser';
import useSWR from 'swr';

interface IModal {
  modal: boolean;
  setModal: Function;
  joinMsg: string|undefined;
  studyid: number|undefined;
}

export const ApplyStudyModal = ({ modal, setModal, joinMsg, studyid }: IModal) => {
  const { data } = useSWR(`/api/study/create?id=${studyid}`);
  const [memberList, setMemberList] = useState([data?.joinMember]);

  const [studyset] = useMutation('/api/study/apply');

  const { isLoggedIn, loggedInUser } = useUser();
  const [userid, setUserid] = useState<any>("");
  useEffect(() => {
      setUserid(loggedInUser?.userId);
  }, [isLoggedIn, loggedInUser])

  const applyStudy = () => {
    console.log(userid);
    setMemberList([...memberList, userid]);
    studyset({memberList, studyid})
    setModal((prev: boolean) => !prev);
  };
  
  return (
    <>
      {modal ? (
          <Container>
            <Close onClick={() => setModal((prev: boolean) => !prev)}>
              <img src="/images/icons/close.png" alt="창 닫기" />
            </Close>
            <Title>
              <div>스터디 신청</div>
            </Title>
            <JoinMsg>
              {joinMsg}
            </JoinMsg>
              이 스터디에 신청하시겠습니까?
              <Button onClick={applyStudy}>확인</Button>
          </Container>
      ) : null}
    </>
  );
};

const Container = styled.section`
  position: absolute;
  top: 15vh;
  height: 450px;
  left: 50%;
  transform: translate(-50%);
  background-color: #ffff;
  z-index: 999;
  border: 1px solid ${COLOR.gray};
  padding: 90px 50px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    width: 95%;
    padding: 90px 30px;
  }
`;

const Title = styled.h1`
  width: 60px;
  border-bottom: 4px solid #34c88a;
  padding-bottom: 16px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  position: relative;
  & > div {
    position: absolute;
    width: 200px;
    bottom: 16px;
    text-align: center;
    font-size: 32px;
  }
`;

const JoinMsg = styled.h3`
  position: relative;
  display: block;
  width: 70%;
  margin: 19px 0;
  padding: 28px 6px;
  text-align: center;
  font-size: 20px;
  border: 1px solid ${COLOR.main};
  &::before {
    content: '스터디장의 메시지';
    position: absolute;
    display: inline-block;
    width: 45%;
    top: -6.25%;
    left: 50%;
    color: ${COLOR.main};
    font-size: 13px;
    font-weight: 700;
    background: ${COLOR.white};
    transform: translateX(-50%);
  }
`;

const Form = styled.form`
  text-align: center;
`;

const Button = styled.button`
  margin: 12px 0;
  width: 260px;
  height: 48px;
  background-color: ${COLOR.main};
  color: #fff;
  font-size: 19px;
  text-align: center;
  box-sizing: border-box;
`;

const Close = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;