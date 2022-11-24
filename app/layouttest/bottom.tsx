import "./layoutstyle.css"
import Square from "./square"
import Score from "./score"
import Username from "./username"
import Rectang from "./rect"
import ButtonOk from "./button"

export default function BottComp() {
    return (
        <div className="bottom">
        <Square idNumber={"square1"}/>
        <Square idNumber={"square2"}/>
        <Square idNumber={"square3"}/>
        <Score />
        
        <Username />
    
        <Rectang idNumber={"rectangle10"}/>
        </div>
    )
  }