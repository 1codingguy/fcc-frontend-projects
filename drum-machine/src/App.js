import "./App.css";
import Key from "./Key";
import Btn from "./Btn";
import { data } from "./data";
import { useGlobalContext } from "./context";

function App() {
  const { display, volume, handleVolumeChange, power } = useGlobalContext();

  const disableVolumeSlider = !power

  return (
    <div className="background">
      <div className="container" id='drum-machine'>
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
            <Btn text={"Power"} />

            <p className="display" id="display">
              {display ? display : <span>&nbsp;&nbsp;</span>}
            </p>

            <div className="volume-slider-container">
              <input
                className="volume-slider"
                type="range"
                min="0"
                max="100"
                step="1"
                value={volume}
                onChange={(e) => handleVolumeChange(e)}
                disabled={disableVolumeSlider}
              />
            </div>

            <Btn text={"Bank"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
