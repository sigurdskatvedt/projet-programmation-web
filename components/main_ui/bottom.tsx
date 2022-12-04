"use client";
import "./layoutstyle.css";
import Square from "./square";
import Rectang from "./rect";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleStarted } from "../../redux/slices/tasksSlice";
import { useState } from "react";

export default function BottComp() {
  const [nameForChange, setNameForChange] = useState(null);
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="bottom">
      <Square idNumber="square1" key={1} value={tasks.square1} />
      <Square idNumber="square2" key={2} value={tasks.square2} />
      <Square idNumber="square3" key={3} value={tasks.square3} />
      <Square idNumber="square4" key={4} value={tasks.square4} />
      <h1 className="score">Score :</h1>
      <h1 className="username">username :</h1>
      <input
        className="rectangle"
        id="rectangle10"
        type="text"
        onChange={(e) => setNameForChange(e.target.value)}
      />
      <button
        className="okk"
        onClick={(e) => dispatch(toggleStarted(nameForChange))}
      >
        OK
      </button>
    </div>
  );
}
