import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './richTextEditor.css'

const formats = ['bold', 'italic', 'underline', 'strike', 'image', 'list'];

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
  ],
};

const RichTextEditor = ({ note, setNote }) => {
  return (
    <ReactQuill
      theme="snow"
      formats={formats}
      modules={modules}
      placeholder="Write here..."
      className={`rich-text-editor ${note.bgColor}`}
      id="content"
      value={note.content}
      onChange={value => setNote(prev => ({ ...prev, content: value }))}
      style={{ backgroundColor: note.colorInRgb }}
    />
  );
};

export { RichTextEditor };
