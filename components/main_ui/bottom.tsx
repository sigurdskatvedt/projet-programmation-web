"use client";
import "./layoutstyle.css";
import Square from "./square";
import Rectang from "./rect";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setScoreRef, toggleStarted } from "../../redux/slices/tasksSlice";
import { useEffect, useRef, useState } from "react";
import React from "react";
import CountdownComp from "./CountdownComp";

export default function BottComp() {
  const [nameForChange, setNameForChange] = useState(null);
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  const clockRef = useRef();
  dispatch(setScoreRef(clockRef));

  return (
    <div className="bottom">
      <Square idNumber="square1" key={1} value={tasks.square1} />
      <Square idNumber="square2" key={2} value={tasks.square2} />
      <Square idNumber="square3" key={3} value={tasks.square3} />
      <Square idNumber="square4" key={4} value={tasks.square4} />
      <div className="score">
        <h1>Score :</h1>
      </div>
      <h1 className="username">username :</h1>
      <CountdownComp />
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
