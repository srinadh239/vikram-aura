import React, { useEffect, useRef, useState } from "react";
import { Doctor } from "./types";
import ReviewCard from "./ReviewCard";

interface ReviewsSectionProps {
  doctor: Doctor;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ doctor }) => {
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

  if (!doctor.reviews || doctor.reviews.length === 0) {
    return null;
  }

  return (
    <section 
      ref={sectionRef}
      className={`transition-all duration-1000 max-md:duration-300 max-md:mb-10 ${
        isVisible ? 'opacity-100 md:translate-y-0' : 'opacity-0 md:translate-y-full'
      }`}
    >
      <h2 className="text-3xl leading-tight uppercase text-zinc-600 max-md:max-w-full mb-8 max-md:text-[18px] max-md:leading-6 max-md:mb-0">
        Reviews
      </h2>
      <div className="mt-7 max-md:mt-0 w-full max-w-[1050px] max-md:max-w-full">
        <div className="flex gap-16 overflow-x-auto pb-4 snap-x snap-mandatory max-md:gap-4 max-md:-mx-4">
          {doctor.reviews.map((review, index) => (
            <div 
              key={index} 
              className={`w-[500px] flex-shrink-0 snap-center mt-4 max-md:w-[320px] max-md:px-4`}
            >
              <ReviewCard text={review.description} author={review.patient_name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
