import styled from '@emotion/styled';
import { COLOR } from 'src/constants';

export const ImgLabel = styled.label`
  display: block;
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 120px;
  height: 120px;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 36px;
    height: 36px;
    border-radius: 25px;
    background: ${COLOR.main} url('/images/image.svg') no-repeat center;
  }
`;

export const ProfileImg = styled.div`
  background: url('/images/profile.svg');
  background-size: cover;
  background-position: center;
  border: none;
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;
export const Avatar = styled(ProfileImg)<{ src: string }>`
  background-image: url('${(props) => props.src}');
`;

export const AvatarInput = styled.input`
  display: none;
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  width: 60px;
  font-family: 'Gmarket Sans';
  font-size: 25px;
  margin: 10px auto 32px;
  border-bottom: 4px solid ${COLOR.main};
  position: relative;
  span {
    width: 350px;
    position: absolute;
    bottom: 16px;
    text-align: center;
  }
`;

export const Error = styled.div`
  background-color: #fff5f5;
  color: ${COLOR.error};
  width: 100%;
  padding: 12px;
  text-align: center;
  font-size: 14px;
`;

export const Blank = styled(Error)`
  &:first-of-type {
    display: block;
  }
  font-size: 20px;
  display: none;
`;

export const Message = styled(Error)`
  background: none;
  color: ${COLOR.main};
  font-size: 16px;
  font-style: italic;
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  textarea,
  input {
    padding: 16px;
    width: 100%;
    height: 48px;
    font-size: 14px;
    color: ${COLOR.black};
    border: 1px solid ${COLOR.gray};
    &::placeholder {
      color: ${COLOR.grayText};
    }
    &:focus {
      outline: 1px solid ${COLOR.main};
    }
  }
`;

export const DefaultCont = styled.section`
  padding: 10px;
  margin: 100px auto 0;
  max-width: 400px;
  min-width: 300px;
  text-align: center;
  select,
  form {
    width: 100%;
    margin: 10px auto;
    padding: 0 20px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  img {
    width: 20px;
    height: 20px;
  }
`;

export const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    width: 100%;
  }
`;

export const SelectBtn = styled.button`
  margin-top: 25px;
  font-size: 20px;
  position: relative;
`;

export const Circle = styled.div`
  position: absolute;
  right: 50%;
  bottom: -30%;
  transform: translate(-50%);
  //
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: ${COLOR.main};
`;

const Modal = styled.article`
  border: 2px solid ${COLOR.gray};
  background-color: white;
  width: 600px;
  padding: 20px;
`;

export const SchCont = styled(Modal)`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  transform: translate(-350px, 350px);
  //
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  //
`;

export const AfterModal = styled(SchCont)`
  gap: 10px;
  div {
    font-size: 30px;
  }
`;

export const CreatedSch = styled.article`
  width: 100%;
  padding-top: 30px;
  h1 {
    margin: 0 auto 10px;
  }
`;

export const CreateSch = styled(CreatedSch)`
  form {
    width: 100%;
    div {
      .error,
      input,
      textarea,
      button {
        font-size: 18px;
      }
      input,
      textarea {
        border: 1px solid ${COLOR.darkergray};
        font-family: 'Gmarket Sans';
      }
      textarea {
        height: 150px;
      }
    }
  }
`;

export const ScheduleWrap = styled.div`
  ul {
    margin-bottom: 20px;
  }
`;

export const ScheduleList = styled.ul`
  border: 2px solid ${COLOR.darkergray};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  h3 {
    padding-left: 10px;
    font-size: 20px;
    font-style: italic;
  }
  li {
    border-radius: 10px;
    background-color: ${COLOR.gray};
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    p {
      font-size: 16px;
      color: ${COLOR.deepGray};
      span {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
`;

export const Container = styled(DefaultCont)`
  select {
    height: 48px;
    text-align: center;
    font-size: 14px;
    color: ${COLOR.deepGray};
    border: none;
    border-bottom: 3px solid ${COLOR.main};
    font-size: 20px;
    outline: none;
    margin-bottom: 20px;
  }
`;

export const Btn = styled.button`
  background-color: ${COLOR.main};
  color: white;
  width: 100%;
  height: 48px;
  padding: 10px 5px;
  font-size: 1rem;
`;

export const EditBtn = styled.button`
  font-size: 15px;
  margin: 10px auto;
  text-align: center;
  &:hover {
    color: ${COLOR.main};
  }
`;
