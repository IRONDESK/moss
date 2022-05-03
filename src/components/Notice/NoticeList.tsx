import Link from 'next/link';
import { INoticeList } from 'src/types/Notice';

export const NoticeList = ({
  num,
  category,
  title,
  writer,
  date,
  studyId,
}: INoticeList) => {
  //
  return (
    <tr>
      <td className="col-num">{num}</td>
      <td className="col-category">{category}</td>
      <td className="notice-title">
        <Link href={`/study/${studyId}/notice/${num}`}>
          <a>{title}</a>
        </Link>
      </td>
      <td>{writer}</td>
      <td className="col-date">{date}</td>
    </tr>
  );
};
