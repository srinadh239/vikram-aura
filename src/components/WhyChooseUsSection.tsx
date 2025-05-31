"use client";
import * as React from "react";

function WhyChooseUsSection() {
  return (
    <div>
      <div className="flex relative flex-col items-end py-32 pr-2.5 pl-20 w-full min-h-[727px] max-md:py-24 max-md:pl-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf2daa57dfb4ca16c3e67543c0f328d0fa3c596e?placeholderIfAbsent=true"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-wrap gap-10 w-full max-w-[1200px] text-zinc-600 max-md:max-w-full">
          <div className="grow shrink self-start text-3xl leading-tight uppercase w-[193px]">
            Why Choose Us
          </div>
          <div className="grow shrink text-2xl font-light leading-9 w-[702px] max-md:max-w-full">
            Vikram Aura is built on four core values that shape everything we
            do. Here, care goes beyond treatment
          </div>
        </div>
        <div className="relative mt-10 mb-0 w-full max-w-[1200px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:">
            <div className="w-[33%] max-md:ml-0 max-md:w-full">
              <div className="relative max-md:mt-10">
                <div className="flex flex-col justify-center px-16 py-6 bg-white rounded-2xl border border-solid border-neutral-200 shadow-[0px_0px_50px_rgba(242,101,34,0.2)] max-md:px-5">
                  <img
                    src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram%2Baura/google-star.png"
                    className="object-contain w-full aspect-[1.47]"
                    alt="Google Rating"
                  />
                </div>
                <div className="mt-8 text-2xl leading-tight uppercase text-zinc-600 max-md:mr-2.5">
                  Rated 4.9 (stars) on Google
                </div>
                <div className="mt-2.5 text-lg font-bold leading-8 text-zinc-600 max-md:mr-1.5">
                  Our patients love us! Proof is in our Google Reviews that they
                  leave for us
                </div>
              </div>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="relative grow text-zinc-600 max-md:mt-10">
                <img
                  src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram%2Baura/three-generations-strong.png"
                  className="w-full aspect-[1.85] max-md:w-full max-md:h-auto mb-4 mt-2 rounded-xl"
                  alt="Three Generations"
                />
                <div className="mt-9 mr-6 text-2xl leading-tight uppercase max-md:mr-2.5">
                  Three Generations Strong
                </div>
                <div className="mt-2.5 text-lg font-bold leading-8 max-md:mr-1.5">
                  Backed by clinical expertise spanning over 3 generations, we
                  certainly know how to be a true partner in healing
                </div>
              </div>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col text-zinc-600 max-md:mt-10">
                <img
                  src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram%2Baura/tech-powered-healing.png"
                  className="w-full aspect-[1.85] max-md:w-full max-md:h-auto mb-4 mt-2 rounded-xl"
                  alt="Tech-powered Healing"
                />
                <div className="self-start mt-5 text-2xl leading-tight uppercase">
                  Tech-powered Healing
                </div>
                <div className="mt-2.5 text-lg font-bold leading-8 max-md:mr-1.5">
                  We harness the power of AI and advanced technology to make
                  seamless care possible
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUsSection;
