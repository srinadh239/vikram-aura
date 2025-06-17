import React, { useEffect, useRef, useState } from "react";
import { Doctor } from "./types";

interface ExpertiseSectionProps {
  doctor: Doctor;
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ doctor }) => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

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

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full flex justify-center mt-[100px] max-md:mt-0 max-md:mb-6">
      <div
        ref={contentRef}
        className={`w-full max-w-6xl bg-zinc-100 rounded-lg pt-[62px] pl-[79px] pb-[44px] max-md:pt-8 max-md:pl-4 max-md:pr-4 max-md:pb-6 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <h2
          className="mb-4 tracking-wide text-[#58595B] text-left uppercase text-[30px] font-normal leading-[36px] max-md:text-[18px] max-md:leading-6 max-md:mb-4"
        >
          Areas of Expertise
        </h2>
        <ul className="flex flex-wrap justify-start gap-x-10 gap-y-4 text-left max-md:gap-x-4 max-md:text-[13px]">
          {doctor.areas_of_expertise.map((expertise, index) => (
            <li key={index} className="flex items-center">
                <span
                  className="mx-3 text-[#58595B] text-[16px] font-light leading-[36px] max-md:mx-1 max-md:text-[13px] max-md:leading-6"
                >
                  &bull;
                </span>
              <span
                className="text-[#58595B] text-[16px] font-light leading-[36px] max-md:text-[13px] max-md:leading-6"
              >
                {expertise}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ExpertiseSection;
