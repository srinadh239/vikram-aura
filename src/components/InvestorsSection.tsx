import React, { useEffect, useRef, useState } from "react";

const investors = [
  {
    name: "Fundamentum",
    logo: "/fundamentum.svg",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Vertex",
    logo: "/vertex.svg",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Stellaris",
    logo: "/stellaris.svg",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Paramark Ventures",
    logo: "/paramark.png",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const InvestorsSection: React.FC = () => {
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

  return (
    <section
      ref={sectionRef}
      className={`w-full py-16 bg-white flex flex-col items-center transition-all duration-1000 max-md:duration-700 
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
    >
      <h2 className="text-3xl leading-tight text-center uppercase text-zinc-600 max-md:text-2xl max-md:px-4 mb-12">OUR INVESTORS</h2>
      <div className="grid grid-cols-2 gap-16 w-full max-w-5xl max-md:grid-cols-1 max-md:gap-12 px-4">
        {investors.map((inv) => (
          <div key={inv.name} className="flex flex-col items-center">
            <div className="rounded-full bg-white shadow-[0_0_40px_0_rgba(242,101,34,0.10)] flex items-center justify-center w-64 h-64 mb-6">
              <img src={inv.logo} alt={inv.name} className="object-contain max-w-[70%] max-h-[70%]" />
            </div>
            {/* <div className="font-semibold text-lg text-zinc-700 mb-2">{inv.name}</div> */}
            {/* <div className="text-zinc-500 text-center text-base max-w-xs">{inv.description}</div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestorsSection; 