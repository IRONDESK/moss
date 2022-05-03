import { Notice, Study, User } from '@prisma/client';

export interface INotice {
  studyId: number | undefined | null;
}

export interface ITotalNoticeRes {
  ok: true;
  allNotice: NoticeWithAuthorNStudy[];
}

export interface NoticeData {
  noticeList?: [{ category: string; title: string; content: string }];
}
export interface INoticeData {
  id: number;
  category: string;
  title: string;
  content: string;
}
export interface INoticeRes {
  ok: boolean;
  allNotice: NoticeWithAuthorNStudy[];
  notice: NoticeWithAuthorNStudy;
}
export interface NoticeWithAuthorNStudy extends Notice {
  author: User;
  study: Study;
}
export interface INoticeList {
  num: number;
  category: string;
  title: string;
  writer: string;
  date: Date;
  studyId: number;
}
