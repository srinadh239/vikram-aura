"use client";
import * as React from "react";

function WhyChooseUsSection() {
  return (
    <div>
      <div className="flex relative flex-col justify-center items-center px-20 py-28 w-full min-h-[610px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20a1ccfcc909367851a76ef670d4248120c4cd8b?placeholderIfAbsent=true"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-center mb-0 w-full max-w-[1075px] max-md:mb-2.5 max-md:max-w-full">
          <div className="text-3xl leading-tight text-center uppercase text-zinc-600">
            Why Choose Us
          </div>
          <div className="mt-9 max-w-full w-[799px]">
            <div className="flex gap-5 max-md:flex-col max-md:">
              <div className="w-[33%] max-md:ml-0 max-md:w-full flex flex-col justify-center items-center">
                    <img
                      src="/star-rating.svg"
                      alt="Star Rating"
                      className="w-[200px] h-[200px] mb-4"
                    />
                <div className="self-center mt-1 text-lg font-bold text-center leading-[50px] text-zinc-600">
                  Rated 4.9 (stars) on Google
                </div>
              </div>
              <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full flex flex-col justify-center items-center">
                    <img
                      src="/three-generations.svg"
                      alt="Three Generations"
                      className="w-[200px] h-[200px] mb-4"
                    />
                <div className="self-center mt-1 text-lg font-bold text-center leading-[50px] text-zinc-600">
                  Three Generations Strong
                </div>
              </div>
              <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full flex flex-col justify-center items-center">
                <div className="flex flex-col grow max-md:mt-10">
                  <div className="flex flex-col justify-center items-center rounded-full aspect-square bg-zinc-100 w-[200px] h-[200px] mb-4">
                    <img
                      src="/tech-power.svg"
                      alt="Tech Power"
                      className="w-[200px] h-[200px]"
                    />
                  </div>
                  <div className="self-center mt-1 text-lg font-bold text-center leading-[50px] text-zinc-600">
                    Tech-powered Healing
                  </div>
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
