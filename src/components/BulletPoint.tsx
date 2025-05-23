import React from "react";

interface BulletPointProps {
  text: string;
}

const BulletPoint: React.FC<BulletPointProps> = ({ text }) => {
  return (
    <div className="flex gap-2">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f52773a3ee094d527061fe860391d5c716c7cec4?placeholderIfAbsent=true"
        className="object-contain shrink-0 my-auto w-5 aspect-[0.74]"
        alt="Bullet point"
      />
      <p className="flex-auto">{text}</p>
    </div>
  );
};

export default BulletPoint;
