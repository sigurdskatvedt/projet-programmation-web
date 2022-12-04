import "./layoutstyle.css";
import Rectang from "./rect";
import Image from "next/image";

export default function TopComp() {
  return (
    <div className="top">
      <h1 className="georesto">GeoResto</h1>
      <Image
        className="crownn"
        src="/marker-icons/crown.png"
        alt="Picture of a crown"
        width="64"
        height="64"
      />
      <h1 className="bestp">Best players</h1>
      <Rectang idNumber={"rectangle1"} />
      <Rectang idNumber={"rectangle2"} />
      <Rectang idNumber={"rectangle3"} />
      <Rectang idNumber={"rectangle4"} />
      <Rectang idNumber={"rectangle5"} />
      <Rectang idNumber={"rectangle6"} />
      <Rectang idNumber={"rectangle7"} />
      <Rectang idNumber={"rectangle8"} />
      <Rectang idNumber={"rectangle9"} />
    </div>
  );
}
