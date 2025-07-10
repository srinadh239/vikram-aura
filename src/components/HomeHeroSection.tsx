"use client";
import React, { useEffect, useRef, useState } from "react";
import { VideoBackground } from "./VideoBackground";
import ActionButton from "./ActionButton";

const heroImages = [
  "https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/home-1.jpg",
  "https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/home-2.png",
  "https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/home-3.png",
  "https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/home-4.png",
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
      videoUrl="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/Brand+Video.mp4"
      mobileVideoUrl="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/VA+brand+video+vertical.mp4"
      className="min-h-[250px] md:min-h-[600px] lg:min-h-[800px] w-full max-w-[1440px] mx-auto"
    >
    </VideoBackground>
  );
}

export default HeroSection;
