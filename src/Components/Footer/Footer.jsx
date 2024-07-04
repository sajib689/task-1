import img from "../../assets/logo light.png";
import icon1 from '../../assets/(1).png'
import icon2 from '../../assets/(2).png'
import icon3 from '../../assets/(3).png'
import icon4 from '../../assets/(4).png'
const Footer = () => {
  return (
    <footer className="footer  bg-[#020043] text-white p-10 lg:mt-[200px] md:mt-[200px] mt-[100px]">
      <aside className="lg:ms-[47px] md:ms-[47px]">
        <img src={img} alt="" />
        <p className="mt-3">
          123 Main Street Anytown, USA <br /> Postal Code: 12345
          <br />
          Support: support@oyolloo.com <br />
          (Available : 10:00am to 07:00pm)
        </p>
      </aside>
    
      <nav>
        
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
       
      <nav>
    
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Scheduling</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Patient Portal</a>
      </nav>
      <nav>
        <h6 className="footer-title">Follow Us</h6>
        <div className="flex gap-5">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
        </div>
        <p>@docplus 2024</p>
      </nav>
    </footer>
  );
};

export default Footer;
