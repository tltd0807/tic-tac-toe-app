import { useState } from "react";
import Board from "../Board/Board";
import classes from "./Game.module.css";

const Game = (props) => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      xIsNext: true,
    },
  ]);
  const changeHistoryHandler = (squareIsClick) => {
    const newHistory = Object.assign(history, squareIsClick);
    console.log(newHistory);
    setHistory(newHistory);
  };

  return <Board onChangeHistory={changeHistoryHandler} history={history} />;
};

export default Game;
