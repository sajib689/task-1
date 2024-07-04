import img1 from "../../assets/Group 12.png";
import img2 from "../../assets/Group55.png"
import img3 from '../../assets/Icons.png'
import img4 from '../../assets/Group 7.png'
import img5 from '../../assets/Group.png'
import img6 from '../../assets/Vector.png'
const Review = () => {
  return (
    <div className="grid lg:mt-[200px] md:mt-[200px]  lg:ms-[30px] md:ms-[30px] grid-cols lg:grid-cols-4 md:grid-cols-3 gap-5 mt-[50px] mx-auto container">
      <div className="lg:w-[216px] md:w-[216px] w-full h-full lg:[312px] md:h-[312px] mx-auto lg:ms-6 md:ms-6 ms-8 bg-[#fff] rounded-lg">
        {/* 1 */}
        <h1 className="ms-4 mt-7 text-[#020043] font-[600] text-[40px] text-left">90%</h1>
        <p className="ms-4 text-[14px] font-[400] text-[#020043]">
          Patient satisfaction rate, reflecting our commitment.
        </p>
        <img className="ms-6 mt-7" src={img1} alt="" />
      </div>
      <div className="col-span-2 lg:me-[49px] md:me-[49px]">
        {/* 2 */}

        <h1 className="text-[25px] lg:text-[48px] md:text-[48px] text-center font-[600] text-[#020043]">Comprehensive Care <br /> for Every Patient</h1>
      <div className="grid grid-cols lg:grid-cols-3 md:grid-cols-3 gap-5">
      <div className="lg:w-[190px] md:w-[190px] w-[240px] h-full lg:h-[190px] md:h-[190px] mx-auto lg:ms-6 md:ms-6 ms-8 bg-[#fff] rounded-lg">
        {/* 11 */}
        <h1 className="ms-4 mt-1 text-[#020043] font-[600] text-[40px] text-left">500+</h1>
        <p className="ms-4 text-[14px] font-[400] text-[#020043]">
        Board-certified <br /> doctors
        </p>
        <img className="ms-24 mt-1" src={img3} alt="" />
      </div>
      <div className="lg:w-[190px] md:w-[190px] lg:mt-8 md:mt-8 w-[240px] h-full lg:h-[162px] md:h-[162px] mx-auto lg:ms-6 md:ms-6 ms-8 bg-[#fff] rounded-lg">
        {/* 22 */}
        <h1 className="ms-4 mt-1 text-[#020043] font-[600] text-[40px] text-left flex items-center gap-2">4.8 <img className="w-[32px] h-[32px]" src={img6} alt="" /></h1>
        <p className="ms-4 text-[14px] font-[400] text-[#020043]">
        Over 20,000 Patient
        </p>
        <img className="ms-7 mt-8" src={img4} alt="" />
      </div>
      <div className="lg:w-[190px] md:w-[190px] w-[240px] h-full lg:h-[190px] md:h-[190px] mx-auto lg:ms-6 md:ms-6 ms-8 bg-[#fff] rounded-lg">
        {/* 33 */}
        <h1 className="ms-4 mt-1 text-[#020043] font-[600] text-[40px] text-left">$5000</h1>
        <p className="ms-4 text-[14px] font-[400] text-[#020043]">
        Money spend <br />
for poor patient
        </p>
        <img className="ms-24 mt-1" src={img5} alt="" />
      </div>
      </div>
      
      </div>
    
        {/* 3 */}
        <div className="lg:w-[216px] md:w-[216px] w-full h-full bg-[#fff] rounded-lg lg:ms-[60px] md:ms-[60px] ms-8  lg:[312px] md:h-[312px]">
        {/* 1 */}
        <h1 className="ms-4 mt-7 text-[#020043] font-[600] text-[40px] text-left">50+</h1>
        <p className="ms-4 text-[14px] font-[400] text-[#020043]">
        Free lession video <br />
        for patient
        </p>
        <img className="ms-6 mt-7" src={img2} alt="" />
     
        </div>
    </div>
  );
};

export default Review;
