"use client";
import React from "react";
import SpecialtyIcon from "./SpecialtyIcon";
import { specialties } from "../constants/medicalData";

const SpecialtiesSection = () => {
  const handleSpecialtyClick = (sectionId: string) => {
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="flex flex-col justify-center items-center px-20 py-32 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col -mb-6 w-full max-w-[1200px] max-md:mb-2.5 max-md:max-w-full">
        <h2 className="self-start text-3xl leading-tight uppercase text-zinc-600 max-md:max-w-full">
          Browse Medical Specialties
        </h2>
        <p className="mt-3 text-base font-light leading-6 text-zinc-600 max-md:max-w-full">
          Whether you're seeking expert guidance or exploring career paths, our
          wide range of specialties helps you connect with the right
          professionals. Navigate by field and find the expertise that fits your
          needs.
        </p>

        <div className="grid grid-cols-5 gap-8 items-start mt-16 max-md:mt-10 max-md:max-w-full max-md:grid-cols-3 max-sm:grid-cols-2">
          {specialties.map((specialty, index) => (
            <div key={index} className="w-full">
              <SpecialtyIcon
                name={specialty.name}
                iconSrc={specialty.iconSrc}
                highlighted={specialty.highlighted}
                onClick={() => handleSpecialtyClick(specialty.sectionId)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
