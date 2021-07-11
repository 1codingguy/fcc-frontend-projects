import React, { useEffect, useContext, useState, useCallback } from "react";
import { data } from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [power, setPower] = useState(true); // power On by default
  const [bank, setBank] = useState("heaterKit");
  const [display, setDisplay] = useState("");
  const [volume, setVolume] = useState(50);
  const [pressedKey, setPressedKey] = useState("");

  // power and bank button toggle animation with "btn-right" class
  const toggleSwitch = (e, btnName) => {
    if (btnName === "Power") {
      setPower(!power);
      e.currentTarget.classList.toggle("btn-right");
    }
    if (btnName === "Bank") {
      e.currentTarget.classList.toggle("btn-right");
      if (bank === "heaterKit") {
        setBank("smoothPianoKit");
        setDisplay("Smooth Piano Kit");
      } else {
        setBank("heaterKit");
        setDisplay("Heater Kit");
      }
    }
  };

  const handleVolumeChange = (e) => {
    setDisplay(`Volume: ${e.target.value}`);
    setVolume(e.target.value);
  };

  const handleKeypress = useCallback(
    (e) => {
      if (power) {
        const pressed = data.find(
          (item) => item.letter === e.key.toUpperCase()
        );
        if (pressed) {
          setPressedKey(pressed.letter);
        }
      }
    },
    [power]
  );

  const handleClick = (letter) => {
    if (power) {
      // console.log(`in handleClick, calling setPressedKey`);
      setPressedKey(letter);
    }
  };

  const executeKeyActions = useCallback(
    (targetNode, pressedKey) => {
      // key press animation
      targetNode.classList.add("key-down");
      setTimeout(() => {
        // console.log(targetNode.classList);
        targetNode.classList.remove("key-down");
      }, 100);

      // set the display value according to pressedKey and Bank
      const target = data.find((item) => item.letter === pressedKey);
      if (bank === "heaterKit") {
        setDisplay(target.heaterKit);
      } else {
        setDisplay(target.smoothPianoKit);
      }

      // play audio
      const audioNode = document.getElementById(pressedKey);
      audioNode.volume = volume / 100;
      // play audio from the start even when current one not finished playing
      if (audioNode.paused) {
        audioNode.play();
      } else {
        audioNode.currentTime = 0;
      }

      // set the value to empty, otherwise repeat clicking/ pressing don't work
      setPressedKey("");
    },
    [bank, volume]
  );

  // set display to empty when power off
  useEffect(() => {
    if (!power) {
      setDisplay("");
    }
  }, [power]);

  // when volume changed, display of volume disappeared after 1 sec
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDisplay("");
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [volume]);

  // when the value of "bank" or "power" is change, then add an event listener again?
  useEffect(() => {
    document.addEventListener("keypress", handleKeypress);
    return () => {
      document.removeEventListener("keypress", handleKeypress);
    };
  }, [bank, power, handleKeypress]);

  // every time when `pressedKey` is changed because of click or keypress event, get the node according to the letter clicked or pressed, then run executeKeyActions
  useEffect(() => {
    if (pressedKey) {
      // console.log(pressedKey);
      const targetNode = document.getElementById(pressedKey).parentNode;
      // console.log(targetNode);
      // console.log(targetNode.classList);
      executeKeyActions(targetNode, pressedKey);
    }
  }, [pressedKey, executeKeyActions]);

  return (
    <AppContext.Provider
      value={{
        power,
        toggleSwitch,
        display,
        volume,
        handleVolumeChange,
        handleClick,
        pressedKey,
        bank,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
