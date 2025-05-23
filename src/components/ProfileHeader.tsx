import React from "react";
import { useNavigate } from "react-router-dom";

interface ProfileHeaderProps {
  specialty: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ specialty }) => {
  const navigate = useNavigate();

  return (
    <header>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/647adb39be43542e64ae7dff3333fda76e10ab86?placeholderIfAbsent=true"
        className="object-contain w-full aspect-[7.81] max-md:max-w-full"
        alt="Doctor profile header"
      />
      <div className="w-full border border-solid border-zinc-600 min-h-px max-md:max-w-full" />
      <div className="flex items-center justify-center mt-2.5 gap-2">
        <button 
          onClick={() => navigate('/doctors')}
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/left-arrow.svg"
            alt="Back"
            className="w-6 h-6 object-contain"
            style={{ filter: 'invert(48%) sepia(67%) saturate(2619%) hue-rotate(346deg) brightness(99%) contrast(91%)' }}
          />
        </button>
        <h2 className="text-base text-center leading-8 text-orange-500">
          {specialty.charAt(0).toUpperCase() + specialty.slice(1)}
        </h2>
      </div>
      <div className="mt-2.5 w-full border border-solid border-zinc-600 min-h-px max-md:max-w-full" />
    </header>
  );
};

export default ProfileHeader;
