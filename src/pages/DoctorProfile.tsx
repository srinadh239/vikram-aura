"use client";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ProfileHeader from "../components/ProfileHeader";
import DoctorInfo from "../components/DoctorInfo";
import ExpertiseSection from "../components/ExpertiseSection";
import AwardsSection from "../components/AwardsSection";
import ReviewsSection from "../components/ReviewsSection";
import LocationsSection from "../components/LocationsSection";
import { doctorsBySpecialty } from "../constants/medicalData";
import FooterImage from "../components/FooterImage";

const SITE_URL = "https://vikramaurahospitals.com";
const OG_IMAGE = "https://website-va.s3.ap-south-1.amazonaws.com/VAH+Logo+Symbol+final+(1)_page-0001.jpg";

const specialtyDisplayName: Record<string, string> = {
  "cardiology": "Cardiology",
  "dermatology": "Dermatology",
  "general-surgery": "General Surgery",
  "gynaecology-obstetrics": "Gynaecology & Obstetrics",
  "internal-medicine": "Internal Medicine",
  "oncology": "Oncology",
  "orthopaedics": "Orthopaedics",
  // "paediatrics-neonatology": "Paediatrics & Neonatology",
  "pulmonology": "Pulmonology",
  "urology-nephrology": "Urology & Nephrology",
  "gastroenterology": "Gastroenterology",
  "neurology": "Neurology",
  "neurosurgery": "Neurosurgery",
  "ent": "ENT",
  "plastic-surgery": "Plastic Surgery",
  "radiology": "Radiology",
  "psychology": "Psychology",
  "dental": "Dental",
  // "diabetology-endocrinology": "Diabetology & Endocrinology",
};

const DoctorProfile: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = React.useState<any>(null);
  const [specialty, setSpecialty] = React.useState<string>("");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    let foundDoctor = null;
    let foundSpecialty = "";

    for (const [specialtyKey, doctors] of Object.entries(doctorsBySpecialty)) {
      const found = doctors.find((doc) => doc.id === id);
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
      navigate("/doctors");
    }
  }, [id, navigate]);

  if (!doctor) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  const specialtyLabel = specialtyDisplayName[specialty] ?? specialty.replace(/-/g, " ");
  const doctorTitle = doctor.name
    .replace(/^DR\s+/i, "Dr. ")
    .replace(/^DR\./i, "Dr.");

  const metaTitle = `${doctorTitle} | ${specialtyLabel} Specialist | Vikram Aura Hospital, Bangalore`;
  const metaDescription = `${doctorTitle} is a ${specialtyLabel} specialist at Vikram Aura Hospital, Bangalore. ${doctor.credentials}. ${doctor.description?.slice(0, 120).trim()}…`;
  const canonicalUrl = `${SITE_URL}/doctor/${id}`;

  const imageSrc = doctor.imageSrc && !doctor.imageSrc.includes("TEMP")
    ? doctor.imageSrc
    : OG_IMAGE;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctorTitle,
    description: doctor.description,
    medicalSpecialty: specialtyLabel,
    url: canonicalUrl,
    image: imageSrc,
    hasCredential: doctor.credentials,
    worksFor: {
      "@type": "Hospital",
      name: "Vikram Aura Hospital",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "#62, Richmond Road",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        postalCode: "560025",
        addressCountry: "IN",
      },
    },
    knowsAbout: doctor.areas_of_expertise ?? [],
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`${doctorTitle}, ${specialtyLabel} doctor Bangalore, ${doctor.credentials}, Vikram Aura Hospital`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content={imageSrc} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={imageSrc} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="flex overflow-hidden flex-col bg-white">
        <ProfileHeader specialty={specialty} />

        <div className="flex flex-col items-start self-center mt-16 mb-16 px-4 w-full max-w-[1175px] max-md:mt-10 max-md:max-w-full">
          <DoctorInfo doctor={doctor} />

          {doctor.areas_of_expertise && doctor.areas_of_expertise.length > 0 && (
            <ExpertiseSection doctor={doctor} />
          )}

          {doctor.awards && doctor.awards.length > 0 && (
            <AwardsSection doctor={doctor} />
          )}

          {doctor.reviews && doctor.reviews.length > 0 && (
            <ReviewsSection doctor={doctor} />
          )}

          <LocationsSection />
        </div>
        <FooterImage />
      </div>
    </>
  );
};

export default DoctorProfile;
