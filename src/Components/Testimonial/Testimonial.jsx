import { FaStar } from "react-icons/fa6";
import img from "../../assets/Ellipse 10 (1).png";
import img2 from "../../assets/Ellipse 10 (2).png";
import img3 from "../../assets/Ellipse 10.png";
const Testimonial = () => {
  return (
    <div className="mt-[200px] lg:ms-[47px] md:ms-[47px] m-3">
      <div>
        <button className="border-[#343268] rounded-full btn bg-white">
          Testimonial
        </button>
        <h1 className="text-[36px] font-[600] text-[#020043] mt-5">
          What they say about us
        </h1>
      </div>
      <div className="grid grid-cols lg:grid-cols-3 md:grid-cols-3 gap-6 mt-10">
        <div>
          <h1 className="text-[#020043] text-[19px] font-[600]">
            Expertise and Compassion Combined
          </h1>
          <p className="text-[#4D4C7B] mt-3">
            I can't thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion throughout my
            treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className="flex items-center gap-2 mt-3">
            <img src={img} alt="" />
            <div>
              <h3>Sarah D, IT Professional</h3>
              <div className="flex gap-1">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[#020043] text-[19px] font-[600]">
            Life-Saving Care, Life-Changing Experience
          </h1>
          <p className="text-[#4D4C7B] mt-3">
            My experience at [Healthcare Provider Name] was life-changing. The
            prompt and accurate diagnosis, coupled with the advanced treatments
            they provided, saved my life.
          </p>
          <div className="flex items-center gap-2 mt-3">
            <img src={img2} alt="" />
            <div>
              <h3>Michael R, Business Executive</h3>
              <div className="flex gap-1">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[#020043] text-[19px] font-[600]">
            A Partner in Health and Wellness
          </h1>
          <p className="text-[#4D4C7B] mt-3">
            As a busy professional, I appreciate the convenience and quality of
            care I receive at [Healthcare Provider Name]. From telemedicine
            consultations to routine check-ups, they've become my trusted
            partner in health and
          </p>
          <div className="flex items-center gap-2 mt-3">
            <img src={img3} alt="" />
            <div>
              <h3>David S, Lawyer</h3>
              <div className="flex gap-1">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
