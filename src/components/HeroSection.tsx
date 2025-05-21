"use client";
import React from "react";
import ActionButton from "./ActionButton";

const HeroSection = ({ onBookAppointment }: { onBookAppointment?: () => void }) => {
  return (
    <section className="relative flex flex-col items-center px-16 pt-16 -mt-1.5 w-full max-md:px-5 max-md:max-w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFA67C,#F26522,#FF8C42)] opacity-90 animate-gradient-shift"></div>
      <div className="relative w-full max-w-[1192px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start mt-5 text-white max-md:mt-10 max-md:max-w-full">
              <h1 className="text-5xl leading-tight text-center max-md:text-4xl">
                OUR DOCTORS
              </h1>
              <p className="self-stretch mt-3 text-lg font-light leading-6 max-md:max-w-full">
                The doctors at Vikram Aura are not only highly skilled, but also
                deeply committed to providing patient-centric care. With their
                compassionate approach, they ensure every individual receives
                the highest standard of care.
              </p>
              <ActionButton
                text="BOOK AN APPOINTMENT"
                className="va-appointment-btn px-7 py-2.5 mt-5 text-base leading-8 border border-solid rounded-[48px] max-md:px-5"
                onClick={onBookAppointment}
              />
            </div>
          </div>
          <div className="ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e933e88ec3450e2053e7d0c56198206502bfbf85?placeholderIfAbsent=true&apiKey=003a4bc7d72843b88f405864f9e7fccf"
              className="object-contain grow w-full aspect-[1.85] max-md:mt-10 max-md:max-w-full"
              alt="Doctors team"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

const styles = `
@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient-shift {
  background-size: 200% 200%;
  animation: gradient-shift 15s ease infinite;
}
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
