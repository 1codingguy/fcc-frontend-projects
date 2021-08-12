import React from 'react'
import { useGlobalContext } from './context'

const Btn = ({ text }) => {
  const { isPowerOn, toggleSwitch } = useGlobalContext()
  const defaultPowerBtn = text === 'Power' && isPowerOn
  const disableBankBtn = text === 'Bank' && !isPowerOn

  return (
    <div className="btn-container">
      <p className="btn-text">{text}</p>
      <button
        className={defaultPowerBtn ? `btn btn-right` : `btn`}
        onClick={(e) => toggleSwitch(e, text)}
        disabled={disableBankBtn}
      >
        <div className="btn-inner"></div>
      </button>
    </div>
  )
}

export default Btn
