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
  font-size: 25px;
  margin: 10px auto 32px;
  border-bottom: 4px solid ${COLOR.main};
  position: relative;
  span {
    width: 700px;
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
    color: ${COLOR.grayText};
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
  margin: 100px auto;
  width: 400px;
  text-align: center;
  select,
  form {
    width: 100%;
    margin: 10px auto;
    padding: 0 20px;
  }
`;

export const ModalCont = styled(DefaultCont)`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  transform: translate(-50%, 50%);
  width: 500px;
  /* height: 400px; */
  padding-top: 50px;
  padding-bottom: 10px;
  padding: 50px 20px 20px;
  border: 2px solid ${COLOR.gray};
  background-color: white;

  div {
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
  padding: 10px 5px;
  border-radius: 5px;
  font-size: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const EditBtn = styled.button`
  font-size: 15px;
  margin: 10px auto;
  text-align: center;
  &:hover {
    color: ${COLOR.main};
  }
`;
