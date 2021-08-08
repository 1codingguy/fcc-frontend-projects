import './scss/App.scss'
import LengthControl from './LengthControl'
import { useState, useEffect, useRef } from 'react'

const defaultBreak = 5
const defaultSession = 25

const format = (num) => {
  if (num < 10) {
    return `0${num}`
  }
  return num
}

const minToSec = (min) => {
  return Number(min) * 60
}

const getMin = (remainingTime) => {
  return format(Math.floor(remainingTime / 60))
}

const getSec = (remainingTime) => {
  return format(remainingTime % 60)
}

function App() {
  const audioNode = document.getElementById('beep')

  const timeRef = useRef()

  const [isCounting, setIsCounting] = useState(false)
  const [whatIsCounting, setWhatIsCounting] = useState('Session')

  const [breakLength, setBreakLength] = useState(defaultBreak)
  const [sessionLength, setSessionLength] = useState(defaultSession)

  // if init value === 0, the useEffect that checks if remainingTime === 0 is valid when started and change the count to "Break", that's why set to null
  const [remainingTime, setRemainingTime] = useState(null)

  const decrement = (text) => {
    if (text === 'Break' && breakLength > 1) {
      setBreakLength(breakLength - 1)
    }
    if (text === 'Session' && sessionLength > 1) {
      setSessionLength(sessionLength - 1)
    }
  }

  const increment = (text) => {
    if (text === 'Break' && breakLength < 60) {
      setBreakLength(breakLength + 1)
    }
    if (text === 'Session' && sessionLength < 60) {
      setSessionLength(sessionLength + 1)
    }
  }

  const handleClick = (params) => {
    setIsCounting(!isCounting)
  }

  const reset = () => {
    setBreakLength(defaultBreak)
    setSessionLength(defaultSession)
    setRemainingTime(minToSec(sessionLength))
    setIsCounting(false)
    setWhatIsCounting('Session')
    clearInterval(timeRef.current)
    audioNode.pause()
    audioNode.currentTime = 0
  }

  useEffect(() => {
    if (isCounting === true) {
      timeRef.current = setInterval(() => {
        // non-functional update doesn't work here
        setRemainingTime((prevTime) => prevTime - 1)
      }, 1000)
    }
    if (isCounting === false) {
      clearInterval(timeRef.current)
    }
  }, [isCounting, whatIsCounting])

  // update the remainingTime depends on Session/Break is on countdown
  // since it's ran when first loaded, also set remainingTime according to seesionLength on init
  useEffect(() => {
    if (whatIsCounting === 'Session') {
      setRemainingTime(minToSec(sessionLength))
    } else {
      setRemainingTime(minToSec(breakLength))
    }
  }, [sessionLength, breakLength])

  // check if remainingTime is 0
  useEffect(() => {
    if (remainingTime === 0) {
      // play audio
      audioNode.play()
      clearInterval(timeRef.current)
      if (whatIsCounting === 'Session') {
        setWhatIsCounting('Break')
        setRemainingTime(minToSec(breakLength))
      } else {
        setWhatIsCounting('Session')
        setRemainingTime(minToSec(sessionLength))
      }
    }
  }, [remainingTime])

  return (
    <div id="app">
      <div className="main-title">25+5 Clock</div>
      <LengthControl
        label="Break"
        length={breakLength}
        decrement={decrement}
        increment={increment}
        disabled={isCounting} // if clock is counting down, disable the button
      />
      <LengthControl
        label="Session"
        length={sessionLength}
        decrement={decrement}
        increment={increment}
        disabled={isCounting} // if clock is counting down, disable the button
      />

      <div className="timer-container">
        <div id="timer-label">
          {whatIsCounting === 'Session' ? 'Session' : 'Break'}
        </div>
        <div id="time-left">{`${getMin(remainingTime)}:${getSec(
          remainingTime
        )}`}</div>
      </div>

      <div className="timer-control">
        <button id="start_stop" onClick={handleClick}>
          <i className="fa fa-play fa-2x"></i>
          <i className="fa fa-pause fa-2x"></i>
        </button>
        <button id="reset" className="fa fa-refresh" onClick={reset}></button>
      </div>

      <div className="author">
        <p>Coded by</p>
        <a href="https://github.com/1codingguy">coding-guy</a>
      </div>

      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  )
}

export default App
