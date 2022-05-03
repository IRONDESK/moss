import Link from 'next/link';

export const NoticeList = (props: {
  num: Number;
  category: String;
  title: String;
  writer: String;
  date: Date;
}) => {
  return (
    <tr>
      <td className="col-num">{props.num}</td>
      <td className="col-category">{props.category}</td>
      <td className="notice-title">
        <Link href={`/study/notice/${props.num}`}>{props.title}</Link>
      </td>
      <td>{props.writer}</td>
      <td className="col-date">{props.date}</td>
    </tr>
  );
};
