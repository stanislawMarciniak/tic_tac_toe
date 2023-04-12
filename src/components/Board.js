import React from "react";
import Box from "./Box";
import "./Board.css";

const Board = ({ board, onClick }) => {
  return (
    <div>
      {board.map((value, i) => (
        <Box id={i} value={value} onClick={onClick} />
      ))}
    </div>
  );
};

export default Board;
