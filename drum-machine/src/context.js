import React, {
  useEffect,
  useContext,
  useState,
  useCallback,
  useRef,
} from 'react'
import { data } from './data'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isPowerOn, setIsPowerOn] = useState(true) // power On by default
  const [bank, setBank] = useState('heaterKit')
  const [display, setDisplay] = useState('')
  const [volume, setVolume] = useState(50)
  const [pressedKey, setPressedKey] = useState('')

  const audioRef = useRef({}) // target individual audio element
  const animationRef = useRef({}) // target key container for animation

  // isPowerOn and bank button toggle animation with "btn-right" class
  const toggleSwitch = (e, btnName) => {
    if (btnName === 'Power') {
      setIsPowerOn(!isPowerOn)
      e.currentTarget.classList.toggle('btn-right')
    }
    if (btnName === 'Bank') {
      e.currentTarget.classList.toggle('btn-right')
      if (bank === 'heaterKit') {
        setBank('smoothPianoKit')
        setDisplay('Smooth Piano Kit')
      } else {
        setBank('heaterKit')
        setDisplay('Heater Kit')
      }
    }
  }

  const handleVolumeChange = (e) => {
    setDisplay(`Volume: ${e.target.value}`)
    setVolume(e.target.value)
  }

  const handleKeypress = useCallback(
    (e) => {
      if (isPowerOn) {
        const pressed = data.find((item) => item.letter === e.key.toUpperCase())
        if (pressed) {
          setPressedKey(pressed.letter)
        }
      }
    },
    [isPowerOn]
  )

  const handleClick = (letter) => {
    if (isPowerOn) {
      setPressedKey(letter)
    }
  }

  const executeKeyActions = useCallback(
    (animationNode, pressedKey) => {
      // key press animation
      animationNode.classList.add('key-down')
      setTimeout(() => {
        animationNode.classList.remove('key-down')
      }, 100)

      // set the display value according to pressedKey and Bank
      const target = data.find((item) => item.letter === pressedKey)
      if (bank === 'heaterKit') {
        setDisplay(target.heaterKit)
      } else {
        setDisplay(target.smoothPianoKit)
      }

      // play audio
      const audioNode = audioRef.current[pressedKey]
      audioNode.volume = volume / 100
      // play audio from the start even when current one not finished playing
      if (audioNode.paused) {
        audioNode.play()
      } else {
        audioNode.currentTime = 0
      }

      // set the value to empty, otherwise repeat clicking/ pressing don't work
      setPressedKey('')
    },
    [bank, volume]
  )

  // set display to empty when power off
  useEffect(() => {
    if (!isPowerOn) {
      setDisplay('')
    }
  }, [isPowerOn])

  // when volume changed, display of volume disappeared after 1 sec
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDisplay('')
    }, 1000)
    return () => {
      clearTimeout(timeOutId)
    }
  }, [volume])

  // when the value of "bank" or "isPowerOn" is change, then add an event listener again?
  useEffect(() => {
    document.addEventListener('keypress', handleKeypress)
    return () => {
      document.removeEventListener('keypress', handleKeypress)
    }
  }, [bank, isPowerOn, handleKeypress])

  // every time when `pressedKey` is changed because of click or keypress event, get the node according to the letter clicked or pressed, then run executeKeyActions
  useEffect(() => {
    if (pressedKey) {
      const animationNode = animationRef.current[pressedKey]
      executeKeyActions(animationNode, pressedKey)
    }
  }, [pressedKey, executeKeyActions])

  return (
    <AppContext.Provider
      value={{
        isPowerOn,
        toggleSwitch,
        display,
        volume,
        handleVolumeChange,
        handleClick,
        pressedKey,
        bank,
        audioRef,
        animationRef,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
