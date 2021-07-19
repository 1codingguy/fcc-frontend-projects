import React from "react";

const LengthControl = ({ label, length, increment, decrement }) => {
  const labelLowerCase = label.toLowerCase();

  return (
    <div className="length-control">
      <p id={`${labelLowerCase}-label`}>{label} Length</p>
      <button
        id={`${labelLowerCase}-decrement`}
        onClick={() => decrement(label)}
      >
        <i className="fa fa-arrow-down fa-2x"></i>
      </button>
      <span id={`${labelLowerCase}-length`}>{length}</span>
      <button
        id={`${labelLowerCase}-increment`}
        onClick={() => increment(label)}
      >
        <i className="fa fa-arrow-up fa-2x"></i>
      </button>
    </div>
  );
};

export default LengthControl;
