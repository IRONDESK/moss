import styled from '@emotion/styled';
import { MyCalendar } from '../Calendar/MyPage/MyCalendar';
import { TodoList } from '../StudyMain/Todo';

export const MyPageContainer = () => {
  return (
    <Container>
      <article>
        <MyCalendar />
      </article>
      <TodoList />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 33px;
  article {
    border: 1px solid #ddd;
    padding: 40px;
    background-color: white;
  }
`;
