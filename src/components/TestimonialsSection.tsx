import React, { useRef, useState } from "react";
import ReviewCard from "./ReviewCard";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Porta elementum a enim euismod quam justo lectus. Dis parturient montes nascetur ridiculus mus donec rhoncus.",
    author: "Lorem ipsum dolor sit",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Porta elementum a enim euismod quam justo lectus. Dis parturient montes nascetur ridiculus mus donec rhoncus.",
    author: "Lorem ipsum dolor sit",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Porta elementum a enim euismod quam justo lectus. Dis parturient montes nascetur ridiculus mus donec rhoncus.",
    author: "Lorem ipsum dolor sit",
  },
];

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(1);
  const total = testimonials.length;
  const carouselRef = useRef<HTMLDivElement>(null);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };
  const next = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full mx-auto py-12">
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
      <div className="relative w-full overflow-x-hidden flex justify-center mt-11 max-md:mt-8 max-md:px-2">
        <div
          ref={carouselRef}
          className="flex gap-6 transition-transform duration-500"
          style={{
            transform: window.innerWidth < 768
              ? `translateX(-${current * 100}%)`
              : `translateX(calc(-${current * 50}% + 25%))`,
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 min-w-[50%] max-w-[50%] max-md:min-w-full max-md:max-w-full px-2"
              style={{
                pointerEvents: idx === current ? 'auto' : 'none',
                minWidth: window.innerWidth < 768 ? '100%' : '50%',
                maxWidth: window.innerWidth < 768 ? '100%' : '50%',
              }}
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