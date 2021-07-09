import React from 'react'

const Key = ({item}) => {
  const letter = item.letter
  return (
    <div className="key">
      <p className="key-letters">{letter}</p>
    </div>
  );
}

export default Key
