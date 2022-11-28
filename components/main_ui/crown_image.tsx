import "./layoutstyle.css";
import Image from "next/image";

export default function CrownImage() {
  return (
    <Image
      className="crownn"
      src="/marker-icons/crown.png"
      alt="Picture of a crown"
      width="64"
      height="64"
    />
  );
}
