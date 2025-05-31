import React from "react";

export const FooterImage: React.FC = () => {
  return (
    <div className="text-white rounded-none w-full">
      <div className="flex flex-col items-center px-20 pt-24 pb-12 w-full bg-orange-500 max-md:px-5 max-md:pt-12 max-md:pb-8 max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-w-[1024px] max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e4041259dfcf7f35f776d7625311028e67abc20?placeholderIfAbsent=true"
            alt="Company Logo"
            className="object-contain max-w-full aspect-[2.69] w-[403px] max-md:w-[280px]"
          />
          <div className="self-stretch px-16 py-10 mt-16 text-lg bg-orange-500 rounded-2xl border border-solid border-neutral-200 border-opacity-40 shadow-[0px_0px_50px_rgba(157,64,20,1)] max-md:px-4 max-md:py-6 max-md:mt-8 max-md:text-base max-md:text-center max-md:max-w-full">
            <span className="inline-flex items-center gap-2">
              <div className="flex items-center justify-center bg-white rounded-full h-[50px] w-[50px] max-md:h-[40px] max-md:w-[40px]">
                <img
                  src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/location-icon.svg"
                  alt="Location Icon"
                  className="object-contain h-8 w-8"
                />
              </div>
              #62, Richmond Road, Behind Sacred Heart Church, Mother Teresa Road, Richmond Town, Bangalore, 560025​
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-10 items-center mt-12 max-w-full text-base font-semibold max-md:mt-8 max-md:gap-6 max-md:w-full flex-row">
            <div className="flex items-center justify-center gap-2 text-center uppercase max-md:w-full max-md:text-sm">
              <div className="flex items-center justify-center bg-white rounded-full h-[50px] w-[50px] max-md:h-[40px] max-md:w-[40px]">
                <img
                  src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/call-icon.svg"
                  alt="Call Icon"
                  className="object-contain h-7 w-7"
                />
              </div>
              <a href="tel:+917022400800" className="hover:text-orange-200 transition-colors">+91-7022 400 800</a>
            </div>
            <div className="flex gap-3.5 whitespace-nowrap items-center max-md:w-full max-md:justify-center">
              <div className="flex items-center justify-center bg-white rounded-full h-[50px] w-[50px] max-md:h-[40px] max-md:w-[40px]">
                <img
                  src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/message-icon.svg"
                  alt="Message Icon"
                  className="object-contain h-7 w-7"
                />
              </div>
              <div className="my-auto basis-auto max-md:text-sm">
                info@vikramaura.com
              </div>
            </div>
            <div className="flex gap-4 items-center flex-row">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/567b165fa8f0877246152b895393d5884e1db786?placeholderIfAbsent=true"
                  alt="Instagram Icon"
                  className="object-contain shrink-0 aspect-square w-[40px] max-md:w-[32px]"
                />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/twitter-icon.svg"
                  alt="Twitter Icon"
                  className="object-contain shrink-0 aspect-square w-[40px] max-md:w-[32px]"
                />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/linkedin-icon.svg"
                  alt="LinkedIn Icon"
                  className="object-contain shrink-0 aspect-square w-[40px] max-md:w-[32px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterImage;
