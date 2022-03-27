import styled from "@emotion/styled";
import { useState } from "react";
import { COLOR } from "../../constants";

interface ImageProps {
  getIsImage: (img: boolean) => void 
}

export const FileUpload = ({getIsImage}: ImageProps) => {

  const [image, setImage] = useState("/images/profile.svg")
  const [isImage, setIsImage] = useState(false)

  const preview = (file: Blob) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => setImage(`${reader.result}`)
  }

  const imagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if(files && files.length) {
      preview(files[0])
    }
    setIsImage(true)
    getIsImage(true)
  }

  return (
    <ImgLabel>
      <Img className={`${isImage ? 'upload': ''}`} src={image} alt="프로필 이미지" />
      <ImgInput
        type="file"
        id="img"
        accept="image/*"
        onChange={imagePreview}
      ></ImgInput>
    </ImgLabel>
  );
};
        
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

const Img = styled.img<{ src: string }>`
  width: 100%;
  height: 100%;
  background: url('${props => props.src}');
  object-fit: cover;
  border-radius: 100px;
  border: 0.2px solid ${COLOR.gray};
  &.upload {
    display: block
  }
`

const ImgInput = styled.input`
  display: none;
`;
