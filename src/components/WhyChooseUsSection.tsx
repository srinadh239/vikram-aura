"use client";
import * as React from "react";

function WhyChooseUsSection() {
  return (
    <div className="max-md:px-2 overflow-x-hidden">
      <div className="flex relative flex-col items-end py-32 pr-2.5 pl-20 w-full min-h-[727px] max-md:py-24 max-md:pl-2 max-md:max-w-full max-md:items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf2daa57dfb4ca16c3e67543c0f328d0fa3c596e?placeholderIfAbsent=true"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-wrap gap-10 w-full max-w-[1200px] text-zinc-600 max-md:max-w-full max-md:flex-col max-md:items-center">
          <div className="grow shrink self-start text-3xl leading-tight uppercase w-[193px] max-md:text-center max-md:w-full max-md:mb-2">
            Why Choose Us
          </div>
          <div className="grow shrink text-2xl font-light leading-9 w-[702px] max-md:max-w-full max-md:text-center max-md:w-full">
            Vikram Aura is built on four core values that shape everything we
            do. Here, care goes beyond treatment
          </div>
        </div>
        <div className="relative mt-10 mb-0 w-full max-w-[1200px] max-md:mb-2.5 max-md:max-w-full max-md:overflow-x-hidden">
          <div className="flex gap-5 items-start max-md:flex-col max-md:gap-6 max-md:w-full">
            <div className="w-[33%] max-md:w-full max-md:box-border">
              <div className="relative max-md:px-2 max-md:py-4 max-md:w-full max-md:box-border">
                <div className="flex flex-col justify-center px-16 py-6 bg-white rounded-2xl border border-solid border-neutral-200 shadow-[0px_0px_50px_rgba(242,101,34,0.2)] max-md:px-2 max-md:py-4 max-md:w-full max-md:box-border">
                  <img
                    src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram%2Baura/google-star.png"
                    className="object-contain w-full max-w-[220px] mx-auto aspect-[1.47] max-md:max-w-[160px]"
                    alt="Google Rating"
                  />
                </div>
                <div className="mt-8 text-2xl leading-tight uppercase text-zinc-600 max-md:mr-2.5 max-md:text-lg max-md:text-center break-words">
                  Rated 4.9 (stars) on Google
                </div>
                <div className="mt-2.5 text-lg font-bold leading-8 text-zinc-600 max-md:mr-1.5 max-md:text-base max-md:text-center break-words">
                  Our patients love us! Proof is in our Google Reviews that they
                  leave for us
                </div>
              </div>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full max-md:box-border">
              <div className="relative grow text-zinc-600 max-md:px-2 max-md:py-4 max-md:w-full max-md:box-border">
                <img
                  src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram%2Baura/three-generations-strong.png"
                  className="object-contain w-full max-w-full mx-auto rounded-none aspect-[1.85] max-md:max-w-[160px]"
                  alt="Three Generations"
                />
                <div className="mt-8 mr-6 text-2xl leading-tight uppercase max-md:mr-2.5 max-md:text-lg max-md:text-center break-words">
                  Three Generations Strong
                </div>
                <div className="mt-2.5 text-lg font-bold leading-8 max-md:mr-1.5 max-md:text-base max-md:text-center break-words">
                  Backed by clinical expertise spanning over 3 generations, we
                  certainly know how to be a true partner in healing
                </div>
              </div>
            </div>
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full max-md:box-border">
              <div className="flex relative flex-col text-zinc-600 max-md:px-2 max-md:py-4 max-md:w-full max-md:box-border">
                <img
                  src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram%2Baura/tech-powered-healing.png"
                  className="object-contain w-full max-w-full mx-auto rounded-none aspect-[1.85] max-md:max-w-[160px]"
                  alt="Tech-powered Healing"
                />
                <div className="mt-8 text-2xl leading-tight uppercase max-md:text-lg max-md:text-center break-words">
                  Tech-powered Healing
                </div>
                <div className="mt-2.5 text-lg font-bold leading-8 max-md:mr-1.5 max-md:text-base max-md:text-center break-words">
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
