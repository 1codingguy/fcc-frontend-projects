import "./app.css";
import Toolbar from "./Toolbar";


function App() {
  return (
    <div className="app">
      <div className="editor">
        <Toolbar toolbarText={"Editor"} />
        <textarea className="textarea editor-textarea"></textarea>
      </div>

      <div className="previewer">
        <Toolbar toolbarText={"Previewer"} />
        <p className="textarea previewer-textarea">something</p>
      </div>
    </div>
  );
}

export default App;


