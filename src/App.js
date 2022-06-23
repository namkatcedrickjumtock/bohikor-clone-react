import BohikorStore from "./bohikorStore";
import ServicesBohikor from "./servicesBohikor";
import Footer from "./footer";
import Header from "./header";
import HeroSection from "./heroSection";
import LastFooter from "./lastFooter";
import MoneyTherapySection from "./moneyTherapySection";
import Faq from "./faq";
import ContactForm from "./ContactForm";
import SliderSection from "./SliderSection";



function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesBohikor />
      <SliderSection />
      <MoneyTherapySection />
      <BohikorStore />
      <Faq/>
      <ContactForm />
      <Footer/>
      <LastFooter/>
    </>
  );
}

export default App;
