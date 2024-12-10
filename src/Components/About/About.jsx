function About() {
  return (
    <div className="px-5 sm:px-8 mt-16 flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col justify-center items-center gap-1">
        <p className="text-sm sm:text-md font-medium">About me</p>
        <h1 className="text-3xl sm:text-4xl font-bold">Skills</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-5 w-full bg-[#e2f8ff] gap-10 md:gap-0 px-5 py-10 rounded-[22px]">
        <div className="flex flex-col items-center justify-center md:justify-start md:items-start gap-10 w-[100%] md:w-[50%]">
          <div className="flex flex-col justify-center items-center md:justify-center md:items-start gap-2">
            <div>
              <h1 className="text-lg font-semibold">Frontend</h1>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-3">
              <button className="bg-[#0961b0] hover:bg-[#296396] text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs sm:text-sm font-semibold">
                HTML
              </button>
              <button className="bg-[#0961b0] hover:bg-[#296396] text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs sm:text-sm font-semibold">
                CSS
              </button>
              <button className="bg-[#0961b0] hover:bg-[#296396] text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs sm:text-sm font-semibold">
                JS
              </button>
              <button className="bg-[#0961b0] hover:bg-[#296396] text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs sm:text-sm font-semibold">
                React
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:justify-center md:items-start gap-2">
            <div>
              <h1 className="text-lg font-semibold">Backend</h1>
            </div>
            <div className="flex justify-center flex-wrap items-center gap-3">
              <button className="bg-[#0961b0] hover:bg-[#296396] text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs sm:text-sm font-semibold">
                NodeJS
              </button>
              <button className="bg-[#0961b0] hover:bg-[#29679c] text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs sm:text-sm font-semibold">
                Nest JS
              </button>
              <button className="bg-[#0961b0] hover:bg-[#29679c] text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs sm:text-sm font-semibold">
                MongoDB
              </button>
              <button className="bg-[#0961b0] hover:bg-[#29679c] block md:hidden xl:block text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs sm:text-sm font-semibold">
                Microsoft Azure
              </button>
            </div>
            <div>
              {" "}
              <button className="bg-[#0961b0] hover:bg-[#29679c] hidden md:block xl:hidden text-white px-3 md:px-4 py-1 md:py-2 rounded-2xl text-xs sm:text-sm font-semibold">
                Microsoft Azure
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-7 flex-col justify-start items-start w-[100%] md:w-[50%]">
          <div>
            <h1 className="text-lg font-bold text-center md:text-start">
              A bit about me
            </h1>
            <p className="font-semibold mt-1 md:mt-0 text-[13px] md:text-[14px] text-center md:text-start lg:text-md">
              I’m a designer and developer who creates websites and applications
              on YouTube. These tutorials will help you learn how to use the
              latest frameworks!
            </p>
          </div>
          <p className="font-semibold text-[13px] md:text-[14px] text-center md:text-start lg:text-md">
            Designer and developer who creates and applications on YouTube.
            These tutorials will help you learn how to use the latest
            frameworks!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
