export interface TodoData {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  studyId: number;
  study: {
    studyName: string;
  };
  user: {
    id: number;
  };
}
