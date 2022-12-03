"use client";
import "./layoutstyle.css";
import Square from "./square";
import Score from "./score";
import Username from "./username";
import Rectang from "./rect";
import ButtonOk from "./button";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function BottComp() {
  const tasks = useSelector((state: RootState) => state.tasks);

  const squareArray = [];
  for (let i = 1; i <= 4; i++) {
    squareArray.push(<Square idNumber={`square${i}`} key={i} />);
  }

  return (
    <div className="bottom">
      {squareArray}
      <Score />
      <Username />
      <ButtonOk />
      <Rectang idNumber={"rectangle10"} />
      <>{console.log(tasks.square1)}</>
    </div>
  );
}
