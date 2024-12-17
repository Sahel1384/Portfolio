import { ExperienceData } from "./ExperienceData";

function Experience() {
  return (
    <div className="px-5 sm:px-8 mt-16 flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col justify-center items-center gap-1">
        <p className="text-sm sm:text-md font-medium">Recent</p>
        <h1 className="text-3xl sm:text-4xl font-bold">Work Experience</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-2 items-center w-full">
        {ExperienceData.map((data) => (
          <div
            key={data.id}
            className="p-2 lg:p-5 bg-[#fffbe6] rounded-2xl flex flex-col gap-4"
          >
            <img
              src={data.img}
              className="rounded-2xl w-full h-[280px] md:h-[230px]"
              alt=""
            />

            <div className="px-5 sm:px-0">
              <h1 className="text-lg md:text-xl font-semibold">{data.place}</h1>
              <h1 className="text-sm md:text-md font-medium">{data.date}</h1>
            </div>
            <div className="px-5 sm:px-0 text-[13px] md:text-sm">
              {data.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
