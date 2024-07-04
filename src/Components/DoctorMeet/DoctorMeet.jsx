import { MdArrowOutward } from "react-icons/md";
import img from '../../assets/Rectangle 27-1.png'
import img1 from '../../assets/Rectangle 27.png'

const DoctorMeet = () => {
    return (
        <div className="flex lg:ms-[47px] md:ms-[47px] flex-col lg:flex-row md:flex-row justify-between gap-5 items-center lg:mt-[180px] md:mt-[180px] mt-[200px] relative">
      <div className="flex-1 relative">
          <div className="lg:w-[568px] md:w-[568px]">
            <img className="w-full rounded-[40px]" src={img} alt="Our mission" />
          </div>
          <div className="bg-[#343268] opacity-75 lg:w-[395px] md:w-[395px] rounded-lg text-white p-5 absolute lg:bottom-[20px] md:bottom-[20px] lg:left-[20px] md:left-[20px]">
            <h2 className="text-xl font-bold mb-2">Online Doctor Meet</h2>
            <div className="flex">
            <p>
            Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
            </p>
            <button className="btn text-[15px] rounded-full mt-[2.25rem] bg-[#FFC637] lg:text-[16px] font-[500] text-[#020043] border-[#343268] flex items-center">
           <MdArrowOutward className=" text-white" />
          </button>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="lg:w-[568px] md:w-[568px]">
            <img className="w-full rounded-[40px]" src={img1} alt="Our mission" />
          </div>
          <div className="bg-[#343268] opacity-75 lg:w-[395px] md:w-[395px] rounded-lg text-white p-5 absolute lg:bottom-[20px] md:bottom-[20px] lg:left-[20px] md:left-[20px]">
            <h2 className="text-xl font-bold mb-2">Consultancy your health</h2>
            <div className="flex">
            <p>
            Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
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

export default DoctorMeet;