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

  return (
    <div className="bottom">
      <Square idNumber="square1" key={1} value={tasks.square1} />
      <Square idNumber="square2" key={2} value={tasks.square2} />
      <Square idNumber="square3" key={3} value={tasks.square3} />
      <Square idNumber="square4" key={4} value={tasks.square4} />
      <Score />
      <Username />
      <ButtonOk />
      <Rectang idNumber={"rectangle10"} />
    </div>
  );
}
