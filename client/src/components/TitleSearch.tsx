import styled from '@emotion/styled';
import { COLOR } from '../constants';
import { SearchInput } from './SearchInput';

export const TitleSearch = () => {
  return (
    <Wrap>
      <h2>공개 스터디</h2>
      <SearchInput />
    </Wrap>
  );
};

const Wrap = styled.div`
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
`;
