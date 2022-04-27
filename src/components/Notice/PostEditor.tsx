import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import view from '../../pages/api/notice/view';

interface NoticeData {
  id: number;
  content: string;
}

const PostEditor = (props: any) => {
  const editorRef = React.createRef();
  const router = useRouter();
  const url = router.pathname;
  const { id } = router.query;

  let [notice, setNotice] = useState<NoticeData[]>([
    {
      id: 0,
      content: '',
    },
  ]);

  const data = view(id);
  useEffect(() => {
    setNotice(data);
  }, [data]);

  const onChangeIntroFunction = () => {
    props.editor(editorRef.current.getInstance().getMarkdown());
  };

  return (
    <>
      {url === '/study/notice/edit/[id]' ? (
        <Editor
          previewStyle="vertical"
          height="600px"
          useCommandShortcut={true}
          initialValue={`${data?.noticeData?.content}`}
          onChange={onChangeIntroFunction}
          ref={editorRef}
        />
      ) : (
        <Editor
          previewStyle="vertical"
          height="600px"
          useCommandShortcut={true}
          initialValue=" "
          onChange={onChangeIntroFunction}
          ref={editorRef}
        />
      )}
    </>
  );
};

export default PostEditor;
