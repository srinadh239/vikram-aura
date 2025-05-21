"use client";
import React, { useState } from "react";
import HeroSection from "./HeroSection";
import SpecialtiesSection from "./SpecialtiesSection";
import DoctorSection from "./DoctorSection";
import { doctorsBySpecialty } from "../constants/medicalData";
import BookAppointmentModal from "./BookAppointmentModal";

function Option01() {
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

      {/* Diabetology & Endocrinology Section */}
      <DoctorSection
        id="diabetology-endocrinology"
        title="Diabetology & Endocrinology"
        backgroundColor="bg-zinc-100"
        doctors={doctorsBySpecialty["diabetology-endocrinology"]}
        onBookAppointment={handleSectionBookClick}
      />

      {/* Dermatology Section */}
      <DoctorSection
        id="dermatology"
        title="Dermatology"
        backgroundColor="bg-white"
        doctors={doctorsBySpecialty["dermatology"]}
        onBookAppointment={handleSectionBookClick}
      />

      {/* General Surgery Section */}
      <DoctorSection
        id="general-surgery"
        title="General Surgery"
        backgroundColor="bg-zinc-100"
        doctors={doctorsBySpecialty["general-surgery"]}
        onBookAppointment={handleSectionBookClick}
      />

      {/* Gynaecology & Obstetrics Section */}
      <DoctorSection
        id="gynaecology-obstetrics"
        title="Gynaecology & Obstetrics"
        backgroundColor="bg-white"
        doctors={doctorsBySpecialty["gynaecology-obstetrics"]}
        onBookAppointment={handleSectionBookClick}
      />

      {/* Internal Medicine Section */}
      <DoctorSection
        id="internal-medicine"
        title="Internal Medicine"
        backgroundColor="bg-zinc-100"
        doctors={doctorsBySpecialty["internal-medicine"]}
        onBookAppointment={handleSectionBookClick}
      />

      {/* Oncology Section */}
      <DoctorSection
        id="oncology"
        title="ONCOLOGY"
        backgroundColor="bg-white"
        doctors={doctorsBySpecialty["oncology"]}
        onBookAppointment={handleSectionBookClick}
      />

      {/* Orthopaedics Section */}
      <DoctorSection
        id="orthopaedics"
        title="Orthopaedics"
        backgroundColor="bg-zinc-100"
        doctors={doctorsBySpecialty["orthopaedics"]}
        onBookAppointment={handleSectionBookClick}
      />

      {/* Paediatrics & Neonatology Section */}
      <DoctorSection
        id="paediatrics-neonatology"
        title="Paediatrics & Neonatology"
        backgroundColor="bg-white"
        doctors={doctorsBySpecialty["paediatrics-neonatology"]}
        onBookAppointment={handleSectionBookClick}
      />

      {/* Pulmonology Section */}
      <DoctorSection
        id="pulmonology"
        title="Pulmonology"
        backgroundColor="bg-zinc-100"
        doctors={doctorsBySpecialty["pulmonology"]}
        onBookAppointment={handleSectionBookClick}
      />

      {/* Urology-Nephrology Section */}
      <DoctorSection
        id="urology-nephrology"
        title="Urology-Nephrology"
        backgroundColor="bg-white"
        doctors={doctorsBySpecialty["urology-nephrology"]}
        onBookAppointment={handleSectionBookClick}
      />

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a722308c11345390a402d360293163c0d120789?placeholderIfAbsent=true&apiKey=003a4bc7d72843b88f405864f9e7fccf"
        className="object-contain w-full aspect-[3.97] max-md:max-w-full"
        alt="Footer banner"
      />
      <BookAppointmentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        doctorList={allDoctorNames}
        defaultDoctor={selectedDoctor}
      />
    </main>
  );
}

export default Option01;
