import type { Doctor } from '../components/types';
// Specialties list
export const specialties = [
  {
    name: "Diabetology & Endocrinology",
    iconSrc: "https://website-va.s3.ap-south-1.amazonaws.com/Gynaecology+%26+Obstetrics-1.svg",
    highlighted: false,
    sectionId: "diabetology-endocrinology",
  },
  { name: "Dermatology", iconSrc: "https://website-va.s3.ap-south-1.amazonaws.com/Dermatology.svg", highlighted: false, sectionId: "dermatology" },
  {
    name: "General Surgery",
    iconSrc: "https://website-va.s3.ap-south-1.amazonaws.com/General+Surgery.svg",
    highlighted: false,
    sectionId: "general-surgery",
  },
  {
    name: "Gynaecology & Obstetrics",
    iconSrc: "https://website-va.s3.ap-south-1.amazonaws.com/Gynaecology+%26+Obstetrics.svg",
    highlighted: false,
    sectionId: "gynaecology-obstetrics",
  },
  {
    name: "Internal Medicine",
    iconSrc: "https://website-va.s3.ap-south-1.amazonaws.com/Urology-Nephrology.svg",
    highlighted: false,
    sectionId: "internal-medicine",
  },
  { name: "Oncology", iconSrc: "https://website-va.s3.ap-south-1.amazonaws.com/Oncology.svg", highlighted: false, sectionId: "oncology" },
  { name: "Orthopaedics", iconSrc: "https://website-va.s3.ap-south-1.amazonaws.com/Orthopaedics.svg", highlighted: false, sectionId: "orthopaedics" },
  {
    name: "Paediatrics & Neonatology",
    iconSrc: "https://website-va.s3.ap-south-1.amazonaws.com/Paediatrics+%26+Neonatology.svg",
    highlighted: false,
    sectionId: "paediatrics-neonatology",
  },
  { name: "Pulmonology", iconSrc: "https://website-va.s3.ap-south-1.amazonaws.com/Pulmonology.svg", highlighted: false, sectionId: "pulmonology" },
  {
    name: "Urology-Nephrology",
    iconSrc: "https://website-va.s3.ap-south-1.amazonaws.com/Urology-Nephrology-1.svg",
    highlighted: false,
    sectionId: "urology-nephrology",
  },
  {
    name: "Cardiology",
    iconSrc: "/Cardiology.svg",
    highlighted: false,
    sectionId: "cardiology",
  },
  {
    name: "Gastroenterology",
    iconSrc: "/Gastroenterology.svg",
    highlighted: false,
    sectionId: "gastroenterology",
  },
  {
    name: "Neurology",
    iconSrc: "/Neurology.svg",
    highlighted: false,
    sectionId: "neurology",
  },
  {
    name: "Neurosurgery",
    iconSrc: "/Neurosurgery.svg",
    highlighted: false,
    sectionId: "neurosurgery",
  },
  {
    name: "ENT",
    iconSrc: "/ENT.svg",
    highlighted: false,
    sectionId: "ent",
  },
  {
    name: "Plastic Surgery",
    iconSrc: "/Plastic-Surgery.svg",
    highlighted: false,
    sectionId: "plastic-surgery",
  },
  {
    name: "Radiology",
    iconSrc: "/Radiology.svg",
    highlighted: false,
    sectionId: "radiology",
  },
  {
    name: "Psychology",
    iconSrc: "/Psychology.svg",
    highlighted: false,
    sectionId: "psychology",
  },
  {
    name: "Dental",
    iconSrc: "/Dental.svg",
    highlighted: false,
    sectionId: "dental",
  },
];

const defaultReviews = [
  { patient_name: 'Amit P.', description: 'Going through treatment at Vikram Aura was easier because of the supportive doctors and well-managed care. Everything was well-coordinated.' },
  { patient_name: 'Smriti Gupta', description: 'The staff is kind, the hospital is clean, and everything runs efficiently. I felt well cared for at every step.' },
  { patient_name: 'Rami Reddy', description: 'I am diabetic patient since 5 years. I met the doctor for treatment and she advised me with diet plans and good treatment. Thank u doctor and hospital staff!' },
  { patient_name: 'Samyukta G', description: 'Excellent hospital with caring doctors. The doctor answered all our questions patiently.' },
  { patient_name: 'Deepak N', description: "Doctor explained the treatment options clearly and suggested the best one for me. Happy with the hospital's level of care." },
];

