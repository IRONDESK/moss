import styled from '@emotion/styled';
import Link from 'next/link';
import { Notice } from './Notice';
import { Record } from './Record';
import { TodoList } from './Todo';

export const StudyComponents = () => {
  return (
    <>
      <Container>
        <Record />
        <TodoList />
        <Notice />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`