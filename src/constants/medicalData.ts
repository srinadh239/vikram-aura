import type { Doctor } from '../components/types';
// Specialties list
export const specialties = [
  {
    name: "Diabetology & Endocrinology",
    iconSrc:
      "https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/Gynaecology+%26+Obstetrics-1.svg",
    highlighted: false,
    sectionId: "diabetology-endocrinology",
  },
  { name: "Dermatology", iconSrc: "https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/Dermatology.svg", highlighted: false, sectionId: "dermatology" },
  {
    name: "General Surgery",
    iconSrc:
      "https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/General+Surgery.svg",
    highlighted: false,
    sectionId: "general-surgery",
  },
  {
    name: "Gynaecology & Obstetrics",
    iconSrc:
      "https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/Gynaecology+%26+Obstetrics.svg",
    highlighted: false,
    sectionId: "gynaecology-obstetrics",
  },
  {
    name: "Internal Medicine",
    iconSrc:
      "https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/Urology-Nephrology.svg",
    highlighted: false,
    sectionId: "internal-medicine",
  },
  { name: "Oncology", iconSrc: "https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/Oncology.svg", highlighted: false, sectionId: "oncology" },
  { name: "Orthopaedics", iconSrc: "https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/Orthopaedics.svg", highlighted: false, sectionId: "orthopaedics" },
  {
    name: "Paediatrics & Neonatology",
    iconSrc:
      "https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/Paediatrics+%26+Neonatology.svg",
    highlighted: false,
    sectionId: "paediatrics-neonatology",
  },
  { name: "Pulmonology", iconSrc: "https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/Pulmonology.svg", highlighted: false, sectionId: "pulmonology" },
  {
    name: "Urology-Nephrology",
    iconSrc:
      "https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/Urology-Nephrology-1.svg",
    highlighted: false,
    sectionId: "urology-nephrology",
  },
];

