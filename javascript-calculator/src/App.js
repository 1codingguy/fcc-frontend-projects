import { useState, useEffect } from "react";
import "./App.css";
import Btn from "./Btn";

function App() {
  const [input, setInput] = useState({});

  return (
    <div className="background">
      <div className="outer-container">
        <div className="calculator">
          <div className="screen formula-screen">0</div>
          <div className="screen output-screen" id="display">
            0
          </div>
          <Btn setInput={setInput} />
        </div>
        <div className="author">
          <p>Coded by</p>
          <p>
            <a href="#">coding-guy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
