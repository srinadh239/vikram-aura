import React, { useEffect, useRef, useState } from "react";
import { Doctor } from "./types";

interface AwardsSectionProps {
  doctor: Doctor;
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ doctor }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!doctor.awards || doctor.awards.length === 0) {
    return null;
  }

  return (
    <section 
      ref={sectionRef}
      className={`w-full max-w-[1046px] mt-16 mb-[100px] max-md:mt-6 max-md:mb-10 max-md:max-w-full transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <h2 className="text-3xl leading-tight uppercase text-zinc-600 max-md:max-w-full mb-8 max-md:text-[18px] max-md:leading-6 max-md:mb-4">
        Awards & Recognition
      </h2>
      <div className="grid grid-cols-2 gap-x-10 gap-y-4 max-md:grid-cols-1 max-md:gap-x-4 max-md:gap-y-2">
        {doctor.awards.map((award, index) => (
          <div
            key={index}
            className="flex items-center bg-transparent rounded-lg"
          >
            <img
              src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/award.svg"
              alt="Award Icon"
              className="w-7 h-7 mr-4 flex-shrink-0 max-md:w-5 max-md:h-5 max-md:mr-2"
              style={{ filter: 'invert(48%) sepia(67%) saturate(2619%) hue-rotate(346deg) brightness(99%) contrast(91%)' }}
            />
            <span className="text-[#58595B] text-[16px] font-light leading-[36px] max-md:text-[13px] max-md:leading-6">
              {award}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
