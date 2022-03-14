import styled from "@emotion/styled";
import { COLOR } from "../../constants";

export const JoinPage = () => {

  return (
    <Container>
      <Title>회원가입</Title>
      <Form>
        <ImgLabel>
          <img  src="/images/profile.svg" alt="기본 프로필 이미지" />
          <ImgInput
            type="file"
            name="upload"
            accept="image/*"
          />
        </ImgLabel>
        <Label icon="/images/login.svg">
          <Input
            name="id"
            type="text"
            placeholder="아이디"
          ></Input>
        </Label>
        <Label icon="/images/lock.svg">
          <Input
            name="password"
            type="password"
            placeholder="비밀번호"
          ></Input>
        </Label>
        <Label icon="/images/name.svg">
          <Input
            name="name"
            type="text"
            placeholder="이름"
          ></Input>
        </Label>
        <Label className="arrow" icon="/images/location.svg">
          <Select name="residence">
            <option value="" disabled selected hidden>거주지</option>
            <option value="a">서울</option>
            <option value="b">경기</option>
          </Select>
        </Label>
        <Label icon="/images/mail.svg">
          <Input
            name="email"
            type="email"
            placeholder="이메일"
          ></Input>
        </Label>
        <Button disabled>회원가입</Button>
      </Form>
    </Container>
  );
};

const Container = styled.section`
  margin: 100px auto 0;
  max-width: 340px;
`;

const Title = styled.h2`
  position: relative;
  padding: 16px 0;
  color: ${COLOR.black};
  font-size: 32px;
  text-align: center;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 60px;
    height: 4px;
    background-color: ${COLOR.main}
  }
`;

const Form = styled.form`
  .arrow {
    &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 18px;
    width: 7px;
    height: 7px;
    border-top: 2px solid ${COLOR.black};
    border-right: 2px solid ${COLOR.black};
    transform: translate(0, -70%) rotate(135deg);
    z-index: 10;
    }
  }
`;

const ImgLabel = styled.label`
  display: block;
  position: relative;
  margin: 32px auto 20px;
  width: 120px;
  height: 120px;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 36px;
    height: 36px;
    border-radius: 25px;
    background: ${COLOR.main} url("/images/image.svg") no-repeat center;
  }
`;

const ImgInput = styled.input`
  display: none;
`;

const Label = styled.label<{icon:string}>`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 8px;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
    width: 16px;
    height: 16px;
    background: url(${props => props.icon}) no-repeat center;
  } 
`;

const Input = styled.input`
  padding: 16px 31px;
  border: 1px solid #E7E6E2;
  font-size: 14px;
  &:focus {
    border: 1px solid ${COLOR.main};
    outline: none;
  }
  &::placeholder {
    color: #aaa;
  }
`;

const Select = styled.select`
  position: relative;
  padding: 16px 31px;
  border: 1px solid #E7E6E2;
  color: #333;
  font-size: 14px;
  appearance: none;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:first-of-type {
    color: #aaa;
  }
  &:focus {
    border: 1px solid ${COLOR.main};
    outline: none;
  }
  option {
    color: #333;
    font-size: 14px;
  }
`;

const Button = styled.button`
  margin-top: 18px;
  width: 100%;
  height: 48px;
  border: none;
  background: ${COLOR.main};
  color: #fff;
  font-size: 16px;
  &:disabled {
    background: #E7E6E2;
    color: #B7B6B3;
  }
`;