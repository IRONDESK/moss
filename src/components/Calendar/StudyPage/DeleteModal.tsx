import { useEffect, useState } from 'react';
import useMutation from 'src/libs/client/useMutation';
import { Btn } from 'src/styles/components';
import {
  ConfirmModal,
  DeleteConfirmModal,
} from 'src/styles/components/Calendar';
import { ISchDelRes } from 'src/types/Schedule';

interface IDeleteSchedule {
  scheduleId?: number;
  studyId?: number;
  onClick: any;
}

export const DeleteModal = ({
  onClick,
  scheduleId,
  studyId,
}: IDeleteSchedule) => {
  //POST
  const [deleteSch, { loading, data }] = useMutation<ISchDelRes>(
    `/api/schedule/studypage/${studyId}/delete`,
  );

  const confirmDelete = () => {
    if (loading) return;
    deleteSch(scheduleId); //선택한 스케줄데이터의 아이디를 보낸다.
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };
  //확인모달
  const [open, setOpen] = useState(true);
  const [confirm, setConfirm] = useState(false);
  useEffect(() => {
    if (data?.ok) {
      setConfirm(true);
    }
  }, [data]);
  //
  return (
    <>
      {open && (
        <>
          <DeleteConfirmModal>
            <Btn onClick={confirmDelete} className="delete">
              {loading ? '로딩중...' : '해당일정을 삭제하시겠습니까?'}
            </Btn>
            <p>일정은 삭제되면 복구가 불가능합니다.</p>
            <Btn onClick={onClick} className="cancel">
              취소
            </Btn>
          </DeleteConfirmModal>
          <div className="dim" onClick={onClick}></div>
        </>
      )}
      {confirm && (
        <ConfirmModal>
          {data?.message && <p className="success">{data?.message}</p>}
          {data?.error && <p className="fail">{data?.error}</p>}
          {data?.message ? (
            <Btn
              className="success"
              onClick={() => setConfirm((value) => !value)}
            >
              확인
            </Btn>
          ) : (
            data?.error && (
              <Btn
                className="fail"
                onClick={() => setConfirm((value) => !value)}
              >
                확인
              </Btn>
            )
          )}
        </ConfirmModal>
      )}
    </>
  );
};
