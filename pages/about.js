import styles from '../styles/about.module.css';
import React from 'react';
function Board() {
  const [player, setPlayer] = React.useState(1);
  const [squareValues, setSquareValues] = React.useState();
  const [squareValues1, setSquareValues1] = React.useState();
  const [squareValues2, setSquareValues2] = React.useState();
  const [squareValues3, setSquareValues3] = React.useState();
  const [squareValues4, setSquareValues4] = React.useState();
  const [squareValues5, setSquareValues5] = React.useState();
  const [squareValues6, setSquareValues6] = React.useState();
  const [squareValues7, setSquareValues7] = React.useState();
  const [squareValues8, setSquareValues8] = React.useState();

  return (
    <div>
      <h1>Your turn Player{player}!</h1>
      <div
        className={styles.board}
        onClick={function () {
          if (player === 1) {
            setPlayer(2);
          } else {
            setPlayer(1);
          }
        }}
      >
        <Square
          value={squareValues}
          onClick={function () {
            setSquareValues('x');
          }}
        ></Square>
        <Square
          value={squareValues1}
          onClick={function () {
            setSquareValues1('x');
          }}
        ></Square>
        <Square
          value={squareValues2}
          onClick={function () {
            setSquareValues2('x');
          }}
        ></Square>
        <Square
          value={squareValues3}
          onClick={function () {
            setSquareValues3('x');
          }}
        ></Square>
        <Square
          value={squareValues4}
          onClick={function () {
            setSquareValues4('x');
          }}
        ></Square>
        <Square
          value={squareValues5}
          onClick={function () {
            setSquareValues5('x');
          }}
        ></Square>
        <Square
          value={squareValues6}
          onClick={function () {
            setSquareValues6('x');
          }}
        ></Square>
        <Square
          value={squareValues7}
          onClick={function () {
            setSquareValues7('x');
          }}
        ></Square>
        <Square
          value={squareValues8}
          onClick={function () {
            setSquareValues8('x');
          }}
        ></Square>

        <Square value={[1]}></Square>
        <Square value={[2]}></Square>
        <Square value={[3]}></Square>
        <Square value={[4]}></Square>
        <Square value={[5]}></Square>
        <Square value={[6]}></Square>
        <Square value={[7]}></Square>
        <Square value={[8]}></Square>
      </div>
    </div>
  );
}
function Square({ value, onClick }) {
  return (
    <div className={styles.square} onClick={onClick}>
      {value}
    </div>
  );
}
export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Tic Tac Toe Exercise</h1>
      <Board></Board>
    </div>
  );
}
