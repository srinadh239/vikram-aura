import React from "react";

interface ReviewCardProps {
  text: string;
  author: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ text, author }) => {
  return (
    <article className="relative flex flex-col grow px-8 ml-4 pt-32 pb-16 w-full h-[450px] text-xl font-bold bg-white rounded-2xl border border-solid border-neutral-200 shadow-[0px_0px_50px_rgba(242,101,34,0.2)] text-zinc-600 max-md:px-2 max-md:pt-20 max-md:pb-10 max-md:ml-0 max-md:h-[340px] max-md:text-base max-md:font-semibold max-md:w-full max-md:max-w-full max-md:box-border">
      <img
        src="https://website-va.s3.ap-south-1.amazonaws.com/Testimonial.svg"
        alt="Testimonial Icon"
        className="absolute top-6 left-6 w-8 h-8 object-contain max-md:w-8 max-md:h-8 max-md:top-4 max-md:left-4"
        style={{ filter: 'invert(48%) sepia(67%) saturate(2619%) hue-rotate(346deg) brightness(99%) contrast(91%)' }}
      />
      <p className="leading-7 flex-grow max-md:leading-6 max-md:text-base font-normal break-words">{text}</p>
      <h3 className="self-start mt-8 leading-none text-center uppercase max-md:mt-8 max-md:self-center max-md:text-sm max-md:font-bold">
        {author}
      </h3>
    </article>
  );
};

export default ReviewCard;
