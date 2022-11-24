import "./layoutstyle.css"
import GeoR from "./georesto"
import Rectang from "./rect"


export default function TopComp() {
    return (
        <div className="top">
        <GeoR />
        <Rectang idNumber={"rectangle1"}/>
        <Rectang idNumber={"rectangle2"}/>
        <Rectang idNumber={"rectangle3"}/>
        <Rectang idNumber={"rectangle4"}/>
        <Rectang idNumber={"rectangle5"}/>
        <Rectang idNumber={"rectangle6"}/>
        <Rectang idNumber={"rectangle7"}/>
        <Rectang idNumber={"rectangle8"}/>
        <Rectang idNumber={"rectangle9"}/>
        
        </div>
    )
  }
