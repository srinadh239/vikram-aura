import React, { useState } from "react";
import HeroSection from "../components/HomeHeroSection";
import DoctorsShowcase from "../components/DoctorsShowcase";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import LegacySection from "../components/LegacySection";
import FooterImage from "../components/FooterImage";
import BookAppointmentModal from "../components/BookAppointmentModal";
import { doctorsBySpecialty } from "../constants/medicalData";
import InvestorsSection from "../components/InvestorsSection";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const allDoctors = Object.values(doctorsBySpecialty).flat();

  const handleBookAppointment = () => {
    setIsModalOpen(true);
  };

  const handleCall = () => {
    window.location.href = 'tel:+917022400800'; // Replace with actual phone number
  };

  return (
    <div className="flex overflow-hidden flex-col items-center">
      {/* Sticky Bottom Buttons - Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex">
        <button
          onClick={handleBookAppointment}
          className="flex-1 px-4 py-3 border border-solid text-white text-sm font-semibold transition-all duration-300"
          style={{
            background: '#F26522',
            borderColor: '#F26522'
          }}
        >
          Book Appointment
        </button>
        <button
          onClick={handleCall}
          className="flex-1 px-4 py-3 border border-solid text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2"
          style={{
            background: 'white',
            borderColor: '#F26522',
            color: '#F26522'
          }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          +91 7022 400 800
        </button>
      </div>

      <div className="w-full bg-black max-w-[1440px] min-md:pb-24 max-md:max-w-full">
        <HeroSection onBookAppointment={handleBookAppointment} />
      </div>
      <div className="flex flex-col items-center px-20 pt-48 pb-10 w-full bg-white max-w-[1440px] max-md:px-4 max-md:pt-16">
        <DoctorsShowcase />
      </div>
      <div className="self-stretch w-full">
        <div className="flex flex-col py-32 w-full bg-neutral-200 max-md:py-4">
          <TestimonialsSection />
        </div>
      </div>
      {/* <div id="why-choose-us">
        <WhyChooseUsSection />
      </div> */}
      <InvestorsSection />
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
