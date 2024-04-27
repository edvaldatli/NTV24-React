import Image from "next/image";
import logo from "../../../public/images/logo.png";

export default function DesktopHeader() {
  return (
    <div className="md:block hidden">
      <div className="flex flex-row bg-dark w-screen h-32">
        <div className="w-1/3"></div>
        <Image
          alt="logo"
          src={logo}
          height={500}
          width={500}
          style={{ objectFit: "contain" }}
          className="w-1/3"
        />
      </div>
      <div className="w-1/3"></div>
    </div>
  );
}
