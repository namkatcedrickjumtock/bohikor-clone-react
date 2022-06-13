import BohikorStore from "./bohikorStore";
import FaqSection from "./faqSection";
import FeaturesSection from "./featuresSection";
import Footer from "./footer";
import Header from "./header";
import HeroSection from "./heroSection";
import LastFooter from "./lastFooter";
import MoneyTherapySection from "./moneyTherapySection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <MoneyTherapySection />
      <BohikorStore />
      <FaqSection/>
      <Footer/>
      <LastFooter/>
    </>
  );
}

export default App;
