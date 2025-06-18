"use client";
import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import SpecialtiesSection from "../components/SpecialtiesSection";
import DoctorSection from "../components/DoctorSection";
import { doctorsBySpecialty, specialties } from "../constants/medicalData";
import BookAppointmentModal from "../components/BookAppointmentModal";
import FooterImage from "../components/FooterImage";

function DoctorList() {
  // Gather all doctor names from all specialties
  const allDoctorNames = Object.values(doctorsBySpecialty).flat().map(doc => doc.name);
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
        doctorList={allDoctorNames}
        defaultDoctor={selectedDoctor}
      />
    </main>
  );
}

export default DoctorList;
