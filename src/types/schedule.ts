import { Schedule } from '@prisma/client';

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
