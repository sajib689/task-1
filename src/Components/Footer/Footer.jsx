import img from "../../assets/logo dark.png";

const Footer = () => {
  return (
    <footer className="footer bg-[#020043] text-white p-10 ">
      <aside>
        <img src={img} alt="" />
        <p>
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
        <h6 className="footer-title">Patient Portal</h6>
        <div>
            
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
