"use client";
import React from "react";
import ActionButton from "./ActionButton";
import DoctorImage from "./DoctorImage";
import { Doctor } from "./types";
import { useNavigate, Link } from "react-router-dom";
import { getScheduleByName, formatOpdSummary } from "../constants/doctorSchedules";

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
  const [animationClass, setAnimationClass] = React.useState("");

  React.useEffect(() => {
    const animations = [
      "translate-y-10 opacity-0",
      "-translate-y-10 opacity-0",
      "translate-x-10 opacity-0",
      "-translate-x-10 opacity-0",
    ];
    setAnimationClass(animations[Math.floor(Math.random() * animations.length)]);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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

  const schedule = getScheduleByName(name);

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

  const MobileImage = () => (
    <div className="hidden max-md:flex justify-center items-center mb-8 max-md:mb-0">
      <div className="flex items-center justify-center aspect-square rounded-full overflow-hidden border-[16px] border-[#FED8C6] group-hover:border-[#F26522] transition-colors duration-300 w-[320px] h-[320px] min-w-[320px] min-h-[320px] max-md:w-[300px] max-md:h-[300px] max-md:min-w-[300px] max-md:min-h-[300px]">
        <DoctorImage
          src={imageSrc}
          className="object-cover w-full h-full"
          alt={name}
        />
      </div>
    </div>
  );

  const DesktopImage = () => (
    <div className="hidden md:flex justify-center items-center">
      <div className="flex items-center justify-center aspect-square rounded-full overflow-hidden border-[16px] border-[#FED8C6] group-hover:border-[#F26522] transition-colors duration-300 w-[320px] h-[320px] min-w-[320px] min-h-[320px]">
        <DoctorImage
          src={imageSrc}
          className="object-cover w-full h-full"
          alt={name}
        />
      </div>
    </div>
  );

  const Content = () => (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
        {renderSectionTitle()}
        <Link to={`/doctor/${doctor.id}`} className="hover:text-orange-600 transition-colors">
          <h3 className="text-2xl leading-tight text-orange-500 uppercase">
            {name}
          </h3>
        </Link>
        <p className="mt-2.5 text-sm font-bold leading-5 text-zinc-600 max-md:max-w-full">
          {credentials}
        </p>
        <p className="self-stretch mt-5 text-base font-light leading-6 text-zinc-600 max-md:max-w-full">
          {description}
        </p>

        {schedule && (
          <div className="mt-5 w-full rounded-xl border border-orange-100 bg-orange-50/80 px-4 py-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-wider text-orange-500 mb-1.5">
                  OPD Schedule
                </p>
                <ul className="space-y-1">
                  {formatOpdSummary(schedule).map((line) => (
                    <li key={line} className="text-sm text-zinc-700 font-medium">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[11px] font-bold uppercase tracking-wider text-orange-500 mb-1">
                  Fee
                </p>
                <p className="text-base font-bold text-orange-600">
                  {schedule.fee !== null
                    ? `₹${schedule.fee.toLocaleString("en-IN")}`
                    : "On request"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
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
      className={`flex gap-16 max-md:gap-0 max-md:flex-col items-center transition-all duration-700 transform ${
        isVisible ? "translate-x-0 translate-y-0 opacity-100" : animationClass
      }`}
    >
      <Link to={`/doctor/${doctor.id}`} className="md:hidden w-full group focus:outline-none">
        <MobileImage />
      </Link>
      {imageRight ? (
        <>
          <div className="flex w-full md:w-[65%] group focus:outline-none">
            <Content />
          </div>
          <Link to={`/doctor/${doctor.id}`} className="hidden md:flex w-[35%] group focus:outline-none">
            <DesktopImage />
          </Link>
        </>
      ) : (
        <>
          <Link to={`/doctor/${doctor.id}`} className="hidden md:flex w-[35%] group focus:outline-none">
            <DesktopImage />
          </Link>
          <div className="flex w-full md:w-[65%] group focus:outline-none">
            <Content />
          </div>
        </>
      )}
    </div>
  );
};

export default DoctorProfile;
