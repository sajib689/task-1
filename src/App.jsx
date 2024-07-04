import Appointment from "./Components/Appointment/Appointment"
import DoctorMeet from "./Components/DoctorMeet/DoctorMeet"
import Faq from "./Components/Faq/Faq"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Review from "./Components/Review/Review"
import Service from "./Components/Service/Service"
import Testimonial from "./Components/Testimonial/Testimonial"
import WhoWe from "./Components/WhoWe/WhoWe"
import Footer from './Components/Footer/Footer';


function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Review/>
      <WhoWe/>
      <Service/>
      <DoctorMeet/>
      <Testimonial/>
      <Faq/>
      <Appointment/>
    </>
  )
}

export default App
