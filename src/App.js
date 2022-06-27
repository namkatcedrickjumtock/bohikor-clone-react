import BohikorStore from "./bohikorStore";
import ServicesBohikor from "./servicesBohikor";
import Footer from "./footer";
import Header from "./header";
import HeroSection from "./heroSection";
import LastFooter from "./lastFooter";
import MoneyTherapySection from "./moneyTherapySection";
import Faq from "./faq";
import { React } from "react";
import SliderSection from "./SliderSection";
import Terms from "./Terms";



function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesBohikor />
      <SliderSection />
      <MoneyTherapySection />
      <BohikorStore />
      <Faq />
      <Terms />
      <Footer />
      <LastFooter />
    </>
  );
}

export default App;
