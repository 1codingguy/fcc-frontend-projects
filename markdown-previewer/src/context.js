import React, { useContext, useState } from 'react'
import markDownDefault from './defaultText'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [editorFullScreen, setEditorFullScreen] = useState(false)
  const [previewerFullScreen, setPreviewerFullScreen] = useState(false)
  const [editorText, setEditorText] = useState(markDownDefault)

  const handleClick = (toolbarText) => {
    if (toolbarText === 'Editor') {
      setEditorFullScreen(!editorFullScreen)
    } else {
      setPreviewerFullScreen(!previewerFullScreen)
    }
  }

  return (
    <AppContext.Provider
      value={{
        handleClick,
        editorFullScreen,
        previewerFullScreen,
        setEditorText,
        editorText,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
