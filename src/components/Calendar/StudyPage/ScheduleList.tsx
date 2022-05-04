import moment from 'moment';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { ITotalStudyScheduleRes } from 'src/types/Schedule';
import useUser from 'src/libs/client/useUser';
import { useState } from 'react';
import { DeleteModal } from './DeleteModal';
import {
  BtnWrap,
  DelBtn,
  EditBtn,
  SecondWrap,
  StudyList,
  Wrap,
} from 'src/styles/components/Calendar';
import { ScheduleModal } from './ScheduleModal';

export const ScheduleList = () => {
  //QUERY
  const router = useRouter();
  const { studyId } = router.query;

  //GET
  const { data } = useSWR<ITotalStudyScheduleRes>(
    `/api/schedule/studypage/${Number(studyId)}/total`,
  );
  //요일계산
  const days = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  const getDay = (date: string) => {
    return days[new Date(date).getDay()];
  };

  //스터디일정 수정 및 삭제
  const { loggedInUser } = useUser();
  const [click, setClick] = useState(false);
  const [edit, setEdit] = useState(false);
  const [scheduleID, setScheduleID] = useState();
  const onClick = () => {
    click ? setClick(false) : setClick(true);
  };
  const onEdit = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  const sendID = (id: any) => {
    setScheduleID(id);
  };
  //
  return (
    <>
      <StudyList>
        {data?.totalSchedule?.map((item) => (
          <li
            key={item.id}
            className={
              item.date === moment().format('YYYY-MM-DD') ? 'today' : ''
            }
          >
            <Wrap>
              <SecondWrap>
                <div className="date">
                  <strong>{item.date.split('-')[2]}</strong>
                  <span>{getDay(item.date)}</span>
                </div>
                <p className="time">
                  {item.startTime} - {item.endTime}
                </p>
              </SecondWrap>
              <p className="content">{item.content}</p>
            </Wrap>
            {item.UserId === loggedInUser?.id && (
              <BtnWrap>
                <EditBtn
                  type="button"
                  value="수정"
                  onClick={() => {
                    onEdit();
                    sendID(item.id);
                  }}
                />
                <DelBtn
                  type="button"
                  value="삭제"
                  onClick={() => {
                    onClick();
                    sendID(item.id);
                  }}
                />
              </BtnWrap>
            )}
          </li>
        ))}
      </StudyList>
      {click && (
        <DeleteModal
          onClick={onClick}
          scheduleId={scheduleID}
          studyId={Number(studyId)}
        />
      )}
      {edit && <ScheduleModal onClick={onEdit} />}
    </>
  );
};
