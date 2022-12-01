import "./layoutstyle.css";
import Square from "./square";
import Score from "./score";
import Username from "./username";
import Rectang from "./rect";
import ButtonOk from "./button";

export default function BottComp() {
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
    </div>
  );
}
