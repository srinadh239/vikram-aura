import React from "react";

const LegacySection: React.FC = () => (
  <div className="flex flex-col justify-center items-center px-20 py-32 w-full bg-neutral-200 max-w-[1440px] max-md:px-4 max-md:py-16">
    <div className="flex flex-col max-w-full w-[1000px]">
      <div className="self-center text-8xl leading-tight text-center uppercase text-zinc-600 max-md:text-4xl">
        Have more
      </div>
      <div className="mt-72 max-md:mt-16">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[56%] max-md:w-full">
            <img
              src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram%2Baura/founders.png"
              className="object-contain w-full aspect-[0.79]"
              alt="Legacy"
            />
          </div>
          <div className="w-[44%] max-md:w-full">
            <div className="flex flex-col text-lg leading-8 text-zinc-600 max-md:mt-8">
              <div className="text-3xl leading-tight uppercase max-md:text-2xl">
                Our Legacy
              </div>
              <div className="mt-5 max-md:text-base">
                <span className="text-zinc-600">
                  Vikram Aura is not just a network of hospitals—it's a bold{" "}</span>
                <span className="font-bold text-zinc-600">vision brought to life{" "}</span>
                <span className="text-zinc-600">by two pioneers in healthcare. </span>
                <span className="font-bold text-zinc-600">Dr. Vikram, </span>
                <span className="text-zinc-600">a name synonymous with hospital excellence, and </span>
                <span className="font-bold text-zinc-600">Ayu Health</span>
                <span className="text-zinc-600">, India's largest network of hospitals, come together to create the extraordinary.</span>
              </div>
              <div className="mt-5 max-md:text-base">
                <span className="text-zinc-600">Dr. Vikram, known for building one of India's most successful healthcare institutions, has reimagined the way hospitals function—integrating </span>
                <span className="font-bold text-zinc-600">clinical precision, cutting-edge technology, and patient-first service</span>
                <span className="text-zinc-600">. Ayu Health strengthens this foundation with its expertise in </span>
                <span className="font-bold text-zinc-600">digital innovation, patient experience, and seamless care coordination </span>
                <span className="text-zinc-600">across 200+ hospitals.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 max-md:mt-16">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[44%] max-md:w-full">
            <div className="flex flex-col text-lg leading-8 text-zinc-600">
              <div className="text-3xl leading-9 uppercase max-md:text-2xl">
                the Vikram Aura experience
              </div>
              <div className="mt-5 max-md:text-base">
                <span className="text-zinc-600">At Vikram Aura, every detail matters. From the </span>
                <span className="font-bold text-zinc-600">most advanced diagnostics </span>
                <span className="text-zinc-600">to </span>
                <span className="font-bold text-zinc-600">personalized treatment plans and superior recovery pathways</span>
                <span className="text-zinc-600">,everything is designed to deliver the best health outcomes. Our doctors don't just treat illnesses—they </span>
                <span className="font-bold text-zinc-600">empower patients, support families, and redefine what it means to receive compassionate, world-class care.</span>
              </div>
              <div className="mt-5 max-md:text-base">
                <span className="text-zinc-600">With </span>
                <span className="font-bold text-zinc-600">clinical expertise spanning three generations</span>
                <span className="text-zinc-600">, we understand healing not just as a science, but as a human experience. This deep-rooted legacy allows us to care with intuition, treat with precision, and partner with patients and families through every stage of recovery.</span>
              </div>
              <div className="mt-5 max-md:text-base">
                Welcome to Vikram Aura—
                <span className="font-bold text-zinc-600">Hospitals where innovation meets compassion, and excellence feels personal.</span>
              </div>
            </div>
          </div>
          <div className="w-[56%] max-md:w-full max-md:mt-8">
            <img
              src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram%2Baura/vikram-experience.png"
              className="object-contain w-full aspect-[0.71]"
              alt="Experience"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LegacySection; 