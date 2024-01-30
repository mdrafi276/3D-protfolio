import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks,  Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import MobileBanner from "./components/Banner/MobileBanner";
// import Navber from "./components/Banner/Navbar";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0  bg-[#030015] selection:bg-black selection:text-red-600">
        <Navbar />
        <MobileBanner />
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div> */}

        <div className="bg-[#010610]">
          {" "}
          <About />
        </div>

        <div className="relative bg-[#010610] z-0">
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
        {/* <StarsCanvas /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
