import React from "react";

interface ReviewCardProps {
  text: string;
  author: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ text, author }) => {
  return (
    <article className="relative flex flex-col grow px-11 pt-40 pb-20 w-full h-[500px] text-2xl font-bold bg-white rounded-2xl border border-solid border-neutral-200 shadow-[0px_0px_50px_rgba(242,101,34,0.2)] text-zinc-600 max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
      <img
        src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/Testimonial.svg"
        alt="Testimonial Icon"
        className="absolute top-8 left-8 w-10 h-10 object-contain"
        style={{ filter: 'invert(48%) sepia(67%) saturate(2619%) hue-rotate(346deg) brightness(99%) contrast(91%)' }}
      />
      <p className="leading-8 flex-grow">{text}</p>
      <h3 className="self-start mt-11 leading-none text-center uppercase max-md:mt-10">
        {author}
      </h3>
    </article>
  );
};

export default ReviewCard;
