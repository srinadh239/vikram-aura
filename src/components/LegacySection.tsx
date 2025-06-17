import React, { useEffect, useRef, useState } from "react";

const LegacySection: React.FC = () => {
  const [questionsVisible, setQuestionsVisible] = useState(false);
  const [legacyBlockVisible, setLegacyBlockVisible] = useState(false);
  const [experienceBlockVisible, setExperienceBlockVisible] = useState(false);
  const questionsRef = useRef<HTMLDivElement>(null);
  const legacyBlockRef = useRef<HTMLDivElement>(null);
  const experienceBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setQuestionsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (questionsRef.current) {
      observer.observe(questionsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLegacyBlockVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (legacyBlockRef.current) {
      observer.observe(legacyBlockRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setExperienceBlockVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (experienceBlockRef.current) {
      observer.observe(experienceBlockRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div id="have-more" className="flex flex-col justify-center items-center px-20 py-32 w-full bg-neutral-200 max-w-[1440px] max-md:px-4 max-md:py-16">
      <div className="flex flex-col max-w-full w-[1000px]">
        <div className="self-center text-8xl leading-tight text-center uppercase text-zinc-600 max-md:text-4xl">
          Have more
        </div>
        <div
          ref={questionsRef}
          className={`self-center text-8xl leading-tight text-center uppercase text-zinc-600 max-md:text-4xl transition-all duration-1000 max-md:duration-700 ${
            questionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Questions about
        </div>
        <div
          className={`self-center text-8xl leading-tight text-center uppercase text-zinc-600 max-md:text-4xl transition-all duration-1000 max-md:duration-700 ${
            questionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          who we are?
        </div>
        <div className="mt-12 max-md:mt-16">
          <div className="flex gap-5 max-md:flex-col">
            <div
              ref={legacyBlockRef}
              className={`flex w-full gap-5 max-md:flex-col text-lg leading-8 text-zinc-600 max-md:mt-8 transition-all duration-1000 max-md:duration-700 ${
                legacyBlockVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="flex flex-col gap-4 md:hidden mb-4">
                <img
                  src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram%2Baura/founders.png"
                  className="object-contain w-full aspect-[0.9]"
                  alt="Legacy"
                />
              </div>
              <div className="w-[56%] max-md:hidden">
                <img
                  src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram%2Baura/founders.png"
                  className="object-contain w-full aspect-[0.9]"
                  alt="Legacy"
                />
              </div>
              <div className="w-[44%] max-md:w-full flex flex-col">
                <div className="mt-5 max-md:text-base">
                  <span className="text-zinc-600">
                    Vikram Aura is not just a network of hospitals—it's a bold {" "}</span>
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
            <div
              ref={experienceBlockRef}
              className={`w-full flex gap-5 max-md:flex-col text-lg leading-8 text-zinc-600 transition-all duration-1000 max-md:duration-700 ${
                experienceBlockVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="flex flex-col gap-4 md:hidden mb-4">
                <img
                  src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram%2Baura/vikram-experience.png"
                  className="object-contain w-full aspect-[0.9]"
                  alt="Experience"
                />
              </div>
              <div className="w-[44%] max-md:w-full flex flex-col">
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
              <div className="w-[56%] max-md:hidden max-md:mt-8">
                <img
                  src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram%2Baura/vikram-experience.png"
                  className="object-contain w-full aspect-[0.9]"
                  alt="Experience"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegacySection; 