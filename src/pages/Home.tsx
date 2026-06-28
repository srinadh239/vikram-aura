import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HomeHeroSection";
import DoctorsShowcase from "../components/DoctorsShowcase";
import TestimonialsSection from "../components/TestimonialsSection";
import LegacySection from "../components/LegacySection";
import FooterImage from "../components/FooterImage";
import BookAppointmentModal from "../components/BookAppointmentModal";
import { doctorsBySpecialty, specialties } from "../constants/medicalData";
import InvestorsSection from "../components/InvestorsSection";

const SITE_URL = "https://vikramaurahospitals.com";
const OG_IMAGE = "https://website-va.s3.ap-south-1.amazonaws.com/VAH+Logo+Symbol+final+(1)_page-0001.jpg";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const allDoctors = Object.values(doctorsBySpecialty).flat();

  const handleBookAppointment = () => {
    setIsModalOpen(true);
  };

  const handleCall = () => {
    window.location.href = 'tel:+917022400800';
  };

  return (
    <>
      <Helmet>
        <title>Vikram Aura Hospital | Multi-Speciality Hospital in Bangalore</title>
        <meta name="description" content="Vikram Aura Hospital on Richmond Road, Bangalore — expert care across Cardiology, Orthopaedics, Oncology, Neurosurgery, Gynaecology and 15+ specialties. Book an appointment: +91 7022 400 800." />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:title" content="Vikram Aura Hospital | Multi-Speciality Hospital in Bangalore" />
        <meta property="og:description" content="Expert care across 15+ specialties at Vikram Aura Hospital, Richmond Road, Bangalore. Advanced technology, compassionate doctors." />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:title" content="Vikram Aura Hospital | Multi-Speciality Hospital in Bangalore" />
        <meta name="twitter:description" content="Expert care across 15+ specialties at Vikram Aura Hospital, Richmond Road, Bangalore." />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>
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
      {/* Specialties navigation — creates crawlable links for Googlebot */}
      <section className="w-full py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Our Medical Specialties</h2>
          <p className="text-gray-500 text-sm text-center mb-10">
            Expert care across {specialties.filter(s => s.procedurePageSlug).length} specialties at Vikram Aura Hospital, Bangalore
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {specialties
              .filter((s) => s.procedurePageSlug)
              .map((specialty) => (
                <Link
                  key={specialty.sectionId}
                  to={`/specialties/${specialty.procedurePageSlug}`}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-gray-200 hover:border-orange-400 hover:bg-orange-50 transition-all group text-sm"
                >
                  <img
                    src={specialty.iconSrc}
                    alt=""
                    className="w-5 h-5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ filter: "brightness(0) saturate(100%)" }}
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 group-hover:text-orange-700 font-medium leading-tight">
                    {specialty.name}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
      <LegacySection />
      <FooterImage />
      <BookAppointmentModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctorList={allDoctors.map(doctor => doctor.name)}
      />
    </div>
    </>
  );
};

export default Home;
