import { MdArrowOutward } from "react-icons/md";
import img from '../../assets/Rectangle 27-2.png'
const Service = () => {
  return (
    <div className="flex flex-col lg:ms-[47px] md:ms-[47px] lg:flex-row md:flex-row justify-between gap-5 items-center lg:mt-[180px] md:mt-[180px] mt-[200px] relative">
      <div className="flex-1 m-3">
        <button className="border-[#343268] rounded-full btn bg-white">
          Service
        </button>
        <h1 className="text-[36px] font-[600] text-[#020043]">
          Empowering Health, <br /> Enriching Lives
        </h1>
        <p>
          We are committed to providing high-quality, compassionate care to
          every patient we serve. Whatever your healthcare needs may be, you can
          trust us to be your partner in health and wellness.
        </p>
        <button className="btn text-[15px] mt-5 bg-[#FFC637] lg:text-[16px] font-[500] text-[#020043] border-[#343268] flex items-center">
        Appointment <MdArrowOutward className="ml-2" />
        </button>
      </div>
      <div className="flex-1 relative ">
        <div className="lg:w-[568px] md:w-[568px]">
          <img className="w-full  rounded-[40px]" src={img} alt="Our mission" />
        </div>
        <div className="bg-[#343268] opacity-75 lg:w-[395px] md:w-[395px] rounded-lg text-white p-5 absolute lg:bottom-[20px] md:bottom-[20px] lg:left-[20px] md:left-[20px]">
          <h2 className="text-xl font-bold mb-2">Our mission is simple</h2>
          <div className="flex">
          <p>
            To provide high-quality healthcare services that are accessible,
            personalized, and patient-centered.
          </p>
          <button className="btn text-[15px] rounded-full mt-[2.25rem] bg-[#FFC637] lg:text-[16px] font-[500] text-[#020043] border-[#343268] flex items-center">
         <MdArrowOutward className=" text-white" />
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
