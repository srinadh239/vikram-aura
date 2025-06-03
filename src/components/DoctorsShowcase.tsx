import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { doctorsBySpecialty } from "../constants/medicalData";

interface Doctor {
  id: string;
  name: string;
  credentials: string;
  description: string;
  imageSrc: string;
  imageRight: boolean;
  titleWithDoctor: boolean;
  awards: string[];
  areas_of_expertise: string[];
  reviews: {
    patient_name: string;
    description: string;
  }[];
}

const DoctorsShowcase: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Get 4 random doctors from all specialties
  const doctors = Object.values(doctorsBySpecialty)
    .flat()
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  // Get specialty from URL path
  const getSpecialtyFromPath = (doctorId: string) => {
    for (const [specialty, doctors] of Object.entries(doctorsBySpecialty)) {
      if (doctors.some(doc => doc.id === doctorId)) {
        return specialty.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      }
    }
    return '';
  };

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col items-center w-full max-w-[1199px] transition-all duration-1000 max-md:duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="text-3xl leading-tight text-center uppercase text-zinc-600 max-md:text-2xl max-md:px-4">
        Expertise for Every Patient, Precision for Every Condition
      </div>
      <div className="mt-5 text-2xl font-light leading-9 text-center text-zinc-600 w-[980px] max-md:text-lg max-md:leading-7 max-md:w-full max-md:px-4">
        At Vikram Aura, our specialists are dedicated to your unique needs, from diagnosing rare symptoms to mastering complex surgeries.
      </div>
      <div className="self-stretch mt-16 max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-8">
          {doctors.map((doctor, index) => (
            <Link 
              key={index} 
              to={`/doctor/${doctor.id}`}
              className="w-3/12 max-md:w-full transition-all duration-300 hover:scale-105 group"
            >
              <div className="grow text-center h-full">
                <div className="bg-white rounded-xl shadow-[0px_0px_50px_rgba(242,101,34,0.1)] transition-all duration-300 hover:shadow-[0px_0px_50px_rgba(242,101,34,0.3)] hover:bg-orange-500 h-full flex flex-col">
                  <img
                    src={doctor.imageSrc}
                    className="object-contain w-full rounded-t-xl aspect-square"
                    alt={doctor.name}
                  />
                  <div className="px-6 py-3.5 rounded-b-xl flex-grow flex flex-col justify-between">
                    <div className="text-lg leading-relaxed text-orange-500 uppercase transition-colors duration-300 group-hover:text-white">
                      {doctor.name}
                    </div>
                    <div className="text-sm leading-5 text-zinc-600 transition-colors duration-300 group-hover:text-white line-clamp-2">
                      {getSpecialtyFromPath(doctor.id)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Link 
        to="/doctors"
        className="overflow-hidden gap-2.5 px-8 py-2.5 mt-8 text-base leading-8 text-white whitespace-nowrap bg-orange-500 border-orange-500 border-solid border-[length:var(--sds-size-stroke-border)] rounded-[50px] max-md:w-full max-md:text-center transition-colors duration-300 hover:bg-black hover:border-black"
      >
        SEE ALL
      </Link>
    </div>
  );
};

export default DoctorsShowcase; 