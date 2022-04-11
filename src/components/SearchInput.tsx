import styled from '@emotion/styled';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { COLOR } from '../constants';

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?${searchValue}`);
  };
  return (
    <Search onSubmit={handleSubmit}>
      <label htmlFor="search-input" className="a11y-hidden">
        검색
      </label>
      <input
        value={searchValue}
        onChange={handleChange}
        className="search-input"
        id="search-input"
        type="search"
        placeholder="검색어를 입력하세요"
      />
      <button type="submit">
        <span className="a11y-hidden">검색</span>
      </button>
    </Search>
  );
};

const Search = styled.form`
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
