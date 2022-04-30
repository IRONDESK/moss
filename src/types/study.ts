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
  joinMsg?: string;
  image?: FileList;
  studyImage?: FileList;
  avatar?: FileList;
}
