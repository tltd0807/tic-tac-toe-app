import React, { useState } from "react";
import Square from "../Square/Square";
import classes from "./Board.module.css";

const Board = (props) => {
  const [squareIsClick, setSquareIsClick] = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  });

  const onClickHandler = (index) => {
    const squares = squareIsClick.squares.slice();
    squares[index] = squareIsClick.xIsNext ? "X" : "O";
    console.log(squareIsClick.squares);
    setSquareIsClick({ squares: squares, xIsNext: !squareIsClick.xIsNext });
  };
  const arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push(i);
  }
  let h1 = `Player: ${squareIsClick.xIsNext ? "X" : "O"}`;
  return (
    <React.Fragment>
      <h1>{h1}</h1>
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
