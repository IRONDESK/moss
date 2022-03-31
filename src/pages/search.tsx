import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { SearchInput } from '../components/SearchInput';
import { COLOR } from '../constants';

export default function SearchPage() {
  const router = useRouter();
  const searchText = Object.keys(router.query)[0];

  return (
    <SearchPageWrap>
      <SearchInput />
      <NoData>
        &quot;<strong>{searchText}</strong>&quot; 스터디를 찾을 수 없습니다.
      </NoData>
    </SearchPageWrap>
  );
}
const SearchPageWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const NoData = styled.p`
  width: 100%;
  margin: 40px 0;
  color: ${COLOR.deepGray};
  font-size: 18px;
  text-align: center;

  strong {
    font-weight: bold;
  }
`;
