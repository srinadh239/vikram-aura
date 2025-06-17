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
              Vikram Aura Hospital
            </h3>
            <address className="mt-4 text-base leading-6 not-italic max-md:text-sm max-md:leading-5">
              62, Mother Teresa Rd Xavier Layout , <br />
              Victoria Layout, Richmond Rd, <br />
              behind Sacred Heart School Sacred Heart Church, <br />
              Richmond Town, Bengaluru, Karnataka 560047
            </address>
            <a
              href="https://www.google.com/maps/place/Vikram+Aura+Hospital/@12.9657136,77.6070354,904m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae142ac1c81093:0xa2fc9609c496d0c4!8m2!3d12.9657136!4d77.6096103!16s%2Fg%2F11bw6dhq9c!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
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
            {/* <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=12.9657136,77.6070354&z=17&output=embed"
              width="100%"
              height="100%"
              className="rounded-lg w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.7221701208123!2d77.60703537513417!3d12.965713587349054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae142ac1c81093%3A0xa2fc9609c496d0c4!2sVikram%20Aura%20Hospital!5e1!3m2!1sen!2sin!4v1750151086672!5m2!1sen!2sin"
              width="100%"
              height="100%"
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
