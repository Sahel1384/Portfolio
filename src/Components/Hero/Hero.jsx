import github from "../../assets/img/github.svg";
import linkedin from "../../assets/img/linkedin-161-svgrepo-com.svg";
import hero from "../../assets/img/hero1.jpg";
import html from "../../assets/img/html-svgrepo-com.svg";
import css from "../../assets/img/css-3-svgrepo-com.svg";
import js from "../../assets/img/js-svgrepo-com.svg";
import sass from "../../assets/img/sass-original.svg";
import react from "../../assets/img/react-original.svg";
import next from "../../assets/img/nextjs-fill-svgrepo-com.svg";
import azure from "../../assets/img/azure-original.svg";
import vs from "../../assets/img/vs-code-svgrepo-com.svg";
import python from "../../assets/img/python-original.svg";
function Hero() {
  return (
    <>
      <div className="px-5 sm:px-8 mt-5 flex flex-col sm:flex-row justify-center items-center w-full gap-7">
        <div className="flex flex-col justify-center items-center sm:justify-center sm:items-start gap-3 bg-[#e2f8ff] w-[100%] sm:w-[50%] px-5 md:px-10 py-4 sm:py-8 rounded-[20px] sm:rounded-[30px] lg:rounded-[50px]">
          <div>
            <h1 className="text-[25px] text-center sm:text-start sm:text-[27px] md:text-[30px] lg:text-[36px] font-light">
              Hello, I’m
            </h1>
            <h1 className="text-[25px] sm:text-[27px] md:text-[30px] lg:text-[36px] font-bold">
              Moh Sahel
            </h1>
          </div>
          <div className="w-[100%]">
            <p className="text-xs md:text-sm lg:text-md text-center sm:text-start">
              I’m a designer and developer who creates websites and applications
              on YouTube. These tutorials will help you learn how to use the
              latest frameworks!
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <button className="bg-black hover:bg-[#0961b0] duration-300 text-sm md:text-md text-white px-2 py-1 lg:px-3 lg:py-2 rounded-lg">
              View Resume
            </button>
            <button className="bg-white hover:text-white duration-300 hover:bg-[#0961b0] text-sm md:text-md px-2 py-1 lg:px-3 lg:py-2 rounded-lg">
              Contact Me
            </button>
          </div>
          <div className="flex justify-center items-center gap-2 mt-1">
            <img src={github} className="w-5 cursor-pointer" alt="" />
            <img src={linkedin} className="w-5 cursor-pointer" alt="" />
          </div>
        </div>
        <div className="w-[100%] sm:w-[50%]">
          <img
            src={hero}
            className="rounded-[20px] sm:rounded-[30px] lg:rounded-[50px] w-[100%] h-[280px] sm:h-[295px] md:h-[300px] lg:h-[325px] xl:h-[310px]"
            alt=""
          />
        </div>
      </div>
      <div className="px-5 md:px-16 mt-10 flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-0">
        <img src={html} className="w-[60px] sm:w-[70px]" alt="" />
        <img src={css} className="w-[60px] sm:w-[70px]" alt="" />
        <img src={js} className="w-[60px] sm:w-[70px]" alt="" />
        <img src={sass} className="w-[60px] sm:w-[70px]" alt="" />
        <img src={react} className="w-[60px] sm:w-[70px]" alt="" />
        <img src={next} className="w-[60px] sm:w-[70px]" alt="" />
        <img src={azure} className="w-[60px] sm:w-[70px]" alt="" />
        <img src={vs} className="w-[60px] sm:w-[70px]" alt="" />
        <img src={python} className="w-[60px] sm:w-[70px]" alt="" />
      </div>
    </>
  );
}

export default Hero;
