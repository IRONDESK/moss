import styled from '@emotion/styled';
import { MyCalendar } from '../Calendar/MyPage/MyCalendar';
import { TodoList } from '../StudyMain/Todo';

export const MyPageContainer = () => {
  return (
    <Container>
      <MyCalendar studyData={null} />
      <TodoList />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;
