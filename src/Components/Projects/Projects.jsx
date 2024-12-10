import pro1 from "../../assets/img/first.png";
import pro2 from "../../assets/img/second.jpg";
import pro3 from "../../assets/img/third.jpg";
import pro4 from "../../assets/img/Company-bro.png";
import pro5 from "../../assets/img/6731e4945e4dc075132731.jpg";
import pro6 from "../../assets/img/67354f324b8ed073017989.png";

function Projects() {
  return (
    <div className="px-5 sm:px-8 mt-16 flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col justify-center items-center gap-1">
        <p className="text-sm sm:text-md font-medium">Previous</p>
        <h1 className="text-3xl sm:text-4xl font-bold">Completed Projects</h1>
      </div>

      <div className="flex justify-center flex-col md:flex-row items-center gap-3 w-full">
        <img
          src={pro1}
          className="rounded-[20px] sm:rounded-[30px] lg:rounded-[50px] w-[100%] md:w-[30%] h-[370px] xl:h-[380px]"
          alt=""
        />
        <div className="w-[100%] md:w-[70%] gap-3 grid grid-cols-1">
          <div className="flex flex-col sm:flex-row gap-4 lg:w-[660px] xl:w-[830px]">
            <img
              src={pro2}
              className="w-[100%] h-44 rounded-2xl object-cover"
              alt=""
            />
            <img
              src={pro3}
              className="w-[100%] sm:w-[50%] h-44 rounded-2xl object-cover"
              alt=""
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 lg:w-[660px] xl:w-[830px]">
            <img
              src={pro4}
              className="w-[100%] sm:w-[50%] h-44 rounded-2xl object-cover"
              alt=""
            />
            <img
              src={pro5}
              className="w-[100%] h-44 rounded-2xl object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <img
          src={pro6}
          className="w-full h-80 object-cover rounded-2xl"
          alt=""
        />
        <div className="absolute w-full h-80 top-0 right-0 left-0 bg-[#00000061] rounded-2xl"></div>
      </div>
    </div>
  );
}

export default Projects;
