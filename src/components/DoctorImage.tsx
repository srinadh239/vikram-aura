import React, { useEffect, useState } from "react";
import { DOCTOR_PLACEHOLDER_IMAGE, getDoctorImageSrc } from "../constants/images";

interface DoctorImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const DoctorImage: React.FC<DoctorImageProps> = ({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(() => getDoctorImageSrc(src));

  useEffect(() => {
    setImgSrc(getDoctorImageSrc(src));
  }, [src]);

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(DOCTOR_PLACEHOLDER_IMAGE)}
    />
  );
};

export default DoctorImage;
