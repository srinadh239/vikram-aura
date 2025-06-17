"use client";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProfileHeader from "../components/ProfileHeader";
import DoctorInfo from "../components/DoctorInfo";
import ExpertiseSection from "../components/ExpertiseSection";
import EducationSection from "../components/EducationSection";
import AwardsSection from "../components/AwardsSection";
import ReviewsSection from "../components/ReviewsSection";
import LocationsSection from "../components/LocationsSection";
import { doctorsBySpecialty } from "../constants/medicalData";
import FooterImage from "../components/FooterImage";

const DoctorProfile: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = React.useState<any>(null);
  const [specialty, setSpecialty] = React.useState<string>("");

  React.useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  React.useEffect(() => {
    // Find doctor by ID across all specialties
    let foundDoctor = null;
    let foundSpecialty = "";

    for (const [specialtyKey, doctors] of Object.entries(doctorsBySpecialty)) {
      const found = doctors.find(doc => doc.id === id);
      if (found) {
        foundDoctor = found;
        foundSpecialty = specialtyKey;
        break;
      }
    }

    if (foundDoctor) {
      setDoctor(foundDoctor);
      setSpecialty(foundSpecialty);
    } else {
      // Redirect to doctors list if doctor not found
      navigate('/doctors');
    }
  }, [id, navigate]);

  if (!doctor) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <ProfileHeader specialty={specialty} />

      <div className="flex flex-col items-start self-center mt-16 mb-16 px-4 w-full max-w-[1175px] max-md:mt-10 max-md:max-w-full">
        <DoctorInfo doctor={doctor} />
        
        {/* Only show ExpertiseSection if areas_of_expertise exists and has items */}
        {doctor.areas_of_expertise && doctor.areas_of_expertise.length > 0 && (
          <ExpertiseSection doctor={doctor} />
        )}

        {/* Only show AwardsSection if awards exists and has items */}
        {doctor.awards && doctor.awards.length > 0 && (
          <AwardsSection doctor={doctor} />
        )}

        {/* <EducationSection doctor={doctor} /> */}

        {/* Only show ReviewsSection if reviews exists and has items */}
        {doctor.reviews && doctor.reviews.length > 0 && (
          <ReviewsSection doctor={doctor} />
        )}

        
        <LocationsSection />
        
      </div>
      <FooterImage />
    </div>
  );
};

export default DoctorProfile;
