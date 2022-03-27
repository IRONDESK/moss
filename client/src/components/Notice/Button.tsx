import styled from '@emotion/styled';
import { COLOR } from '../../constants';

export const Button = (props: {
  href: string;
  text: string;
  className: string;
}) => {
  return (
    <Btn href={props.href} className={props.className}>
      {props.text}
    </Btn>
  );
};

const Btn = styled.a`
  max-width: 120px;
  color: #fff;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  text-align: center;
  padding: 0 20px 0 40px;

  &.delete {
    background: url(../images/notice_delete.svg) no-repeat 12px 50% / 20px;
    color: #ff6347;
    border: 1px solid rgba(255, 99, 71, 0.2);
    transition: all 0.3s;
    &:hover {
      background: #ff6347 url(../images/notice_delete_white.svg) no-repeat 12px
        50% / 20px;
      color: #fff;
      border-color: #ff6347;
    }
  }

  &.cancel {
    background: url(../images/notice_close.svg) no-repeat 12px 50% / 20px;
    color: #ff6347;
    border: 1px solid rgba(255, 99, 71, 0.2);
    transition: all 0.3s;

    &:hover {
      background: #ff6347 url(../images/notice_close_white.svg) no-repeat 12px
        50% / 20px;
      color: #fff;
      border-color: #ff6347;
    }
  }

  &.write,
  &.modify {
    background: url(../images/notice_edit.svg) no-repeat 12px 50% / 20px;
    color: #333;
    border: 1px solid rgba(51, 51, 51, 0.2);
    transition: all 0.3s;

    &:hover {
      background: #34c88a url(../images/notice_edit_white.svg) no-repeat 12px
        50% / 20px;
      color: #fff;
      border-color: #34c88a;
    }
  }

  &.list {
    background: url(../images/notice_list.svg) no-repeat 12px 50% / 20px;
    color: #333;
    border: 1px solid rgba(51, 51, 51, 0.2);
    transition: all 0.3s;

    &:hover {
      background: #34c88a url(../images/notice_list_white.svg) no-repeat 12px
        50% / 20px;
      color: #fff;
      border-color: #34c88a;
    }
  }
`;
