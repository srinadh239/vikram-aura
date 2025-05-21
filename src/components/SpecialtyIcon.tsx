"use client";
import React from "react";

interface SpecialtyIconProps {
  name: string;
  iconSrc: string;
  highlighted: boolean;
  onClick?: () => void;
}

const SpecialtyIcon: React.FC<SpecialtyIconProps> = ({
  name,
  iconSrc,
  highlighted,
  onClick,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const iconRef = React.useRef<HTMLDivElement>(null);
  const [animationClass, setAnimationClass] = React.useState('');

  React.useEffect(() => {
    // Randomly select an animation direction
    const animations = [
      'translate-y-10 opacity-0', // from bottom
      '-translate-y-10 opacity-0', // from top
      'translate-x-10 opacity-0', // from right
      '-translate-x-10 opacity-0', // from left
    ];
    setAnimationClass(animations[Math.floor(Math.random() * animations.length)]);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={iconRef}
      className={`flex flex-col transition-all duration-700 transform ${
        isVisible ? 'translate-x-0 translate-y-0 opacity-100' : animationClass
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); }}
    >
      <div
        className={`flex flex-col justify-center items-center px-10 rounded-full aspect-square group transition-colors duration-300 cursor-pointer
          ${highlighted ? "bg-orange-500 hover:bg-white" : "bg-zinc-100 hover:bg-orange-500"}
        `}
      >
        {iconSrc ? (
          <img
            src={iconSrc}
            className="object-contain aspect-square w-[76px] transition-colors duration-300 [filter:brightness(0)_saturate(100%)_invert(48%)_sepia(98%)_saturate(1234%)_hue-rotate(346deg)_brightness(101%)_contrast(101%)] group-hover:[filter:brightness(0)_invert(1)]"
            alt={name}
          />
        ) : null}
      </div>
      <div
        className={`self-center mt-3.5 text-base font-bold text-center transition-colors duration-300
          ${highlighted ? "text-orange-500 group-hover:text-orange-500 group-hover:bg-white" : "text-zinc-600 group-hover:text-orange-500 group-hover:bg-white"}`}
      >
        {name}
      </div>
    </div>
  );
};

export default SpecialtyIcon;
