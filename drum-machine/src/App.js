import "./App.css";
import Key from "./Key";
import { data } from "./data";

function App() {
  return (
    <div className="background">
      <div className="container">
        <div className="logo-container">
          <div className="logo-text">
            FCC
            <i className="fa fa-free-code-camp"></i>
          </div>
        </div>
        <div className="inner-container">
          <div className="keypad">
            {data.map((item) => (
              <Key item={item} key={item.letter} />
            ))}
          </div>
          <div className="switch-panel">
            <div className="power-btn-container">
              <p className="power-btn-text">Power</p>
              <div
                className="btn"
                onClick={(e) => e.currentTarget.classList.toggle("btn-right")}
              >
                <div className="power-btn-inner "></div>
              </div>
            </div>

            <p className="display">something</p>

            <div className="volume-slider-container">
              <input
                className="volume-slider"
                type="range"
                min="0"
                max="100"
                step="1"
              />
            </div>

            <div className="power-btn-container">
              <p className="power-btn-text">Bank</p>
              <div
                className="btn"
                onClick={(e) => e.currentTarget.classList.toggle("btn-right")}
              >
                <div className="power-btn-inner "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
