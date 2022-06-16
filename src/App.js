import BohikorStore from "./bohikorStore";
import ServicesBohikor from "./servicesBohikor";
import Footer from "./footer";
import Header from "./header";
import HeroSection from "./heroSection";
import LastFooter from "./lastFooter";
import MoneyTherapySection from "./moneyTherapySection";
import SliderSection from "./sliderSection";
import FaqLayout from "./FaqLayout";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesBohikor />
      <SliderSection />
      <MoneyTherapySection />
      <BohikorStore />
      <FaqLayout/>
      <Footer/>
      <LastFooter/>
    </>
  );
}

export default App;
