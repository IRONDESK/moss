import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import useMutation from 'src/libs/client/useMutation';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { StudyList } from '../StudyList';
import { SearchForm, Wrap } from 'src/styles/components/Search';
import { SearchList } from './SearchList';

interface ISearch {
  search?: string | any;
}

export const TitleSearch = () => {
  const router = useRouter();

  //Post
  const [searchTitle, { loading, data, error }] = useMutation(`/api/search`);
  // console.log(data);

  //Submit
  const { register, handleSubmit, reset } = useForm();
  const onValid = ({ search }: ISearch) => {
    reset();
    if (loading) return;
    return searchTitle(search);
  };

  //
  return (
    <>
      <Wrap>
        <h2>공개 스터디</h2>
        <SearchForm onSubmit={handleSubmit(onValid)}>
          <label htmlFor="search-input" className="a11y-hidden">
            검색
          </label>
          <input
            {...register('search')}
            name="search"
            className="search-input"
            id="search-input"
            type="search"
            placeholder="검색어를 입력하세요"
          />
          <button type="submit">
            <span className="a11y-hidden">검색</span>
          </button>
        </SearchForm>
      </Wrap>
      {!data?.ok && !data?.error && <StudyList />}
      {!data?.ok && data?.error && (
        <NoSearchResult>
          <p className="error-msg">"{data?.error}... 🧐"</p>
          <p className="msg">
            스터디 이름 또는 스터디 종류(category)를 검색해주세요.
          </p>
        </NoSearchResult>
      )}
      {data?.ok && <SearchList data={data?.result} />}
    </>
  );
};

export const NoSearchResult = styled.div`
  text-align: center;
  padding: 10% 0;
  .error-msg {
    font-size: 1.5em;
    color: ${COLOR.error};
    margin-bottom: 40px;
  }
  .msg {
    font-size: 1rem;
    color: ${COLOR.deepGray};
    font-style: italic;
  }
`;
