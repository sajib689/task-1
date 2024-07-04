import { MdArrowOutward } from "react-icons/md";
import img from "../../assets/Rectangle 24.png";

const WhoWe = () => {
  return (
    <div className="flex lg:ms-[47px] md:ms-[47px] flex-col lg:flex-row md:flex-row justify-between gap-5 items-center lg:mt-[180px] md:mt-[180px] mt-24 relative">
      <div className="flex-1 m-3">
        <button className="border-[#343268] rounded-full btn bg-white">
          Who We are
        </button>
        <h1 className="text-[36px] font-[600] text-[#020043]">
          We Help To Get <br /> Solutions
        </h1>
        <p>
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
        <button className="btn text-[15px] mt-5 bg-[#FFC637] lg:text-[16px] font-[500] text-[#020043] border-[#343268] flex items-center">
          Learn more <MdArrowOutward className="ml-2" />
        </button>
      </div>
      <div className="flex-1 relative">
        <div className="lg:w-[568px] md:w-[568px]">
          <img className="w-full" src={img} alt="Our mission" />
        </div>
        <div className="bg-[#343268] lg:w-[395px] md:w-[395px] rounded-lg text-white p-5 absolute lg:bottom-[-50px] md:bottom-[-50px] lg:left-[-80px] md:left-[-80px]">
          <h2 className="text-xl font-bold mb-2">Our mission is simple</h2>
          <p>
            To provide high-quality healthcare services that are accessible,
            personalized, and patient-centered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWe;
