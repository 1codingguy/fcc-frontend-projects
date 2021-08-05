import Toolbar from './Toolbar'
import { useGlobalContext } from '../context'

const Previewer = () => {
  const { editorFullScreen, previewerFullScreen, editorText } =
    useGlobalContext()

  if (editorFullScreen) {
    // return empty Previewer if editorFullScreen === true
    return <div></div>
  }

  return (
    <div className="previewer">
      <Toolbar toolbarText={'Previewer'} />

      <p
        id="preview"
        className={
          previewerFullScreen
            ? `textarea editor-textarea textarea-maximize`
            : `textarea editor-textarea`
        }
        dangerouslySetInnerHTML={{
          __html: window.marked(editorText, { breaks: true, gfm: true }),
        }}
      ></p>
    </div>
  )
}

export default Previewer
