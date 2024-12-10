import chat1 from "../../assets/img/Frame 3.png";
import chat2 from "../../assets/img/Frame 4.png";

function Chatbot() {
  return (
    <div className="px-5 sm:px-8 mt-16 flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col justify-center items-center gap-1">
        <p className="text-sm sm:text-md font-medium">Talk me</p>
        <h1 className="text-3xl sm:text-4xl font-bold">Chatbot</h1>
      </div>

      <div className="flex bg-[#e2f8ff] px-5 py-10 rounded-2xl flex-col gap-7 sm:gap-0 sm:flex-row justify-center items-start w-full">
        <div className="flex w-[100%] sm:w-[50%] gap-5 flex-col justify-start items-start">
          <div className="w-[100%] sm:w-[80%] flex flex-col justify-center items-center sm:items-start sm:justify-start gap-2">
            <h1 className="text-lg lg:text-xl font-semibold">
              Azure AI Chatbot
            </h1>
            <p className="text-sm lg:text-md text-center sm:text-start">
              I’m a designer and developer who creates websites and applications
              on YouTube. These tutorials will help you learn how to use the
              latest frameworks!
            </p>
          </div>
          <div className="w-[100%] sm:w-[80%] flex flex-col justify-center items-center sm:items-start sm:justify-start gap-2">
            <p className="text-sm lg:text-md text-center sm:text-start">
              Designer and developer who creates and applications on YouTube.
              These tutorials will help you learn how to use the latest
              frameworks!
            </p>
            <button className="bg-[#0961b0] text-white px-2 py-2 text-sm sm:text-md sm:px-3 sm:py-2 rounded-2xl">
              Download Resume
            </button>
          </div>
        </div>

        <div className="w-[100%] sm:w-[50%] bg-white py-10 px-5 rounded-2xl flex flex-col justify-start items-start gap-7">
          <div className="flex items-center justify-center gap-4">
            <img src={chat1} className="w-8 lg:w-10" alt="" />
            <p className="text-sm lg:text-md">
              I’m a designer and developer who creates websites and applications
              on YouTube.{" "}
            </p>
          </div>
          <div className="flex flex-row-reverse items-center justify-center gap-4">
            <img src={chat2} className="w-8 lg:w-10" alt="" />
            <p className="text-end text-sm lg:text-md">
              I’m a designer and developer who creates websites and applications
              on YouTube.
            </p>
          </div>
          <div className="relative w-[100%]">
            <input
              type="text"
              className="w-[100%] xl:w-96 h-8 lg:h-10 rounded-xl bg-[#e2f8ff]"
            />
            <button className="bg-[#0961b0] absolute right-[100px] text-white px-5 py-1 lg:py-2 rounded-2xl">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
