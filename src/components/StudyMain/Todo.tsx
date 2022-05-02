import styled from '@emotion/styled';
import { css } from "@emotion/react";
import { Study } from '@prisma/client';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useMutation from 'src/libs/client/useMutation';
import useSWR from 'swr';
import { COLOR } from '../../constants';
import { TodoData } from '../../types/Todo';
import { TodoItem } from './TodoItem';
import useUser from 'src/libs/client/useUser';

export const TodoList = ({studyId}: number | any ) => {
  
  const router = useRouter()

  // const { loggedInUser } = useUser();

  const [item] = useMutation('/api/todo');
  const { data, mutate } = useSWR<any>('/api/todo');
  // const { data } = useSWR(`api/study/my_study`);

  console.log(data);

  const [todoList, setTodoList] = useState<TodoData[]>([
    {
      id: 0,
      title: "",
      completed: false,
      createdAt: "",
      updatedAt: "",
      studyId: 0
    },
  ]);

  const [todo, setTodo] = useState('');
  const [isTodo, setIsTodo] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
    setIsTodo(true);
  };

  const createTodo = (todo: any) => {
    item(todo);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo({title: todo, studyId: studyId});
    // createTodo({title: todo, studyId: studyId, userId: loggedInUser});
    setTodo('');
    setIsTodo(false);
    router.reload();
  };

  
  useEffect(() => {
    if(data) {
      setTodoList(data.studyTodo)
    }
  }, [data]);

  return (
    <>
    {!studyId && <MyPageTitle>오늘의 할 일</MyPageTitle>}
    <Container studyId={studyId}>
      {studyId ? (
        <>
          <Title>오늘의 할일</Title>
          <SubTitle>Todo List</SubTitle>
        </>
      ) : (
        <>
          <TagBox>
          {data?.studyTodo?.map((todoItem: TodoData) => {
            return (
              <ItemTag>{todoItem.studyId}</ItemTag>
            )
          })}
          </TagBox>
        </>
      )}
      {data && (
        <ItemList todoList={data?.studyTodo}>
          <ul>
            {/* {data?.title && <TodoItem todoItem={tit} todoList={data.todo} setTodoList={setTodoList}/>} */}
            {data?.studyTodo?.map((todoItem: TodoData, index: number) => {
              return (
                <TodoItem
                  key={index}
                  studyId={studyId}
                  todoItem={todoItem}
                  todoList={data?.studyTodo}
                />
              );
            })}
          </ul>
        </ItemList>
      )}
      <Form onSubmit={onSubmit}>
        <label>
          <Input
            type="text"
            placeholder="해야 할 일 입력하기"
            value={todo}
            onChange={onChange}
          />
        </label>
        <Btn disabled={!isTodo} type="submit">
          입력
        </Btn>
      </Form>
    </Container>
    </>
  );
};

const MyPageTitle = styled.h2`
  display: flex;
  margin: 35px 0 0 0;
  font-size: 24px;
  &:before {
    content: '';
    display: block;
    margin-right: 11px;
    width: 5px;
    height: 28px;
    background: url('./images/icons/titleBar.png');
  }
`

const Container = styled.section<{ studyId: number }>`
  position: relative;
  padding: 16px 24px 16px;
  border: 1px solid ${COLOR.boxBorder};
  ${props => props.studyId && (
    css`
      padding: 48px 24px 16px;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 32px;
        width: 40px;
        height: 48px;
        background: ${COLOR.main} url('/images/todoCheck.svg') no-repeat 50% 70%;
      }
    `
  )}
`;

const Title = styled.h2`
  position: relative;
  margin: 16px 8px 0;
  color: ${COLOR.black};
  font-size: 24px;
`;

const SubTitle = styled.span`
  margin: 0 8px;
  color: ${COLOR.grayText};
  font-size: 16px;
  line-height: 24px;
`;

const TagBox = styled.div`
  display: flex;
`

const ItemTag = styled.span`
  display: block;
  padding: 2px 11px;
  border: 1px solid ${COLOR.placeHolderText};
  border-radius: 13px;
  margin-right: 8px;
  text-align: start;
  font-size: 14px;
`

const Form = styled.form`
  display: flex;
  gap: 8px;
  margin: 16px 0;
  label {
    flex: 4;
  }
  button {
    flex: 1;
  }
`;

const ItemList = styled.article<{ todoList: TodoData[] }>`
  padding-right: 10px;
  height: 200px;
  overflow-y: scroll;
  margin: 10px 0 0;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${COLOR.grayText};
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.todoList?.length > 3 && COLOR.gray};
    border-radius: 6px;
  }
  ul li {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid ${COLOR.gray};
  padding: 0 12px;
  font-size: 14px;
  &:focus {
    border: 1px solid ${COLOR.main};
    outline: none;
  }
  &::placeholder {
    color: ${COLOR.placeHolderText};
  }
`;

const Btn = styled.button`
  width: 120px;
  height: 48px;
  border: 1px solid ${COLOR.main};
  color: ${COLOR.main};
  &:active {
    background: ${COLOR.main};
    color: ${COLOR.white};
  }
  &:focus-visible {
    outline: 1px solid #0085ff;
  }
`;