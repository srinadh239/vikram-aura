"use client";
import React from "react";
import ActionButton from "./ActionButton";
import { Doctor } from "./types";
import { useNavigate, Link } from "react-router-dom";

interface DoctorProfileProps {
  doctor: Doctor;
  showTitle: boolean;
  sectionTitle: string;
  onBookAppointment?: () => void;
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({
  doctor,
  showTitle,
  sectionTitle,
  onBookAppointment,
}) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = React.useState(false);
  const profileRef = React.useRef<HTMLDivElement>(null);
  const [animationClass, setAnimationClass] = React.useState('');

  React.useEffect(() => {
    // Randomly select an animation direction
    const animations = [
      'translate-y-10 opacity-0', // from bottom
      '-translate-y-10 opacity-0', // from top
      'translate-x-10 opacity-0', // from right
      '-translate-x-10 opacity-0', // from left
    ];
    setAnimationClass(animations[Math.floor(Math.random() * animations.length)]);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const {
    name,
    credentials,
    description,
    imageSrc,
    imageRight,
    titleWithDoctor,
  } = doctor;

  // Determine where to place the section title
  const renderSectionTitle = () => {
    if (!showTitle) return null;

    if (titleWithDoctor || !imageRight) {
      return (
        <h2 className="text-3xl leading-tight uppercase text-zinc-600 max-md:max-w-full">
          {sectionTitle}
        </h2>
      );
    }

    return null;
  };

  // Mobile Image Component
  const MobileImage = () => (
    <div className="hidden max-md:flex justify-center items-center mb-8">
      <div className="flex items-center justify-center bg-[#FED8C6] hover:bg-[#F26522] transition-colors duration-300 aspect-square rounded-full overflow-hidden hover:shadow-[0_8px_32px_0_rgba(242,101,34,0.7)]">
        <img
          src={imageSrc}
          className="object-cover h-full"
          alt={name}
        />
      </div>
    </div>
  );

  // Desktop Image Component
  const DesktopImage = () => (
    <div className="hidden md:flex justify-center items-center">
      <div className="flex items-center justify-center bg-[#FED8C6] hover:bg-[#F26522] transition-colors duration-300 aspect-square rounded-full overflow-hidden hover:shadow-[0_8px_32px_0_rgba(242,101,34,0.7)]">
        <img
          src={imageSrc}
          className="object-cover h-full"
          alt={name}
        />
      </div>
    </div>
  );

  // Content Component
  const Content = () => (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
        {renderSectionTitle()}
        <h3 className="text-2xl leading-tight text-orange-500 uppercase">
          {name}
        </h3>
        <p className="mt-2.5 text-sm font-bold leading-5 text-zinc-600 max-md:max-w-full">
          {credentials}
        </p>
        <p className="self-stretch mt-5 text-base font-light leading-6 text-zinc-600 max-md:max-w-full">
          {description}
        </p>
      </div>
      {/* Book Appointment and Learn More buttons below content, inline with image */}
      <div className="flex gap-4 mt-8 text-base leading-8">
        <ActionButton
          text="LEARN MORE"
          className="va-learnmore-btn px-7 py-2.5 border border-solid rounded-[48px] max-md:px-5 max-md:text-sm"
          onClick={() => navigate(`/doctor/${doctor.id}`)}
        />
        <ActionButton
          text="BOOK AN APPOINTMENT"
          className="va-appointment-btn px-7 py-2.5 border border-solid rounded-[48px] max-md:px-5 max-md:text-sm"
          onClick={onBookAppointment}
        />
      </div>
    </div>
  );

  return (
    <div 
      ref={profileRef}
      className={`flex gap-16 max-md:flex-col items-center transition-all duration-700 transform ${
        isVisible ? 'translate-x-0 translate-y-0 opacity-100' : animationClass
      }`}
    >
      {/* Mobile image always on top in mobile view */}
      <Link to={`/doctor/${doctor.id}`} className="md:hidden w-full group focus:outline-none">
        <MobileImage />
      </Link>
      {imageRight ? (
        <>
          <Link to={`/doctor/${doctor.id}`} className="flex w-full md:w-[65%] group focus:outline-none">
            <Content />
          </Link>
          <Link to={`/doctor/${doctor.id}`} className="hidden md:flex w-[35%] group focus:outline-none">
            <DesktopImage />
          </Link>
        </>
      ) : (
        <>
          <Link to={`/doctor/${doctor.id}`} className="hidden md:flex w-[35%] group focus:outline-none">
            <DesktopImage />
          </Link>
          <Link to={`/doctor/${doctor.id}`} className="flex w-full md:w-[65%] group focus:outline-none">
            <Content />
          </Link>
        </>
      )}
    </div>
  );
};

export default DoctorProfile;