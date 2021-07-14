import React from "react";
import data from "./dataInArray";

const Btn = ({setInput}) => {
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
            onClick={() => setInput({value, className})}
          >
            {value}
          </button>
        );
      })}
    </>
  );
};

export default Btn;