// Doctors data for each section
export const doctorsBySpecialty = {
  "diabetology-endocrinology": [
    {
      "id": "dr-k-v-harish",
      "name": "DR K V HARISH",
      "credentials": "MD, DM, MRCP (SCE – Gastroenterology & Hepatology)",
      "description": "Dr K V Harish is a highly experienced Internal Medicine specialist with over 29 years of clinical expertise, including 22 years as a specialist. He holds an MBBS, MD in Internal Medicine, and is a Fellow of the Cardiological Society of India (FCSI). His key areas of focus include preventive medicine, diabetes and endocrinology, hypertension, cardiac care, lifestyle disorders, and general internal medicine.",
      "imageSrc": "https://website-va.s3.ap-south-1.amazonaws.com/doctors/doctors/Dr K V Harish.jpeg",
      "imageRight": true,
      "awards": [
        "Conducted numerous CME programs",
        "Participated in state and national medical conferences, as well as international seminars",
        "Presented papers and written research articles including international journal publications",
        "Dissertation on \"Relevance of Upper GI Endoscopy in Patients with Diabetes Mellitus\" accepted by Rajiv Gandhi University of Health Sciences",
        "Worked in key academic roles -- Registrar, Assistant Professor, Associate Professor, and Professor -- in top medical colleges across Karnataka",
        "Conducted workshops and clinical teaching sessions for both undergraduate and postgraduate students",
        "Organized webinars for corporate companies and healthcare awareness camps for social causes",
        "Served on advisory boards for pharmaceutical companies and contributed to clinical strategy and healthcare innovation"
      ],
      "areas_of_expertise": [
        "Preventive Medicine",
        "Diabetes & Endocrinology",
        "Hypertension & Cardiac Care",
        "Lifestyle Disorders",
        "General Internal Medicine"
      ],
      "reviews": defaultReviews
    }
  ],

  "dermatology": [
    {
      "id": "dr-rohini-krishnamoorthy",
      "name": "DR ROHINI KRISHNAMOORTHY",
      "credentials": "MBBS, MD (Dermatology)",
      "description": "Dr Rohini Krishnamoorthy is a senior dermatologist with over 40 years of medical experience, including 33 years as a specialist in dermatology. She holds an MBBS and MD in Dermatology, with expertise spanning clinical and aesthetic dermatology, skin allergies, autoimmune skin disorders, acne, pigmentation, hair loss treatments, and advanced anti-aging and skin rejuvenation procedures.",
      "imageSrc": "https://website-va.s3.ap-south-1.amazonaws.com/doctors/doctors/Dr. Rohini Krishnamoorthy.jpeg",
      "imageRight": false,
      "titleWithDoctor": true,
      "awards": [
        "Widely respected for her clinical acumen and ethical dermatological practice",
        "Trusted by generations of patients for skin health and cosmetic care"
      ],
      "areas_of_expertise": [
        "Clinical Dermatology",
        "Aesthetic Dermatology",
        "Skin Allergy & Autoimmune Skin Disorders",
        "Acne, Pigmentation & Hair Loss Treatments",
        "Anti-Aging and Skin Rejuvenation Procedures"
      ],
      "reviews": defaultReviews
    }
  ],

  "general-surgery": [
    {
      "id": "dr-prakash-babu",
      "name": "DR PRAKASH BABU",
      "credentials": "MBBS, MS - General Surgery and Laparoscopic Surgeon",
      "description": "Dr Prakash Babu is a highly experienced surgeon with 29 years of medical expertise, including 23 years as a specialist. He specializes in thyroid, abdominal, colorectal, and complex gastrointestinal surgeries, along with laparoscopic hepatobiliary procedures for high-risk patients. He is also skilled in advanced laser treatments for hemorrhoids, fistula, and sinus conditions.",
      "imageSrc": "https://website-va.s3.ap-south-1.amazonaws.com/doctors/doctors/Dr Prakash Babu.jpg",
      "imageRight": true,
      "titleWithDoctor": true,
      "awards": [
        "Training in Laparoscopy - Bangalore Endoscopic Surgery Training Institute & Research Centre, 2003",
        "Training Programme on Laparoscopic Solid Organ Surgery - Ethicon Institute Of Surgical Education 2009"
      ],
      "areas_of_expertise": [
        "Thyroid and abdominal surgeries",
        "Colorectal and Anorectal surgeries",
        "Complex Gastrointestinal /Abdominal surgery",
        "Open and Laparoscopy Hepatobiliary surgeries in high-risk patients",
        "Laser procedures for: Haemorrhoids, Fistula, Sinus"
      ],
      "reviews": defaultReviews
    },
    {
      "id": "dr-moksha-gowda",
      "name": "DR MOKSHA GOWDA",
      "credentials": "MBBS, DNB (General Surgery)",
      "description": "Dr Moksha Gowda is a skilled General Surgeon with over 19 years of experience in performing laparoscopic, minimally invasive, and complex surgical procedures. She specializes in gastrointestinal & hepatobiliary surgeries, hernia & abdominal wall surgeries, surgical oncology, trauma, and emergency surgeries. With expertise in high-risk cases and post-surgical pain management, Dr Moksha ensures precise, patient-focused surgical care.",
      "imageSrc": "https://website-va.s3.ap-south-1.amazonaws.com/doctors/doctors/Dr Moksha Gowda.jpeg",
      "imageRight": false,
      "awards": [
        "Mahadevan Award (2014) -- 2nd Prize for Best Paper at KSC ASICON, Manipal",
        "Millennium Gold Medal Award (2016) -- CSEP, Bangalore",
        "Published Work -- Laparoscopic Subtotal Cholecystectomy: An Alternative Approach in Difficult Gall Bladder (Journal of Gastroenterology and Hepatology, 2017)",
        "Extensive Paper & Poster Presentations at major national & state-level surgical conferences, including ASICON, KSC ASICON, and Bangalore Surgical Society",
        "Sub-Investigator in Multiple Clinical Research Studies, including trials on COVID-19 treatment, Hepatitis management, and Non-Alcoholic Fatty Liver Disease",
        "Speaker at National & International Conferences on advancements in laparoscopic and gastrointestinal surgeries"
      ],
      "areas_of_expertise": [
        "Laparoscopic & Minimally Invasive Surgeries",
        "Gastrointestinal & Hepatobiliary Surgeries",
        "Hernia & Abdominal Wall Surgeries",
        "Surgical Oncology",
        "High-Risk & Complex Surgical Procedures",
        "Trauma & Emergency Surgeries",
        "Post-Surgical Pain Management"
      ],
      "reviews": defaultReviews
    },
    {
      "id": "dr-gh-raju",
      "name": "DR G H RAJU",
      "credentials": "MS – General Surgery, FMAS, FIAGES, FALS (Robotics)",
      "description": "Dr G H Raju is a highly experienced General and Laparoscopic Surgeon with 27 years of medical expertise. He specializes in general surgery, laparoscopic surgery, and bariatric surgery, bringing advanced minimally invasive techniques and robotic surgery skills to complex cases.",
      "imageSrc": "https://drive.google.com/thumbnail?id=1R8Z7QZwh7gIWWClz1_PGNv4PMFxKnIQZ&sz=w1000",
      "imageRight": true,
      "awards": [],
      "areas_of_expertise": [
        "General Surgery",
        "Laparoscopic Surgery",
        "Bariatric Surgery"
      ],
      "reviews": defaultReviews
    },
    {
      "id": "dr-vijay-wadhwa",
      "name": "DR VIJAY WADHWA",
      "credentials": "MBBS, MS – General Surgery",
      "description": "Dr Vijay Wadhwa is a highly experienced General and Laparoscopic Surgeon with 46 years of medical expertise. He brings decades of surgical knowledge to a wide range of general and laparoscopic surgical procedures.",
      "imageSrc": "https://drive.google.com/thumbnail?id=1OHcpdswBlHMUTsm0ANHSpphGKzo1Y0nT&sz=w1000",
      "imageRight": false,
      "awards": [],
      "areas_of_expertise": [
        "General Surgery",
        "Laparoscopic Surgery"
      ],
      "reviews": defaultReviews
    }
  ],

  "gynaecology-obstetrics": [
    {
      "id": "dr-sunita-dsouza-lobo",
      "name": "DR SUNITA DSOUZA LOBO",
      "credentials": "MBBS, DGO - Gynecologist, Obstetrician, Laparoscopic Surgeon (Obs & Gyn)",
      "description": "Dr Sunita is a highly experienced OB-GYN specialist with 33 years of medical expertise, including 29 years as a specialist. She specializes in prenatal care, pregnancy management, and the treatment of reproductive disorders, along with preventive care, Pap test screenings, and STD detection, ensuring comprehensive women's health care.",
      "imageSrc": "https://website-va.s3.ap-south-1.amazonaws.com/doctors/doctors/DrSunita-Dsouza-Lobo.jpg",
      "imageRight": true,
      "awards": [],
      "areas_of_expertise": [
        "Prenatal care",
        "Pregnancy management",
        "Treatment of women's reproductive disorders",
        "Preventive care",
        "Pap test screening",
        "Detection of sexually transmitted diseases"
      ],
      "reviews": defaultReviews
    },
    {
      "id": "dr-mohini-s-jadwani",
      "name": "DR MOHINI S JADWANI",
      "credentials": "MBBS, DNB – Obstetrics & Gynecology",
      "description": "Dr Mohini S Jadwani is a highly experienced Gynecologist, Obstetrician, and Laparoscopic Surgeon with 40 years of medical expertise. She provides comprehensive women's healthcare across obstetrics, gynecology, and minimally invasive surgical procedures.",
      "imageSrc": "https://drive.google.com/thumbnail?id=16a9C-229tKwiPSNXDbSrQqTJjQ6voOxA&sz=w1000",
      "imageRight": true,
      "awards": [],
      "areas_of_expertise": [
        "Obstetrics & Gynecology",
        "Laparoscopic Surgery",
        "Women's Reproductive Health"
      ],
      "reviews": defaultReviews
    },
    {
      "id": "dr-shobha-rani-rao",
      "name": "DR SHOBHA RANI RAO",
      "credentials": "MBBS, DGO, MD – Obstetrics & Gynecology",
      "description": "Dr Shobha Rani Rao is an exceptionally experienced Obstetrician, Gynecologist, and Laparoscopic Surgeon with 51 years of medical expertise. She brings unparalleled clinical experience to comprehensive women's healthcare.",
      "imageSrc": "https://drive.google.com/thumbnail?id=1BfdKa-HhAy7N9l33KRy2nV8wDLADCp8x&sz=w1000",
      "imageRight": false,
      "awards": [],
      "areas_of_expertise": [
        "Obstetrics & Gynecology",
        "Laparoscopic Surgery",
        "Women's Reproductive Health"
      ],
      "reviews": defaultReviews
    },
    {
      "id": "dr-prakruthi-s",
      "name": "DR PRAKRUTHI S",
      "credentials": "MBBS, MS, DNB (Obstetrics & Gynaecology), Dip. Urogynaecology, FMAS",
      "description": "Dr Prakruthi S is a specialist in advanced gynaecology, urogynaecology, and minimally invasive surgery with 6 years of experience. She focuses on hysteroscopic surgeries, pelvic floor rehabilitation, and preventive oncology, providing comprehensive and patient-centered women's healthcare.",
      "imageSrc": "https://drive.google.com/thumbnail?id=193N2B8hKOKBAlC1F7cWbcPadS3_A6XtC&sz=w1000",
      "imageRight": true,
      "awards": [],
      "areas_of_expertise": [
        "Advanced Gynaecology",
        "Urogynaecology",
        "Minimally Invasive Surgery",
        "Hysteroscopic Surgeries",
        "Pelvic Floor Rehabilitation",
        "Preventive Oncology"
      ],
      "reviews": defaultReviews
    }
  ],

  "internal-medicine": [
    {
      "id": "dr-bushra-bahjat",
      "name": "DR BUSHRA BAHJAT",
      "credentials": "MBBS, MD – General Medicine, PGME, PGDMH from Harvard Medical School, Boston USA",
      "description": "Dr Bushra Bahjat is a skilled Internal Medicine Consultant Physician with 11 years of medical experience. She holds advanced postgraduate training including a PGDMH from Harvard Medical School, Boston, bringing an evidence-based and patient-centric approach to the diagnosis and management of a wide range of medical conditions.",
      "imageSrc": "https://drive.google.com/thumbnail?id=1eVzY_AFUdNvqUbnikiEaPIpXxR8Kf7K2&sz=w1000",
      "imageRight": false,
      "awards": [
        "PGDMH from Harvard Medical School, Boston USA"
      ],
      "areas_of_expertise": [
        "Internal Medicine",
        "General Medicine",
        "Preventive & Lifestyle Medicine"
      ],
      "reviews": defaultReviews
    }
  ],

  "oncology": [
    {
      "id": "dr-sarat-chandra-pingali",
      "name": "DR SARAT CHANDRA PINGALI",
      "credentials": "MBBS, MS (General Surgery), MCH (Surgical Oncology)",
      "description": "Dr Sarat Chandra Pingali is a highly experienced Surgical Oncologist with 22 years of overall medical experience, including 12 years as a cancer surgery specialist. He holds an MBBS, MS in General Surgery, and MCh in Surgical Oncology. His areas of expertise include head and neck cancer surgery, gastrointestinal and colorectal oncology, breast and gynecologic cancers, urologic and thoracic oncology, as well as minimally invasive and advanced surgical oncology techniques.",
      "imageSrc": "https://website-va.s3.ap-south-1.amazonaws.com/doctors/doctors/Dr%20Sarath%20chandra.jpeg",
      "imageRight": false,
      "awards": [
        "Recognized for clinical excellence in managing complex cancer surgeries across specialties"
      ],
      "areas_of_expertise": [
        "Head & Neck Cancer Surgery",
        "Gastrointestinal and Colorectal Oncology",
        "Breast and Gynecologic Oncology",
        "Urologic and Thoracic Oncology",
        "Minimally Invasive and Advanced Surgical Oncology"
      ],
      "reviews": defaultReviews
    }
  ],

  "orthopaedics": [
    {
      "id": "dr-sai-krishna-b-naidu",
      "name": "DR SAI KRISHNA B NAIDU",
      "credentials": "MBBS, MRCS (UK), Dip SICOT, FRCS (UK), MCh – Orthopaedics",
      "description": "Dr Sai Krishna B Naidu is a renowned Orthopedic Surgeon with 26 years of experience, including 11 years as a specialist. Dr Sai Krishna specializes in Joint Replacement Surgery (Knee and Hip) and Sports Injuries.",
      "imageSrc": "https://website-va.s3.ap-south-1.amazonaws.com/doctors/doctors/Dr Sai Krishna B Naidu.jpg",
      "imageRight": true,
      "titleWithDoctor": true,
      "awards": [
        "Best Paper Award, Prosthetic Joint Infections: Single Stage vs Two Stage, Peterborough Hospital, Cambridge (2015)",
        "Best Paper Award, Robotic Knee Replacement: Future of Knee Replacement, London Knee Meeting (2013)",
        "Extensive research work with 14 original articles and 2 thesis projects",
        "Taught medical students at Oxford University Hospitals NHS Trust while working at Sir John Radcliffe Level 1 Trauma Centre, UK",
        "Arthroplasty Fellowship at SWELOC (South West London Elective Orthopaedic Centre), London",
        "Joint Replacement Fellowship at Hospital for Special Surgery, NY, USA (2015--2016)",
        "Trauma Fellow at Sir John Radcliffe Level 1 Trauma Centre, Oxford, UK",
        "Collaborated and trained with Dr. Michael Freeman, pioneer of Knee Joint Replacement Surgery"
      ],
      "areas_of_expertise": [
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
      "reviews": defaultReviews
    },
    {
      "id": "dr-ragha-midhun-ponnam",
      "name": "DR RAGHA MIDHUN PONNAM",
      "credentials": "MBBS, MS – Orthopaedics",
      "description": "Dr Ragha Midhun Ponnam is a specialist in Spine Surgery and Minimally Invasive Spine Surgery with 9 years of experience. He focuses on advanced spinal procedures using the latest minimally invasive techniques to ensure optimal patient outcomes.",
      "imageSrc": "https://drive.google.com/thumbnail?id=1jkeSoWzEYiHlCu49ZbXY2TCC_yQd9D9q&sz=w1000",
      "imageRight": false,
      "awards": [],
      "areas_of_expertise": [
        "Spine Surgery",
        "Minimally Invasive Spine Surgery"
      ],
      "reviews": defaultReviews
    },
    {
      "id": "dr-mithun-n-oswal",
      "name": "DR MITHUN N OSWAL",
      "credentials": "MBBS, MS – Orthopaedics",
      "description": "Dr Mithun N Oswal is a specialist in Joint Replacement, Arthroscopy, and Sports Injury with 10 years of experience. He provides comprehensive orthopaedic care with expertise in joint replacement surgery and sports medicine.",
      "imageSrc": "https://drive.google.com/thumbnail?id=1POWP9CHLl4UEvPH38bLqJSKZv4hHBCnl&sz=w1000",
      "imageRight": true,
      "awards": [],
      "areas_of_expertise": [
        "Joint Replacement",
        "Arthroscopy",
        "Sports Injury"
      ],
      "reviews": defaultReviews
    },
    {
      "id": "dr-abhijit-r",
      "name": "DR ABHIJIT R",
      "credentials": "MBBS, MS – Orthopaedics",
      "description": "Dr Abhijit R is an Orthopaedic and Joint Replacement specialist with 9 years of experience. He provides expert care in orthopaedic conditions and joint replacement surgeries.",
      "imageSrc": "https://drive.google.com/thumbnail?id=1YUR4ZRLK8L9ryC_Nvmjc1cR7oSy-ogVh&sz=w1000",
      "imageRight": false,
      "awards": [],
      "areas_of_expertise": [
        "Orthopaedics",
        "Joint Replacement"
      ],
      "reviews": defaultReviews
    }
  ],

  "paediatrics-neonatology": [
  ],

  "pulmonology": [
    {
      "id": "dr-padma-sundaram",
      "urlId": "dr-padma-sundaram",
      "name": "DR PADMA SUNDARAM",
      "credentials": "MBBS, MD (Tuberculosis & Respiratory Diseases/Medicine), DNB (Respiratory Medicine)",
      "description": "Dr Padma Sundaram is a highly skilled and experienced Respiratory Medicine Specialist with over 33 years of medical practice, including 30 years as a specialist in her field.",
      "imageSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/b10cb6b1f926aa7d8575031b8edfa0ed65dd15cf?placeholderIfAbsent=true&apiKey=003a4bc7d72843b88f405864f9e7fccf",
      "imageRight": true,
      "titleWithDoctor": true,
      "awards": [
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
      "areas_of_expertise": [
        "Airway Disorders (Asthma and COPD)",
        "Infectious Lung Diseases, including TB and Multidrug-Resistant TB",
        "Interstitial Lung Diseases (ILD) and Fibrotic Lung Conditions",
        "Occupational Lung Diseases",
        "Snoring and Sleep Disorders, including Obstructive Sleep Apnea",
        "Respiratory Failure Management with Ventilators and Noninvasive Ventilation",
        "Post-COVID Lung Rehabilitation",
        "Domiciliary Oxygen Therapy",
        "Specialized Procedures: Bronchoscopy, EBUS, and Medical Thoracoscopy",
        "Critical Care"
      ],
      "reviews": defaultReviews
    }
  ],

  "urology-nephrology": [
    {
      "id": "dr-ravish-i-r",
      "urlId": "dr-ravish-i-r",
      "name": "DR RAVISH I R",
      "credentials": "MBBS, MS (General Surgery), MCh – Urology, Fellowship in Pediatric Urology",
      "description": "Dr Ravish I R is a distinguished Urologist with 29 years of experience, including 22 years as a specialist. His expertise spans Urology, Pediatric Urology, Laparoscopic Surgery, and Reconstructive Urology.",
      "imageSrc": "https://website-va.s3.ap-south-1.amazonaws.com/doctors/doctors/Dr Ravish IR.avif",
      "imageRight": false,
      "awards": [
        "Completed a fellowship in Pediatric Urology in Minnesota, USA",
        "38 international and national publications",
        "Numerous paper presentations at prestigious medical forums"
      ],
      "areas_of_expertise": [
        "Urology",
        "Pediatric Urology",
        "Laparoscopic Surgery",
        "Reconstructive Urology"
      ],
      "reviews": defaultReviews
    },
    {
      "id": "dr-hari-prasad",
      "urlId": "dr-hari-prasad",
      "name": "DR HARI PRASAD",
      "credentials": "MBBS, MD – Medicine, DM – Nephrology",
      "description": "Dr Hari Prasad is a dedicated Nephrologist with 15 years of overall medical experience, including 7 years as a specialist in kidney care. His expertise covers the management of chronic kidney disease (CKD) and acute kidney injury (AKI), hemodialysis and hemodiafiltration (HDF), kidney stone treatment, renal angioplasty and stenting, ureteroscopy (URS), along with comprehensive care in general nephrology and hypertension management.",
      "imageSrc": "https://website-va.s3.ap-south-1.amazonaws.com/doctors/doctors/Dr. Hari Prasad.jpeg",
      "imageRight": true,
      "awards": [
        "MD and DM from PGIMER, Chandigarh -- one of India's premier institutes",
        "Member of the Medical Council of India (MCI)",
        "Known for evidence-based treatment and excellence in managing complex renal conditions"
      ],
      "areas_of_expertise": [
        "Chronic Kidney Disease (CKD) Management",
        "Acute Kidney Injury (AKI) Treatment",
        "Hemodialysis & Hemodiafiltration (HDF)",
        "Kidney Stone Treatment",
        "Renal Angioplasty & Stenting",
        "Ureteroscopy (URS)",
        "General Nephrology & Hypertension Management"
      ],
      "reviews": defaultReviews
    },
    {
      "id": "dr-vishruth-k",
      "urlId": "dr-vishruth-k",
      "name": "DR VISHRUTH K",
      "credentials": "MBBS, MS – General Surgery, MCh – Urology",
      "description": "Dr Vishruth K is a Urologist and Andrologist with 15 years of experience. He provides comprehensive urological care with a focus on urology and andrology.",
      "imageSrc": "https://drive.google.com/thumbnail?id=1rL3zkAQR8Qgub8voiJNmtn-03ikXrY1Z&sz=w1000",
      "imageRight": false,
      "awards": [],
      "areas_of_expertise": [
        "Urology",
        "Andrology"
      ],
      "reviews": defaultReviews
    }
  ],

  "gastroenterology": [
    {
      "id": "dr-chandrakant-k",
      "urlId": "dr-chandrakant-k",
      "name": "DR CHANDRAKANT K",
      "credentials": "MBBS, MD – General Medicine, DNB – Medical Gastroenterology",
      "description": "Dr Chandrakant K is a Medical Gastroenterologist specializing in Advanced Endoscopy with 15 years of experience. He provides expert care in medical gastroenterology and performs advanced endoscopic procedures for diagnosis and treatment of gastrointestinal conditions.",
      "imageSrc": "",
      "imageRight": false,
      "awards": [],
      "areas_of_expertise": [
        "Medical Gastroenterology",
        "Advanced Endoscopy"
      ],
      "reviews": defaultReviews
    },
    {
      "id": "dr-neha-chauhan",
      "urlId": "dr-neha-chauhan",
      "name": "DR NEHA CHAUHAN",
      "credentials": "MBBS (Gold Medalist), MS (General Surgery), MCh (Plastic Surgery), Fellowship in Cosmetic Surgery (Ethicon, 2012), Fellowships in Lasers (2018) and Rhinoplasty (2020)",
      "description": "Dr Neha Chauhan is a distinguished Plastic and Cosmetic Surgeon with 20 years of overall medical experience, including 11 years as a specialist. A gold medalist in MBBS, she holds an MS in General Surgery and MCh in Plastic Surgery, along with fellowships in cosmetic surgery, lasers, and rhinoplasty.",
      "imageSrc": "https://website-va.s3.ap-south-1.amazonaws.com/doctors/doctors/Dr%20Neha%20Chouhan.jpeg",
      "imageRight": true,
      "awards": [
        "Gold Medalist -- MBBS, Aligarh Muslim University",
        "Best Student of the Year -- UP Chapter, Association of Surgeons of India (2007)",
        "Topper -- All India Entrance Exam, Guru Gobind Singh Indraprastha University (MCh Plastic Surgery)",
        "Ethicon Fellowship in Cosmetic Surgery (2012)",
        "Runner-Up -- National Level Plastic Surgery Quiz (2012)",
        "Over 25 publications in Peer-Reviewed Indexed Medical Journals",
        "Presented her research at multiple national conferences"
      ],
      "areas_of_expertise": [
        "Aesthetic / Cosmetic Surgery",
        "Pediatric Plastic Surgery",
        "Post-Breast Cancer Reconstruction",
        "General Plastic Surgery",
        "Microsurgery and Burns"
      ],
      "reviews": defaultReviews
    }
  ],

  "plastic-surgery": [
    {
      "id": "dr-deevish-n-d",
      "urlId": "dr-deevish-n-d",
      "name": "DR DEEVISH N D",
      "credentials": "MBBS, MS – General Surgery, MCh – Plastic Surgery, DNB – Plastic Surgery",
      "description": "Dr Deevish N D is a Plastic, Cosmetic, and Reconstructive Surgeon with 16 years of experience. He specializes in plastic surgery, cosmetic surgery, burn care, diabetic foot management, and reconstructive procedures.",
      "imageSrc": "",
      "imageRight": false,
      "awards": [],
      "areas_of_expertise": [
        "Plastic Surgery",
        "Cosmetic Surgery",
        "Burn Care",
        "Diabetic Foot",
        "Reconstruction"
      ],
      "reviews": defaultReviews
    }
  ],

  "ent": [
    {
      "id": "dr-chaitra-shankar",
      "urlId": "dr-chaitra-shankar",
      "name": "DR CHAITRA SHANKAR",
      "credentials": "MBBS, DLO, DNB – Otorhinolaryngology",
      "description": "Dr Chaitra Shankar is an Ear, Nose, and Throat Surgeon and Allergy Specialist with 10 years of experience. She provides comprehensive ENT care with a focus on allergy management.",
      "imageSrc": "",
      "imageRight": true,
      "awards": [],
      "areas_of_expertise": [
        "Ear, Nose & Throat Surgery",
        "Allergy Specialist"
      ],
      "reviews": defaultReviews
    }
  ],

  "neurology": [
  ],

  "neurosurgery": [
    {
      "id": "dr-sundeep-v-k",
      "urlId": "dr-sundeep-v-k",
      "name": "DR SUNDEEP V K",
      "credentials": "MBBS, MS – General Surgery, MCh – Neurosurgery",
      "description": "Dr Sundeep V K is a Neurosurgeon specializing in Neurosurgery, Neurointerventional Surgery, and Spine Surgery with 13 years of experience. He provides advanced neurosurgical care using the latest techniques.",
      "imageSrc": "",
      "imageRight": true,
      "awards": [],
      "areas_of_expertise": [
        "Neurosurgery",
        "Neurointerventional Surgery",
        "Spine Surgery (Neuro)"
      ],
      "reviews": defaultReviews
    },
    {
      "id": "dr-tejesh-shavi",
      "urlId": "dr-tejesh-shavi",
      "name": "DR TEJESH SHAVI",
      "credentials": "MBBS, DrNB – Neurosurgery, FINR (SNVI)",
      "description": "Dr Tejesh Shavi is an Interventional Neurosurgeon with 8 years of experience. He specializes in advanced interventional neurosurgical procedures.",
      "imageSrc": "",
      "imageRight": false,
      "awards": [],
      "areas_of_expertise": [
        "Interventional Neurosurgery"
      ],
      "reviews": defaultReviews
    }
  ],

  "radiology": [
  ],

  "cardiology": [
    {
      "id": "dr-mohan-murali-j",
      "urlId": "dr-mohan-murali-j",
      "name": "DR MOHAN MURALI J",
      "credentials": "MBBS, DNB, Interventional and Medical Cardiologist",
      "description": "Dr Mohan Murali J is a Cardiologist with 15 years of experience specializing in interventional and medical cardiology. He provides comprehensive cardiac care including advanced interventional procedures.",
      "imageSrc": "",
      "imageRight": false,
      "awards": [],
      "areas_of_expertise": [
        "Cardiology",
        "Interventional Cardiology"
      ],
      "reviews": defaultReviews
    },
    {
      "id": "dr-abhijit-vilas-kulkarni",
      "urlId": "dr-abhijit-vilas-kulkarni",
      "name": "DR ABHIJIT VILAS KULKARNI",
      "credentials": "MBBS, MD – General Medicine, DM – Cardiology",
      "description": "Dr Abhijit Vilas Kulkarni is an Interventional Cardiologist with 23 years of experience. He specializes in cardiology and interventional cardiology, providing advanced cardiac care.",
      "imageSrc": "",
      "imageRight": true,
      "awards": [],
      "areas_of_expertise": [
        "Cardiology",
        "Interventional Cardiology"
      ],
      "reviews": defaultReviews
    }
  ],

  "psychology": [
    {
      "id": "dr-anjana-kothamachu",
      "urlId": "dr-anjana-kothamachu",
      "name": "DR ANJANA KOTHAMACHU",
      "credentials": "MSc – Counselling Psychology",
      "description": "Dr Anjana Kothamachu is a Counselling Psychologist specializing in Expressive Arts Therapy and Psychodrama. She provides compassionate psychological support and therapy using creative and experiential approaches.",
      "imageSrc": "",
      "imageRight": false,
      "awards": [],
      "areas_of_expertise": [
        "Counselling Psychology",
        "Expressive Arts Therapy",
        "Psychodrama"
      ],
      "reviews": defaultReviews
    }
  ],

  "dental": [
    {
      "id": "dr-arun-muralidharan",
      "urlId": "dr-arun-muralidharan",
      "name": "DR ARUN MURALIDHARAN",
      "credentials": "BDS, Rajiv Gandhi University of Health Sciences, Bangalore",
      "description": "Dr Arun Muralidharan is a Dental Surgeon with 16 years of experience, providing comprehensive dental care to patients.",
      "imageSrc": "",
      "imageRight": true,
      "awards": [],
      "areas_of_expertise": [
        "Dental Sciences"
      ],
      "reviews": defaultReviews
    }
  ]
};

