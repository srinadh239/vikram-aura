"use client";
import React, { useEffect, useRef, useState } from "react";
import { VideoBackground } from "./VideoBackground";
import ActionButton from "./ActionButton";

const heroImages = [
  "https://website-va.s3.ap-south-1.amazonaws.com/home-1.jpg",
  "https://website-va.s3.ap-south-1.amazonaws.com/home-2.png",
  "https://website-va.s3.ap-south-1.amazonaws.com/home-3.png",
  "https://website-va.s3.ap-south-1.amazonaws.com/home-4.png",
];

function HeroSection({ onBookAppointment }: { onBookAppointment?: () => void }) {
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
     <VideoBackground
      videoUrl="https://website-va.s3.ap-south-1.amazonaws.com/Brand+Video.mp4"
      mobileVideoUrl="https://website-va.s3.ap-south-1.amazonaws.com/VA+brand+video+vertical.mp4"
      className="min-h-[250px] md:min-h-[600px] lg:min-h-[800px] w-full max-w-[1440px] mx-auto"
    >
    </VideoBackground>
  );
}

export default HeroSection;
