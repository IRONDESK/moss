import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const PostEditor = () => {
  return (
    <Editor previewStyle="vertical" height="600px" useCommandShortcut={true} />
  );
};

export default PostEditor;
