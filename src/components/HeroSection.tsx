"use client";
import React from "react";
import ActionButton from "./ActionButton";

const HeroSection = ({ onBookAppointment }: { onBookAppointment?: () => void }) => {
  return (
    <section className="relative flex flex-col items-center px-16 pt-16 -mt-1.5 w-full max-md:px-5 max-md:max-w-full overflow-hidden">
      <div className="absolute inset-0 animate-color-shift"></div>
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
              src="https://website-va.s3.ap-south-1.amazonaws.com/image+20.png"
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
@keyframes color-shift {
  0% {
    background-color: #FFA67C;
  }
  20% {
    background-color: #FF6B6B;
  }
  40% {
    background-color: #4169E1;
  }
  60% {
    background-color: #1E90FF;
  }
  80% {
    background-color: #FF4757;
  }
  100% {
    background-color: #FFA67C;
  }
}

.animate-color-shift {
  animation: color-shift 15s ease infinite;
}
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