// Doctors data for each section
export const doctorsBySpecialty = {
   "diabetology-endocrinology":[
      {
         "id": "dr-priya-chinnapa",
         "name":"DR PRIYA CHINNAPA",
         "credentials":"MBBS, Diplomate of American Board of Internal Medicine (Internal Medicine), Internal Medicine, Special Interest in Diabetology",
         "description":"Dr Priya is a highly experienced specialist with 29 years of medical expertise, including 24 years as an endocrinologist. She specializes in diabetes, thyroid disorders, PCOS, osteoporosis, and adrenal and pituitary gland disorders etc.",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr Priya Chinappa.avif",
         "imageRight":false,
         "titleWithDoctor":true,
         "awards":[
            
         ],
         "areas_of_expertise":[
            "Diabetes",
            "Thyroid problems",
            "PCOS",
            "Osteoporosis",
            "Disorders of the adrenal gland",
            "Disorders of the pituitary gland"
         ],
         "reviews":[ 
  { patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }
]
      },
      {
         "id": "dr-k-v-harish",
         "name":"DR K V HARISH",
         "credentials":"MBBS, Diplomate of American Board of Internal Medicine (Internal Medicine), Internal Medicine, Special Interest in Diabetology",
         "description":"Dr K V Harish is a highly experienced Internal Medicine specialist with over 29 years of clinical expertise, including 22 years as a specialist. He holds an MBBS, MD in Internal Medicine, and is a Fellow of the Cardiological Society of India (FCSI). His key areas of focus include preventive medicine, diabetes and endocrinology, hypertension, cardiac care, lifestyle disorders, and general internal medicine.",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr K V Harish.jpeg",
         "imageRight":true,
         "awards":[
            "Conducted numerous CME programs",
            "Participated in state and national medical conferences, as well as international seminars",
            "Presented papers and written research articles including international journal publications",
            "Dissertation on \"Relevance of Upper GI Endoscopy in Patients with Diabetes Mellitus\" accepted by Rajiv Gandhi University of Health Sciences",
            "Worked in key academic roles -- Registrar, Assistant Professor, Associate Professor, and Professor -- in top medical colleges across Karnataka",
            "Conducted workshops and clinical teaching sessions for both undergraduate and postgraduate students",
            "Organized webinars for corporate companies and healthcare awareness camps for social causes",
            "Served on advisory boards for pharmaceutical companies and contributed to clinical strategy and healthcare innovation"
         ],
         "areas_of_expertise":[
            "Preventive Medicine",
            "Diabetes & Endocrinology",
            "Hypertension & Cardiac Care",
            "Lifestyle Disorders",
            "General Internal Medicine"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }
            
         ]
      }
   ],
   "dermatology":[
      {
         "id": "dr-rohini-krishnamoorthy",
         "name":"DR ROHINI KRISHNAMOORTHY",
         "credentials":"MBBS, MD (Dermatology)",
         "description":"Dr Rohini Krishnamoorthy is a senior dermatologist with over 39 years of medical experience, including 33 years as a specialist in dermatology. She holds an MBBS and MD in Dermatology, with expertise spanning clinical and aesthetic dermatology, skin allergies, autoimmune skin disorders, acne, pigmentation, hair loss treatments, and advanced anti-aging and skin rejuvenation procedures.",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr. Rohini Krishnamoorthy.jpeg",
         "imageRight":false,
         "titleWithDoctor":true,
         "awards":[
            "Widely respected for her clinical acumen and ethical dermatological practice",
            "Trusted by generations of patients for skin health and cosmetic care"
         ],
         "areas_of_expertise":[
            "Clinical Dermatology",
            "Aesthetic Dermatology",
            "Skin Allergy & Autoimmune Skin Disorders",
            "Acne, Pigmentation & Hair Loss Treatments",
            "Anti-Aging and Skin Rejuvenation Procedures"
         ],
         "reviews":[ { patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      }
   ],
   "general-surgery":[
      {
         "id": "dr-prakash-babu",
         "name":"DR PRAKASH BABU",
         "credentials":"MBBS, MS - General Surgery and Laparoscopic Surgeon",
         "description":"Dr Prakash Babu is a highly experienced surgeon with 29 years of medical expertise, including 23 years as a specialist. He specializes in thyroid, abdominal, colorectal, and complex gastrointestinal surgeries, along with laparoscopic hepatobiliary procedures for high-risk patients. He is also skilled in advanced laser treatments for hemorrhoids, fistula, and sinus conditions.",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr Prakash Babu.jpg",
         "imageRight":true,
         "titleWithDoctor":true,
         "awards":[
            "Training in Laprascopy - Bangalore Endoscopic Surgery Training Institute & Research Centre, 2003",
            "Training Programme on Laparoscopic Solid Organ Surgery - Ethicon Institute Of Surgical Education 2009"
         ],
         "areas_of_expertise":[
            "Thyroid and abdominal surgeries",
            "Colorectal and Anorectal surgeries",
            "Complex Gastrointestinal /Abdominal surgery",
            "Open and Laparoscopy Hepatobiliary surgeries in high-risk patients",
            "Laser procedures for: Haemorrhoids, Fistula, Sinus"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      },
      {
         "id": "dr-moksha-gowda",
         "name":"DR MOKSHA GOWDA",
         "credentials":"MBBS, DNB (General Surgery)",
         "description":"Dr Moksha Gowda is a skilled General Surgeon with over 17 years of experience in performing laparoscopic, minimally invasive, and complex surgical procedures. She specializes in gastrointestinal & hepatobiliary surgeries, hernia & abdominal wall surgeries, surgical oncology, trauma, and emergency surgeries. With expertise in high-risk cases and post-surgical pain management, Dr Moksha ensures precise, patient-focused surgical care.",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr Moksha Gowda.jpeg",
         "imageRight":false,
         "awards":[
            "Mahadevan Award (2014) -- 2nd Prize for Best Paper at KSC ASICON, Manipal",
            "Millennium Gold Medal Award (2016) -- CSEP, Bangalore",
            "Published Work -- Laparoscopic Subtotal Cholecystectomy: An Alternative Approach in Difficult Gall Bladder (Journal of Gastroenterology and Hepatology, 2017)",
            "Extensive Paper & Poster Presentations at major national & state-level surgical conferences, including ASICON, KSC ASICON, and Bangalore Surgical Society",
            "Sub-Investigator in Multiple Clinical Research Studies, including trials on COVID-19 treatment, Hepatitis management, and Non-Alcoholic Fatty Liver Disease",
            "Speaker at National & International Conferences on advancements in laparoscopic and gastrointestinal surgeries"
         ],
         "areas_of_expertise":[
            "Laparoscopic & Minimally Invasive Surgeries",
            "Gastrointestinal & Hepatobiliary Surgeries",
            "Hernia & Abdominal Wall Surgeries",
            "Surgical Oncology",
            "High-Risk & Complex Surgical Procedures",
            "Trauma & Emergency Surgeries",
            "Post-Surgical Pain Management"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      }
   ],
   "gynaecology-obstetrics":[
      {
         "id": "dr-jayashree-nagraj-bhasgi",
         "name":"DR JAYASHREE NAGRAJ BHASGI",
         "credentials":"MBBS, MD - Obstetrics & GynaecologyObstetrician, Gynecologist, Laparoscopic Surgeon (Obs & Gyn)",
         "description":"Dr Jayashree is a highly experienced OB-GYN specialist with 36 years of medical expertise, including 33 years as a specialist. She specializes in complicated pregnancies, fertility-conserving procedures, laparoscopic gynecology, and infertility treatments such as IUI and fertilization.",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr Jayashree.jpeg",
         "imageRight":true,
         "titleWithDoctor":true,
         "awards":[
            
         ],
         "areas_of_expertise":[
            "Complicated Pregnancies",
            "Fertility Conserving Procedures",
            "Abortion / Medical Termination of Pregnancy (MTP)",
            "Laparoscopic Gynaecology",
            "Cervical Cerclage",
            "Post Pregnancy Classes",
            "Lamaze Classes",
            "Pre and Post Delivery Care",
            "Labiaplasty",
            "Clinical Embryologist",
            "Gynaecological Endoscopy",
            "Fertilization",
            "Infertiliade",
            "Intra-Uterine Insemination (IUI)"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      },
      {
         "id": "dr-rubina-shanawaz",
         "name":"DR RUBINA SHANAWAZ",
         "credentials":"MBBS, MS - Obstetrics & Gynaecology, FICSInfertility Specialist",
         "description":"Dr Rubina is a skilled gynecologist specializing in the full spectrum of women's health treatments, including urinary leakage, uterine prolapse, bleeding abnormalities, irregular periods, PCOD, fibroids, and endometriosis. She is dedicated to providing personalized care for gynecological health and wellness.",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr Rubina Shahnawaz.jpg",
         "imageRight":false,
         "awards":[
            "Secured the state IIIrd rank in science in Tamil Nadu",
            "Completed Masters in OBGYN with 3 Gold medals",
            "Best outgoing postgraduate",
            "Presented papers",
            "Invited as faculty in various state and national conferences",
            "Undergone special training in Urogynaecology and Gynaec endoscopy",
            "One of the very few lady gynecologists in Bangalore exclusively dedicated to Urogynaecology",
            "Received her Diploma in Reproductive Medicine(Infertility) from the International School of Medicine, Germany"
         ],
         "areas_of_expertise":[
            "Urinary leakage",
            "Uterine prolapse",
            "Bleeding abnormalities",
            "Irregular periods",
            "PCOD",
            "Fibroid uterus",
            "Endometriosis"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      },
      {
         "id": "dr-sunita-dsouza-lobo",
         "name":"DR SUNITA DSOUZA LOBO",
         "credentials":"MBBS, DGO - Gynecologist, Obstetrician, Laparoscopic Surgeon (Obs & Gyn)",
         "description":"Dr Sunita is a highly experienced OB-GYN specialist with 33 years of medical expertise, including 29 years as a specialist. She specializes in prenatal care, pregnancy management, and the treatment of reproductive disorders, along with preventive care, Pap test screenings, and STD detection, ensuring comprehensive women's health care.",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/DrSunita-Dsouza-Lobo.jpg",
         "imageRight":true,
         "awards":[
            
         ],
         "areas_of_expertise":[
            "Prenatal care",
            "Pregnancy management",
            "Treatment of women's reproductive disorders",
            "Preventive care",
            "Pap test screening",
            "Detection of sexually transmitted diseases"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      },
      {
         "id": "dr-arwa-mohsin",
         "name":"DR ARWA MOHSIN",
         "credentials":"MD DNB (Obstetrics & Gynaecology)",
         "description":"Dr Arwa Mohsin is a highly experienced Obstetrician & Gynaecologist with over 32 years of expertise. She specializes in high-risk pregnancy management, gynaecological surgeries, endoscopic procedures (laparoscopy & hysteroscopy), and abnormal uterine bleeding treatment. Dr Arwa also provides comprehensive care for PCOS, menstrual & menopausal health, infertility treatment, and preventive contraception guidance, ensuring personalized and advanced women's healthcare.",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr Arwa Mohsin.jpeg",
         "imageRight":false,
         "awards":[
            "Recognized for excellence in Obstetrics & Gynaecology across leading hospitals in Bengaluru",
            "Contributor to medical awareness initiatives and patient education programs",
            "Has been associated with premier healthcare institutions including Queens Hospital, Shifa Hospital, Martha's Hospital, Motherhood Hospital, Chinmaya Mission Hospital, Fortis & Manipal Hospitals",
            "Regular speaker at national and international medical conferences",
            "Published articles on women's health in reputed journals and media platforms"
         ],
         "areas_of_expertise":[
            "High-Risk Pregnancy Management",
            "Gynaecological Surgeries",
            "Endoscopic Procedures -- Laparoscopic & Hysteroscopic Surgeries",
            "Management of Abnormal Uterine Bleeding -- Medical & Surgical",
            "PCOS Management",
            "Menstrual & Menopausal Care",
            "Infertility Treatment",
            "Preventive Care & Contraception Guidance"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      }
   ],
  //  "internal-medicine":[
  //     {
  //        "id": "dr-anita-maria-dias",
  //        "name":"DR ANITA MARIA DIAS",
  //        "credentials":"MBBS, MD (Internal Medicine), Fellowship in Critical Care",
  //        "description":"Dr Anita Maria Dias is a seasoned Internal Medicine Specialist with over 25 years of experience in diagnosing and managing a wide range of medical conditions. She specializes in infectious diseases, diabetes management, thyroid disorders, critical care medicine, and preventive healthcare. With a patient-centric approach, Dr Anita provides comprehensive and personalized medical care to ensure optimal health outcomes.",
  //        "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr Anita Maria Dias.webp",
  //        "imageRight":true,
  //        "titleWithDoctor":true,
  //        "awards":[
  //           "Specialized training in Critical Care at Lilavati Hospital, Mumbai"
  //        ],
  //        "areas_of_expertise":[
  //           "Infectious Diseases",
  //           "Diabetes Management",
  //           "Thyroid Disorders",
  //           "Critical Care Medicine",
  //           "Preventive Healthcare"
  //        ],
  //        "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  // { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  // { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  // { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  // { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
  //        ]
  //     }
  //  ],
   "oncology":[
      {
         "id": "dr-niti-raizada",
         "name":"DR NITI RAIZADA",
         "credentials":"MD DNB DM (Medical Oncology), ECMO MRCP (UK), EMPH (US)",
         "description":"Dr Niti Raizada is a highly accomplished Medical Oncologist with 28 years of experience, including 17 years as a specialist. Dr Niti specializes in Thoracic, Gastrointestinal, Breast, and Gynecological Oncology, as well as Medical and Hemato Oncology.",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr Niti Raizada.jpeg",
         "imageRight":true,
         "titleWithDoctor":true,
         "awards":[
            "Gold Medalist and President of India Awardee",
            "Principal Investigator in many multinational Oncology trials",
            "Presented several papers in various forums like the American Society of Clinical Oncology, UICC and INCTR",
            "Part of the Editorial Board of the Journal of Medical Science and Research",
            "Contributes to articles on Oncology in various newspapers",
            "President of India Award (1998) for All-Round Best Performance in All MBBS",
            "1998 Kak Memorial Award (1998) for All Round Best Performance in MBBS",
            "1998 Gold Medal (1997-1998) in MBBS aggregate",
            "1998 Gold Medals in Anatomy, Biochemistry, Pathology, Forensic Medicine, Ophthalmology, Surgery and Medicine",
            "1998 Teaching Registrar- Dept. of Medicine, GR Medical College & JA Group of Hospitals, Gwalior"
         ],
         "areas_of_expertise":[
            "Breast and Gynec Oncology",
            "Head & Neck Oncology",
            "Gastrointestinal and Genito Urinary Oncology",
            "Hemato-Oncology & Bone Marrow Transplants"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      },
      {
         "id": "dr-sarat-chandra-pingali",
         "name":"DR SARAT CHANDRA PINGALI",
         "credentials":"MBBS, MS (General Surgery), MCH (Surgical Oncology)",
         "description":"Dr Sarat Chandra Pingali is a highly experienced Surgical Oncologist with 22 years of overall medical experience, including 12 years as a cancer surgery specialist. He holds an MBBS, MS in General Surgery, and MCh in Surgical Oncology. His areas of expertise include head and neck cancer surgery, gastrointestinal and colorectal oncology, breast and gynecologic cancers, urologic and thoracic oncology, as well as minimally invasive and advanced surgical oncology techniques.​",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr%20Sarath%20chandra.jpeg",
         "imageRight":false,
         "awards":[
            "Recognized for clinical excellence in managing complex cancer surgeries across specialties"
         ],
         "areas_of_expertise":[
            "Head & Neck Cancer Surgery",
            "Gastrointestinal and Colorectal Oncology",
            "Breast and Gynecologic Oncology",
            "Urologic and Thoracic Oncology",
            "Minimally Invasive and Advanced Surgical Oncology"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      }
   ],
   "orthopaedics":[
      {
         "id": "dr-sai-krishna-b-naidu",
         "name":"DR SAI KRISHNA B NAIDU",
         "credentials":"MBBS, MRCS (UK), FRCS (Ortho), MCh (Ortho), Diploma SICOT (European Board for Trauma)",
         "description":"Dr Sai Krishna B Naidu is a renowned Orthopedic Surgeon with 23 years of experience, including 11 years as a specialist. Dr Sai Krishna specializes in Joint Replacement Surgery (Knee and Hip) and Sports Injuries",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr Sai Krishna B Naidu.jpg",
         "imageRight":true,
         "titleWithDoctor":true,
         "awards":[
            "Best Paper Award, Prosthetic Joint Infections: Single Stage vs Two Stage, Peterborough Hospital, Cambridge (2015)",
            "Best Paper Award, Robotic Knee Replacement: Future of Knee Replacement, London Knee Meeting (2013)",
            "Extensive research work with 14 original articles and 2 thesis projects",
            "Taught medical students at Oxford University Hospitals NHS Trust while working at Sir John Radcliffe Level 1 Trauma Centre, UK",
            "Arthroplasty Fellowship at SWELOC (South West London Elective Orthopaedic Centre), London",
            "Joint Replacement Fellowship at Hospital for Special Surgery, NY, USA (2015--2016)",
            "Trauma Fellow at Sir John Radcliffe Level 1 Trauma Centre, Oxford, UK",
            "Collaborated and trained with Dr. Michael Freeman, pioneer of Knee Joint Replacement Surgery"
         ],
         "areas_of_expertise":[
            "Joint Replacement Surgery (Knee and Hip)",
            "Sports Injuries",
            "Arthroscopic Knee Surgeries",
            "ACL Reconstruction and Multi-Ligament Knee Surgeries",
            "Complex Trauma Cases",
            "Revision Knee and Hip Replacement Surgeries",
            "Lower Limb Arthroplasty",
            "Bone Infections",
            "Advanced Arthroscopic Surgeries"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      },
      {
         "id": "dr-subodh-m-shetty",
         "name":"DR SUBODH M SHETTY",
         "credentials":"MBBS, MS (Orthopaedics)",
         "description":"Dr Subodh M Shetty is a renowned Orthopaedic Surgeon with over 33 years of medical experience, including 27 years as a spine surgery specialist. He holds an MBBS and MS in Orthopaedics and is widely recognized for his expertise in advanced spine care. His areas of specialization include minimally invasive spine surgery, revision spine procedures for failed back surgeries, pediatric spine surgery, deformity correction, slipped disc management (neck and lower back), hunchback treatment, as well as traumatic, infectious, and degenerative spine disorders.",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr%20Subodh%20Shetty.jpeg",
         "imageRight":false,
         "awards":[
            "Specialized training in Minimally Invasive Spine Surgery -- Fujita Health University, Japan",
            "Training in Pediatric Spine Surgery & Deformity Correction -- Germany",
            "Operated on over 5000 spine patients including complex and revision cases",
            "International exposure through conferences in Japan, Switzerland, and the Netherlands",
            "Recognized as one of the top surgeons in Karnataka for revision spine surgery"
         ],
         "areas_of_expertise":[
            "Spine Surgery (Minimally Invasive Techniques)",
            "Revision Spine Surgery (Failed Back Surgery)",
            "Pediatric Spine Surgery & Deformity Correction",
            "Slipped Disc -- Neck and Lower Back",
            "Hunch Back Treatment",
            "Traumatic and Infectious Spine Conditions",
            "Degenerative Spine Disorders"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      },
      {
         "id": "dr-harish-puranik",
         "name":"DR HARISH PURANIK",
         "credentials":"MBBS, MS (Orthopaedics), Fellowship in Hip & Knee Replacements (Germany), Fellowship in Arthroscopic Surgery (India), MSc-Diploma in Sports & Exercise Medicine (UK)",
         "description":"Dr Harish Puranik is a highly skilled Orthopaedic Surgeon with 18 years of medical experience, including 14 years as a specialist. His expertise includes shoulder and knee arthroscopy, sports injury management, joint replacements, ligament reconstruction, and minimally invasive orthopaedic procedures.",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr%20Harish%20Puranik.jpeg",
         "imageRight":true,
         "awards":[
            "Trained in Hip and Knee Replacements at Puttlingen, Germany",
            "Advanced training in Shoulder Arthroscopy -- Macclesfield, Manchester, UK",
            "MSc-Diploma in Sports and Exercise Medicine -- University of South Wales, UK",
            "Served as faculty and mentor for Orthopaedic PG students and Arthroscopy fellows",
            "Published multiple papers in national and international peer-reviewed journals"
         ],
         "areas_of_expertise":[
            "Arthroscopy -- Shoulder, Knee, and Sports Injuries",
            "Joint Replacements -- Hip & Knee",
            "Sports and Exercise Medicine",
            "Ligament Reconstruction",
            "Minimally Invasive Orthopaedic Procedures"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      }
   ],
   "paediatrics-neonatology":[
      {
         "id": "dr-marie-shalini-chico",
         "urlId": "dr-marie-shalini-chico",
         "name":"DR MARIE SHALINI CHICO",
         "credentials":"MBBS, MD - Pediatrics, Fellowship in Neonatology",
         "description":"Dr Marie is a highly skilled Pediatrician and Neonatologist with 20 years of experience. Holding an MD in Pediatrics and MBBS, she specializes in critical care procedures, neonatal resuscitation, and managing extremely low birth weight newborns.",
         "imageSrc":"https://cdn.builder.io/api/v1/image/assets/TEMP/8bebb11a726c3fd392ba42895d111e657266e40c?placeholderIfAbsent=true&apiKey=003a4bc7d72843b88f405864f9e7fccf",
         "imageRight":true,
         "titleWithDoctor":true,
         "awards":[
            "Working and setting up NICUs in tertiary hospitals",
            "Passionate about improving the status of neonatal care in the community",
            "Conducted workshops and training for staff in several hospitals on Neonatal resuscitation, breastfeeding, kangaroo care, and other aspects of essential newborn care"
         ],
         "areas_of_expertise":[
            "Critical care procedures",
            "Management of extremely low birth weight and sick newborn",
            "Setting up NICU s in tertiary hospitals",
            "Neonatal resuscitation",
            "Breastfeeding, Kangaroo care",
            "Other aspects of essential newborn care"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      },
      {
         "id": "dr-ramesh-santhanakrishnan",
         "urlId": "dr-ramesh-santhanakrishnan",
         "name":"DR RAMESH SANTHANAKRISHNAN",
         "credentials":"MBBS, MS (General Surgery), DNB (General Surgery), MCh (Pediatric Surgery), DNB (Pediatric Surgery)",
         "description":"Dr Ramesh Santhanakrishnan is a highly experienced Pediatric Surgeon with over 29 years of expertise in performing advanced and complex surgeries for newborns and children. He specializes in pediatric minimal access surgery (laparoscopy, thoracoscopy, bronchoscopy, endo-urology, neuroendoscopy), neonatal surgery, pediatric urology, hepatobiliary, gastrointestinal, colorectal, and thoracic procedures.",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr Ramesh Santhanakrishnan.jpeg",
         "imageRight":false,
         "awards":[
            "Dr. D.G. Benakappa Memorial Endowment Oration -- Bangalore Pediatric Society, Indian Academy of Pediatrics",
            "Park Clinic Oration -- West Bengal Chapter of Indian Association of Pediatric Surgeons",
            "Presidential Address at IAPSCON 2019 -- Indian Association of Pediatric Surgeons, New Delhi",
            "Wakhlu-Tandon Oration -- UP & Uttaranchal Association of Indian Association of Pediatric Surgeons",
            "PESI Oration -- PESICON, Pediatric Endo Surgeons of India, Pondicherry",
            "Puran Chandra Gupta Award -- For outstanding contributions to Pediatric Surgery",
            "Dr. T. Dorairajan Award -- Indian Association of Pediatric Surgeons",
            "Over 300 scientific paper presentations at state, national, and international conferences",
            "Published 50+ research articles in indexed journals",
            "Authored 16 textbook chapters",
            "Served as an editorial reviewer for 5 prestigious medical journals",
            "Examiner for MCh & DNB (Pediatric Surgery) in over 60 university examinations",
            "Led multiple university-funded research projects",
            "Trained over 300 pediatric surgeons in Pediatric Minimal Access Surgery",
            "Conducted 16 editions of Pediatric Laparoscopy Training Courses",
            "Organized 5 international live operative workshops in Pediatric Surgery",
            "Served as Honorary Secretary General & President of the Indian Association of Pediatric Surgeons",
            "Founder Member & Chairman of Pediatric Endo Surgeons of India"
         ],
         "areas_of_expertise":[
            "Pediatric Minimal Access Surgery (Laparoscopy, Thoracoscopy, Bronchoscopy, Endo-Urology, Neuroendoscopy)",
            "Neonatal, Urologic, Hepatobiliary, Gastrointestinal, Colorectal, and Thoracic Surgeries in Children",
            "Pediatric Surgical Oncology",
            "Advanced & Complex Pediatric Surgeries",
            "Innovating surgical instruments and techniques"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      },
      {
         "id": "dr-vindhya-n",
         "urlId": "dr-vindhya-n",
         "name":"DR VINDHYA N",
         "credentials":"MBBS, MD (Pediatrics), DNB (Neonatology)",
         "description":"Dr Vindhya N is an experienced Pediatrician and Neonatologist with 13 years of medical practice, including 9 years as a specialist. She holds an MBBS, MD in Pediatrics, and DNB in Neonatology. Her clinical expertise spans neonatal intensive care, management of preterm and high-risk newborns, general pediatric care, newborn screening, developmental follow-up, and preventive child health through timely vaccinations.​",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr%20Vindhya%20N.jpeg",
         "imageRight":true,
         "awards":[
            "Recognized for excellence in newborn care and pediatric health management"
         ],
         "areas_of_expertise":[
            "Neonatal Intensive Care",
            "Preterm and High-Risk Newborn Management",
            "General Pediatric Care",
            "Newborn Screening and Developmental Follow-up",
            "Vaccination and Preventive Child Health"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      }
   ],
   "pulmonology":[
      {
         "id": "dr-padma-sundaram",
         "urlId": "dr-padma-sundaram",
         "name":"DR PADMA SUNDARAM",
         "credentials":"MBBS, MD (Tuberculosis & Respiratory Diseases/Medicine), DNB (Respiratory Medicine)",
         "description":"Dr Padma Sundaram is a highly skilled and experienced Respiratory Medicine Specialist with over 33 years of medical practice, including 30 years as a specialist in her field.",
         "imageSrc":"https://cdn.builder.io/api/v1/image/assets/TEMP/b10cb6b1f926aa7d8575031b8edfa0ed65dd15cf?placeholderIfAbsent=true&apiKey=003a4bc7d72843b88f405864f9e7fccf",
         "imageRight":true,
         "titleWithDoctor":true,
         "awards":[
            "Raj Nanda Fellowship for Sleep Medicine (UK)",
            "Published over 50 papers in national and international medical journals",
            "Presented research at numerous medical conferences",
            "Recognized Postgraduate Professor (MD and DNB)",
            "Member of the Indian Chest Society and Karnataka Pulmonology Association",
            "Played a key role in establishing the Department of Respiratory Medicine at a reputed hospital in Bengaluru",
            "Previously served as Lecturer and Associate Professor in Chest Medicine at TN Medical College, Mumbai",
            "Actively involved in the management of COVID-19 patients and post-COVID rehabilitation for lung fibrosis",
            "Speaker at national medical conferences, sharing expertise in airway diseases, ILD, and sleep medicine"
         ],
         "areas_of_expertise":[
            "Airway Disorders (Asthma and COPD)",
            "Infectious Lung Diseases, including TB and Multidrug-Resistant TB",
            "Interstitial Lung Diseases (ILD) and Fibrotic Lung Conditions",
            "Occupational Lung Diseases",
            "Snoring and Sleep Disorders, including Obstructive Sleep Apnea",
            "Respiratory Failure Management with Ventilators and Noninvasive Ventilation",
            "Post-COVID Lung Rehabilitation",
            "Domiciliary Oxygen Therapy",
            "Specialized Procedures: Bronchoscopy, EBUS, and Medical Thoracoscopy"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      }
   ],
   "urology-nephrology":[
      {
         "id": "dr-ravish-i-r",
         "urlId": "dr-ravish-i-r",
         "name":"DR RAVISH I R",
         "credentials":"MBBS, MS (General Surgery), MCH (Urology), Fellowship in Pediatric Urology",
         "description":"Dr Ravish I R is a distinguished Urologist with 28 years of experience, including 22 years as a specialist. His expertise spans Urology, Pediatric Urology, Laparoscopic Surgery, and Reconstructive Urology.​",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr Ravish IR.avif",
         "imageRight":false,
         "awards":[
            "Completed a fellowship in Pediatric Urology in Minnesota, USA",
            "38 international and national publications",
            "Numerous paper presentations at prestigious medical forums",
            "Evaluator for international journals, to mention a few:",
            "Performance of the Optimal dipstick in the diagnosis of malaria infection in pregnancy",
            "Evaluation of continuous Oral Contraceptives",
            "Nutritional Issues in Older Adults with Wounds in a Clinical setting",
            "Results of surgical repair of delayed presentations of penile fractures as against the conservative management",
            "Efficacy of ESWL in Paediatric Stone Patients -- (University of Minnesota, USA)",
            "Flexible Ureteroscopy for post ESWL fragments"
         ],
         "areas_of_expertise":[
            "Urology",
            "Pediatric Urology",
            "Laparoscopic Surgery",
            "Reconstructive Urology"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      },
      {
         "id": "dr-hari-prasad",
         "urlId": "dr-hari-prasad",
         "name":"DR HARI PRASAD",
         "credentials":"MBBS, MD (General Medicine), DM (Nephrology)",
         "description":"Dr Hari Prasad is a dedicated Nephrologist with 15 years of overall medical experience, including 7 years as a specialist in kidney care. He holds an MBBS, MD in General Medicine, and DM in Nephrology. His expertise covers the management of chronic kidney disease (CKD) and acute kidney injury (AKI), hemodialysis and hemodiafiltration (HDF), kidney stone treatment, renal angioplasty and stenting, ureteroscopy (URS), along with comprehensive care in general nephrology and hypertension management.​",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr. Hari Prasad.jpeg",
         "imageRight":true,
         "awards":[
            "MD and DM from PGIMER, Chandigarh -- one of India's premier institutes",
            "Member of the Medical Council of India (MCI)",
            "Known for evidence-based treatment and excellence in managing complex renal conditions"
         ],
         "areas_of_expertise":[
            "Chronic Kidney Disease (CKD) Management",
            "Acute Kidney Injury (AKI) Treatment",
            "Hemodialysis & Hemodiafiltration (HDF)",
            "Kidney Stone Treatment",
            "Renal Angioplasty & Stenting",
            "Ureteroscopy (URS)",
            "General Nephrology & Hypertension Management"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      }
   ],
   "gastroenterology":[
      {
         "id": "dr-munireddy-m-v",
         "urlId": "dr-munireddy-m-v",
         "name":"DR MUNIREDDY M V",
         "credentials":"MBBS, MS (General Surgery), DNB (General Surgery), Fellowship in Gastroenterology",
         "description":"Dr. Munireddy MV is a trusted Surgical Gastroenterologist with 20 years of experience, including 9 years as a specialist. He is skilled in Gastrointestinal & HPB Oncosurgery, Laparoscopic Surgery, Endoscopy, and a range of abdominal procedures including hernia, gallbladder, and anorectal surgeries. He has completed advanced fellowships in Gastroenterology and Laparoscopic Surgery and has served as a consultant at leading hospitals in Bangalore. Known for his ethical, patient-first approach, Dr. Munireddy is also recognized for his expertise in painless endoscopic procedures.​",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr.%20Munireddy.M.V.jpeg",
         "imageRight":false,
         "awards":[
            "Consultant Surgical Gastroenterologist at leading hospitals in Bangalore",
            "Completed advanced fellowships in Gastroenterology and Laparoscopic Surgery from reputed institutions",
            "Recognized for ethical and patient-centric surgical practice",
            "Known for expertise in painless diagnostic and therapeutic endoscopic procedures"
         ],
         "areas_of_expertise":[
            "Gastrointestinal & HPB Oncosurgery",
            "Laparoscopic Surgery",
            "Upper GI Endoscopy & Colonoscopy",
            "Endoscopic Interventional Procedures",
            "Gallbladder & Appendix Surgery",
            "Hernia Surgery (Open & Laparoscopic)",
            "Piles and Anorectal Surgery"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      },
      {
         "id": "dr-neha-chauhan",
         "urlId": "dr-neha-chauhan",
         "name":"DR NEHA CHAUHAN",
         "credentials":"MBBS (Gold Medalist), MS (General Surgery), MCh (Plastic Surgery), Fellowship in Cosmetic Surgery (Ethicon, 2012), Fellowships in Lasers (2018) and Rhinoplasty (2020)",
         "description":"Dr Neha Chauhan is a distinguished Plastic and Cosmetic Surgeon with 19 years of overall medical experience, including 11 years as a specialist. A gold medalist in MBBS, she holds an MS in General Surgery and MCh in Plastic Surgery, along with fellowships in cosmetic surgery, lasers, and rhinoplasty. Her areas of expertise include aesthetic and cosmetic surgery, pediatric plastic surgery, post-breast cancer reconstruction, general plastic surgery, as well as microsurgery and burn care.",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr%20Neha%20Chouhan.jpeg",
         "imageRight":false,
         "awards":[
            "Gold Medalist -- MBBS, Aligarh Muslim University",
            "Best Student of the Year -- UP Chapter, Association of Surgeons of India (2007)",
            "Topper -- All India Entrance Exam, Guru Gobind Singh Indraprastha University (MCh Plastic Surgery)",
            "Ethicon Fellowship in Cosmetic Surgery (2012)",
            "Runner-Up -- National Level Plastic Surgery Quiz (2012)",
            "Over 25 publications in Peer-Reviewed Indexed Medical Journals",
            "Presented her research at multiple national conferences"
         ],
         "areas_of_expertise":[
            "Aesthetic / Cosmetic Surgery",
            "Pediatric Plastic Surgery",
            "Post-Breast Cancer Reconstruction",
            "General Plastic Surgery",
            "Microsurgery and Burns"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      }
   ],
   "ent":[
      {
         "id": "dr-prashanth-reddy",
         "urlId": "dr-prashanth-reddy",
         "name":"DR PRASHANTH REDDY",
         "credentials":"MBBS, MS - ENT, Fellowship in Rhinoplasty, MBA\nENT/ Otorhinolaryngologist",
         "description":"Dr. Prashanth Reddy is a distinguished ENT specialist with 18 years of experience. His expertise spans zero-scar nasal and throat surgeries, treatment of sinusitis, allergic rhinitis, snoring, sleep apnea, and ENT-related headaches. Internationally trained in Rhinoplasty, he is recognized for pioneering scar-free ENT procedures and advancing holistic surgical care in Otolaryngology.​",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr%20Prashanth%20Reddy.jpg",
         "imageRight":false,
         "awards":[
            "Recognized as a pioneer in nasal metabolic surgeries, revolutionizing ENT care",
            "Awarded for excellence in Endoscopic Sinus and Skull Base Surgery",
            "Honored for contributions to scar-free ENT surgical techniques",
            "Internationally recognized for advanced training in Rhinoplasty under Dr. Dong-Hak Jung, Seoul, South Korea",
            "Acknowledged as an inspirational mentor and thought leader in Otolaryngology",
            "Celebrated for innovative approaches to managing sinusitis, sleep apnea, and head and neck disorders",
            "Recipient of multiple accolades for advancing ENT care through holistic and cutting-edge techniques"
         ],
         "areas_of_expertise":[
            "Zero scar nose and throat surgery",
            "Surgical treatment for migraine-like headaches and nasal obstructions",
            "Sinusitis and sinus-related headaches",
            "Allergic rhinitis",
            "Snoring and sleep apnea",
            "Ear pain, deafness, and vertigo",
            "Throat disorders such as tonsillitis and pharyngitis",
            "Management of head & neck cancers",
            "Thyroid-related problems",
            "Pediatric snoring issues"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      }
   ],
   "neurology":[
      {
         "id": "dr-anirudh-kulkarni",
         "urlId": "dr-anirudh-kulkarni",
         "name":"DR ANIRUDH KULKARNI",
         "credentials":"MBBS, MD (Internal Medicine), DM (Neurology), Fellowship in Stroke and Neurointervention",
         "description":"Dr Anirudh Kulkarni is a skilled Neurologist with 17 years of overall experience, including 7 years as a specialist. He holds an MBBS, MD in Internal Medicine, DM in Neurology, and a Fellowship in Stroke and Neurointervention. His expertise lies in stroke management and rehabilitation, mechanical thrombectomy, carotid artery stenting, aneurysm coiling, AVM and dAVF embolization, spinal angiography, and other interventional and minimally invasive neurological procedures.​",
         "imageSrc":"https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/doctors/Dr%20Anirudh%20Kulkarni.jpeg",
         "imageRight":true,
         "awards":[
            "Member -- American Academy of Neurology",
            "Member -- Indian Academy of Neurology",
            "Member -- Indian Stroke Association",
            "Actively involved in research, publications, and medical education through national and international forums"
         ],
         "areas_of_expertise":[
            "Stroke Management & Rehabilitation",
            "Mechanical Thrombectomy",
            "Carotid Artery Stenting",
            "Aneurysm Coiling",
            "AVM Embolization",
            "dAVF Embolization & Spinal Angiography",
            "Interventional & Minimally Invasive Neurology"
         ],
         "reviews":[{ patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: 'Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital\'s level of care.' }

            
         ]
      }
   ]
}; 
