import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import React, { useState } from 'react';
import { FileUpload } from './FileUpload';

export const JoinPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isRegion, setIsRegion] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  const [idMessage, setIdMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [nameMessage, setNameMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === 'id') {
      setId(value);
      const idRegex = /^[a-z0-9_]{2,10}$/;
      if (!idRegex.test(value)) {
        setIdMessage('2~10자의 영문, 숫자, 밑줄만 사용할 수 있습니다.');
        setIsId(false);
      } else {
        setIsId(true);
      }
    } else if (name === 'password') {
      setPassword(value);
      const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}$/;
      if (!passwordRegex.test(value)) {
        setPasswordMessage(
          '비밀번호는 6자 이상 영문과 숫자의 조합이어야 합니다.',
        );
        setIsPassword(false);
      } else {
        setIsPassword(true);
      }
    } else if (name === 'name') {
      setName(value);
      if (value.length < 2 || value.length > 10) {
        setNameMessage('2~10자 이내여야 합니다.');
        setIsName(false);
      } else {
        setIsName(true);
      }
    } else if (name === 'email') {
      setEmail(value);
      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if (!emailRegex.test(value)) {
        setEmailMessage('올바르지 않은 이메일 형식입니다.');
        setIsEmail(false);
      } else {
        setIsEmail(true);
      }
    }
  };

  const [isImage, setIsImage] = useState(false);

  const getIsImage = (img: boolean) => {
    setIsImage(img);
  };

  const [regionColor, setRegionColor] = useState(`${COLOR.placeHolderText}`);

  const handleSelect = (e: React.ChangeEvent<{ value: string }>) => {
    if (e.target.value !== '0') {
      setRegionColor(`${COLOR.black}`);
      setIsRegion(true);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <Form onSubmit={onSubmit}>
        <FileUpload getIsImage={getIsImage} />
        <Label icon="/images/login.svg">
          <Input
            name="id"
            type="text"
            placeholder="아이디"
            value={id}
            onChange={onChange}
          />
        </Label>
        {id.length > 0 && (
          <Error className={`${isId ? 'success' : 'error'}`}>
            {' '}
            {idMessage}
          </Error>
        )}
        <Label icon="/images/lock.svg">
          <Input
            name="password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChange}
          />
        </Label>
        {password.length > 0 && (
          <Error className={`${isPassword ? 'success' : 'error'}`}>
            {' '}
            {passwordMessage}
          </Error>
        )}
        <Label icon="/images/name.svg">
          <Input
            name="name"
            type="text"
            placeholder="이름"
            value={name}
            onChange={onChange}
          />
        </Label>
        {name.length > 0 && (
          <Error className={`${isName ? 'success' : 'error'}`}>
            {' '}
            {nameMessage}
          </Error>
        )}
        <Label className="arrow" icon="/images/location.svg">
          <Select
            defaultValue="0"
            name="region"
            onChange={handleSelect}
            color={regionColor}
          >
            <option value="0" disabled hidden>
              거주지
            </option>
            <option value="1">서울</option>
            <option value="2">경기</option>
          </Select>
        </Label>
        <Label icon="/images/mail.svg">
          <Input
            name="email"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={onChange}
          />
        </Label>
        {email.length > 0 && (
          <Error className={`${isEmail ? 'success' : 'error'}`}>
            {' '}
            {emailMessage}
          </Error>
        )}
        <Button
          disabled={
            !(isImage && isId && isPassword && isName && isRegion && isEmail)
          }
        >
          회원가입
        </Button>
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
    background-color: ${COLOR.main};
  }
`;

const Form = styled.form`
  .arrow {
    &::before {
      content: '';
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

const Label = styled.label<{ icon: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 8px;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
    width: 16px;
    height: 16px;
    background: url(${(props) => props.icon}) no-repeat center;
  }
`;

const Input = styled.input`
  padding: 16px 31px;
  border: 1px solid ${COLOR.gray};
  font-size: 14px;
  &:focus {
    border: 1px solid ${COLOR.main};
    outline: none;
  }
  &::placeholder {
    color: ${COLOR.placeHolderText};
  }
`;

const Select = styled.select`
  position: relative;
  padding: 16px 31px;
  border: 1px solid ${COLOR.gray};
  font-size: 14px;
  appearance: none;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  color: ${(props) => props.color};
  &:focus {
    border: 1px solid ${COLOR.main};
    outline: none;
  }
  option {
    color: ${COLOR.black};
  }
`;

const Button = styled.button`
  margin-top: 18px;
  width: 100%;
  height: 48px;
  border: none;
  background: ${COLOR.main};
  color: ${COLOR.white};
  font-size: 16px;
  &:disabled {
    background: ${COLOR.gray};
    color: ${COLOR.grayText};
  }
`;

const Error = styled.span`
  font-size: 12px;
  padding-bottom: 10px;
  &.success {
    display: none;
  }
  &.error {
    display: block;
    color: ${COLOR.main};
  }
`;
