import { MdArrowOutward } from "react-icons/md";
import img from "../../assets/Rectangle 32.png";
import logo from "../../assets/logo dark.png";
const Appointment = () => {
  return (
    <div className="lg:mt-[200px]md:mt-[200px] mt-[80px] lg:ms-[45px] md:ms-[45px] m-3 ">
      <div
        className="hero lg:h-[477px] md:h-[477px] h-[450px] relative rounded-[32px]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-[32px]"></div>
        <div className="hero-content text-neutral-content lg:flex md:flex flex-col justify-between">
          <div className="lg:ms-[-700px] mt-6">
            <h1 className="mb-5 lg:text-5xl md:text-5xl text-4xl font-bold">
              Get Your First <br /> <span className="mt-2">Appointment</span>{" "}
              <br /> <span className="mt-3">at 50% Off!</span>{" "}
            </h1>
            <div className="lg:flex md:flex flex-row gap-3 items-center justify-center">
              <button className="btn text-[15px] lg:text-[16px] font-[500] text-[#020043] border-[#343268] bg-[#FFC637] ">
                Appointment <MdArrowOutward className=" text-white" />
              </button>
              <a className="btn text-[15px] lg:text-[16px] font-[500] text-[#020043] border-[#343268]">
                Learn More <MdArrowOutward />
              </a>
            </div>
          </div>
          <div>
            <img
              className="absolute top-[50px] lg:right-[50px] md:right-[50px] "
              src={logo}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
