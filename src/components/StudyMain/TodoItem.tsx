import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import useMutation from 'src/libs/client/useMutation';
import { COLOR } from '../../constants';
import { TodoData } from '../../types/Todo';

interface TodoList {
  studyId: number
  category: string
  todoItem: TodoData
  todoList: TodoData[]
}

export const TodoItem = ({studyId, todoItem, todoList, category}: TodoList) => {

  const router = useRouter() 

  const [del] = useMutation('/api/todo/delTodo');
  const [edit] = useMutation('/api/todo/editTodo');

  // console.log(todoItem)

  const [editTodo, setEditTodo] = useState(todoItem.title)
  const [isEdit, setIsEdit] = useState(false)

  // const name = (todoItem.study.studyName).slice(0, 2)

  const editRef = useRef<HTMLInputElement>(null)
  
  const onChangeEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodo(e.target.value)
  }

  const todoCompleted = (id: number) => {
    // setTodoList(todoList.map(v => v.id === id ? {...v, completed: !v.completed} : v))
    edit({id: id, title: editTodo, completed: !(todoList.filter(v => v.id === id && {...v, completed: !v.completed})[0].completed)})
    router.reload();
  }

  const todoEdit = (id: number) => {
    // setTodoList(todoList.map(v => v.id === id ? {...v, title: editTodo} : v))
    setIsEdit(!isEdit)
    edit({id: id, title: editTodo, completed: todoItem.completed})
    if(editRef.current !== null) {
      editRef.current.focus()
      router.reload();
    }
  }

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, id: number) => {
    if(e.key === 'Enter') {
      todoEdit(id)
      setIsEdit(false)
      router.reload();
    }
  }

  const todoDelete = (id: number) => {
    // setTodoList(todoList.filter(v => v.id !== id))
    del(id)
    router.reload();
  }

  useEffect(() => {
  }, [])

  if(studyId) {
    return (
      <>
        {todoItem.studyId === studyId && (
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
                <>
                <ItemTit todoDone={todoItem.completed}>{todoItem.title}</ItemTit>
                </>
              )}
            </TitBox>
            <BtnBox>
              <UtilBtn util={'/images/edit.svg'} onClick={() => todoEdit(todoItem.id)}></UtilBtn>
              <UtilBtn util={'/images/delete.svg'} onClick={() => todoDelete(todoItem.id)}></UtilBtn>
            </BtnBox>
          </Item>
        )}
      </>
    );
  } else {
    return (
      <>
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
              <>
                {todoItem.study && <ItemTag>{(todoItem.study.studyName).slice(0, 2)}</ItemTag>}
                <ItemTit todoDone={todoItem.completed}>{todoItem.title}</ItemTit>
              </>
            )}
          </TitBox>
          <BtnBox>
            <UtilBtn util={'/images/edit.svg'} onClick={() => todoEdit(todoItem.id)}></UtilBtn>
            <UtilBtn util={'/images/delete.svg'} onClick={() => todoDelete(todoItem.id)}></UtilBtn>
          </BtnBox>
        </Item>
      </>
    );
  }
};

const Item = styled.li`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 48px;
  margin: 8px 0 0;
  border: 1px solid ${COLOR.gray};
  background: #F9F9F9;
  font-family: 'Pretendard';
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
  /* width: 80%; */
  word-break: break-all;
  padding: 14px 5px;
  height: 48px;
  background: none;
  border: none;
  font-family: 'Pretendard';
  font-size: 14px;
  &:focus {
    outline: 1px solid ${COLOR.main};
  }
`

const ItemTit = styled.span<{todoDone: boolean}>`
  display: block;
  /* width: 80%; */
  word-break: break-all;
  padding: 14px 5px;
  text-align: start;
  font-size: 14px;
  color: ${props => props.todoDone && COLOR.placeHolderText};
  text-decoration: ${props => props.todoDone && `line-through`};
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

const BtnBox = styled.div`
  margin: 6px;
  width: 52px;
`

const UtilBtn = styled.button<{util: string}>`
  width: 20px;
  height: 20px;
  margin: 0 6px 0 0;
  background: url(${props => props.util});
`