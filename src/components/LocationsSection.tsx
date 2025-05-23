import React, { useEffect, useRef, useState } from "react";

const LocationsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  // Animation classes: only slide in from right on desktop, fade in on mobile
  const animationClass =
    isVisible
      ? 'opacity-100 md:translate-x-0'
      : 'opacity-0 md:translate-x-full';

  return (
    <section
      ref={sectionRef}
      className={`mt-16 max-md:mt-0 w-full max-w-[1040px] max-md:max-w-full transition-all duration-500 ${animationClass}`}
    >
      <div className="flex gap-5 max-md:flex-col max-md:gap-4">
        <div className="w-[32%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch my-auto text-zinc-600 max-md:mt-6">
            <h2 className="text-3xl leading-tight text-center uppercase max-md:text-[18px] max-md:leading-6">
              Locations
            </h2>
            <h3 className="self-stretch mt-5 text-xl font-semibold leading-7 max-md:text-base max-md:leading-6 max-md:mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            </h3>
            <address className="mt-4 text-base leading-6 not-italic max-md:text-sm max-md:leading-5">
              Flat No. 203, Krishna Residency <br />
              behind Sacred Heart School Sacred Heart Church, <br />
              MG Road, Indiranagar <br />
              Bengaluru – 560038 <br />
              Karnataka <br />
              India
            </address>
            <a
              href="https://www.google.com/maps?q=12.9657136,77.6070354"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors max-md:text-sm max-md:px-3 max-md:py-1.5"
            >
              View on Google Maps
            </a>
          </div>
        </div>
        <div className="ml-5 w-[68%] max-md:ml-0 max-md:w-full flex items-center">
          <div className="w-full h-[350px] max-md:h-[220px]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=12.9657136,77.6070354&z=15&output=embed"
              width="100%"
              height="100%"
              className="rounded-lg w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
