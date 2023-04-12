import React from "react";
import "./Box.css";

const Box = ({ value, onClick, id }) => {
  const style = value === "X" ? "box x" : "box o";

  return (
    <button className="box" onClick={() => onClick(id)}>
      {value}
    </button>
  );
};

export default Box;
