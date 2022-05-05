import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useMutation from 'src/libs/client/useMutation';
import { useRouter } from 'next/router';
import useUser from 'src/libs/client/useUser';

import {
  Avatar,
  AvatarInput,
  Error,
  ImgLabel,
  ProfileImg,
} from 'src/styles/components';
import { studyForm, StudyModal } from 'src/types/Study';

export const CreateStudy = ({ modal, setModal }: StudyModal) => {
  const router = useRouter();
  const [checkmodal, setCheckmodal] = useState(false);
  const { loggedInUser } = useUser();
  //POST API
  const [study, { loading, data }] = useMutation('/api/study/create');
  //useForm
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<studyForm>();
  const onSubmit: SubmitHandler<studyForm> = async ({
    studyName,
    introduce,
    category,
    tag,
    membersLimit,
    chatLink,
    image,
    joinMsg,
  }) => {
    if (loading) return;
    //스터디 사진 업로드 + 스터디생성
    if (image && image.length > 0 && loggedInUser?.id) {
      const { uploadURL } = await (await fetch(`/api/upload/image`)).json();
      const form = new FormData();
      form.append('file', image[0], loggedInUser?.id + '');
      const {
        result: { id },
      } = await (
        await fetch(uploadURL, {
          method: 'POST',
          body: form,
        })
      ).json();
      //
      setModal(false);
      setCheckmodal(true);
      return study({
        studyName,
        introduce,
        category,
        tag,
        membersLimit,
        chatLink,
        joinMsg,
        imageId: id,
      });
    } else {
      //사진업로드 없이 스터디생성
      setModal(false);
      setCheckmodal(true);
      return study({
        studyName,
        introduce,
        category,
        tag,
        membersLimit,
        chatLink,
        joinMsg,
      });
    }
  };

  //페이지 이동
  const MoveToStudyPage = () => {
    if (data?.ok) {
      setCheckmodal(!checkmodal);
      return router.push(`/study/${data?.study.id}`);
    }
  };

  //스터디 사진 업로드
  const [imagePreview, setImagePreview] = useState('');
  const previewArray = watch('image');
  useEffect(() => {
    if (previewArray && previewArray.length > 0) {
      const previewObject = previewArray[0];
      setImagePreview(URL.createObjectURL(previewObject));
    }
  }, [previewArray]);

  return (
    <>
      <StudyWrap>
        <StudySetBtn onClick={() => setModal((prev: boolean) => !prev)}>
          스터디 개설
        </StudySetBtn>
      </StudyWrap>
      {modal ? (
        <Container size="large">
          <CloseBtn onClick={() => setModal((prev: boolean) => !prev)} />
          <h1>
            <div>스터디 개설</div>
          </h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <ImgLabel>
              {imagePreview ? <Avatar src={imagePreview} /> : <ProfileImg />}
              <AvatarInput
                {...register('image')}
                type="file"
                name="image"
                accept="image/*"
              />
            </ImgLabel>

            <Label htmlFor="study-name">스터디 이름</Label>
            <Input
              {...register('studyName', {
                required: '스터디 이름을 작성해주세요.',
              })}
              name="studyName"
              id="study-name"
              type="text"
              placeholder="스터디 이름을 작성해주세요"
            />
            {errors.studyName && <Error>{errors.studyName.message}</Error>}

            <Label htmlFor="study-des">소개</Label>
            <Input
              {...register('introduce')}
              name="introduce"
              id="study-des"
              type="text"
              placeholder="스터디 소개를 작성해주세요"
            />

            <Label htmlFor="study-category">카테고리</Label>
            <Input
              {...register('category')}
              name="category"
              id="study-category"
              type="text"
              placeholder="스터디에 해당하는 카테고리를 작성해주세요"
            />

            <Label htmlFor="study-tag">태그</Label>
            <Input
              {...register('tag')}
              name="tag"
              id="study-tag"
              type="text"
              placeholder="스터디에 해당하는 태그를 작성해주세요"
            />

            <Label htmlFor="study-members">스터디 인원</Label>
            <Input
              {...register('membersLimit')}
              name="membersLimit"
              id="study-members"
              type="number"
              min={3}
              placeholder="최소 3인 이상의 인원을 설정해주세요"
            />

            <Label htmlFor="study-chatlink">카카오톡 오픈채팅 링크</Label>
            <Input
              {...register('chatLink')}
              name="chatLink"
              id="study-chatlink"
              type="text"
              placeholder="오픈 채팅 URL을 넣어주세요"
            />

            <Label htmlFor="study-joinmsg">가입 인사</Label>
            <Select {...register('joinMsg')} name="joinMsg" id="study-joinmsg">
              <option value="가입을 환영합니다🤚">가입을 환영합니다🤚</option>
              <option value="Welcome😃">Welcome😃</option>
              <option value="반갑습니다🥰">반갑습니다🥰</option>
            </Select>

            <CreateButton
              type="submit"
              // disabled={!(isName && isDes && isMember && isHi)}
            >
              스터디 개설
            </CreateButton>
          </Form>
        </Container>
      ) : null}
      {checkmodal ? (
        <Container size="small">
          <CloseBtn onClick={() => setCheckmodal((prev: boolean) => !prev)} />
          <h1>
            <div>스터디 개설</div>
          </h1>
          <AlretMsg>
            스터디가 개설되었습니다.
            <ul>
              <li>
                <dt>스터디명</dt>
                <dd>{data?.study.studyName}</dd>
              </li>
              <li>
                <dt>인원</dt>
                <dd>{data?.study.membersLimit}</dd>
              </li>
              <li>
                <dt>오픈채팅</dt>
                <dd>{data?.study.chatLink}</dd>
              </li>
            </ul>
            스터디 페이지로 이동하시겠습니까?
          </AlretMsg>
          <ButtonArray>
            <CreateButton onClick={MoveToStudyPage}>예</CreateButton>
            <CreateButton
              onClick={() => setCheckmodal((prev: boolean) => !prev)}
            >
              아니오
            </CreateButton>
          </ButtonArray>
        </Container>
      ) : null}
    </>
  );
};

