"use client";
import React, { useState } from "react";
import DoctorProfile from "./DoctorProfile";
import { Doctor } from "./types";
import BookAppointmentModal from "./BookAppointmentModal";

interface DoctorSectionProps {
  title: string;
  backgroundColor: string;
  doctors: Doctor[];
  id?: string;
  onBookAppointment?: (doctorName?: string) => void;
}

const DoctorSection: React.FC<DoctorSectionProps> = ({
  title,
  backgroundColor,
  doctors,
  id,
  onBookAppointment,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>(undefined);

  const doctorNames = doctors.map((doc) => doc.name);

  const handleBookClick = (doctorName?: string) => {
    if (onBookAppointment) {
      onBookAppointment(doctorName);
    } else {
      setSelectedDoctor(doctorName);
      setModalOpen(true);
    }
  };

  return (
    <section
      id={id}
      className={`flex flex-col justify-center items-center px-20 py-28 w-full ${backgroundColor} max-md:px-5 max-md:py-16 max-md:max-w-full`}
    >
      <div className="w-full max-w-[1046px] max-md:max-w-full">
        {/* Section Title */}
        <h2 className="text-3xl leading-tight uppercase text-zinc-600 mb-12 max-md:max-w-full">
          {title}
        </h2>
        {/* Doctor Cards */}
        <div className="flex flex-col gap-12 max-md:gap-10">
          {doctors.map((doctor, index) => (
            <DoctorProfile
              key={index}
              doctor={doctor}
              showTitle={false}
              sectionTitle={""}
              onBookAppointment={() => handleBookClick(doctor.name)}
            />
          ))}
        </div>
      </div>
      {!onBookAppointment && (
        <BookAppointmentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          doctorList={doctorNames}
          defaultDoctor={selectedDoctor}
        />
      )}
    </section>
  );
};

export default DoctorSection;
