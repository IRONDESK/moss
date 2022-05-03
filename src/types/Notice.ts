import { Notice, Study, User } from '@prisma/client';

export interface NoticeData {
  category: string;
  title: string;
  content: string;
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
}
export interface NoticeWithAuthorNStudy extends Notice {
  author: User;
  study: Study;
}
