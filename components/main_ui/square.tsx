import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type Props = {
  idNumber: string;
  value: string;
};

export default function Square({ idNumber, value }: Props) {
  let imageComponent = <></>;
  if (value) {
    imageComponent = (
      <Image src={value} alt="Icon for in box" width={100} height={100} />
    );
  }
  return (
    <div className="squar" id={idNumber}>
      {imageComponent}
    </div>
  );
}
