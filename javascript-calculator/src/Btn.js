import React from "react";
import data from "./dataInArray";

const Btn = ({ dispatch }) => {
  return (
    <>
      {data.map((item) => {
        const { value, className, id } = item;
        return (
          <button
            key={id}
            className={className}
            id={id}
            value={value}
            onClick={() =>
              dispatch({ type: className, payload: { value, id } })
            }
          >
            {value}
          </button>
        );
      })}
    </>
  );
};

export default Btn;
