import React, { useRef, useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { doctorsBySpecialty } from "../constants/medicalData";

// Collect reviews only from the first doctor in each specialty
const allTestimonials = Object.values(doctorsBySpecialty)[0]
  .flatMap(doctor =>
    (doctor.reviews || []).map(review => ({
      text: review.description,
      author: review.patient_name,
    }))
  );

// Shuffle testimonials
function shuffle(array: any[]): any[] {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const testimonials = shuffle([...allTestimonials]);

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const total = testimonials.length;
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
  // Each card is 50% width, so 2 cards = 100%. To show 3 cards with 25% of left/right visible:
  // Container px-[12.5%] (25% of card width on each side)
  // translateX(calc(-current*50% + 25%))
  // For mobile: 1 card per view, translateX(-current*100%)
  const desktopTransform = `translateX(calc(-${current * 50}% + 5%))`;
  const mobileTransform = `translateX(-${current * 50}vw)`;

  return (
    <div
      ref={sectionRef}
      className={`relative flex flex-col items-center justify-center w-full mx-auto py-12 transition-all duration-1000 max-md:duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
      }`}
    >
      {/* Section Title and Description */}
      <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1200px] flex-row mb-10 max-md:flex-col max-md:items-center max-md:gap-4 max-md:px-2">
        <div className="flex flex-col text-zinc-600 max-md:text-center w-3/4 max-md:w-full">
          <div className="text-3xl leading-tight uppercase max-md:text-2xl">
            For Life's Toughest Cases, We're Ready
          </div>
          <div className="mt-4 text-2xl font-light leading-9 max-md:text-lg max-md:leading-7">
            Vikram Aura's dedicated teams take on the most complex challenges with unmatched precision, innovation, and a commitment to redefining patient care.
          </div>
        </div>
        <div className="flex gap-5 my-auto max-md:justify-center max-md:mt-4 max-md:px-0 px-20">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex items-center justify-center shrink-0 rounded-full border border-solid border-zinc-600 h-[50px] w-[50px] max-md:h-[40px] max-md:w-[40px] hover:bg-orange-500 transition-colors"
            type="button"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex items-center justify-center shrink-0 rounded-full border border-solid border-zinc-600 h-[50px] w-[50px] max-md:h-[40px] max-md:w-[40px] hover:bg-orange-500 transition-colors"
            type="button"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      {/* Carousel and Arrows */}
      <div className={`relative w-full overflow-x-hidden flex justify-center mt-11 max-md:mt-8 max-md:px-2 ${!isMobile ? 'px-[20%]' : ''}`}>
        <div
          ref={carouselRef}
          className="flex gap-8 transition-transform duration-500"
          style={{
            transform: isMobile ? mobileTransform : desktopTransform,
          }}
        >
          {testimonials.map((t: {text: string; author: string}, idx: number) => (
            <div
              key={idx}
              className={`flex-shrink-0 ${isMobile ? 'w-[94vw] max-w-none min-w-0 box-border' : 'min-w-[22%] max-w-[22%] px-2'}`}
              style={{ pointerEvents: idx === current ? 'auto' : 'none' }}
            >
              <ReviewCard text={t.text} author={t.author} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection; 