const StudyWrap = styled.article`
  margin: 45px 0 0 0;
  text-align: center;
`;

const StudySetBtn = styled.button`
  padding: 5px 3px;
  display: inline-block;
  width: 120px;
  color: ${COLOR.main};
  font-size: 16px;
  line-height: 25px;
  border: 1px solid ${COLOR.main};
  border-radius: 40px;
  &:hover {
    background-color: ${COLOR.main};
    color: ${COLOR.white};
  }
`;

const Container = styled.section<{ size: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${COLOR.white};
  border: 1px solid ${COLOR.gray};
  padding: 90px 50px;
  width: 500px;
  height: ${(props) => (props.size == 'large' ? '1019px' : '550px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  h1 {
    padding-bottom: 16px;
    display: flex;
    justify-content: center;
    position: relative;
    font-size: 29px;
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
  cursor: pointer;
  top: 18px;
  right: 18px;
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

const Select = styled.select`
  width: 100%;
  position: relative;
  padding: 16px 12px;
  margin-top: 4px;
  border: 1px solid ${COLOR.gray};
  color: ${(props) => props.color};
  font-family: 'Gmarket Sans';
  font-size: 14px;
  option {
    padding: 15px;
    color: ${COLOR.black};
  }
`;

const Form = styled.form`
  padding-top: 20px;
`;

const CreateButton = styled.button`
  margin-top: 33px;
  width: 100%;
  height: 48px;
  background: ${COLOR.main};
  font-size: 16px;
  color: ${COLOR.white};
  &:disabled {
    background: ${COLOR.gray};
    color: ${COLOR.grayText};
  }
`;

const AlretMsg = styled.div`
  margin: 20px auto;
  font-size: 20px;
  text-align: center;
  line-height: 25px;
  ul {
    margin: 13px auto;
    padding: 10px;
    width: 100%;
    background-color: ${'rgba(' + COLOR.rgbMain + ', 0.2)'};
    li {
      display: flex;
      font-size: 16px;
      dt {
        flex: 1;
        font-weight: 600;
      }
      dd {
        flex: 3;
        font-size: 14px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
`;
const ButtonArray = styled.div`
  display: flex;
  gap: 15px;
  width: 400px;
`;
