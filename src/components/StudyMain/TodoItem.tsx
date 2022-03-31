import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';
import { COLOR } from '../../constants';
import { TodoData } from '../../types/Todo';

interface TodoList {
  todoItem: TodoData
  todoList: TodoData[]
  setTodoList: (todoList: TodoData[]) => void
}

export const TodoItem = ({todoItem, todoList, setTodoList}: TodoList) => {

  const [editTodo, setEditTodo] = useState(todoItem.title)
  const [isEdit, setIsEdit] = useState(false)

  const editRef = useRef<HTMLInputElement>(null)
  
  const onChangeEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodo(e.target.value)
  }

  const todoCompleted = (id: number) => {
    setTodoList(todoList.map(v => v.id === id ? {...v, completed: !v.completed} : v))
  }

  const todoEdit = (id: number) => {
    setTodoList(todoList.map(v => v.id === id ? {...v, title: editTodo} : v))
    setIsEdit(!isEdit)
    if(editRef.current !== null) editRef.current.focus()
  }

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, id: number) => {
    if(e.key === 'Enter') {
      todoEdit(id)
      setIsEdit(false)
    }
  }

  const todoDelete = (id: number) => {
    setTodoList(todoList.filter(v => v.id !== id))
  }

  return (
    <Item >
      <TitBox>
        <DoneBtn onClick={() => todoCompleted(todoItem.id)} todoDone={todoItem.completed}/>
        {isEdit ? (
          <InputEdit 
            type="text"
            value={editTodo}
            onChange={onChangeEdit}
            ref={editRef}
            onKeyPress={e => onKeyPress(e, todoItem.id)}
            autoFocus
          />
        ) : (
          <ItemTit todoDone={todoItem.completed}>{todoItem.title}</ItemTit>
        )}
      </TitBox>
      <BtnBox>
        <UtilBtn util={'/images/edit.svg'} onClick={() => todoEdit(todoItem.id)}></UtilBtn>
        <UtilBtn util={'/images/delete.svg'} onClick={() => todoDelete(todoItem.id)}></UtilBtn>
      </BtnBox>
    </Item>
  );
};


const Item = styled.li`
  width: 626px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 48px;
  margin: 8px 0 0;
  border: 1px solid ${COLOR.gray};
  background: #F9F9F9;
  font-family: 'Noto Sans KR';
  color: ${COLOR.black};
  `

const TitBox = styled.div`
  display: flex;
  align-items: center;
`

const DoneBtn = styled.button<{todoDone: boolean}>`
  width: 24px;
  height: 24px;
  margin: 0 4px 0 12px;
  background: url(${props => props.todoDone ? `/images/checked.svg` : `/images/check.svg`});
`

const InputEdit = styled.input`
  width: 512px;
  height: 48px;
  background: none;
  border: none;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  &:focus {
    outline: 1px solid ${COLOR.main};
  }
`

const ItemTit = styled.span<{todoDone: boolean}>`
  display: block;
  padding: 14px 0;
  text-align: start;
  font-size: 14px;
  color: ${props => props.todoDone && COLOR.placeHolderText};
  text-decoration: ${props => props.todoDone && `line-through`};
`

const BtnBox = styled.div`
  margin: 6px;
`

const UtilBtn = styled.button<{util: string}>`
  width: 20px;
  height: 20px;
  margin: 0 6px 0 0;
  background: url(${props => props.util});
`



