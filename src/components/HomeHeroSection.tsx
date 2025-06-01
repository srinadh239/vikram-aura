"use client";
import React, { useEffect, useRef, useState } from "react";

const heroImages = [
  "https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/home-1.jpg",
  "https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/home-2.png",
  "https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/home-3.png",
  "https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/home-4.png",
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className="relative text-white" style={{ zIndex: 1 }}>
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full -z-10 transition-all duration-500">
        {heroImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="Hero Background"
            className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-500 ${idx === current ? "opacity-100" : "opacity-0"}`}
            style={{ zIndex: idx === current ? 1 : 0 }}
            draggable={false}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="flex flex-col items-start px-20 pt-56 pb-56 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col mb-0 max-w-full w-[596px] max-md:mb-2.5">
          <div className="text-5xl font-semibold uppercase leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            Duis aute irure dolor in reprehenderit
          </div>
          <div className="mt-2 text-2xl leading-9 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="overflow-hidden gap-2.5 self-start px-8 py-2.5 mt-10 text-base leading-8 uppercase bg-orange-500 border-orange-500 border-solid border-[length:var(--sds-size-stroke-border)] rounded-[50px] max-md:px-5 max-md:self-center">
            Book an appointment
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
