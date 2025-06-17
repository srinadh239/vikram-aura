import React, { useRef, useState, useEffect } from "react";
import { Doctor } from "./types";
import ReviewCard from "./ReviewCard";

interface ReviewsSectionProps {
  doctor: Doctor;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ doctor }) => {
  const [current, setCurrent] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const total = doctor.reviews.length;
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };
  const next = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // For desktop: 3 cards in view, center card fully visible, sides 25% visible
  const desktopTransform = `translateX(calc(-${current * 18}% + .1%))`;
  const mobileTransform = `translateX(-${current * 50}vw)`;

  if (!doctor.reviews || doctor.reviews.length === 0) {
    return null;
  }

  return (
    <section 
      ref={sectionRef}
      className={`transition-all duration-1000 max-md:duration-300 max-md:mb-10 mt-16 ${
        isVisible ? 'opacity-100 md:translate-y-0' : 'opacity-0 md:translate-y-full'
      }`}
    >
      {/* Header with inline navigation buttons */}
      <div className="flex justify-between items-center mb-8 max-md:items-center">
        <h2 className="text-3xl leading-tight uppercase text-zinc-600 max-md:text-[18px] max-md:leading-6">
          Reviews
        </h2>
        
        {/* Navigation Buttons */}
        <div className="flex gap-5">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="flex items-center justify-center shrink-0 rounded-full border border-solid border-zinc-600 h-[50px] w-[50px] max-md:h-[40px] max-md:w-[40px] hover:bg-orange-500 transition-colors z-10"
            type="button"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="flex items-center justify-center shrink-0 rounded-full border border-solid border-zinc-600 h-[50px] w-[50px] max-md:h-[40px] max-md:w-[40px] hover:bg-orange-500 transition-colors z-10"
            type="button"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
      
      {/* Carousel */}
      <div className={`relative w-full flex justify-center max-md:px-2 mb-10 ${!isMobile ? 'px-[20%]' : 'px-4'}`}>
        <div
          ref={carouselRef}
          className="flex gap-6 transition-transform duration-500"
          style={{
            transform: isMobile ? mobileTransform : desktopTransform,
          }}
        >
          {doctor.reviews.map((review, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 ${isMobile ? 'w-[90vw] max-w-none min-w-0 box-border' : 'min-w-[35%] max-w-[35%] px-2'}`}
              style={{ pointerEvents: idx === current ? 'auto' : 'none' }}
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
