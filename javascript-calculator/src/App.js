import { useReducer } from "react";
import "./scss/App.scss";
import Btn from "./Btn";
import { reducer, defaultState } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <div className="background">
      <div className="outer-container">
        <div className="calculator">
          <div className="screen formula-screen">{state.displayFormula}</div>
          <div className="screen output-screen" id="display">
            {state.currentNumber}
          </div>
          <Btn dispatch={dispatch} />
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
