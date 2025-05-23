import React from "react";

const EducationSection: React.FC = () => {
  return (
    <section>
      <h2 className="mt-20 ml-4 text-3xl leading-tight uppercase text-zinc-600 max-md:mt-10 max-md:ml-2.5">
        Medical Education
      </h2>
      <div className="mt-3.5 ml-16 max-w-full w-[854px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <p className="mt-8 text-base font-light leading-9 text-zinc-600 max-md:mt-10">
              Lorem ipsum dolor sit amet consectetur <br />
              Quisque faucibus ex sapien vitae pellentesque <br />
              In id cursus mi pretium tellus duis convallis.
            </p>
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <p className="text-base font-light leading-9 text-zinc-600 max-md:mt-10">
              Lorem ipsum dolor sit amet consectetur <br />
              Quisque faucibus ex sapien vitae pellentesque <br />
              In id cursus mi pretium tellus duis convallis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
