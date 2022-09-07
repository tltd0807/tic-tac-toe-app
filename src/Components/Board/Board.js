import React, { useState } from "react";
import Square from "../Square/Square";
import classes from "./Board.module.css";

const Board = (props) => {
  const [squareIsClick, setSquareIsClick] = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  });

  const checkWinner = (squares) => {
    const linesOfWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < linesOfWin.length; i++) {
      const [a, b, c] = linesOfWin[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  let status = checkWinner(squareIsClick.squares)
    ? `Winner: ${checkWinner(squareIsClick.squares)}`
    : `Player: ${squareIsClick.xIsNext ? "X" : "O"}`;

  const onClickHandler = (index) => {
    // vì react không sửa được trực tiếp mà nên để func set... với useState
    const squares = squareIsClick.squares.slice();
    if (checkWinner(squares) || squares[index]) {
      return;
    }

    squares[index] = squareIsClick.xIsNext ? "X" : "O";
    setSquareIsClick({ squares: squares, xIsNext: !squareIsClick.xIsNext });
    props.onChangeHistory(squareIsClick);
  };
  const arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push(i);
  }
  return (
    <React.Fragment>
      <h1>{status}</h1>
      <div className={classes.board}>
        {arr.map((index) => (
          <Square
            key={index}
            value={squareIsClick.squares[index]}
            onClick={() => onClickHandler(index)}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Board;
