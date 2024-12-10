import { useState } from "react";
import logo from "../../assets/img/Frame 2.png";
import bars from "../../assets/img/bars-right-svgrepo-com.svg";
import { FaTimes } from "react-icons/fa";
function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <div className="">
        <div className="px-5 sm:px-8 pt-7 pb-2 flex justify-between items-center border-b">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 justify-center">
              <img src={logo} className="w-8 md:w-9 cursor-pointer" alt="" />
              <h1 className="font-medium cursor-pointer">Portfolio Website</h1>
            </div>
          </div>
          <div className="flex items-center justify-center gap-7">
            <ul className="hidden sm:block  sm:flex items-center justify-center gap-7 text-[14px] font-medium text-gray-500">
              <li className="cursor-pointer hover:text-[#0961b0] duration-300">
                Home
              </li>
              <li className="cursor-pointer hover:text-[#0961b0] duration-300">
                Resume
              </li>
              <li className="cursor-pointer hover:text-[#0961b0] duration-300">
                Project
              </li>
            </ul>
            <button className="bg-[#0961b0] hidden sm:block hover:bg-[#2e71ab] duration-300 text-white rounded-[12px] text-xs md:text-sm px-2 py-[5px] md:px-3 md:py-[7px]">
              Contact Me
            </button>
            <img
              src={bars}
              className="block sm:hidden w-5 cursor-pointer hover:text-[#0961b0] duration-300"
              alt=""
              onClick={() => setSideBar((pre) => !pre)}
            />
          </div>
        </div>
      </div>

      {/* side bar start */}
      {/* {sideBar && ( */}

      {/* #0961b0 
      #e2f8ff
      #fffbe6
      #fcda69
      */}
      <div
        className={`
            ${sideBar ? "w-full px-5 py-4" : "w-0"}
            fixed right-0 top-0 h-screen duration-700 shadow-2xl overflow-hidden z-50 bg-white`}
      >
        <div className="flex flex-col gap-10 w-full">
          <div className="flex items-center justify-between">
            <FaTimes
              onClick={() => setSideBar((pre) => !pre)}
              className="cursor-pointer text-xl hover:text-[#0961b0] duration-300"
            />
            <h1 className="font-medium cursor-pointer">Portfolio Website</h1>
          </div>
          <div className="flex flex-col items-start justify-start gap-7">
            <ul className="flex flex-col items-start justify-start gap-7 text-[14px] font-medium text-gray-500">
              <li className="cursor-pointer hover:text-[#0961b0] duration-300">
                Home
              </li>
              <li className="cursor-pointer hover:text-[#0961b0] duration-300">
                Resume
              </li>
              <li className="cursor-pointer hover:text-[#0961b0] duration-300">
                Project
              </li>
            </ul>
            <button className="bg-[#0961b0] hover:bg-[#265c8b] duration-300 text-white rounded-[12px] text-xs md:text-sm px-2 py-[5px] md:px-3 md:py-[7px]">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default Navbar;
