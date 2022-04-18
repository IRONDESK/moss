import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import React from 'react';
import { useRef } from 'react';

const PostEditor = (props: any) => {
  const editorRef = React.createRef();

  const onChangeIntroFunction = () => {
    props.editor(editorRef.current.getInstance().getMarkdown());
  };

  return (
    <Editor
      previewStyle="vertical"
      height="600px"
      useCommandShortcut={true}
      initialValue="hello"
      onChange={onChangeIntroFunction}
      ref={editorRef}
    />
  );
};

export default PostEditor;
