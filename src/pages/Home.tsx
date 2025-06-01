import React from "react";
import HeroSection from "../components/HomeHeroSection";
import DoctorsShowcase from "../components/DoctorsShowcase";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import LegacySection from "../components/LegacySection";
import FooterImage from "../components/FooterImage";

const Home: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center">
      <div className="w-full bg-black max-w-[1440px] min-md:pb-24 max-md:max-w-full">
        <HeroSection />
      </div>
      <div className="flex flex-col items-center px-20 pt-48 pb-10 w-full bg-white max-w-[1440px] max-md:px-4 max-md:pt-16">
        <DoctorsShowcase />
      </div>
      <div className="self-stretch w-full">
        <div className="flex flex-col py-32 w-full bg-neutral-200 max-md:py-16">
          <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1200px] flex-row">
            <div className="flex flex-col text-zinc-600 max-md:text-center w-3/4">
              <div className="text-3xl leading-tight uppercase max-md:text-2xl">
                For Life's Toughest Cases, We're Ready
              </div>
              <div className="mt-4 text-2xl font-light leading-9 max-md:text-lg max-md:leading-7">
                Vikram Aura's dedicated teams take on the most complex challenges with unmatched precision, innovation, and a commitment to redefining patient care.
              </div>
            </div>
            <div className="flex gap-5 my-auto max-md:justify-center max-md:mt-6 max-md:px-4 px-20">
              <div className="flex shrink-0 rounded-full border border-solid border-zinc-600 h-[50px] w-[50px] max-md:h-[40px] max-md:w-[40px]" />
              <div className="flex shrink-0 rounded-full border border-solid border-zinc-600 h-[50px] w-[50px] max-md:h-[40px] max-md:w-[40px]" />
            </div>
          </div>
          <div className="mt-11 w-full max-md:mt-8">
            <TestimonialsSection />
          </div>
        </div>
      </div>
      <WhyChooseUsSection />
      <LegacySection />
      <FooterImage />
    </div>
  );
};

export default Home;
