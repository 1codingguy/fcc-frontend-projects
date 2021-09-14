import './scss/App.scss'
import Key from './Key'
import Btn from './Btn'
import { data } from './data'
import { useGlobalContext } from './context'
import { VolumeSlider } from './VolumeSlider'

/** jsdoc comment! */
function App() {
  const { display, volume, handleVolumeChange,isPowerOn  } = useGlobalContext()

  const disableVolumeSlider: boolean = !isPowerOn

  return (
    <div className="background">
      <div className="container" id="drum-machine">
        <FCCLogo/>

        <div className="inner-container">
          <div className="keypad">
            {data.map((item) => (
              <Key item={item} key={item.letter} />
            ))}
          </div>

          <div className="switch-panel">
            <Btn text={'Power'} />

            <p className="display" id="display">
              {display ? display : <span>&nbsp;&nbsp;</span>}
            </p>

            <VolumeSlider {...{volume, handleVolumeChange, disableVolumeSlider}} />

            <Btn text={'Bank'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


function FCCLogo() {
  return <div className="logo-container">
    <div className="logo-text">
      FCC
      <i className="fa fa-free-code-camp"></i>
    </div>
  </div>
}

