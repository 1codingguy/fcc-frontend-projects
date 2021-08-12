import React from 'react'
import { useGlobalContext } from './context'
import { data } from './data'

const Key = ({ item }) => {
  const { handleClick, bank, audioRef, animationRef } = useGlobalContext()

  const targetKey = data.find((entry) => entry.letter === item.letter)
  const idString = targetKey[bank].replaceAll(' ', '-')
  const audioLink =
    bank === 'heaterKit' ? 'heaterKitLink' : 'smoothPianoKitLink'

  return (
    <div
      ref={(element) => (animationRef.current[item.letter] = element)}
      className="drum-pad"
      id={idString}
      onClick={() => handleClick(item.letter)}
    >
      <p className="key-letters">{item.letter}</p>
      <audio
        ref={(element) => (audioRef.current[item.letter] = element)}
        id={item.letter}
        src={targetKey[audioLink]}
        className="clip"
      ></audio>
    </div>
  )
}

export default Key
