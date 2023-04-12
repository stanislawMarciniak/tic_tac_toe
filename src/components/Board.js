import React from "react";
import Button from "./Button";

const Board = ({board}) => {
  return (
    <div>
      {board.map(n => <Button />)}
    </div>
  )
}

export default Board;
