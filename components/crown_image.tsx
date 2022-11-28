import "./layoutstyle.css";
import Image from "next/image";
import crownImage from "./crown.png";

export default function CrownImage() {
  return <Image className="crownn" src={crownImage} alt="Picture of a crown" />;
}
