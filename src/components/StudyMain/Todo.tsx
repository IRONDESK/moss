import styled from '@emotion/styled';
import React, { useState } from 'react';
import useMutation from 'src/libs/client/useMutation';
import { COLOR } from '../../constants';
import { TodoData } from '../../types/Todo';
import { TodoItem } from './TodoItem';

export const TodoList = () => {

  const [item, {loading, data, error }] = useMutation('/api/todoList/todo')

  const [todoList, setTodoList] = useState<TodoData[]>([
    {
      id: 0,
      title: 'JavaScript 챕터 1',
      completed: true
    },
    {
      id: 1,
      title: '자바스크립트 코딩테스트 1문제 풀기',
      completed: false
    },
    {
      id: 2,
      title: '영어공부 하기',
      completed: false
    },
    {
      id: 3,
      title: '이거 왜 안됨',
      completed: false
    },
    {
      id: 4,
      title: 'ㅜㅜ',
      completed: false
    }
  ])

  const [todo, setTodo] = useState("")
  const [isTodo, setIsTodo] = useState(false)

  let [count, setCount] = useState(6)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
    setIsTodo(true)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTodoList([...todoList, {id: count, title: todo, completed: false}])
    setTodo("")
    setIsTodo(false)
    count = count + 1
    setCount(count)
  }

  const resetTodo = () => {
    setTodo("")
  }


  const test = async (e) => {
      e.preventDefault()
      const body = todoList
      try {
      const res = await fetch("/api/todoList/todo", {
        method: "POST",
        headers: {
          "Content-Type": "applcation/json"
        },
        body: JSON.stringify(body)
      })
      if(res.status !== 200) {
        console.log("No");
      } else {
        resetTodo()
        console.log("YES!");
      }
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Title>오늘의 할일</Title>
      <SubTitle>Todo List</SubTitle>
      <ItemList todoList={todoList}>
        <ul>
          {todoList.map((todoItem) => {
            return <TodoItem key={todoItem.id} todoItem={todoItem} todoList={todoList} setTodoList={setTodoList}/>
          })}
        </ul>
      </ItemList>
      <Form onSubmit={test}>
        <label>
          <Input
            type="text"
            placeholder="해야 할 일 입력하기"
            value={todo}
            onChange={onChange}
          />
        </label>
        <Btn disabled={!isTodo} type="submit">입력</Btn>
      </Form>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  padding: 48px 24px 16px;
  border: 1px solid ${COLOR.boxBorder};
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 32px;
    width: 40px;
    height: 48px;
    background: ${COLOR.main} url('/images/todoCheck.svg') no-repeat 50% 70%;
  }
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

const ItemList = styled.article<{todoList: TodoData[]}>`
  padding-right: 10px;
  height: 200px;
  overflow-y: scroll;
  margin: 10px 0 0;
  &::-webkit-scrollbar {
    width: 6px;
  };
  &::-webkit-scrollbar-thumb {
    background: ${COLOR.grayText};
    border-radius: 6px;
  };
  &::-webkit-scrollbar-track {
    background: ${props => props.todoList.length > 3 && COLOR.gray};
    border-radius: 6px;
  };
  ul li {
    width: 100%
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
    outline: 1px solid #0085FF;
  }
`;