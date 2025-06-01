import React, { useState } from "react";
import HeroSection from "../components/HomeHeroSection";
import DoctorsShowcase from "../components/DoctorsShowcase";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import LegacySection from "../components/LegacySection";
import FooterImage from "../components/FooterImage";
import BookAppointmentModal from "../components/BookAppointmentModal";
import { doctorsBySpecialty } from "../constants/medicalData";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const allDoctors = Object.values(doctorsBySpecialty).flat();

  const handleBookAppointment = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex overflow-hidden flex-col items-center">
      <div className="w-full bg-black max-w-[1440px] min-md:pb-24 max-md:max-w-full">
        <HeroSection onBookAppointment={handleBookAppointment} />
      </div>
      <div className="flex flex-col items-center px-20 pt-48 pb-10 w-full bg-white max-w-[1440px] max-md:px-4 max-md:pt-16">
        <DoctorsShowcase />
      </div>
      <div className="self-stretch w-full">
        <div className="flex flex-col py-32 w-full bg-neutral-200 max-md:py-16">
          <TestimonialsSection />
        </div>
      </div>
      <div id="why-choose-us">
        <WhyChooseUsSection />
      </div>
      <LegacySection />
      <FooterImage />
      <BookAppointmentModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctorList={allDoctors.map(doctor => doctor.name)}
      />
    </div>
  );
};

export default Home;
