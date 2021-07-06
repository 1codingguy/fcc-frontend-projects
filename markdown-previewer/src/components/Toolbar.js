import {
  FaFreeCodeCamp,
  FaExpandArrowsAlt,
  FaCompressAlt,
} from "react-icons/fa";
import { useGlobalContext } from "../context";

const Toolbar = ({ toolbarText }) => {
  const { handleClick, editorFullScreen, previewerFullScreen } =
    useGlobalContext();

  const stateValue = toolbarText === "Editor"? editorFullScreen: previewerFullScreen

  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <FaFreeCodeCamp className="icons fcc-icon" /> {toolbarText}
      </div>

      <div className="toolbar-right">
        {stateValue ? (
          <FaCompressAlt
            className="icons toggle-icon"
            onClick={() => handleClick(toolbarText)}
          />
        ) : (
          <FaExpandArrowsAlt
            className="icons toggle-icon"
            onClick={() => handleClick(toolbarText)}
          />
        )}
      </div>
    </div>
  );
};

export default Toolbar;
