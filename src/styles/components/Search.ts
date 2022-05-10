import styled from '@emotion/styled';
import { COLOR } from 'src/constants';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    &::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 0.9em;
      margin-right: 4px;
      background-color: ${COLOR.main};
      vertical-align: -0.1em;
    }
  }
  @media (max-width: 440px) {
    h2 {
      width: 100%;
    }
  }
`;
export const SearchForm = styled.form`
  position: relative;
  height: 48px;
  width: 290px;
  input {
    border: 1px solid ${COLOR.gray};
    width: 100%;
    height: 100%;
    padding-right: 48px;
    color: ${COLOR.black};
    text-indent: 10px;
    transition: all 0.3s;

    &::placeholder {
      color: ${COLOR.placeHolderText};
    }
    &:active,
    &:focus {
      outline: none;
      border: 1px solid ${COLOR.main};
      & + button {
        background: rgba(${COLOR.rgbMain}, 1) url(/images/search_white.svg)
          no-repeat 50% 50% / 60%;
      }
    }
  }
  button {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    background: rgba(${COLOR.rgbMain}, 0.1) url(/images/search_black.svg)
      no-repeat 50% 50% / 60%;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    transition: all 0.3s;
  }
  .a11y-hidden {
    overflow: hidden;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  }
  @media (max-width: 440px) {
    input {
      position: absolute;
      clip: rect(0, 0, 0, 0);
      width: 1px;
      height: 1px;
      position: absolute;
    }
    button {
      background: ${COLOR.main} url(/images/search_white.svg) no-repeat 50% 50% /
        60%;
    }
  }
`;
