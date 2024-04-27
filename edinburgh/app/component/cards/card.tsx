import Image from "next/image";
import partyImage from "../../../public/images/party-image.jpg";

export default function Card() {
  return (
    <div className="flex flex-row bg-dark w-full h-32">
      <div className="relative w-1/3 h-32">
        <Image
          src={partyImage}
          alt="Image of a party"
          fill={true}
          className="w-full"
        />
      </div>
    </div>
  );
}
