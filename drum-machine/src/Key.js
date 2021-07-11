import React from "react";
import { useGlobalContext } from "./context";
import { data } from "./data";

const Key = ({ item }) => {
  const { handleClick, bank } = useGlobalContext();

  const targetKey = data.find((entry) => entry.letter === item.letter);
  const idString = targetKey[bank].replaceAll(" ", "-");
  const audioLink =
    bank === "heaterKit" ? "heaterKitLink" : "smoothPianoKitLink";

  return (
    <div
      className="drum-pad"
      id={idString}
      onClick={() => handleClick(item.letter)}
    >
      <p className="key-letters">{item.letter}</p>
      <audio
        id={item.letter}
        src={targetKey[audioLink]}
        className="clip"
      ></audio>
    </div>
  );
};

export default Key;
