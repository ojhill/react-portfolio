import React from "react";
import styles from "styles/tictactoe.module.css";
import Layout from "Layout";
import Button from "@mui/material/Button";

function Square({ value, onClick }) {
  return (
    <div className={styles.square} onClick={onClick}>
      {value}
    </div>
  );
}

function Board() {
  const [player, setPlayer] = React.useState(1);
  // Makes an array with 9 empty elements
  // [null, null, null, X9]
  const [squares, setSquares] = React.useState(new Array(9).fill());

  const [isDone, setIsDone] = React.useState(false);

  function handleClick(index) {
    if (squares[index]) return;

    if (player === 1) {
      squares[index] = "X";
      setPlayer(2);
    } else {
      squares[index] = "O";
      setPlayer(1);
    }
    setSquares(squares);

    if (squares.every((value) => value)) {
      setIsDone(true);
    }
  }

  function resetBoard() {
    setPlayer(1);
    setSquares(new Array(9).fill());
    setIsDone(false);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div>
      <h2>Its your turn player {player}</h2>
      <div className={styles.board}>
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      {isDone && <Button onClick={resetBoard}>Reset</Button>}
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>Tic Tac Toe</h1>
        <Board></Board>
      </div>
    </Layout>
  );
}