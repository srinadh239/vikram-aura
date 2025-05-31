import React from "react";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Porta elementum a enim euismod quam justo lectus. Dis parturient montes nascetur ridiculus mus donec rhoncus.",
    author: "Lorem ipsum dolor sit",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Porta elementum a enim euismod quam justo lectus. Dis parturient montes nascetur ridiculus mus donec rhoncus.",
    author: "Lorem ipsum dolor sit",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Porta elementum a enim euismod quam justo lectus. Dis parturient montes nascetur ridiculus mus donec rhoncus.",
    author: "Lorem ipsum dolor sit",
  },
];

const TestimonialsSection: React.FC = () => (
  <div className="flex gap-5 max-md:flex-col">
    {testimonials.map((testimonial, index) => (
      <div key={index} className="w-[33%] max-md:w-full">
        <div className="flex flex-col grow px-8 pt-20 pb-10 w-full text-2xl font-bold bg-white rounded-2xl border border-solid border-neutral-200 shadow-[0px_0px_50px_rgba(242,101,34,0.2)] text-zinc-600 max-md:px-4 max-md:pt-12 max-md:text-xl">
          <div className="leading-8 max-md:leading-7">
            {testimonial.text}
          </div>
          <div className="self-start mt-8 leading-none text-center uppercase">
            {testimonial.author}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default TestimonialsSection; 