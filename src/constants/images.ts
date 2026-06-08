export const DOCTOR_PLACEHOLDER_IMAGE = "/doctor-placeholder.svg";

export function getDoctorImageSrc(imageSrc?: string): string {
  return imageSrc?.trim() ? imageSrc : DOCTOR_PLACEHOLDER_IMAGE;
}
