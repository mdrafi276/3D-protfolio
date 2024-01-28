import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import MobileBanner from "./components/Banner/MobileBanner";

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="relative z-0 bg-primary selection:bg-black selection:text-red-600">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
          <MobileBanner />
        </div>

        <About />

        <div className="relative z-0">
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
