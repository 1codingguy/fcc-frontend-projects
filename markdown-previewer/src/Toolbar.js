import { FaFreeCodeCamp, FaExpandArrowsAlt } from "react-icons/fa";

function Toolbar({ toolbarText }) {
  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <FaFreeCodeCamp className="icons fcc-icon" /> {toolbarText}
      </div>
      <div className="toolbar-right">
        <FaExpandArrowsAlt className="icons toggle-icon" />
      </div>
    </div>
  );
}

export default Toolbar;
