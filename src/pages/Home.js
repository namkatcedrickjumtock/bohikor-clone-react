import React from "react";
import BohikorStore from "../components/bohikorStore";
import ServicesBohikor from "../components/servicesBohikor";
import HeroSection from "../components/heroSection";
import MoneyTherapySection from "../components/moneyTherapySection";
import Faq from "../components/faq";
import SliderSection from "../components/SliderSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesBohikor />
      <SliderSection />
      <MoneyTherapySection />
      <BohikorStore />
      <Faq />
    </>
  );
}
