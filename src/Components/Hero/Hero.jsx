import heroImg from '../../assets/Rectangle 5.png'
const Hero = () => {
  return (
    <div
      className="hero min-h-[500px] rounded-[48px] mx-auto mt-5 lg:max-w-[1250px]"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
    </div>
  );
};

export default Hero;
