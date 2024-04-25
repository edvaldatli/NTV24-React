import Image from "next/image";
import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <>
      {/* big nav */}
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
      {/* small nav */}
      <div className="md:hidden absolute">
        <div className="flex flex-row bg-dark h-20">
          <button className="absolute group left-2 top-4 z-10">
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[45px] h-[45px] transform transition-all bg-dark ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
                <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>
                <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                  <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                  <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                </div>
              </div>
            </div>
          </button>
          <div className="w-2/3 h-screen fixed bg-dark-secondary">
            <div className="flex flex-col"></div>
          </div>
          <Image
            alt="logo"
            src={logo}
            height={500}
            width={500}
            style={{ objectFit: "contain" }}
            className="w-screen"
          />
        </div>
        <div className="w-2/3 h-screen fixed bg-dark-secondary">
          <div className="flex flex-col"></div>
        </div>
      </div>
      {/*Drawer */}
    </>
  );
}
