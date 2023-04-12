import { useState } from "react";
import Board from "./components/Board";
import Scores from "./components/Scores";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [score, setScore] = useState({ x: 0, o: 0 });

  const WIN_CONDITION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWin = () => {
    for (let i = 0; i < WIN_CONDITION.length; i++) {
      const [a, b, c] = WIN_CONDITION[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c])
        return true;
    }
    return false;
  };

  const handleClick = (id) => {
    let value = isX ? "X" : "O";
    const clicked = board.map((n, index) => (index === id ? value : n));
    setBoard(clicked);
    if (checkWin()) {
      setScore(
        !isX ? { ...score, x: score.x + 1 } : { ...score, o: score.o + 1 }
      );
      setBoard(Array(9).fill(null));
    }
    setIsX(!isX);
  };

  return (
    <div className="App">
      <Scores score={score} isX={isX} />
      <Board board={board} onClick={handleClick} />
      <button className="reset" onClick={() => setBoard(Array(9).fill(null))}>
        Reset
      </button>
    </div>
  );
}

export default App;
