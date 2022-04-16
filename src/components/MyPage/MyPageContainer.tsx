import styled from '@emotion/styled';
import { COLOR } from '../../constants';
import { TodoList } from '../StudyMain/Todo';

export const MyPageContainer = () => {
  return (
    <Container>
      <Calendar />
      <TodoList />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

const Calendar = styled.div`
/* 임시로 만들어 놓은 자리 */
  height: 450px;
  padding: 48px 24px 16px;
  background-color: ${COLOR.white};
  border: 1px solid ${COLOR.boxBorder};
`;