import styled from '@emotion/styled';
import { StudyList } from './StudyList';
import { TodoList } from '../StudyMain/Todo';

export const MyPageContainer = () => {
  return (
    <>
      <Container>
        <StudyList />
        <TodoList />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 40px;
`;
