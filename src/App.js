import Board from "./components/Board";
import "./App.css";

function App() {
  const board = Array(9).fill(null);

  return (
    <div className="App">
      <Board board={board} onClick={null} />
    </div>
  );
}

export default App;
