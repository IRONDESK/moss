import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import { FileUpload } from '../Join/FileUpload';

interface StudyModal {
  modal: boolean;
  setModal: Function;
}
export const StudyButton = ({ modal, setModal }: StudyModal) => {
  const [isImage, setIsImage] = useState(false);
  const [sayhi, setSayhi] = useState('가입을 환영합니다🤚');
  const [isHi, setIsHi] = useState(false);
  const getIsImage = (img: boolean) => {
    setIsImage(img);
  };

  const [regionColor, setRegionColor] = useState(`${COLOR.placeHolderText}`);
  const handleSelect = (event: React.ChangeEvent<{ value: string }>) => {
    if (event.target.value !== 'xx') {
      setRegionColor(`${COLOR.black}`);
      setSayhi(event.target.value);
      setIsHi(true);
    }
  };
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: modal ? 1 : 0,
    transfrom: modal ? `translateY(0%)` : `translateY(-100%)`,
  });

  return (
    <StudyButtonPage>
      <StudySetBtn onClick={() => setModal((prev: boolean) => !prev)}>
        스터디 신청하기
      </StudySetBtn>
      {modal ? (
        <animated.div style={animation}>
          <Container>
            <CloseBtn
              onClick={() => setModal((prev: boolean) => !prev)}
            ></CloseBtn>
            <Form>
              <h1>
                <div>스터디 개설</div>
              </h1>
              <FileUpload getIsImage={getIsImage} />
              <Label></Label>
              <Label htmlFor="study-name">스터디 이름</Label>
              <Input
                id="study-name"
                type="text"
                placeholder="스터디 이름을 작성해주세요"
              />
              <Label htmlFor="study-des">소개</Label>
              <Input
                id="study-des"
                type="text"
                placeholder="스터디 소개을 작성해주세요"
              />
              <Label htmlFor="study-tag">태그</Label>
              <Input
                id="study-tag"
                type="text"
                placeholder="스터디에 해당하는 태그를 작성해주세요"
              />
              <Label htmlFor="study-tag">스터디 인원</Label>
              <Input
                id="study-tag"
                type="number"
                placeholder="스터디 인원 제한을 설정하세요"
              />
              <Label htmlFor="study-tag">카카오톡 오픈채팅 링크</Label>
              <Input
                id="study-tag"
                type="text"
                placeholder="오픈 채팅 url을 넣어주세요"
              />
              <Label className="arrow">
                가입 인사
                <Select
                  defaultValue="xx"
                  name="region"
                  onChange={handleSelect}
                  color={regionColor}
                >
                  <option value="가입을 환영합니다🤚">
                    가입을 환영합니다🤚
                  </option>
                  <option value="Welcome😃">Welcome😃</option>
                  <option value="반갑습니다🥰">반갑습니다🥰</option>
                </Select>
              </Label>
              <MakeBtn>스터디 개설</MakeBtn>
            </Form>
          </Container>
        </animated.div>
      ) : null}
    </StudyButtonPage>
  );
};

const StudyButtonPage = styled.section`
  width: 540px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StudySetBtn = styled.button`
  width: 120px;
  height: 32px;
  border: 1px solid ${COLOR.main};
  border-radius: 40px;
  color: ${COLOR.main};
`;

const Container = styled.section`
  position: absolute;
  top: 15vh;
  left: 50%;
  transform: translate(-50%);
  background-color: #ffff;
  z-index: 999;
  border: 1px solid ${COLOR.gray};
  padding: 90px 50px;
  height: 1019px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    padding-bottom: 16px;
    display: flex;
    justify-content: center;
    position: relative;
    font-size: 32px;
    &:after {
      content: '';
      display: block;
      background: url('./images/icons/titleUnderBar.png');
      width: 60px;
      height: 4px;
      position: absolute;
      top: 40px;
    }
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: url('./images/icons/close.png') no-repeat;
  width: 25px;
  height: 20px;
`;

const Input = styled.input`
  margin: 4px 0 20px;
  border: 1px solid ${COLOR.gray};
  width: 400px;
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
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 8px;
`;

const Select = styled.select<{ color: string }>`
  position: relative;
  padding: 16px 31px;
  margin-top: 4px;
  border: 1px solid ${COLOR.gray};
  color: ${(props) => props.color};
  font-family: 'Gmarket Sans';
  font-size: 14px;
  appearance: none;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  option {
    padding: 15px;
    color: ${COLOR.black};
  }
`;

const Form = styled.form`
  .arrow {
    &::after {
      content: '';
      position: absolute;
      top: 65%;
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

const MakeBtn = styled.button`
  width: 400px;
  height: 48px;
  margin-top: 33px;
  background-color: ${COLOR.gray};
  color: ${COLOR.grayText};
`;
