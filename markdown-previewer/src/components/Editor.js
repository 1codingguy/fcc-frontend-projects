import Toolbar from "./Toolbar";
import { useGlobalContext } from "../context";

const Editor = () => {
  const { editorFullScreen, previewerFullScreen, setEditorText, editorText } =
    useGlobalContext();

  if (previewerFullScreen) {
    return <div></div>;
  }

  return (
    <div className="editor">
      <Toolbar toolbarText={"Editor"} />

      <textarea
        id="editor"
        onChange={(e) => setEditorText(e.target.value)}
        className={
          editorFullScreen
            ? `textarea editor-textarea textarea-maximize`
            : `textarea editor-textarea`
        }
        value={editorText}
      ></textarea>
    </div>
  );
};
export default Editor;
