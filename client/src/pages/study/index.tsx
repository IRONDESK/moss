import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { StudyBanner } from '../../components/StudyMain/StudyBanner';
import { Notice } from '../../components/StudyMain/Notice';
import { Record } from '../../components/StudyMain/Record';
import { TodoList } from '../../components/StudyMain/Todo';
import { StudyComponents } from '../../components/StudyMain/Container';
import { useState } from 'react';

export default function StudyPage() {
  return (
    <>
      <StudyBanner
        logo="./images/StudyLogo.png"
        category="카테고리"
        title="React 스터디"
        des="혼자 코딩하기 싫은 개발자들 모여라! 누구나 자유롭게 모여서 각자 코딩해요"
        hashtag="#개발"
        member={7}
        link="#"
      />
      <StudyComponents />
      {/* <Record />
      <TodoList />
      <Notice /> */}
    </>
  );
}
