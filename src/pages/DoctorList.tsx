"use client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import SpecialtiesSection from "../components/SpecialtiesSection";
import DoctorSection from "../components/DoctorSection";
import { doctorsBySpecialty, specialties } from "../constants/medicalData";
import BookAppointmentModal from "../components/BookAppointmentModal";
import { doctorSchedules } from "../constants/doctorSchedules";
import FooterImage from "../components/FooterImage";

function DoctorList() {
  // Gather all doctor names from all specialties
  
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>(undefined);

  // Handler for top button
  const handleTopBookClick = () => {
    setSelectedDoctor(undefined);
    setModalOpen(true);
  };

  // Handler to pass to DoctorSection
  const handleSectionBookClick = (doctorName?: string) => {
    setSelectedDoctor(doctorName);
    setModalOpen(true);
  };

  return (
    <main className="overflow-hidden bg-white">
      <Helmet>
        <title>Our Doctors & Medical Specialties | Vikram Aura Hospital, Bangalore</title>
        <meta name="description" content="Meet the expert doctors at Vikram Aura Hospital, Bangalore. Specialists in Cardiology, Orthopaedics, Oncology, Neurosurgery, Gynaecology, Pulmonology and more. Book a consultation today." />
        <link rel="canonical" href="https://vikramaurahospitals.com/doctors" />
        <meta property="og:title" content="Our Doctors & Medical Specialties | Vikram Aura Hospital" />
        <meta property="og:description" content="Meet our team of specialists at Vikram Aura Hospital, Bangalore — expert care across 15+ medical specialties." />
        <meta property="og:url" content="https://vikramaurahospitals.com/doctors" />
        <meta property="og:type" content="website" />
      </Helmet>
      <HeroSection onBookAppointment={handleTopBookClick} />
      <SpecialtiesSection />

      {specialties.map((specialty, index) => {
        const doctors = doctorsBySpecialty[specialty.sectionId as keyof typeof doctorsBySpecialty];
        if (!doctors || doctors.length === 0) return null;
        
        return (
          <DoctorSection
            key={specialty.sectionId}
            id={specialty.sectionId}
            title={specialty.name}
            backgroundColor={index % 2 === 0 ? "bg-zinc-100" : "bg-white"}
            doctors={doctors}
            onBookAppointment={handleSectionBookClick}
          />
        );
      })}

      <FooterImage />
      <BookAppointmentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        doctorSchedules={doctorSchedules}
        defaultDoctor={selectedDoctor}
      />
    </main>
  );
}

export default DoctorList;
