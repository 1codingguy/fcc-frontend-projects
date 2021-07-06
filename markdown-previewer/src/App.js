import "./app.css";
import Previewer from "./components/Previewer";
import Editor from "./components/Editor";

function App() {

  return (
    <div className="app">
      <Editor />
      <Previewer />
    </div>
  );
}

export default App;
