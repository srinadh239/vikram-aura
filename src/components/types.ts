export interface Doctor {
  id: string;
  name: string;
  credentials: string;
  description: string;
  imageSrc: string;
  imageRight: boolean;
  titleWithImage?: boolean;
  titleWithDoctor?: boolean;
  awards: string[];
  areas_of_expertise: string[];
  reviews: {
    patient_name: string;
    description: string;
  }[];
}
