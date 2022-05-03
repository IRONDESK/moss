import { Schedule, StudySchedule } from '@prisma/client';

export interface IScheduleForm {
  title: string;
  date: string;
  content?: string;
}
export interface IScheduleModal {
  date?: string;
}
export interface IScheduleRes {
  ok: boolean;
  dailySchedule: Schedule[];
}
export interface IStudySchedule {
  date: string;
  startTime: string;
  endTime: string;
  content: string;
}
export interface IStudyScheduleRes {
  ok: boolean;
  studySchedule: StudySchedule;
  message: string;
  error: string;
}
