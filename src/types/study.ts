import { Study, User } from '@prisma/client';
import { Json } from 'twilio/lib/interfaces';

export interface IStudyResponse {
  ok: boolean;
  study: IStudyWithUser;
}
export interface IStudyWithUser extends Study {
  user: User;
}

export interface StudyModal {
  modal: boolean;
  setModal: Function;
}
export interface studyForm {
  studyName?: string;
  leader?: number;
  introduce?: string;
  category?: string;
  tag?: string;
  membersLimit?: number;
  chatLink: string;
  welcome?: string;
  image?: FileList;
  studyImage?: FileList;
  avatar?: FileList;
  memberlist: string[];
}
export interface IStudyResponse {
  ok: boolean;
  myStudy: Study[];
  totalStudies: Study[];
}
