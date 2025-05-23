import React, { useState, useRef, useEffect } from "react";
import { Doctor } from "./types";

interface DoctorInfoProps {
  doctor: Doctor;
}

const DoctorInfo: React.FC<DoctorInfoProps> = ({ doctor }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const lineHeight = parseInt(window.getComputedStyle(descriptionRef.current).lineHeight);
      const height = descriptionRef.current.scrollHeight;
      const lines = height / lineHeight;
      setShowReadMore(lines > 3);
    }
  }, [doctor.description]);

  return (
    <section className="w-full max-w-[1046px] max-md:max-w-full max-md:mb-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[35%] max-md:ml-0 max-md:w-full">
          <img
            src={doctor.imageSrc}
            className="object-contain w-full aspect-square"
            alt={doctor.name}
          />
        </div>
        <div className="ml-5 w-[65%] max-md:ml-0 max-md:w-full">
          <article className="flex flex-col items-start self-stretch my-auto text-base text-zinc-600 max-md:mt-4 mt-10 max-md:max-w-full">
            <h1 className="text-[#58595B] text-[50px] font-normal leading-[75px] uppercase font-sans max-md:max-w-full max-md:text-3xl max-md:leading-[38px]">
              {doctor.name}
            </h1>
            <p className="self-stretch text-sm font-bold leading-5 max-md:max-w-full">
              {doctor.credentials}
            </p>
            <h2 className="mt-6 font-bold">ABOUT ME</h2>
            <div className="relative w-full">
              <p 
                ref={descriptionRef}
                className={`self-stretch mt-2 font-light leading-6 max-md:max-w-full transition-all duration-300 ${
                  !isExpanded ? 'line-clamp-3' : ''
                }`}
              >
                {doctor.description}
              </p>
              {showReadMore && (
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-2.5 leading-8 text-orange-500 hover:text-orange-600 transition-colors"
                >
                  {isExpanded ? 'Show Less' : 'Read More'}
                </button>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default DoctorInfo;
