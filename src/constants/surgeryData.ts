export const getDetails = (procedure: string | number | undefined) => {
  if (!procedure) {
    return {
      surgery: '',
      questionsList: [] as any[],
      data: [] as any[],
    };
  }

  const key = String(procedure) as keyof typeof details;
  if (details[key]) {
    return details[key] as any;
  }

  return {
    surgery: '',
    questionsList: [] as any[],
    data: [] as any[],
  };
};

export const selectSurgeryDetails = (id: string | number) => {
  const d = getDetails(id);
  return { ...d, requestForm: false };
};

export const details = {
  '9': {
    surgery: 'Ureter Stone',
    questionsList: [
      {
        question: 'What are Ureter Stones?',
        id: 'what-are-ureter-stones',
      },
      {
        question: 'What causes Ureter stones?',
        id: 'what-causes-ureter-stones',
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms',
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-see-doctor',
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
      },
      {
        question: 'Treatment for Ureter Stones',
        id: 'treatment-for-ureter-stones',
        children: [
          {
            question: 'Extracorporeal Shock Wave Lithotripsy (ESWL)',
            id: 'procedure-extracorporeal-shock-wave-lithotripsy',
          },
          {
            question: 'RIRS',
            id: 'procedure-RIRS',
          },
          {
            question: 'Percutaneous Nephrolithotomy',
            id: 'procedure-percutaneous-nephrolithotomy',
          },
        ],
      },
    ],
    data: [
      {
        question: 'What are Ureter Stones?',
        id: 'what-are-ureter-stones',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Ureter stones are small stones that form in the kidney and pass into the ureter. These stones are formed from the crystallization of minerals from stagnated urine.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_9_m.jpg',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_9_d.jpg',
              },
              alt: 'What are Ureter Stones',
            },
          },
        ],
      },
      {
        question: 'What causes Ureter stones?',
        id: 'what-causes-ureter-stones',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'There is a delicate balance maintained in the urine in our body. When this balance of minerals is disturbed, ureter stones are formed. Some of the reasons for the imbalance are:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Lack of enough fluid in the body',
                'Hormonal imbalance',
                'Intake of a diet which is high in oxalate, sodium and protein',
                'Family history',
              ],
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'When the stone is stationary in the kidney, it does not cause any pain. But, when it moves from the kidney into the ureter, it causes symptoms like:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Extreme pain in the back and sides',
                'Pain while passing urine',
                'Nausea and vomiting',
                'Red or brown urine',
              ],
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-see-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'You should see a doctor if you have unbearable pain which makes you vomit. This is because the pain will not subside till your doctor treats you for the ureter stone.',
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The doctor can diagnose ureter stones by a physical examination to understand where the pain is originating from. In addition to the physical exam, the doctor might advise:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Blood and urine tests',
                'Imaging tests like CT scan or X ray',
              ],
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'description',
            data: {
              value:
                "It's best to avoid food which are rich in minerals which form ureter stones. Some of the diet recommendations are:",
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'High intake of water and fluids',
                'Avoiding salty, high protein and fatty food',
                'Having citrus fruits like lemon, oranges, sweet lime is helpful',
              ],
            },
          },
        ],
      },
      {
        question: 'Treatment for Ureter Stones:',
        id: 'treatment-for-ureter-stones',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'There are several treatments available for removing ureter stones. The doctor will recommend the treatment based on the size of the stones.',
            },
          },
          {
            component: 'table',
            data: {
              heading: 'Types of treatments:',
              data: {
                headings: [
                  'Specifics',
                  'Extracorporeal Shock Wave Lithotripsy (ESWL)',
                  'RIRS',
                  'PCNL',
                ],
                data: [
                  ['Cuts and Wounds', 'No', 'No', 'Yes'],
                  ['Pain', 'Mild pain', 'Mild pain', 'Yes'],
                  [
                    'Used for treatment of',
                    'Small sized stones',
                    'Small sized stones',
                    'Large/irregular shaped stones',
                  ],
                  [
                    'Time taken for procedure',
                    '1 hour',
                    '1-3 hours',
                    '20-45 minutes',
                  ],
                  [
                    'Hospital Stay',
                    'Outpatient procedure',
                    'Outpatient procedure/1 day',
                    '2-3 days',
                  ],
                  ['Dietary Restriction', 'No', 'No', 'Yes'],
                  ['Recovery Time', '24 hours', '24 hours', '2-3 Weeks'],
                  ['Invasive', 'No', 'No', 'Yes'],
                ],
              },
            },
          },
        ],
      },
      {
        question: 'Extracorporeal Shock Wave Lithotripsy (ESWL)',
        id: 'procedure-extracorporeal-shock-wave-lithotripsy',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This procedure is used for treating small kidney or ureter stones.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given a sedative or local anaesthesia',
                'High energy sound waves are sent near the location of the stones',
                'This causes the stones to break into small pieces',
                'The stone pieces pass out of the system through urine within a few days after the procedure',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Outpatient procedure with mild pain',
                'Resume to normal routine from next day',
                'Intake of 3 litres of water everyday',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are very less complications through this treatment. Some of the risks may be:',
              points: [
                'Mild pain when the stones pass through urine',
                'Urinary tract infection',
                'Bleeding in the urinary system',
                'Inability to pass urine',
              ],
            },
          },
        ],
      },
      {
        question: 'RIRS',
        id: 'procedure-RIRS',
        answers: [
          {
            component: 'description',
            data: {
              value: 'This procedure is done to treat smaller sized stones.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'A small telescope called ureteroscope is inserted through the urethra and moved near to the stone',
                'If the stone is small, it is directly removed',
                'If the stone is slightly bigger, it is broken into smaller pieces and the pieces are then, removed',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Outpatient procedure or 1-day discharge with mild pain',
                'Resume normal day routine from the next day',
                'Intake of 3 litres of water everyday',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description: 'Some of the risks of the procedure may be:',
              points: ['Bleeding', 'Infection', 'Injury to ureter'],
            },
          },
        ],
      },
      {
        question: 'Percutaneous Nephrolithotomy',
        id: 'procedure-percutaneous-nephrolithotomy',
        answers: [
          {
            component: 'description',
            data: {
              value:
                "This procedure is used for large stones that are more than 2 cm in size. It's also used when the ureter stones have an irregular shape.",
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'An incision is made in the back to reach into the kidney',
                'The stone is removed directly from the incision',
                'If the stone is too big to be removed, it is broken into smaller pieces and then, the pieces are removed',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '2- 3 days hospital stay',
                'Wound takes 1-3 weeks to heal',
                'Fibre rich food is advised',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description: 'Some of the risks of the procedure may be:',
              points: ['Infection', 'Bleeding', 'Reduced kidney function'],
            },
          },
        ],
      },
    ],
  },
  '11': {
    surgery: 'Coronary Angiography',
    questionsList: [
      { question: 'What is an Angiography?', id: 'what-is-an-angiography' },
      {
        question: 'What causes a blockage in an artery?',
        id: 'what-causes-a-blockage-in-an-artery',
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms--when-to-call-your-doctor',
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
      },
      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },
      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },
      {
        question: 'Angiography',
        id: 'angiography',
        children: [
          { question: 'Flow of the procedure:', id: 'flow-of-the-procedure:' },
          {
            question: 'Recovery Time and Dietary Advice:',
            id: 'recovery-time-and-dietary-advice:',
          },
          {
            question: 'Risks involved in the treatment:',
            id: 'risks-involved-in-the-treatment:',
          },
        ],
      },
    ],
    data: [
      {
        question: 'What is an Angiography?',
        id: 'what-is-an-angiography',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'An angiography is an imaging test to take a look at a patients’ blood vessels. It is used to find out if there are any blocked arteries. ',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_1_d.jpg',
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_1_m.jpg',
              },
              alt: 'What is an Angiography',
            },
          },
        ],
      },
      {
        question: 'What causes a blockage in an artery?',
        id: 'what-causes-a-blockage-in-an-artery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Arteries carry blood from the heart to other parts of the body. Over time, they accumulate plaque which is made of fat deposits, calcium, cholesterol and other wastes. ',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'Having high blood pressure, eating foods high in cholesterol, diabetes and smoking increase the chances of accumulation of plaque in the arteries. ',
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms--when-to-call-your-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'As plaque slowly builds up in an artery, there are no signs of it. But, when the artery gets blocked, people experience:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Shortness of breath',
                'Chest pain',
                'Tightness in the chest',
                'Heart attack',
              ],
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'You should see a doctor immediately if you feel you are having a heart attack in which you experience chest pain which radiates to the arm and back. ',
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The doctor can diagnose clogged arteries using an angiography or other tests like:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Echocardiogram',
                'Chest X ray',
                'CT scan',
                'MRI',
                'Cholesterol screening',
              ],
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'After an angiogram, you should have a diet consisting of:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                '2-3 litres of water and fluids',
                'Simple, nutritious, bland food',
                'Healthy fats like nuts, seeds, avocado',
                'Whole grains, meat, fish ',
                'Avoid sugary foods and limit your salt intake',
              ],
            },
          },
        ],
      },
      {
        question: 'Angiography',
        id: 'angiography',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This procedure is used to find blocked arteries in a patient’s heart. ',
            },
          },
        ],
      },
      {
        question: 'Flow of the procedure:',
        id: 'flow-of-the-procedure:',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'The patient is made to lie on the back',
                'A sedative is given to the patient to make him/her relax',
                'A BP monitor is attached to keep track of the heart rate throughout the procedure',
                'A catheter is inserted in the groin or arm area',
                'Dye is injected through the catheter and as it moves through the body, the doctor can see the veins and arteries clearly and detects any blocked arteries',
              ],
            },
          },
        ],
      },
      {
        question: 'Recovery Time and Dietary Advice:',
        id: 'recovery-time-and-dietary-advice:',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                '1-day discharge with mild pain',
                'Resume normal routine from next day',
                'Drink plenty of water to remove the dye from your system',
              ],
            },
          },
        ],
      },
      {
        question: 'Risks involved in the treatment:',
        id: 'risks-involved-in-the-treatment:',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'There are very less complications through this treatment. Some of the risks may be:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Soreness',
                'Bruising',
                'Bleeding at the cut where the catheter was inserted',
              ],
            },
          },
        ],
      },
    ],
  },
  12: {
    surgery: 'Angioplasty',
    questionsList: [
      { question: 'What is Angioplasty?', id: 'what-is-angioplasty' },
      {
        question: 'What causes a blockage in an artery?',
        id: 'what-causes-a-blockage-in-an-artery',
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms -when-to-call-your-doctor',
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
      },
      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },
      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },
      {
        question: 'Treatment for a blocked artery:',
        id: 'treatment-for-a-blocked-artery:',
      },
      {
        question: 'Angioplasty',
        id: 'angioplasty',
        children: [
          { question: 'Flow of the procedure:', id: 'flow-of-the-procedure:' },
          {
            question: 'Recovery Time and Dietary Advice:',
            id: 'recovery-time-and-dietary-advice:',
          },
          {
            question: 'Risks involved in the treatment:',
            id: 'risks-involved-in-the-treatment:',
          },
        ],
      },
      {
        question: 'Coronary Open-Heart Surgery',
        id: 'coronary-open-heart-surgery',
        children: [
          { question: 'Flow of the procedure:', id: 'flow-of-the-procedure:' },
          {
            question: 'Recovery Time and Dietary Advice:',
            id: 'recovery-time-and-dietary-advice:',
          },
          {
            question: 'Risks involved in the treatment:',
            id: 'risks-involved-in-the-treatment:',
          },
        ],
      },
    ],
    data: [
      {
        question: 'What is Angioplasty?',
        id: 'what-is-angioplasty',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The heart is the most important organ of our body which circulates blood throughout the body. When one of the arteries in the heart gets blocked, it is treated by a procedure called angioplasty.',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'In this procedure, a stent is placed in the artery to clear the blockage. This gets the blood flowing into the artery again.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_11_m.jpg',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_11_d.jpg',
              },
              alt: 'What is Angioplasty',
            },
          },
        ],
      },
      {
        question: 'What causes a blockage in an artery?',
        id: 'what-causes-a-blockage-in-an-artery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Arteries carry blood from the heart to other parts of the body. Over time, they accumulate plaque which is made of fat deposits, calcium, cholesterol and other wastes.',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'Having high blood pressure, eating foods high in cholesterol, diabetes and smoking increase the chances of accumulation of plaque in the arteries. ',
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms-when-to-call-your-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'As plaque slowly builds up in an artery, there are no signs of it. But, when the artery gets blocked, people experience:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Shortness of breath',
                'Chest pain',
                'Tightness in the chest',
                'Heart attack',
              ],
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'You should see a doctor immediately if you feel you are having a heart attack in which you experience chest pain which radiates to the arm and back.',
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The doctor can diagnose clogged arteries using any of these tests:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Echocardiogram',
                'Chest X ray',
                'CT scan',
                'MRI',
                'Angiogram',
                'Cholesterol screening',
              ],
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'After an angioplasty, you should maintain a diet consisting of:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                '2-3 litres of water and fluids',
                'Simple, nutritious, bland food',
                'Healthy fats like nuts, seeds, avocado',
                'Whole grains, meat, fish',
                'Avoid sugary foods and limit your salt intake',
              ],
            },
          },
        ],
      },
      {
        question: 'Treatment for a blocked artery:',
        id: 'treatment-for-a-blocked-artery:',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Based on the extent of blockage of the artery, the doctor will recommend:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Change in diet, exercise',
                'Stop smoking, drinking',
                'Medications like aspirin, beta blockers, medicines which decrease bad cholesterol in the blood',
              ],
            },
          },
          {
            component: 'table',
            data: {
              heading: 'Types of treatments:',
              data: {
                headings: [
                  'Specifics',
                  'Angioplasty',
                  'Coronary Artery Bypass Surgery',
                ],
                data: [
                  ['Cuts and Wounds', 'No', 'Yes'],
                  ['Pain', 'Mild pain', 'Medium to severe pain'],
                  [
                    'Used for treatment of',
                    'One blocked artery',
                    'Several blocked arteries',
                  ],
                  ['Time taken for procedure', '30 minutes', '3-6 hours'],
                  ['Hospital Stay', '1-2 days', '7-10 days'],
                  ['Dietary Restriction', 'No', 'No'],
                  ['Recovery Time', '4-6 days', '2-3 months'],
                ],
              },
            },
          },
        ],
      },
      {
        question: 'Angioplasty',
        id: 'angioplasty',
        answers: [
          {
            component: 'description',
            data: {
              value: 'This procedure is used to clear blockage of an artery.',
            },
          },

          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given some pain medication',
                'He/she is conscious during the entire procedure',
                'The doctor inserts a catheter into an artery',
                'Using an X ray, the doctor guides the catheter to the blocked artery',
                'There is a balloon at the end of the catheter which is inflated to clear the blockage',
                'A wire mesh called a stent is placed at the blockage site to keep the artery open',
                'The balloon catheter is deflated and removed',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1- day discharge with mild pain',
                'Resume normal routine after a few days',
                'Visit your doctor after a week for a check-up',
                'Avoid high cholesterol, sugary foods and limit intake of salt',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are very less complications through this treatment. Some of the risks may be:',
              points: [
                'Mild pain',
                'Bleeding, clotting, bruising where the catheter is inserted',
                'Infection',
                'Kidney damage',
                'Heart attack',
              ],
            },
          },
        ],
      },

      {
        question: 'Coronary Open-Heart Surgery',
        id: 'coronary-open-heart-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This procedure is done to treat blocked arteries, in case of multiple blockages where angioplasty is no longer viable.  ',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'An 8-10 inch cut is made in the chest to expose the heart',
                'The patient is connected to a heart lung bypass machine',
                'The doctor uses a part of a healthy vein or artery to create a new path around the blocked artery',
                'The cut is sutured and the patient is taken to the recovery area',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Hospital stay of 7-10 days with moderate to severe pain',
                'Resume normal day routine after 2-3 months',
                'Intake of 2- 3 litres of water, simple, bland and nutritious food',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description: 'Some of the risks of the procedure may be:',
              points: [
                'Heart attack, stroke',
                'Bleeding',
                'Lung or kidney failure',
                'Memory loss',
              ],
            },
          },
        ],
      },
    ],
  },
  '6': {
    surgery: 'Appendicitis',
    questionsList: [
      { question: 'What is Appendicitis?', id: 'what-is-appendicitis' },
      { question: 'What causes appendicitis?', id: 'what-causes-appendicitis' },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms -when-to-call-your-doctor',
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
      },
      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },
      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },
      {
        question: 'Treatment for Appendicitis',
        id: 'treatment-for-appendicitis',
      },
      {
        question: 'Laparoscopic Procedure',
        id: 'laparoscopic-procedure',
        children: [
          { question: 'Flow of the procedure:', id: 'flow-of-the-procedure:' },
          {
            question: 'Recovery Time and Dietary Advice:',
            id: 'recovery-time-and-dietary-advice:',
          },
          {
            question: 'Risks involved in the treatment:',
            id: 'risks-involved-in-the-treatment:',
          },
        ],
      },
      {
        question: 'Traditional Procedure',
        id: 'traditional-procedure',
        children: [
          { question: 'Flow of the procedure:', id: 'flow-of-the-procedure:' },
          {
            question: 'Recovery Time and Dietary Advice:',
            id: 'recovery-time-and-dietary-advice:',
          },
          {
            question: 'Risks involved in the treatment:',
            id: 'risks-involved-in-the-treatment:',
          },
        ],
      },
    ],

    data: [
      {
        question: 'What is Appendicitis?',
        id: 'what-is-appendicitis',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Appendicitis is a painful condition due to infection and swelling of the appendix. It starts as a mild pain near the navel and progresses towards lower abdomen causing severe pain. You’ll need immediate surgery if you have appendicitis as it can be life threatening if left untreated.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_10_m.jpg',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_10_d.jpg',
              },
              alt: 'What is Appendicitis',
            },
          },
        ],
      },
      {
        question: 'What causes appendicitis?',
        id: 'what-causes-appendicitis',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'There are several reasons for appendicitis. Some of them are:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Hard stools',
                'Tumours',
                'Worms in the intestine',
                'Blockage near the appendix',
              ],
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms -when-to-call-your-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value: 'Some of the symptoms you might experience are:',
            },
          },

          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Mild pain or cramping near the navel which moves down to the lower abdomen',
                'Nausea or vomiting',
                'Diarrhoea',
                'Constipation',
                'Low fever',
              ],
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Appendicitis requires emergency surgery. If left untreated, the appendix can burst and the infection can spread across the abdomen which can be fatal. ',
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Appendicitis can be diagnosed by a physical exam and blood test. ',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'The doctor might recommend some imaging reports like ultrasound, CT scan or abdominal X ray to confirm the diagnosis.',
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'After the surgery, you should eat foods that are easy on the digestive system. Having indigestion after the surgery is not good.',
            },
          },
          {
            component: 'description',
            data: {
              value: 'Some of the foods that you can include in the diet are:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Soups and juices',
                'High fibre food',
                'Fruits and vegetables',
                'Avoid fatty, sugary food',
              ],
            },
          },
        ],
      },
      {
        question: 'Treatment for Appendicitis',
        id: 'treatment-for-appendicitis',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Based on the swelling and infection in the appendix, the doctor will recommend the treatment. If the situation is not critical, the doctor will give you antibiotics and keep you on a liquid diet.However, if the situation is critical, immediate surgery is required.',
            },
          },
          {
            component: 'table',
            data: {
              heading: 'Types of surgeries:',
              data: {
                headings: [
                  'Specifics',
                  'Laparoscopic Surgery',
                  'Appendectomy (Open Surgery)',
                ],
                data: [
                  ['Incision', 'No', '2-4 inch'],
                  ['Invasive', 'Low', 'High'],
                  ['Recovery', '2-3 days', '2-3 weeks'],
                  ['Blood loss', 'Less', 'High'],
                  ['Chance of Recurrence', 'Low', 'High'],
                  ['Scars', 'Non-noticeable', 'Noticeable'],
                ],
              },
            },
          },
        ],
      },
      {
        question: 'Laparoscopic Procedure',
        id: 'laparoscopic-procedure',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The laparoscopic surgery for appendicitis is performed through small incisions made in the abdomen.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'Three small incisions are made in the abdomen',
                'A tiny camera is inserted into the incision',
                'The camera footage is visible on a screen which guides the doctor to perform the surgery',
                'The appendix is removed through one of the incisions',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1 Day procedure with mild pain',
                'Resume normal routine from next day',
                'Simple, bland, nutritious, fibre rich food ',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are very less complications through this laser treatment. Some of the risks may be:',
              points: [
                'allergic or adverse reaction to anaesthesia or other drugs',
                'bleeding',
                'blood clots',
                'infection',
                'injury to adjacent organs like the small intestine, bladder or ureter',
              ],
            },
          },
        ],
      },
      {
        question: 'Traditional Procedure',
        id: 'traditional-procedure',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The traditional procedure involves a large cut made in the abdomen which is sutured after the procedure is complete. When the appendix has burst, this surgery is preferred as the entire abdominal cavity needs to be cleaned.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'A large cut is made in the abdomen',
                'The appendix is directly removed from the incision',
                'If the appendix has burst, the abdominal cavity is cleaned and then, the cut is sutured',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Hospital stay of 2-4 days or longer',
                'Resume normal day routine after 4-6 weeks',
                'Liquid diet for a couple of days after which solids can be introduced',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'The procedure involves a large cut. So, some of the risks may be:',
              points: [
                'Injury to surrounding organs',
                'Infection of the colon',
                'Excessive bleeding',
                'Infection of the surgical wound',
                'Blood clots related to the longer recovery period after open surgery',
                'Risks of general anaesthesia',
              ],
            },
          },
        ],
      },
    ],
  },
  '2': {
    surgery: 'Fistula (Anal Fistula Surgery)',
    questionsList: [
      { question: 'What is a Fistula?', id: 'what-is-a-fistula' },
      {
        question: 'What causes a fistula to form?',
        id: 'what-causes-a-fistula-to-form',
      },
      {
        question: 'Symptoms / when to call your doctor:',
        id: 'symptoms--when-to-call-your-doctor:',
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
      },
      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },
      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },
      { question: 'Treatment for a Fistula', id: 'treatment-for-a-fistula' },
      { question: 'Laser Procedure', id: 'laser-procedure' },
      { question: 'Traditional Procedure', id: 'traditional-procedure' },
    ],
    data: [
      {
        question: 'What is a Fistula?',
        id: 'what-is-a-fistula',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'A fistula is a small tunnel in the skin of the anal region. Whenever there is an infection inside the anus, a tunnel is formed to drain the pus which is the fistula.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_2_m.jpg',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_2_d.jpg',
              },
              alt: 'Fistula (Anal Fistula Surgery)',
            },
          },
        ],
      },
      {
        question: 'What causes a fistula to form?',
        id: 'what-causes-a-fistula-to-form',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'In majority of the cases, a fistula is formed when there is an infection in the anal region. Sometimes, it also forms because of sexually transmitted diseases, tuberculosis or any illness that affects the bowels. Some fistulas also form during childbirth.',
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor:',
        id: 'symptoms--when-to-call-your-doctor:',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: 'You must reach out to your doctor if you have:',
              description: '',
              points: [
                'Pain',
                'Swelling and bleeding',
                'Discharge of pus from the anal region',
              ],
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'A fistula is a common, simple problem to fix, but it does not go away by itself. You have to see a doctor to treat it. ',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: 'Ignoring the symptoms can lead to:',
              points: [
                'Acute pain',
                'Recurring infections',
                'Cancer',
                'Organ failure',
                'Nerve damage',
              ],
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Fistulas can be easily diagnosed by a physical examination. To understand if there are any other complications, the doctor might ask for an X-ray, CT scan or a colonoscopy report. ',
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'It is best to have simple, bland, low fat food like rice, toast, yoghurt etc after the surgery. Increasing the intake of fibre rich food and water is recommended.',
            },
          },
        ],
      },
      {
        question: 'Treatment for a Fistula',
        id: 'treatment-for-a-fistula',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'You need to see a doctor to treat a fistula. It does not heal by itself. A fistula cannot be treated by medication. If the fistula is small, the doctor can clean it up in the clinic with a local anaesthesia. But, if it’s large, you’ll need a surgery to resolve it.',
            },
          },
          {
            component: 'table',
            data: {
              heading: 'Types of treatments:',
              data: {
                headings: ['Specifics', 'Traditional Surgery', 'Laser Surgery'],
                data: [
                  ['Cuts and Wounds', 'Yes', 'No'],
                  ['Pain', 'Yes', 'No'],
                  ['Recurrence', 'No', 'No'],
                  [
                    'Dietary Restrictions',
                    'Yes',
                    'Small modifications in diet',
                  ],
                  ['Recovery Time', '2-4 days', '24 hours'],
                  ['Invasive', 'Yes', 'No'],
                  ['Blood Loss', 'Yes', 'No'],
                ],
              },
            },
          },
        ],
      },
      {
        question: 'Traditional Procedure',
        id: 'traditional-procedure',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'There are several procedures which involve cutting though the anal region to seal the fistula. ',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Some of the procedures are:',
              description: '',
              points: [
                'Fistulotomy: The entire length of the fistula is cut and opened so that it heals like a cut',
                'Seton Technique: A cut is made in the anal region and a surgical thread is placed in the fistula to help it to drain out slowly and heal on its own',
                'Flap Procedure: A cut is made in the fistula through which it is drained. A flap is used to cover the fistula to help it heal. The flap is made of tissue taken from a healthy part of the rectum. ',
                'LIFT procedure: The fistula is cut and sealed at both ends and the rest of it is kept open to heal',
              ],
            },
          },
          {
            component: 'description',
            data: {
              value:
                'All of these procedures require cutting and suturing which results in a longer and slower recovery.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Hospital stay of 2-4 days or longer',
                'Resume normal day routine after 4-6 weeks',
                'Liquid diet for a couple of days after which solids can be introduced',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'These procedures involve cutting through the anal region. So, some of the risks may be:',
              points: [
                'Injury to the anal area',
                'Excessive bleeding',
                'Infection of the surgical wound',
                'Faecal or urinary incontinence',
                'Blood clots ',
                'Risks of general anaesthesia',
              ],
            },
          },
        ],
      },
      {
        question: 'Laser Procedure',
        id: 'laser-procedure',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This procedure involves the use of laser technology. It’s a no cut, no wound procedure which is completed in 30 minutes.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'A small laser emitting device is inserted through the anus',
                'The stone is removed directly from the incision',
                'The energy from the laser is directed towards the fistula to seal it completely',
                'The laser device is removed',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1 Day procedure with mild pain',
                'Resume normal routine from next day',
                'Simple, bland, nutritious, fibre rich food ',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading:
                'There are very less complications through this laser treatment. Some of the risks may be:',
              description: 'Some of the risks of the procedure may be:',
              points: [
                'allergic or adverse reaction to anaesthesia or other drugs',
                'Bleeding',
                'blood clots',
                'damage to blood vessels',
                'incontinence',
              ],
            },
          },
        ],
      },
    ],
  },
  '3': {
    surgery: 'Fissure (Lateral Internal Sphincterotomy or LIS)',
    questionsList: [
      { question: 'What is a Fissure?', id: 'what-is-a-fissure' },
      {
        question: 'What causes a fissure to form?',
        id: 'what-causes-a-fissure-to-form',
      },
      {
        question: 'Symptoms / when to consult your doctor ',
        id: 'symptoms--when-to-consult-your-doctor-',
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
      },
      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },
      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },
      { question: 'Treatment for Fissures', id: 'treatment-for-fissures' },
      { question: 'Laser Procedure', id: 'laser-procedure' },
      { question: 'Traditional Procedure', id: 'traditional-procedure' },
    ],
    data: [
      {
        question: 'What is a Fissure?',
        id: 'what-is-a-fissure',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'A fissure also called, an anal fissure is a minor cut or tear in the lining of the anus. It causes bleeding and mild pain. Like any normal cut, the body can heal the fissure on its own. However, if the cut is deep you need to seek the help of a doctor.',
            },
          },
        ],
      },
      {
        question: 'What causes a fissure to form?',
        id: 'what-causes-a-fissure-to-form',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'When the anal canal stretches beyond its limit, it tears and causes a fissure to form. The stretching of the anal canal might be due to passing hard stools, diarrhoea, childbirth or anal sex.',
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to consult your doctor ',
        id: 'symptoms--when-to-consult-your-doctor-',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Anal fissures heal on their own within four to six weeks. But, if it does not heal even after 8 weeks or keeps recurring, it’s considered a chronic fissure. ',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: 'You should see a doctor if you notice:',
              points: [
                'Blood in stools ',
                'Sharp pain when you pass stools',
                'Itching or burning in the anal region',
              ],
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Having fissures is quite common and can happen to people of all ages who have constipation, even infants. However, if your symptoms do not clear up even after 8 weeks, it’s important to consult a doctor. ',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: 'Ignoring the symptoms can lead to:',
              points: [
                'Acute pain while passing stools',
                'Anal Cancer',
                'Serious infections',
              ],
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'An anal fissure is diagnosed by a physical examination of the anal area. To find out the extent of the tear, the doctor might perform:',
              points: [
                'Anoscopy: An anoscope is a tabular device which is inserted into the anus to visualize the anus and rectum',
                'Flexible sigmoidoscopy: A thin tube is inserted into the bottom portion of your colon. This procedure is can be undertaken for patients who have no risk of colon cancer',
                'Colonoscopy: Insert a thin tube into the bottom portion of your colon. This procedure is can be undertaken for patients who have a risk of colon cancer',
              ],
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'After the surgery, you must avoid constipation so that the cut can heal. To avoid constipation, one should follow a diet that consists of:',
              points: [
                'Fibre rich food',
                '10 -12 glasses of water',
                'Simple, nutritious food',
                'Avoid alcohol or coffee',
              ],
            },
          },
        ],
      },
      {
        question: 'Treatment for Fissures',
        id: 'treatment-for-fissures',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Anal fissures can be treated based on how chronic the tear is. If the tear is a small one, it can heal with self-care like drinking plenty of water and intake of fibre rich food.',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'The doctor might also suggest medications like stool softeners, ointments to quicken the self-healing process. ',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'However, if the fissure if a chronic one, you will have to undergo surgery to correct it.',
            },
          },
          {
            component: 'table',
            data: {
              heading: 'Types of treatments:',
              data: {
                headings: [
                  'Specifics',
                  'Traditional Open Surgery',
                  'Laser Surgery',
                ],
                data: [
                  ['Cuts and wounds', 'Yes', 'No'],
                  ['Pain', 'Yes', 'No'],
                  ['Recurrence', 'Possible', 'No'],
                  ['Dietary Restriction', 'Yes', 'No'],
                  ['Recovery Time', '1-2 Weeks', '24 hours'],
                  ['Invasive', 'Yes', 'No'],
                  ['Blood loss', 'More blood loss during surgery', 'Very less'],
                  ['Chances of Infection', 'High', 'Very less'],
                ],
              },
            },
          },
        ],
      },
      {
        question: 'Traditional Procedure',
        id: 'traditional-procedure',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The traditional procedure also called the Lateral Internal Sphincterotomy (LIS) is a procedure where the fissure is treated by cutting or stretching the muscles surrounding the anus.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'An incision is made in the anal muscles to relieve pressure on the fissure. ',
                'The fissure heals quickly by itself ',
              ],
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_13_m.jpg',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_13_d.jpg',
              },
              alt: 'What is a Fissure',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Hospital stay of 2-4 days or longer',
                'Resume normal day routine after 6-10 weeks',
                'Liquid diet initially followed by a fibre rich solid diet',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description: 'Some of the risks of the procedure may be:',
              points: [
                'Excessive bleeding ',
                'Infection of the surgical wound',
                'Anal fistula',
                'Faecal incontinence',
              ],
            },
          },
        ],
      },
      {
        question: 'Laser Procedure',
        id: 'laser-procedure',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This procedure involves the use of laser technology. The fissure is sealed using the heat generated from the laser.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'A laser is inserted into the natural opening of the anus and moved to the location of the fissure. ',
                'The laser is then switched on and the heat expelled is used to close the fissure',
                'The surgery is complete within 30 mins without any cut and tear',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1 Day procedure with mild pain',
                'Resume to normal routine from next day',
                'Simple, bland, nutritious, fibre rich food ',
                'Visit the doctor 2-3 weeks after the surgery for a check-up',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are very less complications through this laser treatment. Some of the risks may be:',
              points: [
                'allergic or adverse reaction to anaesthesia or other drugs',
                'bleeding',
                'incontinence',
                'infections',
              ],
            },
          },
        ],
      },
    ],
  },
  '14': {
    surgery: 'Bilateral Total Knee Replacement Surgery',
    questionsList: [
      {
        question: 'What is Bilateral Total Knee Replacement Surgery?',
        id: 'what-is-bilateral-total-knee-replacement-surgery',
      },
      {
        question: 'What causes knee joint pain?',
        id: 'what-causes-knee-joint-pain',
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms--when-to-call-your-doctor',
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
      },
      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },
      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },
      {
        question: 'Bilateral Total Knee Replacement Surgery',
        id: 'bilateral-total-knee-replacement-surgery',
      },
    ],
    data: [
      {
        question: 'What is Bilateral Total Knee Replacement Surgery?',
        id: 'what-is-bilateral-total-knee-replacement-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Some people experience severe knee pain while walking, climbing stairs or even while sitting. The total knee replacement surgery is done for one of the knees to decrease the pain. ',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_12_m.jpg',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_12_d.jpg',
              },
              alt: 'What is Bilateral Total Knee Replacement Surgery',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'In this procedure, parts of the knees which are damaged and cause pain are replaced with artificial material. This allows the person to walk around with no pain. ',
            },
          },
        ],
      },
      {
        question: 'What causes knee joint pain?',
        id: 'what-causes-knee-joint-pain',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'There are several reasons for severe knee joint pains. Some of them are:',
              points: ['Aging', 'Arthritis', 'Accidents'],
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms--when-to-call-your-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'When the knee joint pain is so severe that the person has trouble walking, climbing stairs etc and the pain hinders with the day to day routine, it is important to see a doctor.',
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'If you are experiencing severe pain in the knee joint, it’s best to see a doctor because the pain will not subside without proper care and treatment.',
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'The doctor can recommend suitable treatment by conducting:',
              points: [
                'A physical exam to understand the condition of the knee',
                'A knee joint X ray',
              ],
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'After a total knee replacement surgery, your diet should consist of:',
              points: [
                '2-3 litres of water and fluids',
                'Simple, nutritious, bland food',
                'An anti-inflammatory diet is recommended to reduce swelling in the knees',
                'Avoiding alcohol and smoking is advised',
              ],
            },
          },
        ],
      },
      {
        question: 'Bilateral Total Knee Replacement Surgery',
        id: 'bilateral-total-knee-replacement-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This procedure is used to replace the damaged parts of the knee joint with artificial material to reduce pain.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'The patient is given general anaesthesia for the procedure',
                'The knee is bent to provide complete exposure of the joint',
                'A 6-10 inch incision is made around the knee',
                'The damaged parts are cut away and the artificial material is pieces of the joint are placed',
                'The knee is moved around to ensure that the parts fit',
                'The incision is sutured and the patient is moved to the recovery area',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Hospital stay of 2-3 days',
                'Resume to normal routine after 3-6 weeks',
                'You should gradually increase activity to give the knee time to recover',
                'Exercising the knee regularly will help to bring it back to normal',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description: 'Some of the risks of the procedure may be:',
              points: [
                'Blood clots',
                'Infection',
                'Heart attack',
                'Stroke',
                'Urinary Tract infection',
                'Bleeding',
              ],
            },
          },
        ],
      },
    ],
  },
  '13': {
    surgery: 'Unilateral Total Knee Replacement Surgery',
    questionsList: [
      {
        question: 'What is Unilateral Total Knee Replacement Surgery?',
        id: 'what-is-unilateral-total-knee-replacement-surgery',
      },
      {
        question: 'What causes knee joint pain?',
        id: 'what-causes-knee-joint-pain',
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms--when-to-call-your-doctor',
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
      },
      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },
      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },
      {
        question: 'Unilateral Total Knee Replacement Surgery',
        id: 'unilateral-total-knee-replacement-surgery',
      },
    ],
    data: [
      {
        question: 'What is Unilateral Total Knee Replacement Surgery?',
        id: 'what-is-unilateral-total-knee-replacement-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Some people experience severe knee pain while walking, climbing stairs or even while sitting. The total knee replacement surgery is done for one of the knees to decrease the pain. ',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_12_m.jpg',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_12_d.jpg',
              },
              alt: 'What is Unilateral Total Knee Replacement Surgery',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'In this procedure, parts of the knees which are damaged and cause pain are replaced with artificial material. This allows the person to walk around with no pain. ',
            },
          },
        ],
      },
      {
        question: 'What causes knee joint pain?',
        id: 'what-causes-knee-joint-pain',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'There are several reasons for severe knee joint pains. Some of them are:',
              points: ['Aging', 'Arthritis', 'Accidents'],
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms--when-to-call-your-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'When the knee joint pain is so severe that the person has trouble walking, climbing stairs etc and the pain hinders with the day to day routine, it is important to see a doctor.',
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'If you are experiencing severe pain in the knee joint, it’s best to see a doctor because the pain will not subside without proper care and treatment.',
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'The doctor can recommend suitable treatment by conducting:',
              points: [
                'A physical exam to understand the condition of the knee',
                'A knee joint X ray',
              ],
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'After a total knee replacement surgery, your diet should consist of:',
              points: [
                '2-3 litres of water and fluids',
                'Simple, nutritious, bland food',
                'An anti-inflammatory diet is recommended to reduce swelling in the knees',
                'Avoiding alcohol and smoking is advised',
              ],
            },
          },
        ],
      },
      {
        question: 'Unilateral Total Knee Replacement Surgery',
        id: 'unilateral-total-knee-replacement-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This procedure is used to replace the damaged parts of the knee joint with artificial material to reduce pain.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'The patient is given general anaesthesia for the procedure',
                'The knee is bent to provide complete exposure of the joint',
                'A 6-10 inch incision is made around the knee',
                'The damaged parts are cut away and the artificial material is pieces of the joint are placed',
                'The knee is moved around to ensure that the parts fit',
                'The incision is sutured and the patient is moved to the recovery area',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Hospital stay of 2-3 days',
                'Resume to normal routine after 3-6 weeks',
                'You should gradually increase activity to give the knee time to recover',
                'Exercising the knee regularly will help to bring it back to normal',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description: 'Some of the risks of the procedure may be:',
              points: [
                'Blood clots',
                'Infection',
                'Heart attack',
                'Stroke',
                'Urinary Tract infection',
                'Bleeding',
              ],
            },
          },
        ],
      },
    ],
  },
  '8': {
    surgery: 'Prostate removal',
    questionsList: [
      { question: 'Summary', id: 'summary' },
      { question: 'What is Prostate?', id: 'what-is-prostatectomy' },
      {
        question: 'What causes prostate enlargement or cancer?',
        id: 'what-causes-prostate-enlargement-or-cancer',
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms--when-to-call-your-doctor',
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
      },
      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },
      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },
      {
        question: 'Treatment for Benign Prostatic Hyperplasia (BPH)',
        id: 'Treatment-for-Benign-Prostatic-Hyperplasia-(BPH)',
      },
      {
        question: 'Transurethral Resection of the Prostate (TURP)',
        id: 'Transurethral-Resection-of-the-Prostate-(TURP)',
      },
      {
        question: 'Transurethral Incision of the Prostate (TUIP)',
        id: 'Transurethral-Incision-of-the-Prostate-(TUIP)',
      },
      {
        question: 'Laser Surgery',
        id: 'Laser-Surgery',
      },
      {
        question: 'Treatment for Prostate Cancer',
        id: 'Treatment-for-Prostate-Cancer',
      },
      {
        question: 'Radical Prostatectomy',
        id: 'radical-prostatectomy',
      },
      {
        question: 'Robotic Radical Prostatectomy',
        id: 'robotic-radical-prostatectomy',
      },
      {
        question: 'Laparoscopic Radical Prostatectomy',
        id: 'laparoscopic-radical-prostatectomy',
      },
      {
        question: 'Open Radical Prostatectomy',
        id: 'open-radical-prostatectomy',
      },
      { question: 'Simple Prostatectomy', id: 'simple-prostatectomy' },
    ],
    data: [
      {
        question: 'Summary',
        id: 'summary',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'As men age, the prostate starts enlarging, making it difficult to urinate. The medical term for enlarged prostate gland is Benign Prostatic Hyperplasia (BPH). Symptoms of BPH include non-emptiness in the bladder even after urinating and unstreamed urine flow. BPH is quite common, with some studies claiming that upto one-third of men report moderate to severe symptoms of BPH by the age of 60.',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'In some cases, prostate enlargement can happen due to multiplication of cells that turn malignant, resulting in Prostate Cancer.',
            },
          },
        ],
      },
      {
        question: 'What is Prostate?',
        id: 'what-is-prostatectomy',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The prostate is a very small sized reproductive gland that usually weighs near 30 gms and sits just under the bladder, near the urethra. The prostate is found only in men. It excretes a fluid that contributes 30% of the semen. It protects the sperm for a longer life span and makes thick sperms thin to make it flow smoothly and able to fertilize the egg more efficiently.',
            },
          },
        ],
      },
      {
        question: 'What causes prostate enlargement or cancer?',
        id: 'what-causes-prostate-enlargement-or-cancer',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'In some people, the tissue around the prostate or the prostate cells themselves start multiplying. This causes the prostate to become enlarged. When the multiplying cells are malignant, it results in prostate cancer.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_6_m.jpg',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_6_d.jpg',
              },
              alt: 'What is Prostate removal',
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms--when-to-call-your-doctor',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: 'Some of the symptoms are:',
              points: [
                'Frequent urination',
                'Urgency in urination',
                'Incontinence',
                'Blood in semen',
                'Erectile dysfunction',
              ],
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'If you experience any of the symptoms of prostate enlargement, you should see a doctor immediately. Ignoring the symptoms may lead to:',
              points: [
                'Urinary tract infection',
                'Kidney and bladder damage',
                'Kidney stones',
                'If the cause is cancer, leaving it untreated can be life threatening',
              ],
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'To diagnose an enlarged prostate, the doctor may recommend:',
              points: ['Blood tests', 'Urine tests', 'Digital rectal exam'],
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'After the surgery, you should eat foods that are easy on the digestive system. Eating small, frequent meals helps.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'Some of the foods that you can include in the diet are:',
              points: [
                'Soups and juices',
                'High fibre food',
                'Fruits and vegetables',
                'Low fat food is advised',
                'Avoid fried, sugary and processed food',
              ],
            },
          },
        ],
      },
      {
        question: 'Treatment for Benign Prostatic Hyperplasia (BPH)',
        id: 'Treatment-for-Benign-Prostatic-Hyperplasia-(BPH)',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The doctor will recommend the required treatment based on the findings from the tests and examinations. In case just medication isn’t sufficient to treat the condition, the doctor might recommend a surgical procedure. The aim of the surgery is to remove the central glandular part of prostate which relieves obstruction of the urethra.',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'There are a few different types of surgical procedures for treating BPH:',
            },
          },
        ],
      },
      {
        question: 'Transurethral Resection of the Prostate (TURP)',
        id: 'Transurethral-Resection-of-the-Prostate-(TURP)',
        answers: [
          {
            component: 'description',
            data: {
              heading: 'Procedure Flow',
              value:
                'TURP involves insertion of a slender instrument (resectoscope) is inserted up the urethra. An electrical current is passed through the resectoscope’s wire loop to shave away sections of enlarged prostate. Shaved prostate tissue is flushed into the bladder and removed through the resectoscope. TURP is the most common surgery for BPH, accounting for 9 out of 10 procedures.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '2-3 day hospital stay',
                'Resume normal routine after 2-6 weeks, depending on your job profile',
                'A catheter is placed for 1-2 days',
                'Drink plenty of water after surgery (about 8 glasses per day)',
                'Eat high fibre foods, avoid constipation',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'While the procedure is generally safe, it does carry certain risks.',
              points: [
                'Allergic reaction to anaesthesia',
                'Short term nausea or vomiting',
                'Painful urination that can last for a few weeks',
                'Temporary sexual dysfunction',
              ],
            },
          },
        ],
      },
      {
        question: 'Transurethral Incision of the Prostate (TUIP)',
        id: 'Transurethral-Incision-of-the-Prostate-(TUIP)',
        answers: [
          {
            component: 'description',
            data: {
              heading: 'Procedure Flow',
              value:
                'TURP involves using a resectoscope to make small incisions around the prostate and neck of the bladder. This releases the narrowing at the bladder neck and enlarges the urethra. No prostate tissue is removed. TUIP is suitable for men with smaller prostate enlargements.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '2-3 day hospital stay',
                'Resume normal routine after 2-6 weeks, depending on your job profile',
                'A catheter is placed for 1-2 days',
                'Drink plenty of water after surgery (about 8 glasses per day)',
                'Eat high fibre foods, avoid constipation',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'While the procedure is generally safe, it does carry certain risks.',
              points: [
                'Allergic reaction to anaesthesia',
                'Short term nausea or vomiting',
                'Painful urination that can last for a few weeks',
                'Temporary sexual dysfunction',
              ],
            },
          },
        ],
      },
      {
        question: 'Laser Surgery',
        id: 'Laser-Surgery',
        answers: [
          {
            component: 'description',
            data: {
              heading: 'Procedure Flow',
              value:
                'During prostate laser surgery, a scope is inserted through the tip of penis into the tube that carries urine from the bladder (urethra). Laser is passed through the scope to deliver energy (through concentrated light and heat) to remove excess tissue that is preventing the urine flow.',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'While there are a few different types of laser surgeries available for treating BPH, the exact treatment is best determined by the doctor.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'Laser surgery has various advantages over other methods of treating BPH, namely',
              points: [
                'Shorter stay - 24 hour hospitalization for most cases',
                'Faster recovery',
                'Lower risk of bleeding',
                'Most cases do not require using a catheter beyond 1-2 days',
                'More immediate results',
              ],
            },
          },
          {
            component: 'description',
            data: {
              heading: 'Risks involved in the treatment:',
              value:
                'A laser surgery involves similar risks as other BPH procedures.',
            },
          },
        ],
      },
      {
        question: 'Treatment for Prostate Cancer',
        id: 'Treatment-for-Prostate-Cancer',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'In case of cancerous growth of prostate, the doctor might recommend partial or complete removal of the prostate, also known as prostatectomy.',
            },
          },
          {
            component: 'table',
            data: {
              heading: 'Types of surgeries:',
              data: {
                headings: [
                  'Specifics',
                  'Radical Prostatectomy - Robot-assisted',
                  'Radical Prostatectomy - Open Surgery',
                  'Radical Prostatectomy - Laparoscopic',
                  'Simple Prostatectomy',
                ],
                data: [
                  ['Incision', 'Small', '8-10 inch', 'Small', '8-10 inch'],
                  ['Blood Loss', 'Less', 'High', 'Less', 'High'],
                  ['Recovery time', 'Faster', 'Longer', 'Faster', 'Longer'],
                  ['Invasive', 'No', 'Yes', 'No', 'Yes'],
                ],
              },
            },
          },
        ],
      },
      {
        question: 'Radical Prostatectomy',
        id: 'radical-prostatectomy',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Radical prostatectomy is done to completely remove the prostate gland along with the surrounding tissues.',
            },
          },
        ],
      },
      {
        question: 'Robotic Radical Prostatectomy',
        id: 'robotic-radical-prostatectomy',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'In this procedure, a tiny robot is inserted through an incision to remove the prostate. ',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'Small incisions are made in the abdomen',
                'A tiny robot is inserted into the incision',
                'The camera footage is visible on a screen which guides the doctor to perform the surgery',
                'The prostate is removed through one of the incisions',
                'The incisions are taped and the patient is taken to the recovery room',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1- 3 days hospital stay with mild pain',
                'Resume to normal routine after 2-3 weeks',
                'Simple, bland, nutritious, fibre rich food',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading:
                'There are very less complications through this treatment. Some of the risks may be:',
              description: 'Some of the risks of the procedure may be:',
              points: [
                'allergic or adverse reaction to anaesthesia or other drugs',
                'bleeding',
                'infection',
                'injury to adjacent organs',
                'urinary incontinence',
                'erectile dysfunction',
              ],
            },
          },
        ],
      },
      {
        question: 'Laparoscopic Radical Prostatectomy',
        id: 'laparoscopic-radical-prostatectomy',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'In this procedure, a camera is inserted through a small incision made in the abdomen though which the prostate is removed.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'Small incisions are made in the abdomen',
                'A tiny camera is inserted into the incision',
                'The camera footage is visible on a screen which guides the doctor to perform the surgery',
                'The prostate is removed through one of the incisions',
                'The incisions are taped and the patient is taken to the recovery room',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1- 3 days hospital stay with mild pain',
                'Resume to normal routine after 2-3 weeks',
                'Simple, bland, nutritious, fibre rich food ',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading:
                'There are very less complications through this treatment. Some of the risks may be:',
              description: 'Some of the risks of the procedure may be:',
              points: [
                'allergic or adverse reaction to anaesthesia or other drugs',
                'bleeding',
                'infection',
                'injury to adjacent organs ',
                'urinary incontinence',
                'erectile dysfunction',
                'bowel injury',
              ],
            },
          },
        ],
      },
      {
        question: 'Open Radical Prostatectomy',
        id: 'open-radical-prostatectomy',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This is an open surgery in which the prostate is removed directly from a large incision made in the lower abdomen. ',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'A large incision is made in the abdomen',
                'The doctor reaches into the lower abdomen and removed the prostate',
                'The incision is sutured and the patient is taken into the recovery room',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '2- 3 days hospital stay',
                'Resume to normal routine after 2-4 weeks',
                'Simple, bland, nutritious, fibre rich food ',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description: 'Some of the risks of the procedure may be:',
              points: [
                'allergic or adverse reaction to anaesthesia or other drugs',
                'bleeding',
                'infection of the cut',
                'injury to adjacent organs ',
                'urinary incontinence',
                'narrowing of the urethra',
              ],
            },
          },
        ],
      },
      {
        question: 'Simple Prostatectomy',
        id: 'simple-prostatectomy',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This procedure is used to remove only parts of the prostate through a large incision made in the lower abdomen.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'A large cut is made in the abdomen',
                'The doctor removes parts of the prostate through the cut',
                'The cut is sutured and the patient is taken to the recovery room',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Hospital stay of 2-4 days or longer',
                'Resume normal day routine after 6 weeks',
                'Light food which can be easily digested',
                'Avoid foods that make you gassy like cauliflower, broccoli, beans etc',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'The procedure involves a large cut. So, some of the risks may be:',
              points: [
                'Injury to surrounding organs',
                'Infection',
                'Excessive bleeding',
                'Breathing difficulties ',
                'Heart attack or stroke during surgery',
                'Blood clots related to the longer recovery period after open surgery',
                'Risks of general anaesthesia',
              ],
            },
          },
        ],
      },
    ],
  },
  '1': {
    surgery: 'Piles',
    questionsList: [
      { question: 'What are Piles?', id: 'what-are-piles' },
      { question: 'What causes piles?', id: 'what-causes-piles' },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms--when-to-call-your-doctor',
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
      },
      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },
      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },
      { question: 'Treatment for Piles', id: 'treatment-for-piles' },
      { question: 'Laser Procedure', id: 'laser-procedure' },
      {
        question: 'Stapler Haemorrhoidectomy',
        id: 'stapler-haemorrhoidectomy',
      },
      { question: 'Traditional Surgery', id: 'traditional-surgery' },
    ],
    data: [
      {
        question: 'What are Piles?',
        id: 'what-are-piles',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Piles or haemorrhoids are swollen veins in the anus. They can be found inside (Internal Haemorrhoids) or outside (External Haemorrhoids) the anus. ',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_3_m.jpg',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_3_d.jpg',
              },
              alt: 'What are Piles?',
            },
          },
        ],
      },
      {
        question: 'What causes piles?',
        id: 'what-causes-piles',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'Increased pressure in the lower rectum causes piles to form. The most common causes are:',
              points: [
                'Constipation',
                'Lifting heavy weights',
                'Diarrhoea',
                'Pregnancy',
              ],
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms--when-to-call-your-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Piles are classified as Grade I to Grade IV based on their severity. Grade I and II can be treated by lifestyle changes while Grade III and IV might require surgery. ',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_5_d.jpg',
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_5_m.jpg',
              },
              alt: 'Symptoms / when to call your doctor Plies',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: 'The symptoms include:',
              points: [
                'Bleeding during passing stools',
                'Itching or irritation in the anus',
                'Pain while passing stools',
                'Lumps near the anus',
              ],
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'Piles generally do not lead to complicated health problems. But in a few, they may lead to:',
              points: [
                'Acute pain',
                'Rectal cancer',
                'Anaemia due to blood loss',
                'Blood clots which can be very painful',
              ],
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Piles can be diagnosed by a visual examination of the anal area. To ensure there are no abnormalities or complications, the doctor may perform a digital rectal exam in which he inserts a lubricated, gloved finger into the anus. ',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'The doctor may also suggest a colonoscopy to ensure there are no digestive disorders.',
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'Constipation is best avoided post the surgery to give the anal area time to heal. Hence, you should eat foods that are:',
              points: [
                'High in fibre',
                'Simple, nutritious food',
                'Non spicy and low in oil',
                'No alcohol and coffee',
              ],
            },
          },
        ],
      },
      {
        question: 'Treatment for Piles',
        id: 'treatment-for-piles',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'Grade I and II piles can be treated using lifestyle changes like:',
              points: [
                'eating fibre rich food to avoid constipation',
                'taking a sitz bath',
                'using ice pack',
                'laxatives etc.',
              ],
            },
          },
          {
            component: 'description',
            data: {
              value:
                'However, Grade III and IV piles might require a surgery. ',
            },
          },

          {
            component: 'table',
            data: {
              heading: 'Types of treatments:',
              data: {
                headings: [
                  'Specifics',
                  'Traditional Surgery',
                  'Laser Surgery',
                  'Stapler Haemorrhoidectomy',
                ],
                data: [
                  ['Cuts and Wounds', 'Yes', 'No', 'No'],
                  ['Pain', 'Yes', 'No', 'No'],
                  ['Recurrence', 'Possible', 'No', 'Low possibility'],
                  ['Dietary Restriction', 'Yes', 'No', 'No'],
                  ['Recovery Time', '1-2 Weeks', '24 hours', '24 hours'],
                  ['Invasive', 'Yes', 'No', 'No'],
                ],
              },
            },
          },
        ],
      },
      {
        question: 'Traditional Surgery',
        id: 'traditional-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Traditional surgery is mostly used for internal haemorrhoids. There are two methods - open and closed surgeries, both involving cuts and sutures',
            },
          },

          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'The piles are cut off from the anal region using a scalpel or scissors',
                'For a closed surgery, the skin is sutured where as in an open surgery, the skin is left open for natural healing',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '2- 4 days hospital stay',
                'Wound takes 1-3 weeks to heal',
                'Fibre rich food is advised. ',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description: 'Some of the risks of the procedure may be:',
              points: [
                'Excessive bleeding',
                'Infection of the surgical wound',
                'Pain',
                'Urinary tract infections',
                'Incontinence',
              ],
            },
          },
        ],
      },
      {
        question: 'Laser Procedure',
        id: 'laser-procedure',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The laser procedure is a no cut, no wound procedure. The procedure takes only minutes to complete. ',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given an enema',
                'A laser device is inserted into the anal region',
                'The energy from the laser is focussed on the mass to shrink it',
                'The shrunken layer adheres naturally to the skin',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1 Day procedure with mild pain',
                'Patients can resume normal routine from next day',
                'Diet - Simple, bland, nutritious, fibre rich food ',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are very less complications through this laser treatment. Some of the risks may be:',
              points: [
                'allergic or adverse reaction to anaesthesia or other drugs',
                'bleeding',
                'infection',
                'inability to urinate which may indicate kidney problems',
              ],
            },
          },
        ],
      },
      {
        question: 'Stapler Haemorrhoidectomy',
        id: 'stapler-haemorrhoidectomy',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This procedure is usually done for large size internal haemorrhoids. There is a significant reduction in pain through this procedure. ',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'A small hollow tube is inserted into the anal region',
                'The internal haemorrhoids are adjusted into the hollow tube',
                'The region above the haemorrhoids is sutured and pulled which cuts off the haemorrhoids',
                'The entire procedure takes about 30 minutes to complete',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1-day discharge with mild pain',
                'Resume normal day routine from the next day',
                'Normal diet after 4 hours of surgery. Fibre rich food is advised.',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description: 'Some of the risks of the procedure may be:',
              points: [
                'Excessive bleeding',
                'Infection of the surgical wound',
                'Anal fissure',
                'Scarring',
                'Trauma to rectal wall',
              ],
            },
          },
        ],
      },
    ],
  },
  '5': {
    surgery: 'Gallbladder surgery',
    questionsList: [
      { question: 'What are Gallstones?', id: 'what-are-gallstones' },
      {
        question: 'What causes gall stones to form?',
        id: 'what-causes-gall-stones-to-form',
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms--when-to-call-your-doctor',
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
      },
      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },
      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },
      { question: 'Treatment for Gallstones', id: 'treatment-for-gallstones' },
      { question: 'Laparoscopic Procedure', id: 'laparoscopic-procedure' },
      { question: 'Traditional Procedure', id: 'traditional-procedure' },
    ],
    data: [
      {
        question: 'What are Gallstones?',
        id: 'what-are-gallstones',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Gallstones are small, hard deposits in the gall bladder. They are very common and in 80% of the people, they do not cause any discomfort. However, if they cause pain or swelling in the upper abdomen, it is necessary to seek proper treatment. ',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_8_d.jpg',
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_8_m.jpg',
              },
              alt: 'What are Gallstones',
            },
          },
        ],
      },
      {
        question: 'What causes gall stones to form?',
        id: 'what-causes-gall-stones-to-form',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The gallbladder makes bile to digest your food. When there is too much cholesterol in the bile, gallstones are formed. Sometimes, gallstones also form because of calcium or bilirubin.',
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms--when-to-call-your-doctor',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: 'You must reach out to your doctor if you have:',
              points: [
                'Acute pain in the abdomen extending to upper back or right shoulder',
                'Shivering and fever',
                'Jaundice',
                'Clay coloured stools or dark urine',
                'Severe nausea and vomiting',
              ],
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Having gallstones is quite common and is not a concern in 80% of the people. However, if you have symptoms, getting the correct treatment is important. ',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: 'Ignoring the symptoms can lead to:',
              points: [
                'Acute pain',
                'Inflammation of the gallbladder and organs surrounding the gallbladder',
                'Obstruction of bowels',
                'Very large stones may even lead to gallbladder and bile duct cancer',
              ],
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Gallstones are diagnosed through a simple ultrasound. This is used to find the size of the gallstones. Based on the size, the doctor recommends the treatment- either medication or surgery.',
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'After the surgery, your digestive system takes some time to recover completely. You should introduce solids slowly and eat frequent meals to recover fast. ',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: 'What you can eat:',
              points: [
                'Liquids',
                'Simple, bland nutrient dense food',
                'High fibre foods like sprouts, fruits, vegetables, nuts and whole grains',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: 'What you should avoid:',
              points: [
                'Foods high in fat content like red meat',
                'Dairy Ex Milk, cheese, butter',
                'Processed food like pizza, cake, cookies',
                'Coffee and alcohol',
              ],
            },
          },
        ],
      },
      {
        question: 'Treatment for Gallstones',
        id: 'treatment-for-gallstones',
        answers: [
          {
            component: 'description',
            data: {
              value:
                "Gallstones which are smaller in size (Generally less than 1cm) can be treated by Medication however larger size stones needs to be removed by surgery. It's always advised to consult a specialist.",
            },
          },
          {
            component: 'table',
            data: {
              heading: 'Types of treatments:',
              data: {
                headings: [
                  'Specifics',
                  'Laparoscopic Surgery',
                  'Traditional Surgery',
                ],
                data: [
                  ['Cuts and Wounds', 'No', 'No'],
                  ['Pain', 'Mild pain', 'Yes'],
                  ['Recurrence', 'No', 'No'],
                  ['Dietary Restriction', 'Small modifications in diet', 'Yes'],
                  ['Recovery Time', '24 hours', '1-2 Months'],
                  ['Invasive', 'No', 'Yes'],
                ],
              },
            },
          },
        ],
      },
      {
        question: 'Laparoscopic Procedure',
        id: 'laparoscopic-procedure',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The procedure involves the use of a laparoscope, a long, thin probe. The surgery is performed through small incisions made in the abdomen.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'Small incisions are made in the abdomen',
                'A tiny camera is inserted into the incision',
                'The camera footage is visible on a screen which guides the doctor to perform the surgery',
                'Once the gallbladder is removed, an X ray or ultrasound may be conducted to check for stones or any other problems',
                'The incisions are sutured and the patient is taken to the recovery area',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1 Day procedure with mild pain',
                'Resume normal routine from next day',
                'Simple, bland, nutritious, fibre rich food',
                'Visit the doctor 2-3 weeks after the surgery for a check-up',
                'If you have symptoms like fever, pus from the incisions, jaundice or severe pain, reach out to your doctor immediately',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are very less complications through this laser treatment. Some of the risks may be:',
              points: [
                'allergic or adverse reaction to anaesthesia or other drugs',
                'bleeding',
                'blood clots',
                'damage to blood vessels',
                'heart problems, such as a rapid heart rate',
                'infection',
                'injury to the bile duct, liver, or small intestine',
                'pancreatitis',
              ],
            },
          },
        ],
      },
      {
        question: 'Traditional Procedure',
        id: 'traditional-procedure',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The traditional procedure involves a large cut made in the abdomen which is sutured after the procedure is complete.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'A large cut is made in the abdomen',
                'The gallbladder is directly removed from the incision',
                'Once the gallbladder is removed, an X ray or ultrasound may be conducted to check for stones or any other problems',
                'The cut is sutured and the patient is taken to the recovery area',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Hospital stay of 2-4 days or longer',
                'Resume normal day routine after 4-6 weeks',
                'Liquid diet for a couple of days after which solids can be introduced',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading:
                'The procedure involves a large cut. So, some of the risks may be:',
              description: 'Some of the risks of the procedure may be:',
              points: [
                'Injury to the common bile duct.',
                'Bile that leaks into the abdominal cavity.',
                'Excessive bleeding.',
                'Infection of the surgical wound.',
                'Injuries to the liver, intestines, or major abdominal blood vessels.',
                'Blood clots or pneumonia related to the longer recovery period after open surgery.',
                'Risks of general anaesthesia',
              ],
            },
          },
        ],
      },
    ],
  },
  '4': {
    surgery: 'Hernia',
    questionsList: [
      { question: 'What is a Hernia?', id: 'what-is-a-hernia' },
      {
        question: 'What causes a hernia to form?',
        id: 'what-causes-a-hernia-to-form',
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms--when-to-call-your-doctor',
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
      },
      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },
      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },
      { question: 'Treatment for Hernia', id: 'treatment-for-hernia' },
      { question: 'Laparoscopic Procedure', id: 'laparoscopic-procedure' },
      { question: 'Traditional Procedure ', id: 'traditional-procedure-' },
    ],
    data: [
      {
        question: 'What is a Hernia?',
        id: 'what-is-a-hernia',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'A hernia occurs when any of the internal organs push through weak abdominal muscles. It can be felt as a bulge in your abdomen or in the groin area.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_4_d.jpg',
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_4_m.jpg',
              },
              alt: 'What is a Hernia',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'Based on the organ protruding out, there are different types of hernias.',
            },
          },
        ],
      },
      {
        question: 'What causes a hernia to form?',
        id: 'what-causes-a-hernia-to-form',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'There are several reasons why hernias form. Some of them are:',
              points: [
                'Damage to the abdominal muscles',
                'Chronic coughing',
                'Pregnancy',
                'Lifting weights',
                'Aging or even being born with weak abdominal muscles',
              ],
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms--when-to-call-your-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'A hernia in many cases does not cause any discomfort. It seems like a painless swelling. However, if you experience pain, nausea or vomiting and if you’re not able to push back the bulge into the abdomen, you should visit the doctor immediately. ',
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'As long as the hernia is not painful, it can be ignored. But, if you experience pain, you should consult a doctor immediately. Ignoring the pain can sometimes even be life threatening. ',
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'A hernia can be diagnosed by a physical examination. The doctor may ask you to stand and cough. Imaging tests such as ultrasound, CT scan or an MRI might be recommended. ',
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'After the surgery, you should eat frequent meals to recover fast. The type of food which is recommended is:',
              points: [
                'Fibre rich food like whole grains, vegetables and fruits',
                'Simple, bland and nutritious food',
              ],
            },
          },
        ],
      },
      {
        question: 'Treatment for Hernia',
        id: 'treatment-for-hernia',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'A hernia cannot be treated through medication. If the hernia turns painful, you’ll need to undergo surgery to treat it. ',
            },
          },
          {
            component: 'table',
            data: {
              heading: 'Types of treatments:',
              data: {
                headings: [
                  'Specifics',
                  'Laparoscopic Surgery',
                  'Traditional Open Surgery',
                ],
                data: [
                  ['Large Incision', 'No', '2 to 4 inches'],
                  ['Invasive', 'No', 'Yes'],
                  ['Recurrence', 'Low', '', 'High'],
                  ['Recovery', 'Fast', 'Slow'],
                  ['Stitches', 'Dissolvable stitches', 'Several stitches'],
                  ['Infection', 'Low possibility', 'High possibility'],
                ],
              },
            },
          },
        ],
      },
      {
        question: 'Laparoscopic Procedure',
        id: 'laparoscopic-procedure',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This is a simple no cut, no wound procedure which enables fast healing. ',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'A small incision is made at the navel',
                'The hernia is pushed into the abdominal cavity and a mesh is placed over it to strengthen the abdominal wall',
                'The incision is then closed with a surgical tape',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1 Day procedure with mild pain',
                'Resume normal routine after 2 days',
                'Simple, bland, nutritious, fibre rich food ',
                'Visit the doctor 2-3 weeks after the surgery for a check-up',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are very less complications through this treatment. Some of the risks may be:',
              points: [
                'allergic or adverse reaction to anaesthesia or other drugs',
                'bleeding',
                'nerve injury',
                'damage to blood vessels',
                'infection',
                'formation of hydrocele',
              ],
            },
          },
        ],
      },
      {
        question: 'Traditional Procedure ',
        id: 'traditional-procedure-',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The traditional procedure involves a large cut made in the abdomen to reach the hernia which is sutured after the procedure is complete. ',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'A large cut is made in the abdomen',
                'The hernia is pushed back and a mesh is placed over it to strengthen the abdominal wall',
                'The cut is closed using sutures',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Hospital stay of 2-4 days or longer',
                'Resume normal day routine after 3-4 weeks',
                'Fibre rich, simple, bland and nutritious food is recommended',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'The procedure involves a large cut. So, some of the risks may be:',
              points: [
                'Excessive bleeding',
                'Infection of the surgical wound',
                'Nerve damage',
                'Infertility in males',
                'Damage to femoral artery or vein',
                'Risks of general anaesthesia',
              ],
            },
          },
        ],
      },
    ],
  },
  '10': {
    surgery: 'Kidney Stones',
    questionsList: [
      { question: 'What are Kidney Stones?', id: 'what-are-kidney-stones' },
      {
        question: 'What causes Kidney stones?',
        id: 'what-causes-kidney-stones',
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms--when-to-call-your-doctor',
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
      },
      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },
      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },
      {
        question: 'Treatment for Kidney Stones:',
        id: 'treatment-for-kidney-stones:',
      },
      {
        question: 'Extracorporeal Shock Wave Lithotripsy (ESWL)',
        id: 'extracorporeal-shock-wave-lithotripsy-(eswl)',
      },
      { question: 'RIRS', id: 'RIRS' },
      {
        question: 'Percutaneous Nephrolithotomy',
        id: 'percutaneous-nephrolithotomy',
      },
    ],
    data: [
      {
        question: 'What are Kidney Stones?',
        id: 'what-are-kidney-stones',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Kidney stones are hard deposits of calcium and minerals that form in the kidneys. In most of the cases, these stones are formed from the crystallization of minerals from stagnated urine.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_9_m.jpg',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_9_d.jpg',
              },
              alt: 'What are Kidney Stones',
            },
          },
        ],
      },
      {
        question: 'What causes Kidney stones?',
        id: 'what-causes-kidney-stones',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'There is a delicate balance maintained in the urine in our body. When this balance of minerals is disturbed, kidney stones are formed. Some of the reasons for the imbalance are:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Lack of enough fluid in the body',
                'Hormonal imbalance',
                'Intake of a diet which is high in oxalate, sodium and protein',
                'Family history',
              ],
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms--when-to-call-your-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'When the stone is stationary in the kidney, it does not cause any pain. But, when it moves from the kidney into the ureter, it causes symptoms like:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Extreme pain in the back and sides',
                'Pain while passing urine',
                'Nausea and vomiting',
                'Red or brown urine',
              ],
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'You should see a doctor if you have unbearable pain which makes you vomit. This is because the pain will not subside till your doctor treats you for the kidney stones.',
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The doctor can diagnose kidney stones by a physical examination to understand where the pain is originating from. In addition to the physical exam, the doctor might advise:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Blood and urine tests',
                'Imaging tests like CT scan or X ray',
              ],
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'It’s best to avoid food which are rich in minerals which form kidney stones. Some of the diet recommendations are:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'High intake of water and fluids',
                'Avoiding salty, high protein and fatty food',
                'Having citrus fruits like lemon, oranges, sweet lime is helpful',
              ],
            },
          },
        ],
      },
      {
        question: 'Treatment for Kidney Stones:',
        id: 'treatment-for-kidney-stones:',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'There are several treatments available for removing kidney stones.  The doctor will recommend treatment based on the size of the stones. If the stones are very small in size, drinking plenty of water and taking medication will help you pass the stones. However, if the stones are larger in size, the doctor will recommend you to undergo surgery for it.',
            },
          },
          {
            component: 'table',
            data: {
              heading: 'Types of treatments:',
              data: {
                headings: [
                  'Specifics',
                  'Extracorporeal Shock Wave Lithotripsy (ESWL)',
                  'RIRS',
                  'Percutaneous Nephrolithotomy',
                ],
                data: [
                  ['Cuts and Wounds', 'No', 'No', 'Yes'],
                  ['Pain', 'Mild pain', 'Mild pain', 'Yes'],
                  [
                    'Used for treatment of',
                    'Small sized stones',
                    'Small sized stones',
                    'Large/irregular shaped stones',
                  ],
                  [
                    'Time taken for procedure',
                    '1 hour',
                    '1-3 hours',
                    '20-45 minutes',
                  ],
                  [
                    'Hospital Stay',
                    'Outpatient procedure',
                    'Outpatient procedure/1 day',
                    '2-3 days',
                  ],
                  ['Dietary Restriction', 'No', 'No', 'Yes'],
                  ['Recovery Time', '24 hours', '24 hours', '2-3 Weeks'],
                  ['Invasive', 'No', 'No', 'Yes'],
                ],
              },
            },
          },
        ],
      },
      {
        question: 'Extracorporeal Shock Wave Lithotripsy (ESWL)',
        id: 'extracorporeal-shock-wave-lithotripsy-(eswl)',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This procedure is used for treating small kidney or ureter stones.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given a sedative or local anaesthesia',
                'High energy sound waves are sent near the location of the stones',
                'This causes the stones to break into small pieces',
                'The stone pieces pass out of the system through urine within a few days after the procedure',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Outpatient procedure with mild pain',
                'Resume to normal routine from next day',
                'Intake of 3 litres of water everyday',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are very less complications through this treatment. Some of the risks may be:',
              points: [
                'Mild pain when the stones pass through urine',
                'Urinary tract infection',
                'Bleeding in the urinary system',
                'Inability to pass urine',
              ],
            },
          },
        ],
      },
      {
        question: 'RIRS (Retrograde Intrarenal Surgery)',
        id: 'RIRS',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'RIRS is a surgical procedure for removal of kidney stones that involves using a viewing tube called a fiberoptic endoscope. The stone is seen through the scope and can then be manipulated or crushed by an ultrasound probe, or evaporated by laser.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'Scope is placed through the urethra into the bladder and then through the ureter into the kidney.',
                'Stone is removed by ultrasound, laser or manually through small forceps',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Outpatient procedure or 1-day discharge with mild pain',
                'Resume normal day routine from the next day',
                'Intake of 3 litres of water everyday',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description: 'Some of the risks of the procedure may be:',
              points: [
                'Fever',
                'Bleeding',
                'Urinary Infection',
                'Reduced kidney function',
              ],
            },
          },
        ],
      },
      {
        question: 'Percutaneous Nephrolithotomy (PCNL)',
        id: 'percutaneous-nephrolithotomy',
        answers: [
          {
            component: 'description',
            data: {
              value:
                "This procedure is used for large stones that are more than 2 cm in size. It's also used when the ureter stones have an irregular shape.",
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'An incision is made in the back to reach into the kidney',
                'The stone is removed directly from the incision',
                'If the stone is too big to be removed, it is broken into smaller pieces and then, the pieces are removed',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '2- 3 days hospital stay',
                'Wound takes 1-3 weeks to heal',
                'Fibre rich food is advised',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description: 'Some of the risks of the procedure may be:',
              points: ['Infection', 'Bleeding', 'Reduced kidney function'],
            },
          },
        ],
      },
    ],
  },
  '7': {
    surgery: 'Hydrocele',
    questionsList: [
      { question: 'What is a Hydrocele?', id: 'what-is-a-hydrocele' },
      {
        question: 'What causes a hydrocele to form?',
        id: 'what-causes-a-hydrocele-to-form',
      },
      {
        question: 'Symptoms / when to consult your doctor ',
        id: 'symptoms--when-to-consult-your-doctor-',
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
      },
      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },
      {
        question: 'Dietary Restrictions and Precautions',
        id: 'dietary-restrictions-and-precautions',
      },
      { question: 'Treatment for Hydrocele', id: 'treatment-for-hydrocele' },
      { question: 'Surgery Procedure ', id: 'surgery-procedure-' },
    ],

    data: [
      {
        question: 'What is a Hydrocele?',
        id: 'what-is-a-hydrocele',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The build-up of water around a testicle forms a hydrocele. Normally, a hydrocele heals without treatment. But, as it grows in size, it results in pain and swelling in the groin. ',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_7_d.jpg',
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_7_m.jpg',
              },
              alt: 'What is a Hydrocele',
            },
          },
        ],
      },
      {
        question: 'What causes a hydrocele to form?',
        id: 'what-causes-a-hydrocele-to-form',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Hydroceles are commonly seen in babies at birth. Usually the fluid is absorbed into the body, but when that doesn’t happen, it forms a hydrocele. ',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'Hydroceles in adults usually form when there is an infection, swelling, injury, trauma or tumours in the testicle. ',
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to consult your doctor ',
        id: 'symptoms--when-to-consult-your-doctor-',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Hydroceles usually heal on their own within six months of time. ',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: 'You should see a doctor if you notice:',
              points: [
                'Pain in testicles',
                'Swelling and discomfort',
                'Feeling of heaviness in the testicle',
              ],
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-you-should-see-a-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'If the hydrocele is not causing you pain and discomfort, you can ignore it and let it heal itself. However, if you experience pain, you should consult a doctor immediately.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: 'Ignoring a painful hydrocele may lead to:',
              points: [
                'Rupture',
                'Spontaneous bleeding',
                'Severe infection',
                'Tumours',
              ],
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'A hydrocele is diagnosed by a simple physical examination by the doctor in which he checks for tenderness and swelling of the testicle. He might also shine a light on the testicle to gauge the amount of fluid in the testicle.',
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions and Precautions',
        id: 'dietary-restrictions-and-precautions',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'There are no dietary restrictions after the surgery. However, you should not lift weights or do strenuous workouts immediately after surgery. Swimming, sitting in a hot bath etc should also be avoided until the wound heals.',
            },
          },
        ],
      },
      {
        question: 'Treatment for Hydrocele',
        id: 'treatment-for-hydrocele',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Usually, hydroceles heal by themselves without causing any pain. However, if the hydrocele persists and starts getting painful, you should seek treatment for it. In some cases, the doctor removes the fluid using a needle. But there is a high chance of recurrence in this procedure. A surgery is generally preferred.',
            },
          },
        ],
      },
      {
        question: 'Surgery Procedure ',
        id: 'surgery-procedure-',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The surgery for treating a hydrocele or Hydrocelectomy is a simple 30-minute procedure.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'The doctor makes a small cut in the groin and drains out all the fluid',
                'After that, he seals the canal between the scrotum and abdominal cavity',
                'Finally, the hydrocele is removed and the cut is sutured',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1 Day procedure with mild pain',
                'Resume normal routine from next day',
                'Avoid lifting weights, strenuous workouts and sexual activity for at least 2 weeks',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are very less complications through this laser treatment. Some of the risks may be:',
              points: [
                'allergic or adverse reaction to anaesthesia or other drugs',
                'excessive bleeding',
                'blood clots',
                'infections',
                'recurrence of hydrocele',
              ],
            },
          },
        ],
      },
    ],
  },
  '15': {
    surgery: 'Total Hip Replacement Surgery',
    questionsList: [
      {
        question: 'What is Total Hip Replacement Surgery?',
        id: 'what-is-total-hip-replacement-surgery?',
      },
      { question: 'What causes Hip damage?', id: 'what-causes-hip-damage?' },
      { question: 'Symptoms / when to call your doctor', id: 'symptoms' },
      { question: 'Why you should see a doctor?', id: 'why-see-doctor' },
      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },
      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },
      {
        question: 'Treatment for damaged hip',
        id: 'treatment-for-damaged-hip',
        children: [
          {
            question: 'Minimally Invasive Surgery',
            id: 'procedure-minimally-invasive-surgery',
          },
          {
            question: 'Traditional Surgery',
            id: 'procedure-traditional-surgery',
          },
        ],
      },
    ],
    data: [
      {
        question: 'What is Total Hip Replacement Surgery?',
        id: 'what-is-a-total-hip-replacement-surgery?',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The Total Hip Replacement Surgery is a procedure to replace a damaged, painful hip with artificial material. This procedure is done when the patient is unable to conduct daily activities and there is no other procedure which can correct the damaged hip.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/Img_15_m.png',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/Img_15_d.png',
              },
              alt: 'What is a Total Hip Replacement Surgery?',
            },
          },
        ],
      },
      {
        question: 'What causes Hip Damage?',
        id: 'what-causes-hip-damage?',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Usually, damage or pain is the hip is caused by osteoarthritis, rheumatoid arthritis or traumatic arthritis caused by an injury.',
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Hip damage occurs due to aging or injury. Some of the symptoms are:',
            },
          },

          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Mild to severe pain in the hip',
                'Trouble in walking, bending and in doing daily activities like wearing socks',
                'Pain even after using medication',
              ],
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-see-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'When pain in the hip is not resolved even after using medication, regular exercise and losing weight, it’s important to seek the help of a doctor. Ignoring the symptoms may lead to:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Severe pain',
                'Worsening of arthritis',
                'Inability to move the hip and continue daily activities',
              ],
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The condition of the hip is diagnosed using the following tests:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Physical examination',
                'X ray',
                'Other imaging tests like MRI, CT scan etc',
              ],
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'A healthy diet is recommended after surgery. Some of the types of food you should include are:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Healthy fats',
                'Good sources of protein and iron',
                'Probiotic food like curd, yogurt etc',
              ],
            },
          },
        ],
      },
      {
        question: 'Treatment for Damaged Hip',
        id: 'treatment-for-damaged-hip',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The treatment for a hip damaged by arthritis or injury depends on the age of the patient and level of damage of the knee.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'If the extent of damage is not very high, the doctor can treat the hip using:',
              points: [
                'Medication',
                'Injections to reduce pain and stiffness in joints',
                'Exercise and yoga',
                'Stretching',
                'Heat and cold compress',
              ],
            },
          },
          {
            component: 'description',
            data: {
              value:
                'If the extent of damage of the hip is too high, total hip replacement surgery is recommended.',
            },
          },

          {
            component: 'table',
            data: {
              heading: 'Types of treatments:',
              data: {
                headings: [
                  'Specifics',
                  'Minimally Invasive Surgery',
                  'Traditional Surgery',
                ],
                data: [
                  [
                    'Incision',
                    '1-2 incisions 2-5 inches long',
                    '8-10 inch cut',
                  ],
                  ['Blood Loss', 'Less', 'High'],
                  ['Recovery time', '2-3 weeks', '2-3 weeks'],
                  ['Hospital stay', '4-6 days', '1-2 weeks'],
                  ['Invasive', 'No', 'Yes'],
                ],
              },
            },
          },
        ],
      },
      {
        question: 'Minimally Invasive Total Hip Replacement Surgery',
        id: 'procedure-minimally-invasive-total-hip-replacement-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'In a minimally invasive surgery, the replacement of damaged parts of the hip are done through small incisions which reduce blood loss and leave almost no scars.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given spinal or general anesthesia for the procedure',
                'Small incisions are made in the hip',
                'A tiny camera is inserted into the incision',
                'The camera footage is visible on a screen which guides the doctor to perform the surgery',
                'The ball part of the hip is cut using a saw and an artificial joint is attached',
                'The muscles are reattached and the incisions are closed.',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '4-6 days hospital stay with mild pain',
                'Resume to normal routine after 2-3 weeks and resume all activities after 6-12 months',
                'Regular exercising from the day after the surgery leads to faster healing',
                'Iron and protein rich diet along with probiotics and healthy fats is recommended',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'Some of the risks associated with this procedure are:',
              points: [
                'Infections',
                'Bleeding',
                'Severe breathing problems',
                'Numbness',
                'Dislocation of the hip joint after surgery',
              ],
            },
          },
        ],
      },
      {
        question: 'Traditional Surgery',
        id: 'procedure-traditional-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'In this procedure, a large incision is made in the hip to repair the damage.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'A large incision is made in the hip',
                'The ball part of the hip is cut using a saw and an artificial joint is attached',
                'The muscles are reattached and the incisions are closed',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1-2 weeks hospital stay with mild pain',
                'Resume to normal routine after 2-3 weeks and resume all activities after 6-12 months',
                'Regular exercising from the day after the surgery leads to faster healing',
                'Iron and protein rich diet along with probiotics and healthy fats is recommended',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'Some of the risks associated with this procedure are:',
              points: [
                'Infection in the large incision',
                'Bleeding from the cut',
                'Severe breathing problems',
                'Numbness',
                'Dislocation of the hip joint after surgery',
              ],
            },
          },
        ],
      },
    ],
  },
  '16': {
    surgery: 'ACL Tear',
    questionsList: [
      {
        question: 'What is ACL Tear Surgery?',
        id: 'what-is-ACL-tear-surgery?',
      },
      { question: 'What causes a ACL Tear?', id: 'What-causes-a-ACL-tear?' },
      { question: 'Symptoms / when to call your doctor', id: 'symptoms' },
      { question: 'Why you should see a doctor?', id: 'why-see-doctor' },
      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },
      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },
      {
        question: 'Treatment for ACL Tear',
        id: 'treatment-for-ACL-tear',
        children: [
          {
            question: 'Arthroscopic Surgery',
            id: 'procedure-arthroscopic-surgery',
          },
          {
            question: 'Open Surgery',
            id: 'procedure-open-surgery',
          },
        ],
      },
    ],
    data: [
      {
        question: 'What is ACL Tear Surgery?',
        id: 'what-is-ACL-tear-surgery?',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The Anterior Cruciate Ligament (ACL) is a major ligament which helps in moving the knee. When this ligament is partially or completely torn, the ACL Tear Surgery is done to repair the knee.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/Img_16_m.png',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/Img_16_d.png',
              },
              alt: 'What is ACL Tear Surgery?',
            },
          },
        ],
      },
      {
        question: 'What causes a ACL Tear?',
        id: 'what-causes-a-ACL-tear?',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Most of the times, an ACL tear occurs while playing sports such as football, basketball, skiing etc in which you twist, turn, jump or stop suddenly.',
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'When an ACL tear happens, you’ll hear a loud pop sound from your knee. Some of the symptoms are:',
            },
          },

          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Mild to severe pain in the knee',
                'Trouble in walking, putting pressure or bending the knee',
                'Swelling',
              ],
            },
          },
        ],
      },

      {
        question: 'Why you should see a doctor?',
        id: 'why-see-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'If you experience symptoms of an ACL tear, you should visit the doctor immediately to understand the extent of knee damage. Ignoring the symptoms may lead to:',
            },
          },

          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Severe pain',
                'Further tear and weakening of the knee',
                'Osteoarthritis',
              ],
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'An ACL tear can be diagnosed by a simple physical examination. To understand the extent of damage, the doctor may recommend:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'X ray',
                'MRI scan',
                'Arthroscopy- In this procedure, the doctor makes a small cut in the knee. A pencil sized tool is inserted to examine the extent of damage on a screen.',
              ],
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Having a healthy diet after the ACL surgery is important. It will help the knee to heal faster.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'Some of the foods that you can include in the diet are:',
              points: [
                'Lean proteins like egg, chicken, fish, lentils',
                'Green leafy vegetables',
                'Citrus fruits',
              ],
            },
          },
        ],
      },
      {
        question: 'Treatment for ACL Tear',
        id: 'treatment-for-ACL-tear',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The treatment for an ACL tear differs based on your fitness level and extent of damage of the knee.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: 'For a simple tear, the doctor may recommend:',
              points: ['Knee Brace', 'Physiotherapy', 'Pain medication'],
            },
          },
          {
            component: 'description',
            data: {
              value:
                'However, if the ligament is badly torn, you will need to undergo surgery.',
            },
          },
          {
            component: 'table',
            data: {
              heading: 'Types of treatments:',
              data: {
                headings: ['Specifics', 'Arthroscopic Surgery', 'Open Surgery'],
                data: [
                  [
                    'Incision',
                    '2-3 Small incisions',
                    'Large incision across the knee',
                  ],
                  ['Blood Loss', 'Less', 'High'],
                  ['Recovery time', '2-3 weeks', '2-3 weeks'],
                  ['Hospital stay', '1 day', '2-3 days'],
                  ['Invasive', 'No', 'Yes'],
                ],
              },
            },
          },
        ],
      },
      {
        question: 'Arthroscopic Surgery',
        id: 'procedure-arthroscopic-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'An arthroscopic surgery also called; keyhole surgery is a simple under 2-hour surgery to repair an ACL tear in the knee.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given spinal or general anaesthesia for the procedure',
                'Small incisions are made in the knee',
                'A tiny camera is inserted into the incision',
                'The camera footage is visible on a screen which guides the doctor to perform the surgery',
                'Using the patient’s tissue or tissue from a bank, the doctor repairs the ligament',
                'The incisions are taped and the patient is taken to the recovery room.',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1-day hospital stay with mild pain',
                'Resume to normal routine after 2-3 weeks and active sports after 6-12 months',
                'Using ice pack to relieve swelling and regular exercise to strengthen the knee are advised',
                'Having a diet of lean proteins, green leafy vegetables and citrus fruits is important for recovery',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are very less complications through this treatment. Some of the risks may be:',
              points: [
                'Numbness',
                'Infection',
                'Blood clots',
                'Injury to nerves in the knee',
                'Pain',
              ],
            },
          },
        ],
      },
      {
        question: 'Open Surgery',
        id: 'procedure-open-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'In this procedure, a large incision is made in the knee to repair the ligament.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anesthesia for the procedure',
                'A large incision is made in the damaged knee',
                'The ligament is repaired/replaced through the incision',
                'The incision is sutured and the patient is taken to the recovery room',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '2- 3 days hospital stay with mild pain',
                'Resume to normal routine after 2-3 weeks and active sports after 6-12 months',
                'Having a diet of lean proteins, green leafy vegetables and citrus fruits is important for recovery',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are very less complications through this treatment. Some of the risks may be:',
              points: [
                'Allergic or adverse reaction to anesthesia or other drugs',
                'Bleeding',
                'Infection',
                'Injury to nerves and blood vessels in and around the knee',
              ],
            },
          },
        ],
      },
    ],
  },
  '17': {
    surgery: 'PCL Tear',
    questionsList: [
      {
        question: 'What is PCL Tear Surgery?',
        id: 'what-is-PCL-tear-surgery?',
      },
      { question: 'What causes a PCL Tear?', id: 'What-causes-a-PCL-tear?' },
      { question: 'Symptoms / when to call your doctor', id: 'symptoms' },
      { question: 'Why you should see a doctor?', id: 'why-see-doctor' },
      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },
      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },
      {
        question: 'Treatment for PCL Tear',
        id: 'treatment-for-PCL-tear',
        children: [
          {
            question: 'Arthroscopic Surgery',
            id: 'procedure-arthroscopic-surgery',
          },
          {
            question: 'Open Surgery',
            id: 'procedure-open-surgery',
          },
        ],
      },
    ],
    data: [
      {
        question: 'What is PCL Tear Surgery?',
        id: 'what-is-PCL-tear-surgery?',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The Posterior Cruciate Ligament (PCL) is a major ligament in the back of the knee. When this ligament is torn partially or completely, the PCL tear surgery is performed.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/Img_17_m.png',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/Img_17_d.png',
              },
              alt: 'What is PCL Tear Surgery?',
            },
          },
        ],
      },
      {
        question: 'What causes a PCL Tear?',
        id: 'what-causes-a-PCL-tear?',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'PCL injuries are rare and are usually caused when a bent knee is hit by a hard object or it can be caused while playing sports or during an accident.',
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'When a PCL tear happens, you’ll experience mild knee pain. Some of the symptoms are:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Mild to severe pain in the knee',
                'Instability in the knee causing wobbliness',
                'Swelling of the knee',
              ],
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-see-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'PCL tears are rare but they should be taken care of if you are experiencing pain. Ignoring the symptoms can lead to early osteoarthritis.',
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'A PCL tear can be diagnosed by a simple physical examination. To understand the extent of damage, the doctor may recommend:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: ['X ray', 'MRI scan', 'Bone scan'],
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Having a healthy diet after the PCL surgery is important. It will help the knee to heal faster.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'Some of the foods that you can include in the diet are:',
              points: [
                'Lean proteins like egg, chicken, fish, lentils',
                'Green leafy vegetables',
                'Citrus fruits',
              ],
            },
          },
        ],
      },
      {
        question: 'Treatment for PCL Tear',
        id: 'treatment-for-PCL-tear',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'After taking a look at the tests, the doctor will grade the PCL tear as Grade 1,2,3 or 4.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'For a Grade 1 or 2 tears, if no other ligaments are damaged, the doctor may recommend:',
              points: [
                'Rest',
                'Hot and cold compress',
                'Pain medication',
                'Using a knee brace or crutch',
              ],
            },
          },
          {
            component: 'description',
            data: {
              value:
                'However, if it is a Grade 3 tear, you will need to undergo surgery.',
            },
          },
          {
            component: 'table',
            data: {
              heading: 'Types of treatments:',
              data: {
                headings: ['Specifics', 'Arthroscopic Surgery', 'Open Surgery'],
                data: [
                  [
                    'Incision',
                    '2-3 Small incisions',
                    'Large incision across the knee',
                  ],
                  ['Blood Loss', 'Less', 'High'],
                  ['Recovery time', '2-3 weeks', '2-3 weeks'],
                  ['Hospital stay', '1 day', '2-3 days'],
                  ['Invasive', 'No', 'Yes'],
                ],
              },
            },
          },
        ],
      },
      {
        question: 'Arthroscopic Surgery',
        id: 'procedure-arthroscopic-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'An arthroscopic surgery also called; keyhole surgery is a simple under 2-hour surgery to repair a PCL tear in the knee.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given spinal or general anaesthesia for the procedure',
                'Small incisions are made in the knee',
                'A tiny camera is inserted into the incision',
                'The camera footage is visible on a screen which guides the doctor to perform the surgery',
                'Using the patient’s tissue or tissue from a bank, the doctor repairs the ligament',
                'The incisions are taped and the patient is taken to the recovery room.',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1-day hospital stay with mild pain',
                'Resume to normal routine after 2-3 weeks and active sports after 6-12 months',
                'Using ice pack to relieve swelling and regular exercise to strengthen the knee are advised',
                'Having a diet of lean proteins, green leafy vegetables and citrus fruits is important for recovery',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are very less complications through this treatment. Some of the risks may be:',
              points: [
                'Numbness',
                'Infection',
                'Blood clots',
                'Injury to nerves in the knee',
                'Pain',
              ],
            },
          },
        ],
      },
      {
        question: 'Open Surgery',
        id: 'procedure-open-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'In this procedure, a large incision is made in the knee to repair the ligament.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'A large incision is made in the damaged knee',
                'The ligament is repaired/replaced through the incision',
                'The incision is sutured and the patient is taken to the recovery room',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '2- 3 days hospital stay with mild pain',
                'Resume to normal routine after 2-3 weeks and active sports after 6-12 months',
                'Having a diet of lean proteins, green leafy vegetables and citrus fruits is important for recovery',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are very less complications through this treatment. Some of the risks may be:',
              points: [
                'allergic or adverse reaction to anaesthesia or other drugs',
                'Bleeding',
                'Infection',
                'Injury to nerves and blood vessels in and around the knee',
              ],
            },
          },
        ],
      },
    ],
  },
  '18': {
    surgery: 'Medial Meniscus Tear',
    questionsList: [
      {
        question: 'What is Medial Meniscus Tear Surgery?',
        id: 'What-is-Medial-Meniscus-Tear-Surgery?',
      },
      {
        question: 'What causes a Medial Meniscus Tear?',
        id: 'What-causes-a-Medial-Meniscus-Tear?',
      },
      { question: 'Symptoms / when to call your doctor', id: 'symptoms' },
      { question: 'Why you should see a doctor?', id: 'why-see-doctor' },
      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },
      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },
      {
        question: 'Treatment for Medial Meniscus Tear',
        id: 'treatment-for-medial-meniscus-tear',
        children: [
          {
            question: 'Arthroscopic Repair',
            id: 'procedure-arthroscopic-repair',
          },
          {
            question: 'Arthroscopic Partial/ Total Meniscectomy',
            id: 'arthroscopic-partial/-total-meniscectomy',
          },
          {
            question: 'Open Surgery',
            id: 'procedure-open-surgery',
          },
        ],
      },
    ],
    data: [
      {
        question: 'What is Medial Meniscus Tear Surgery?',
        id: 'what-is-medial-meniscus-tear-surgery?',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The medial meniscus is a thick, rubbery layer in the knee which acts like a shock absorber. When there is a significant tear in this cartilage, you need to undergo a medial meniscus tear surgery to repair it.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/Img_18_m.png',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/Img_18_d.png',
              },
              alt: 'What is Medial Meniscus Tear Surgery?',
            },
          },
        ],
      },
      {
        question: 'What causes a Medial Meniscus Tear?',
        id: 'what-causes-a-medial-meniscus-tear?',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'During any activity, if there is forceful twist or rotation of the knee, a medial meniscus tear can happen. It is one of the most common injuries among athletes.',
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'A meniscus tear causes pain, swelling, difficulty in moving the knee and sometimes, there is a popping sound when the meniscus tears.',
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-see-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'If you experience symptoms of a medial meniscus tear, you should visit the doctor immediately to understand the extent of knee damage. Ignoring the symptoms may lead to:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Severe pain',
                'Inability to move the knee',
                'Osteoarthritis',
              ],
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'A medial meniscus tear can be diagnosed by a simple physical examination. To understand the extent of damage, the doctor may recommend:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'X ray',
                'MRI scan',
                'Arthroscopy- In this procedure, the doctor makes a small cut in the knee. A pencil sized tool is inserted to examine the extent of damage on a screen.',
              ],
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Having a healthy diet after the surgery is important. It will help the knee to heal faster. Some of the foods that you can include in the diet are:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Lean proteins like egg, chicken, fish, lentils',
                'Green leafy vegetables',
                'Citrus fruits',
              ],
            },
          },
        ],
      },
      {
        question: 'Treatment for a Medial Meniscus Tear',
        id: 'treatment-for-a-medial-meniscus-tear',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'The treatment for a medial meniscus tear differs based on the size, location and extent of the tear. The tears are graded as 1,2 and 3.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: 'For a Grade 1 or 2 tear, the doctor may recommend:',
              points: ['Rest', 'Physiotherapy', 'Pain medication'],
            },
          },
          {
            component: 'description',
            data: {
              value:
                'However, if it is a Grade 3 tear, you will need to undergo surgery.',
            },
          },
          {
            component: 'table',
            data: {
              heading: 'Types of treatments:',
              data: {
                headings: [
                  'Specifics',
                  'Arthroscopic Repair/Meniscectomy',
                  'Open Surgery',
                ],
                data: [
                  [
                    'Incision',
                    '2-3 Small incisions',
                    'Large incision across the knee',
                  ],
                  ['Blood Loss', 'Less', 'High'],
                  ['Recovery time', '2-3 weeks', '2-3 weeks'],
                  ['Hospital stay', '1 day', '2-3 days'],
                  ['Invasive', 'No', 'Yes'],
                ],
              },
            },
          },
        ],
      },
      {
        question: 'Arthroscopic Repair',
        id: 'procedure-arthroscopic-repair',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'An arthroscopic surgery also called; keyhole surgery is a simple 1-hour surgery to repair the in the knee.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given local anaesthesia for the procedure',
                'Small incisions are made in the knee',
                'A tiny camera is inserted into the incision',
                'The camera footage is visible on a screen which guides the doctor to perform the surgery',
                'The torn meniscus is stitched',
                'The incisions are taped and the patient is taken to the recovery room.',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1-day hospital stay with mild pain',
                'Resume to normal routine after 2-3 weeks and complete recovery in 6 weeks',
                'Using ice pack to relieve swelling and regular exercise to strengthen the knee are advised',
                'Having a diet of lean proteins, green leafy vegetables and citrus fruits is important for recovery',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are very less complications through this treatment. Some of the risks may be:',
              points: [
                'Numbness',
                'Infection',
                'Blood clots',
                'Injury to nerves in the knee',
                'Pain',
              ],
            },
          },
        ],
      },
      {
        question: 'Arthroscopic Partial/ Total Meniscectomy',
        id: 'procedure-arthroscopic-partial/-total-meniscectomy',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'When the meniscus is damaged to the extent that it cannot be stitched together, this procedure is used to repair the knee.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given local anaesthesia for the procedure',
                'Small incisions are made in the knee',
                'A tiny camera is inserted into the incision',
                'The camera footage is visible on a screen which guides the doctor to perform the surgery',
                'The torn meniscus is trimmed (partial meniscectomy) or completely removed (total meniscectomy) based on the extent of damage',
                'The incisions are taped and the patient is taken to the recovery room',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1-day hospital stay with mild pain',
                'Resume to normal routine after 2-3 weeks and complete recovery in 3 months',
                'Using ice pack to relieve swelling and regular exercise to strengthen the knee are advised',
                'Having a diet of lean proteins, green leafy vegetables and citrus fruits is important for recovery',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are very less complications through this treatment. Some of the risks may be:',
              points: [
                'Numbness',
                'Infection',
                'Blood clots',
                'Injury to nerves in the knee',
                'Pain',
              ],
            },
          },
        ],
      },
      {
        question: 'Open Surgery',
        id: 'procedure-open-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'In this procedure, a large incision is made in the knee to repair the cartilage.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'A large incision is made in the damaged knee',
                'The cartilage is repaired/removed partially or completely through the incision',
                'The incision is sutured and the patient is taken to the recovery room.',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '2- 3 days hospital stay with mild pain',
                'Resume to normal routine after 2-3 weeks and complete recovery after 3-6 months',
                'Having a diet of lean proteins, green leafy vegetables and citrus fruits is important for recovery',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are very less complications through this treatment. Some of the risks may be:',
              points: [
                'allergic or adverse reaction to anaesthesia or other drugs',
                'Bleeding',
                'Infection',
                'Injury to nerves and blood vessels in and around the knee',
              ],
            },
          },
        ],
      },
    ],
  },
  '19': {
    surgery: 'Slip Disc or Herniated Disc',
    questionsList: [
      { question: 'What is a Slip Disc?', id: 'what-is-a-slip-disc?' },
      { question: 'What causes a Slip Disc?', id: 'what-causes-a-slip-disc?' },
      { question: 'Symptoms / when to call your doctor', id: 'symptoms' },
      { question: 'Why you should see a doctor?', id: 'why-see-doctor' },
      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },
      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },
      {
        question: 'Treatment for Slip Disc',
        id: 'treatment-for-slip-disc',
        children: [
          {
            question: 'Laminotomy or Laminectomy',
            id: 'procedure-laminotomy-or-laminectomy',
          },
          {
            question: 'Spinal Fusion',
            id: 'procedure-spinal-fusion',
          },
          {
            question: 'Artificial Disc Surgery',
            id: 'procedure-artificial-disc-surgery',
          },
          {
            question: 'Discectomy',
            id: 'procedure-discectomy',
          },
        ],
      },
    ],
    data: [
      {
        question: 'What is a Slip Disc?',
        id: 'what-is-a-slip-disc?',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Our spine is made of discs that are made of outer and inner rings. When an outer ring gets torn or weak, the inner ring slips out of it. This condition is called a slip disc or herniated disc.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/Img_19_m.png',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/Img_19_d.png',
              },
              alt: 'What is a Slip Disc?',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/Img_19_1_m.png',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/Img_19_1_d.png',
              },
              alt: 'What is a Slip Disc?',
            },
          },
        ],
      },
      {
        question: 'What causes a Slip Disc?',
        id: 'what-causes-a-slip-disc?',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'There are various reasons for someone to develop a slip disc. Some of the common reasons are:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Sedentary lifestyle',
                'Incorrect posture',
                'Aging',
                'Lifting heavy weights',
                'Obesity',
              ],
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Slip disc causes pain and numbness in the lower back. You should visit a doctor if you experience:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Pain that becomes severe with certain movements and activities',
                'Tingling or numbness',
                'Inability to hold things due to weakness in muscles',
              ],
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-see-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Most people experience only a mild pain with a slip disc. However, if the symptoms worsen, it’s advisable to seek the help of a doctor. Ignoring the symptoms may lead to:',
            },
          },

          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Severe pain or numbness in the lower back',
                'Incontinence- Bladder or bowel',
                'Loss of sensation in thighs, legs',
              ],
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Usually 3 types of tests are conducted to check for a slip disc. They are:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Physical examination',
                'Imaging tests like MRI, CT scan, X ray',
                'Nerve tests',
              ],
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'A healthy diet is recommended after surgery. You must include:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'Some of the foods that you can include in the diet are:',
              points: ['Lean proteins', 'Low fat dairy', 'High fibre food'],
            },
          },
        ],
      },
      {
        question: 'Treatment for a Slip Disc',
        id: 'treatment-for-a-slip-disc',
        answers: [
          {
            component: 'description',
            data: {
              value: 'A simple slip disc can be treated using:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Medication',
                'Physiotherapy',
                'Injections',
                'Yoga, acupuncture or massage',
              ],
            },
          },
          {
            component: 'description',
            data: {
              value:
                'But, if you experience worsening symptoms of pain and numbness, the doctor might suggest surgery.',
            },
          },
        ],
      },
      {
        question: 'Laminotomy or Laminectomy',
        id: 'procedure-laminotomy-or-laminectomy',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'In this procedure, a portion or the entire lamina (a part of the spinal cord) is removed. This procedure relieves the pressure on the nerves, resolving pain and other slip disc related symptoms.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given spinal or general anaesthesia for the procedure',
                'A small incision is made in the back or neck',
                'A tiny camera is inserted into the incision',
                'The camera footage is visible on a screen which guides the doctor to perform the surgery',
                'The lamina is partially or completely removed',
                'The incisions are closed and the patient is taken to the recovery area.',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1-day hospital stay with mild pain',
                'Complete recovery takes several weeks',
                'Physiotherapy is important for recovery',
                'Simple, nutritious diet is recommended',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'Some of the risks associated with this procedure are:',
              points: [
                'Infections',
                'Bleeding',
                'Severe breathing problems',
                'Nerve injuries causing pain, numbness and weakness',
              ],
            },
          },
        ],
      },
      {
        question: 'Spinal Fusion',
        id: 'procedure-spinal-fusion',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Depending on which disc in the spine is damaged, the doctor will recommend if you can undergo a spinal fusion surgery. In this procedure, two bones in the spine are joined by screws to stabilize the spine and relieve pain.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anesthesia for the procedure',
                'The doctor performs the surgery from the front or from the back depending on the location of the disc',
                'So, the doctor makes an incision in the front or back and reaches into the spine',
                'A screw, rod or a piece of bone is placed to fuse the damaged part of the spine',
                'The incisions are closed and the patient is taken to the recovery room',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '4 days hospital stay with mild pain',
                'Complete recovery takes 3-6 months',
                'Physiotherapy along with a healthy diet consisting of calcium, minerals and vitamins is recommended',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'Some of the risks associated with this procedure are:',
              points: [
                'Infection',
                'Bleeding',
                'Nerve injury',
                'Risks of anesthesia',
              ],
            },
          },
        ],
      },
      {
        question: 'Discectomy',
        id: 'procedure-discectomy',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Through this procedure, the pressure on the nerves is reduced, thereby reducing pain and numbness caused by a slip disc. This surgery works when the outer ring of the disc is undamaged.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'The doctor makes an incision and reaches into the spine',
                'The herniated part of the disc is removed',
                'The incision is closed and the patient is taken to the recovery room',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1-3 days hospital stay with mild pain',
                'Complete recovery takes 1-4 weeks',
                'Physiotherapy along with a healthy diet is advised',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'Some of the risks associated with this procedure are:',
              points: [
                'Infection',
                'Bleeding',
                'Nerve injury',
                'Deep vein thrombosis',
                'Lung problems',
              ],
            },
          },
        ],
      },
      {
        question: 'Artificial Disc Surgery',
        id: 'procedure-artificial-disc-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This procedure is used when there is a problem with a single disc.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anesthesia for the procedure',
                'The doctor approaches the damaged disc by making an incision in the abdomen',
                'The damaged disc is replaced with an artificial disc',
                'The incision is closed and the patient is taken to the recovery room',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                '1-3 days hospital stay with mild pain',
                'Complete recovery takes several weeks',
                'Physiotherapy along with a healthy diet is advised',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'Some of the risks associated with this procedure are:',
              points: [
                'Infection',
                'Bleeding',
                'Nerve injury',
                'Risks of anesthesia',
                'Spinal injury',
              ],
            },
          },
        ],
      },
    ],
  },
  '20': {
    surgery: 'Hysterectomy',

    questionsList: [
      { question: 'What is a Hysterectomy?', id: 'what-is-a-hysterectomy?' },

      {
        question: 'What causes problems in the uterus?',
        id: 'what-causes-problems-in-the -uterus?',
      },

      { question: 'Symptoms / when to call your doctor', id: 'symptoms' },

      { question: 'Why you should see a doctor?', id: 'why-see-doctor' },

      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },

      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },

      {
        question: 'Treatment for Problems in the Uterus',

        id: 'treatment-for-problems-in-the-uterus',

        children: [
          {
            question: 'Vaginal Hysterectomy',

            id: 'procedure-vaginal-hysterectomy',
          },

          {
            question: 'Robot-assisted Hysterectomy',

            id: 'procedure-robot-assisted-hysterectomy',
          },
          {
            question: 'Laparoscopic Hysterectomy',

            id: 'procedure-laparoscopic-hysterectomy',
          },
          {
            question: 'Abdominal Hysterectomy',

            id: 'procedure-abdominal-hysterectomy',
          },
        ],
      },
    ],

    data: [
      {
        question: 'What is a Hysterectomy?',

        id: 'what-is-a-what-is-a-hysterectomy?',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'A hysterectomy is a surgical procedure for partial or complete removal of a woman’s uterus, ovaries and fallopian tubes. This surgery is conducted when the patient is suffering from heavy bleeding due to fibroids, pain, uterine prolapse in which the uterus slips into the vagina or even cancer. Once the uterus is removed, the woman cannot become pregnant. Hence, this surgery is only done when there is no other alternative treatment.',
            },
          },

          {
            component: 'image',

            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/hysterectomy_m.png',

                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/hysterectomy_d.png',
              },

              alt: 'What is a Hysterectomy?',
            },
          },
        ],
      },

      {
        question: 'What causes problems in the uterus?',

        id: 'what-causes-problems-in-the-uterus?',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'The main cause of problems in the uterus is hormonal imbalance. When the hormones oestrogen and progesterone are produced in abnormal quantities, they cause problems like development of fibroids, cancer, endometriosis (abnormal growth of uterine lining), heavy bleeding, pain etc.',
            },
          },
        ],
      },

      {
        question: 'Symptoms / when to call your doctor',

        id: 'symptoms',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'When there is a problem in the uterus, most of common symptoms that you might experience are:',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: '',

              description: '',

              points: [
                'Heavy bleeding',

                'Pain in the abdomen',

                'Irregular periods',
                'Pain or discomfort during sexual intercourse',
                'Frequent urination or constipation',
                'A feeling of something coming out of the vagina',
              ],
            },
          },
        ],
      },

      {
        question: 'Why you should see a doctor?',

        id: 'why-see-doctor',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'If you experience any of the symptoms mentioned above, you should see a doctor immediately. Ignoring the symptoms may lead to:',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: '',

              description: '',

              points: [
                'Bleeding',

                'Ureter Damage',

                'Bladder or bowel damage',
                'Infection and blood clots',
                'Ovary failure',
              ],
            },
          },
        ],
      },

      {
        question: 'How is it diagnosed?',

        id: 'how-is-it-diagnosed',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'The doctor decides if you need a hysterectomy based on the flowing tests:',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: '',

              description: '',

              points: [
                'Pelvic exam',
                'Pap smear',
                'Endometrial sampling (biopsy of lining of the uterus)',
                'Pelvic ultrasound or Pelvic CT scan',
              ],
            },
          },
        ],
      },

      {
        question: 'Dietary Restrictions',

        id: 'dietary-restrictions',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'After the surgery, you should eat foods that are easy on the digestive system. Eating small, frequent meals helps. Some of the foods that you can include in the diet are:',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: '',

              description: '',

              points: [
                'High fibre food',

                'Fruits and vegetables',

                'Lean proteins like fish, eggs, nuts',
                'Food with low fat and low sugar',
              ],
            },
          },
        ],
      },

      {
        question: 'Treatment for Problems in the Uterus',

        id: 'treatment-for-problems-in-the-uterus',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'The doctor will recommend the required treatment based on the findings from the tests and examinations.',
            },
          },
          {
            component: 'table',

            data: {
              heading: 'Types of treatments:',

              data: {
                headings: [
                  'Specifics',

                  'Vaginal Hysterectomy',

                  'Robot Assisted Hysterectomy',
                  'Laparoscopic Hysterectomy',
                  'Abdominal Hysterectomy',
                ],

                data: [
                  ['Incision', '1-2 inch', 'Small', 'Small', '5-7 inch'],

                  ['Blood Loss', 'Less', 'Less', 'Less', 'High'],

                  [
                    'Recovery time',

                    '3-4 weeks for complete recovery',
                    '3-4 weeks for complete recovery',
                    '3-4 weeks for complete recovery',

                    '6-8 weeks for complete recovery',
                  ],

                  ['Invasive', 'No', 'No', 'No', 'Yes'],
                  [
                    'Scar',
                    'No visible scar',
                    'No visible scar',
                    'No visible scar',
                    'Visible scar',
                  ],
                ],
              },
            },
          },
        ],
      },

      {
        question: 'Vaginal Hysterectomy',

        id: 'procedure-vaginal-hysterectomy',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'In this procedure, an incision is made in the vagina to remove the uterus.',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Flow of the procedure:',

              description: '',

              points: [
                'Patient is given general anesthesia for the procedure',

                'A 1-2 inch incision is made in the vagina',

                'The doctor makes a cut in the vaginal wall to reach to the uterus',

                'The uterus is removed through the incision',

                'The incision is taped and the patient is taken to the recovery room',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Recovery Time and Dietary Advice:',

              description: '',

              points: [
                '2- 3 days hospital stay with mild pain',

                'Resume to normal routine after 3-4 weeks',

                'Simple, bland, nutritious, fibre rich food',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Risks involved in the treatment:',

              description:
                'There are very less complications through this treatment. Some of the risks may be:',

              points: [
                'Allergic or adverse reaction to anaesthesia or other drugs',

                'Bleeding',

                'Infection',

                'Vaginal prolapse or Vaginal fistula',

                'Severe pain',
              ],
            },
          },
        ],
      },

      {
        question: 'Robot-assisted Hysterectomy',

        id: 'procedure-robot-assisted-hysterectomy',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'In this procedure, a tiny robot is inserted through an incision to remove the uterus.',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Flow of the procedure:',

              description: '',

              points: [
                'Patient is given general anaesthesia for the procedure',

                'A 1-2 inch incision is made in the vagina',

                'A tiny robot is inserted into the incision',

                'The camera footage is visible on a screen which guides the doctor to perform the surgery',
                'The uterus is removed through the incisions',
                'The incision is taped and the patient is taken to the recovery room',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Recovery Time and Dietary Advice:',

              description: '',

              points: [
                '2- 3 days hospital stay with mild pain',

                'Resume to normal routine after 3-4 weeks',

                'Simple, bland, nutritious, fibre rich food',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Risks involved in the treatment:',

              description:
                'There are very less complications through this treatment. Some of the risks may be:',

              points: [
                'Allergic or adverse reaction to anaesthesia or other drugs',
                'Bleeding',
                'Infection',
                'Urinary incontinence',
                'Vaginal prolapse or Vaginal fistula',
                'Severe pain',
              ],
            },
          },
        ],
      },
      {
        question: 'Laparoscopic Hysterectomy',

        id: 'procedure-laparoscopic-hysterectomy',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'In this procedure, a camera is inserted through a small incision made in the vagina though which the uterus is removed.',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Flow of the procedure:',

              description: '',

              points: [
                'Patient is given general anaesthesia for the procedure',

                'A 1-2 inch incision is made in the vagina',

                'A tiny camera is inserted into the incision',

                'The camera footage is visible on a screen which guides the doctor to perform the surgery',
                'The uterus is removed through the incision',
                'The incision is taped and the patient is taken to the recovery room',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Recovery Time and Dietary Advice:',

              description: '',

              points: [
                '2- 3 days hospital stay with mild pain',

                'Resume to normal routine after 3-4 weeks',

                'Simple, bland, nutritious, fibre rich food',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Risks involved in the treatment:',

              description:
                'There are very less complications through this treatment. Some of the risks may be:',

              points: [
                'Allergic or adverse reaction to anaesthesia or other drugs',
                'Bleeding',
                'Infection',
                'Urinary incontinence',
                'Vaginal prolapse or Vaginal fistula',
                'Severe pain',
              ],
            },
          },
        ],
      },
      {
        question: 'Abdominal Hysterectomy',

        id: 'procedure-abdominal-hysterectomy',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'This is an open surgery in which the uterus is removed directly from a large incision made in the lower abdomen.',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Flow of the procedure:',

              description: '',

              points: [
                'Patient is given general anaesthesia for the procedure',

                'A large 5-7 inch incision is made in the abdomen',

                'The doctor reaches into the lower abdomen and removes the uterus',

                'The incision is sutured and the patient is taken into the recovery room',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Recovery Time and Dietary Advice:',

              description: '',

              points: [
                '2- 3 days hospital stay',

                'Resume to normal routine after 6-8 weeks',

                'Simple, bland, nutritious, fibre rich food',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Risks involved in the treatment:',

              description: 'Some of the risks may be:',

              points: [
                'Allergic or adverse reaction to anaesthesia or other drugs',
                'Bleeding',
                'Infection',
                'Urinary incontinence',
                'Vaginal prolapse or Vaginal fistula',
                'Severe pain',
              ],
            },
          },
        ],
      },
    ],
  },
  '21': {
    surgery: 'Ovarian Cystectomy',

    questionsList: [
      {
        question: 'What is an Ovarian Cystectomy?',
        id: 'what-is-an-ovarian-cystectomy?',
      },

      {
        question: 'What causes ovarian cysts?',
        id: 'what-causes-ovarian-cysts?',
      },

      { question: 'Symptoms / when to call your doctor', id: 'symptoms' },

      { question: 'Why you should see a doctor?', id: 'why-see-doctor' },

      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },

      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },

      {
        question: 'Treatment for Ovarian Cyst',

        id: 'treatment-for-ovarian-cyst',

        children: [
          {
            question: 'Laparoscopic Surgery',

            id: 'procedure-laparoscopic-surgery',
          },

          {
            question: 'Laparotomy',

            id: 'procedure-laparotomy',
          },
        ],
      },
    ],

    data: [
      {
        question: 'What is an Ovarian Cystectomy?',

        id: 'what-is-an-ovarian-cystectomy?',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'An ovarian cystectomy is a procedure to remove one or more cysts from the ovaries. In women, ovaries are reproductive organs where the eggs mature. Sometimes, fluid fills on the surface or inside the ovary forming a cyst. If the cyst causes serious health problems, an ovarian cystectomy is done to remove the cyst.',
            },
          },

          {
            component: 'image',

            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/Ovarian_m.png',

                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/Ovarian_d.png',
              },

              alt: 'What is an Ovarian Cystectomy?',
            },
          },
        ],
      },

      {
        question: 'What causes ovarian cysts?',

        id: 'what-causes-ovarian-cysts?',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'Ovaries have a sac called follicle where the eggs develop and mature. When the egg is released, the follicle should break. If the follicle does not break, the fluid inside it is retained which forms the cyst.',
            },
          },
        ],
      },

      {
        question: 'Symptoms / when to call your doctor',

        id: 'symptoms',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'Usually, cysts are harmless. They form and disappear on their own. However, sometimes they cause symptoms like:',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: '',

              description: '',

              points: [
                'Pain in the pelvic area',

                'Bloating and heaviness in the abdomen',

                'Fever, nausea, chills',
                'Painful bowel movements',
              ],
            },
          },
        ],
      },

      {
        question: 'Why you should see a doctor?',

        id: 'why-see-doctor',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'If the cyst does not cause any discomfort, you can ignore it. However, if you experience any of the symptoms, there is a chance of rupture of the cyst. Rupturing of the cyst may cause a life-threatening immune system response called sepsis. Hence, visiting a doctor when you experience any symptoms is important.',
            },
          },
        ],
      },

      {
        question: 'How is it diagnosed?',

        id: 'how-is-it-diagnosed',

        answers: [
          {
            component: 'description',

            data: {
              value: 'An ovarian cyst is diagnosed by the doctor using a:',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: '',

              description: '',

              points: ['Pelvic exam', 'Ultrasound to confirm the cyst'],
            },
          },
        ],
      },

      {
        question: 'Dietary Restrictions',

        id: 'dietary-restrictions',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'After the surgery, you should avoid foods that make you resistant. You should try to have a diet which has:',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: '',

              description: '',

              points: [
                'High fibre food',

                'Lean proteins like fish, egg, and chicken',

                'Anti-inflammatory foods and spices, including tomatoes, turmeric, etc',
              ],
            },
          },
        ],
      },

      {
        question: 'Treatment for Ovarian Cyst',

        id: 'treatment-for-ovarian-cyst',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'Harmless ovarian cysts can be ignored. However, if the doctor recommends that the cyst needs to be removed, you’ll need to undergo surgery for it.',
            },
          },
          {
            component: 'table',

            data: {
              heading: 'Types of treatments:',

              data: {
                headings: ['Specifics', 'Laparoscopic Surgery', 'Laparotomy'],

                data: [
                  ['Invasive', 'Less', 'High'],

                  ['Incision', '1-2 inch', 'Large incision'],

                  ['Recovery time', 'Within a week', '1-2 weeks'],

                  ['Pain', 'Less', 'More'],
                  ['Risk of infection', 'Low', 'High'],
                ],
              },
            },
          },
        ],
      },

      {
        question: 'Laparoscopic Surgery',

        id: 'procedure-laparoscopic-surgery',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'In this procedure, the cyst is removed through a small incision near the navel.',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Flow of the procedure:',

              description: '',

              points: [
                'Patient is given general anaesthesia for the procedure',

                'A small incision is made near the navel',

                'Using small laparoscopic instruments, the cyst is removed through the incision',

                'The incision is taped or sutured and the patient is taken to the recovery room',

                'The cyst is immediately tested for cancer',
                'If the cyst is found to be cancerous, the ovaries are also removed.',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Recovery Time and Dietary Advice:',

              description: '',

              points: [
                'Hospital stay is not required',

                'You will need to visit the doctor to check on the stitches are a few days',

                'Resume to normal routine after 1-2 weeks',
                'Nutritious, fibre rich and well-balanced diet is advised',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Risks involved in the treatment:',

              description:
                'There are very less complications through this treatment. Some of the risks may be:',

              points: [
                'Infections',

                'Redness, swelling, bleeding from the incision site',

                'Vaginal bleeding or discharge',
              ],
            },
          },
        ],
      },

      {
        question: 'Laparotomy',

        id: 'procedure-laparotomy',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'In this procedure, a large incision is made in the abdomen to remove the cyst.',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Flow of the procedure:',

              description: '',

              points: [
                'Patient is given general anaesthesia for the procedure',

                'A large incision is made in the abdomen',

                'The cyst is removed through the incision',

                'The incision is sutured and the patient is taken to the recovery room',
                'The cyst is immediately tested for cancer',
                'If the cyst is found to be cancerous, the ovaries are also removed.',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Recovery Time and Dietary Advice:',

              description: '',

              points: [
                '2- 4 days hospital stay with mild pain',

                'Resume to normal routine after 4-6 weeks',

                'Nutritious, fibre rich and well-balanced diet is advised',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Risks involved in the treatment:',

              description: 'Some of the risks of the surgery may be:',

              points: [
                'Allergic or adverse reaction to anaesthesia or other drugs',
                'Bleeding',
                'Infection',
                'Injury to bowel or bladder',
                'Severe pain',
              ],
            },
          },
        ],
      },
    ],
  },
  '22': {
    surgery: 'Myomectomy',

    questionsList: [
      { question: 'What is a Myomectomy?', id: 'what-is-a-myomectomy?' },

      {
        question: 'What causes fibroids in the uterus?',
        id: 'what-causes-fibroids-in-the-uterus?',
      },

      { question: 'Symptoms / when to call your doctor', id: 'symptoms' },

      { question: 'Why you should see a doctor?', id: 'why-see-doctor' },

      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },

      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },

      {
        question: 'Treatment for Fibroids in the Uterus',

        id: 'treatment-for-fibroids-in-the-uterus',

        children: [
          {
            question: 'Hysteroscopic Myomectomy',

            id: 'procedure-hysteroscopic-myomectomy',
          },

          {
            question: 'Robotic Myomectomy',

            id: 'procedure-robotic-myomectomy',
          },
          {
            question: 'Laparoscopic Myomectomy',

            id: 'procedure-laparoscopic-myomectomy',
          },
          {
            question: 'Abdominal Myomectomy',

            id: 'procedure-abdominal-myomectomy',
          },
        ],
      },
    ],

    data: [
      {
        question: 'What is a Myomectomy?',

        id: 'what-is-a-myomectomy?',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'A myomectomy is a surgical procedure to remove fibroids from a woman’s uterus. Fibroids are benign growths in the uterus. Based on the location of growth in the uterus, they are categorized into different types.',
            },
          },

          {
            component: 'image',

            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/Myomectomy_m.png',

                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/Myomectomy_d.png',
              },

              alt: 'What is a Hysterectomy?',
            },
          },
        ],
      },

      {
        question: 'What causes fibroids in the uterus?',

        id: 'what-causes-fibroids-in-the-uterus?',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'The exact reason why fibroids form is unknown. They may be caused because of genetics or hormonal imbalances.',
            },
          },
        ],
      },

      {
        question: 'Symptoms / when to call your doctor',

        id: 'symptoms',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'Most fibroids do not cause any symptoms and are harmless. However, when the fibroids grow too large, they cause symptoms like:',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: '',

              description: '',

              points: [
                'Heavy bleeding',

                'Pain in the abdomen, lower back and pelvis',

                'Irregular or longer lasting periods',
                'Pain or discomfort during sexual intercourse',
                'Frequent urination or constipation',
              ],
            },
          },
        ],
      },

      {
        question: 'Why you should see a doctor?',

        id: 'why-see-doctor',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'Ignoring symptoms related to fibroids is not advisable. Not getting the fibroids treated may lead to:',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: '',

              description: '',

              points: [
                'Very heavy bleeding',

                'Anaemia',

                'Infertility',
                'Urinary incontinence',
              ],
            },
          },
        ],
      },

      {
        question: 'How is it diagnosed?',

        id: 'how-is-it-diagnosed',

        answers: [
          {
            component: 'description',

            data: {
              value: 'Fibroids in the uterus can be detected by tests like:',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: '',

              description: '',

              points: ['Pelvic exam', 'MRI', 'Ultrasound', 'Hysteroscopy'],
            },
          },
        ],
      },

      {
        question: 'Dietary Restrictions',

        id: 'dietary-restrictions',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'There are no specific diet restrictions to be followed after a myomectomy. However, if you have an upset stomach, you should stick to a bland diet consisting of plain rice, toast etc',
            },
          },
        ],
      },

      {
        question: 'Treatment for Fibroids in the Uterus',

        id: 'treatment-for-fibroids-in-the-uterus',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'As long as the fibroids don’t cause any discomfort, they can be ignored. However, if you face problems due to the fibroids, the doctor will suggest a myomectomy.',
            },
          },
          {
            component: 'table',

            data: {
              heading: 'Types of treatments:',

              data: {
                headings: [
                  'Specifics',

                  'Hysteroscopic Myomectomy',

                  'Robotic Myomectomy',
                  'Laparoscopic Myomectomy',
                  'Abdominal Myomectomy',
                ],

                data: [
                  [
                    'Incision',
                    '1-2 inch in the vagina',
                    '1-2 inch',
                    '1-2 inch',
                    '5-7 inch',
                  ],

                  ['Blood Loss', 'Less', 'Less', 'Less', 'High'],

                  [
                    'Recovery time',

                    'Few days',
                    '4 weeks for complete recovery',
                    '4 weeks for complete recovery',

                    '6-8 weeks for complete recovery',
                  ],

                  ['Invasive', 'No', 'No', 'No', 'Yes'],
                  [
                    'Scar',
                    'No visible scar',
                    'No visible scar',
                    'No visible scar',
                    'Visible scar',
                  ],
                ],
              },
            },
          },
        ],
      },

      {
        question: 'Hysteroscopic Myomectomy',

        id: 'procedure-hysteroscopic-myomectomy',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'This procedure is applicable only for submucosal fibroids which are in the uterine cavity. The fibroids in the uterine wall cannot be removed through this procedure.',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Flow of the procedure:',

              description: '',

              points: [
                'Patient is given general anaesthesia for the procedure',

                'A 1-2 inch incision is made in the vagina',

                'An instrument called hysteroscopic resectoscope is passed through the vagina into the uterine cavity',

                'The fibroids are removed through the vagina',

                'The incision is taped and the patient is taken to the recovery room',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Recovery Time and Dietary Advice:',

              description: '',

              points: [
                'Hospital stay is not necessary',

                'Resume to normal routine after a few days',

                'Simple, bland, nutritious, fibre rich food',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Risks involved in the treatment:',

              description:
                'There are very less complications through this treatment. Some of the risks may be:',

              points: [
                'Allergic or adverse reaction to anaesthesia or other drugs',

                'Bleeding',

                'Infection',

                'Recurrence of fibroids',
              ],
            },
          },
        ],
      },

      {
        question: 'Robotic Myomectomy',

        id: 'procedure-robotic-myomectomy',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'In this procedure, a tiny robot is inserted through an incision in the vagina to remove the fibroids.',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Flow of the procedure:',

              description: '',

              points: [
                'Patient is given general anaesthesia for the procedure',

                '4 small incisions are made in the abdomen',

                'A tiny robot is inserted through one of the incisions',

                'The camera footage is visible on a screen which guides the doctor to perform the surgery',
                'The fibroids are cut into smaller bits and removed through the incisions',
                'The incisions are taped and the patient is taken to the recovery room',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Recovery Time and Dietary Advice:',

              description: '',

              points: [
                '1-day hospital stay',

                'Resume to normal routine after 4 weeks',

                'Simple, bland, nutritious, fibre rich food',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Risks involved in the treatment:',

              description:
                'There are very less complications through this treatment. Some of the risks may be:',

              points: [
                'Allergic or adverse reaction to anaesthesia or other drugs',
                'Bleeding',
                'Infection',
              ],
            },
          },
        ],
      },
      {
        question: 'Laparoscopic Myomectomy',

        id: 'procedure-laparoscopic-myomectomy',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'This procedure can be used to remove smaller fibroids. If you have large or several fibroids, this procedure is not advisable.',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Flow of the procedure:',

              description: '',

              points: [
                'Patient is given general anaesthesia for the procedure',

                'Several small incisions are made',

                'Surgical and viewing instruments are inserted into the incisions',

                'The fibroids are removed through one of the incisions',
                'The incision is taped and the patient is taken to the recovery room',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Recovery Time and Dietary Advice:',

              description: '',

              points: [
                '1-day hospital stay',

                'Resume to normal routine after 4 weeks',

                'Simple, bland, nutritious, fibre rich food',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Risks involved in the treatment:',

              description:
                'There are very less complications through this treatment. Some of the risks may be:',

              points: [
                'Allergic or adverse reaction to anaesthesia or other drugs',
                'Bleeding',
                'Infection',
              ],
            },
          },
        ],
      },
      {
        question: 'Abdominal Myomectomy',

        id: 'procedure-abdominal-myomectomy',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'This is an open surgery in which the fibroids are removed directly from a large incision made in the lower abdomen.',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Flow of the procedure:',

              description: '',

              points: [
                'Patient is given general anaesthesia for the procedure',

                'A large incision is made in the abdomen',

                'The fibroids are removed from the large incision',

                'The incision is sutured using several stitches and the patient is taken into the recovery room',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Recovery Time and Dietary Advice:',

              description: '',

              points: [
                '2-3 days hospital stay',

                'Resume to normal routine after 6-8 weeks',

                'Simple, bland, nutritious, fibre rich food',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Risks involved in the treatment:',

              description: 'Some of the risks may be:',

              points: [
                'Allergic or adverse reaction to anaesthesia or other drugs',
                'Severe Bleeding',
                'Infection',
                'Severe pain',
              ],
            },
          },
        ],
      },
    ],
  },
  '23': {
    surgery: 'Dilation and Curettage (DNC)',

    questionsList: [
      {
        question: 'What is Dilation and Curettage?',
        id: 'what-is-dilation-and-curettage?',
      },

      { question: 'What are the causes?', id: 'what-are-the-causes?' },

      { question: 'Symptoms / when to call your doctor', id: 'symptoms' },

      { question: 'Why you should see a doctor?', id: 'why-see-doctor' },

      { question: 'How is it diagnosed?', id: 'how-is-it-diagnosed' },

      { question: 'Dietary Restrictions', id: 'dietary-restrictions' },

      {
        question:
          'Treatment for Miscarriage/Pregnancy Termination/Uterine Polyps/Cancer',

        id:
          'treatment-for-miscarriage-PregnancyTermination-Uterine-Polyps-Cancer',

        children: [
          {
            question: 'Surgery',

            id: 'procedure-surgery',
          },
        ],
      },
    ],

    data: [
      {
        question: 'What is Dilation and Curettage?',

        id: 'what-is-dilation-and-curettage?',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'Dilation and Curettage is a simple procedure using which the uterine lining and tissues are removed. The cervix is first dilated and using a curette, the tissue is removed. This procedure is done after a miscarriage or pregnancy termination. It is also done to diagnose or treat fibroids or cancer.',
            },
          },

          {
            component: 'image',

            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/DNC_m.png',

                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/DNC_d.png',
              },

              alt: 'What is Dilation and Curettage?',
            },
          },
        ],
      },

      {
        question: 'What are the causes?',

        id: 'what-are-the-causes?',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'The most common cause of miscarriage or abnormal bleeding is infection. Another reason is hormonal imbalance. This hormonal imbalance also causes polyps and uterine cancer.',
            },
          },
        ],
      },

      {
        question: 'Symptoms / when to call your doctor',

        id: 'symptoms',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'You should visit a doctor if you experience any of these symptoms:',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: '',

              description: '',

              points: [
                'Heavy bleeding',

                'Bad smelling discharge from the vagina',

                'Irregular menstrual cycle',
              ],
            },
          },
        ],
      },

      {
        question: 'Why you should see a doctor?',

        id: 'why-see-doctor',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'If you are pregnant and you start bleeding, you should see your doctor immediately. This could be a life-threatening situation. If you are not pregnant but experience the symptoms listed above, you should still see a doctor to avoid:',
            },
          },
          {
            component: 'dottedPoints',

            data: {
              heading: '',

              description: '',

              points: [
                'Very heavy bleeding',

                'Severe pain',

                'Diagnosing cancer at later stages',
              ],
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',

        id: 'how-is-it-diagnosed',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'The doctor will determine if you need a DNC based on the situation. In most cases, a pelvic examination will help the doctor make a decision.',
            },
          },
        ],
      },

      {
        question: 'Dietary Restrictions',

        id: 'dietary-restrictions',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'There are no specific diet restrictions to be followed after a DNC procedure. It is advisable to eat bland food and drink plenty of fluids for a faster recovery.',
            },
          },
        ],
      },

      {
        question:
          'Treatment for Miscarriage/Pregnancy Termination/Uterine Polyps/Cancer',

        id:
          'treatment-for-miscarriage-pregnancytermination-uterine-polyps-cancer',

        answers: [
          {
            component: 'description',

            data: {
              value:
                'DNC is a simple outpatient procedure after which recovery takes a couple of days.',
            },
          },
        ],
      },

      {
        question: 'Surgery Procedure',

        id: 'procedure-surgery-procedure',

        answers: [
          {
            component: 'description',

            data: {
              value: '',
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Flow of the procedure:',

              description: '',

              points: [
                'Patient is given general or local anaesthesia for the procedure',

                'The doctor uses rods to dilate your cervix',

                'Using a spoon shaped instrument, the doctor scrapes out the uterine lining and tissue',

                'If there are polyps or fibroids to be removed, it is done through the vagina',

                'The patient is then taken to the recovery room',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Recovery Time and Dietary Advice:',

              description: '',

              points: [
                'Hospital stay is not required',

                'Resume to normal routine after one or two days',

                'Plenty of fluids along with bland food is recommended',
              ],
            },
          },

          {
            component: 'dottedPoints',

            data: {
              heading: 'Risks involved in the treatment:',

              description:
                'This is a rather simple procedure. However, some of the risks that it can cause are:',

              points: [
                'Severe bleeding',

                'Uterine cramps',

                'Infection',
                'Damage to uterus or cervix',
              ],
            },
          },
        ],
      },
    ],
  },
  '26': {
    surgery: 'Bilateral Total Knee Replacement Surgery',
    questionsList: [
      {
        question: 'घुटने की रिप्लेसमेंट सर्जरी (टोटल नी रेप्लेस्मेंट) क्या है?',
        id: 'what-is-bilateral-total-knee-replacement-surgery',
      },
      {
        question: 'घुटने के जोड़ों के दर्द का कारण क्या है?',
        id: 'what-causes-knee-joint-pain',
      },
      {
        question: 'लक्षण / अपने चिकित्सक को कब बुलाना है?',
        id: 'symptoms--when-to-call-your-doctor',
      },
      {
        question: 'आपको डॉक्टर से क्यों मिलना चाहिए?',
        id: 'why-you-should-see-a-doctor',
      },
      {
        question: 'इसका निदान (diagnosis) कैसे किया जाता है?',
        id: 'how-is-it-diagnosed',
      },
      { question: 'भोजन पर प्रतिबंध', id: 'dietary-restrictions' },
      {
        question: 'घुटने की रिप्लेसमेंट सर्जरी',
        id: 'bilateral-total-knee-replacement-surgery',
      },
    ],
    data: [
      {
        question: 'घुटने की रिप्लेसमेंट सर्जरी (टोटल नी रेप्लेस्मेंट) क्या है?',
        id: 'what-is-bilateral-total-knee-replacement-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'कुछ लोगों को चलते समय, सीढ़ियाँ चढ़ते समय या बैठते समय भी घुटने में तेज़ दर्द होता है। घुटने को बदलने की सर्जरी दर्द को कम करने के लिए की जाती है।',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_12_m.jpg',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_12_d.jpg',
              },
              alt: 'What is Bilateral Total Knee Replacement Surgery',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'इस प्रक्रिया में, घुटनों के कुछ हिस्सों को (जिन्हे नुकसान हो चुका है और दर्द का कारण बन रहे है) ऑर्टिफ़िशल सामग्री से बदल दिया जाता है। इससे व्यक्ति बिना किसी दर्द के साथ घूम सकता है।',
            },
          },
        ],
      },
      {
        question: 'घुटने के जोड़ों के दर्द का कारण क्या है?',
        id: 'what-causes-knee-joint-pain',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'घुटने के गंभीर दर्द के कई कारण हैं। उनमें से कुछ हैं:',
              points: [
                'उम्र के साथ जोड़ों में दर्द',
                'गठिया (आर्थ्राइटिस)',
                'दुर्घटना',
              ],
            },
          },
        ],
      },
      {
        question: 'लक्षण / अपने चिकित्सक को कब बुलाना है?',
        id: 'symptoms--when-to-call-your-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'जब घुटने के जोड़ों का दर्द इतना गंभीर होता है कि व्यक्ति को चलने, सीढ़ियाँ चढ़ने आदि में परेशानी होती है और दर्द दिन की दिनचर्या में बाधा डालता है, तो डॉक्टर को देखना जरूरी है।',
            },
          },
        ],
      },
      {
        question: 'आपको डॉक्टर से क्यों मिलना चाहिए?',
        id: 'why-you-should-see-a-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'यदि आप घुटने के जोड़ में काफ़ी समय से गंभीर दर्द महसूस कर रहे हैं, तो डॉक्टर को देखना सबसे अच्छा है क्योंकि दर्द उचित देखभाल और उपचार के बिना कम नहीं होगा।',
            },
          },
        ],
      },
      {
        question: 'इसका निदान (diagnosis) कैसे किया जाता है?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'डॉक्टर उचित उपचार की सिफारिश करने के लिये निम्नलिखित कर सकते हैं:',
              points: [
                'घुटने की स्थिति को समझने के लिए एक शारीरिक परीक्षा',
                'एक घुटने का जोड़ एक्स रे',
              ],
            },
          },
        ],
      },
      {
        question: 'भोजन पर प्रतिबंध',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'घुटने की रिप्लेसमेंट सर्जरी के बाद, आपके आहार में निम्नलिखित शामिल होने चाहिए:',
              points: [
                '2-3 लीटर पानी और तरल पदार्थ',
                'सादा, पौष्टिक, गोरा भोजन',
                'घुटनों में सूजन को कम करने वाले आहार (anti-inflammatory diet)',
                'शराब और धूम्रपान से बचने की सलाह दी जाती है',
              ],
            },
          },
        ],
      },
      {
        question: 'घुटने की रिप्लेसमेंट सर्जरी',
        id: 'bilateral-total-knee-replacement-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'इस प्रक्रिया का उपयोग दर्द को कम करने के लिए ऑर्टिफ़िशल सामग्री के साथ घुटने के जोड़ के क्षतिग्रस्त हिस्सों को बदलने के लिए किया जाता है।',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'प्रक्रिया का प्रवाह:',
              description: '',
              points: [
                'प्रक्रिया के लिए रोगी को ऐनस्थीसिया दिया जाता है',
                'घुटने के चारों ओर 6-10 इंच का चीरा लगाया जाता है',
                'क्षतिग्रस्त भागों को काट दिया जाता है और ऑर्टिफ़िशल सामग्री (इंप्लांट) को जोड़ के टुकड़ों पर रखा जाता है',
                'इंप्लांट को अपनी जगह पर फ़िट किया जाता है',
                'टांका लगाया जाता है और रोगी को रिकवरी क्षेत्र में ले जाया जाता हैt',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'रिकवरी समय और आहार सलाह:',
              description: '',
              points: [
                '2-3 दिनों में अस्पताल से छुट्टी मिल जाती है',
                '3-6 सप्ताह के बाद सामान्य दिनचर्या को फिर से शुरू करें',
                'घुटने को ठीक होने के लिए समय देने के लिए आपको धीरे-धीरे गतिविधि बढ़ानी चाहिए',
                'नियमित रूप से घुटने का व्यायाम करने से इसे वापस सामान्य स्थिति में लाने में मदद मिलेगी',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'उपचार में शामिल जोखिम:',
              description: 'प्रक्रिया के कुछ जोखिम हो सकते हैं:',
              points: [
                'खून के थक्के (क्लाट्स)',
                'संक्रमण',
                'दिल का दौरा',
                'मूत्र पथ के संक्रमण',
                'ज़्यादा खून बहना',
              ],
            },
          },
        ],
      },
    ],
  },
  '24': {
    surgery: 'Piles',
    questionsList: [
      { question: 'पाइल्स क्या हैं?', id: 'what-are-piles' },
      { question: 'बवासीर के कारण क्या है??', id: 'what-causes-piles' },
      {
        question: 'लक्षण / अपने चिकित्सक से कब मिले',
        id: 'symptoms--when-to-call-your-doctor',
      },
      {
        question: 'आपको डॉक्टर से कब मिलनि चाहिए??',
        id: 'why-you-should-see-a-doctor',
      },
      {
        question: 'इसका निदान (diagnosis) कैसे किया जाता है?',
        id: 'how-is-it-diagnosed',
      },
      { question: 'भोजन पर प्रतिबंध', id: 'dietary-restrictions' },
      { question: 'पाइल्स का इलाज', id: 'treatment-for-piles' },
      { question: 'लेसर प्रक्रिया', id: 'laser-procedure' },
      {
        question: 'स्टेपलर Haemorrhoidectomy',
        id: 'stapler-haemorrhoidectomy',
      },
      { question: 'पारंपरिक सर्जरी', id: 'traditional-surgery' },
    ],
    data: [
      {
        question: 'पाइल्स क्या हैं?',
        id: 'what-are-piles',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'बवासीर या बवासीर गुदा में सूजी हुई नसें होती हैं। वे अंदर (आंतरिक रक्तस्रावी) या बाहर (बाहरी रक्तस्रावी) गुदा में पाए जा सकते हैं।',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_3_m.jpg',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_3_d.jpg',
              },
              alt: 'What are Piles?',
            },
          },
        ],
      },
      {
        question: 'बवासीर के कारण क्या है?',
        id: 'what-causes-piles',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'निचले मलाशय में बढ़ते दबाव के कारण बवासीर बनता है। सबसे आम कारण हैं:',
              points: ['कब्ज', 'भारी वजन उठाना', 'दस्त', 'गर्भावस्था'],
            },
          },
        ],
      },
      {
        question: 'लक्षण / अपने चिकित्सक से कब मिले',
        id: 'symptoms--when-to-call-your-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'पाइल्स को उनकी गंभीरता के आधार पर ग्रेड I से ग्रेड IV के रूप में वर्गीकृत किया गया है।',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_5_d.jpg',
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_5_m.jpg',
              },
              alt: 'Symptoms / when to call your doctor Plies',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'ग्रेड I और II को जीवन शैली में बदलाव के द्वारा इलाज किया जा सकता है जबकि ग्रेड III और IV में सर्जरी की आवश्यकता हो सकती है।',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: 'लक्षणों में शामिल हैं:',
              points: [
                'मल के गुजरने के दौरान रक्तस्राव',
                'गुदा में खुजली या जलन',
                'मल पास करते समय दर्द',
                'गुदा के पास गांठ',
              ],
            },
          },
        ],
      },
      {
        question: 'आपको डॉक्टर से कब मिलनि चाहिए?',
        id: 'why-you-should-see-a-doctor',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'पाइल्स आमतौर पर जटिल स्वास्थ्य समस्याओं को जन्म नहीं देता है। लेकिन कुछ में, वे निम्नलिखित हो सकते हैं:',
              points: [
                'अत्याधिक पीड़ा',
                'मलाशय का कैंसर',
                'खून की कमी के कारण एनीमिया',
                'रक्त के थक्के (Blood clots) जो बहुत दर्दनाक हो सकते हैं',
              ],
            },
          },
        ],
      },
      {
        question: 'इसका निदान (diagnosis) कैसे किया जाता है?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'डॉक्टर गुदा क्षेत्र को देखकर बवासीर का निदान कर सकते हैं।यह सुनिश्चित करने के लिए कि कोई असामान्यताएं या जटिलताएं नहीं हैं, डॉक्टर एक डिजिटल रेक्टल परीक्षा कर सकते हैं जिसमें वह गुदा में एक दस्ताने वाली उंगली डालते हैं।',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'पाचन संबंधी विकार (digestive disorder) नहीं हैं यह सुनिश्चित करने के लिए डॉक्टर एक कोलोोनॉस्कोपी का सुझाव भी दे सकते हैं।',
            },
          },
        ],
      },
      {
        question: 'भोजन पर प्रतिबंध',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'जल्दी सही होने के लिए सर्जरी के बाद कब्ज से बचा जाना चाहिए। इसलिए, आपको इस तरह के भोजन का सेवन करना चाहिए:',
              points: [
                'फाइबर युक्त खाद्य पदार्थ',
                'सादा, पौष्टिक भोजन',
                'गैर मसालेदार और तेल में कम खाना',
                'शराब और कॉफी का सेवन न करे',
              ],
            },
          },
        ],
      },
      {
        question: 'पाइल्स का इलाज',
        id: 'treatment-for-piles',
        answers: [
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description:
                'ग्रेड I और II बवासीर जीवन शैली में बदलाव करके सही किया जा सकता है:',
              points: [
                'कब्ज से बचने के लिए फाइबर युक्त भोजन करें',
                'सित्ज (sitz) बाथ लेना',
                'आइस पैक का उपयोग करना',
                'जुलाब आदि।',
              ],
            },
          },
          {
            component: 'description',
            data: {
              value:
                'हालाँकि, ग्रेड III और IV पाइल्स के लिए सर्जरी की आवश्यकता हो सकती है।',
            },
          },

          {
            component: 'table',
            data: {
              heading: 'Types of treatments:',
              data: {
                headings: [
                  'Specifics',
                  'Laser Surgery',
                  'Stapler Haemorrhoidectomy',
                  'Traditional Surgery',
                ],
                data: [
                  ['Cuts and Wounds', 'No', 'No', 'Yes'],
                  ['Pain', 'No', 'No', 'Yes'],
                  ['Recurrence', 'No', 'Low possibility', 'Possible'],
                  ['Dietary Restriction', 'No', 'No', 'Yes'],
                  ['Recovery Time', '24 hours', '24 hours', '1-2 Weeks'],
                  ['Invasive', 'No', 'No', 'Yes'],
                ],
              },
            },
          },
        ],
      },
      {
        question: 'लेसर प्रक्रिया',
        id: 'laser-procedure',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'लेजर प्रक्रिया में कोई कटौती या घाव शामिल नहीं है। प्रक्रिया को पूरा होने में केवल कुछ मिनट लगते हैं।',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'प्रक्रिया का प्रवाह:',
              description: '',
              points: [
                'रोगी को एनीमा दिया जाता है',
                'एक लेजर उपकरण गुदा क्षेत्र में डाला जाता है',
                'लेजर से ऊर्जा को इसे सिकोड़ने के लिए द्रव्यमान पर केंद्रित किया जाता है',
                'सिकुड़ी हुई परत प्राकृतिक रूप से त्वचा का पालन करती है',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'रिकवरी समय और आहार सलाह:',
              description: '',
              points: [
                'हल्के दर्द के साथ 1 दिन की प्रक्रिया',
                'मरीज अगले दिन से सामान्य दिनचर्या को फिर से शुरू कर सकते हैं',
                'आहार - सरल, गोरा, पौष्टिक, फाइबर युक्त भोजन',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'उपचार में शामिल जोखिम:',
              description:
                'इस लेजर उपचार के माध्यम से बहुत कम जटिलताएं हैं। कुछ जोखिम हो सकते हैं:',
              points: [
                'दवाओं से एलर्जी या प्रतिकूल प्रतिक्रिया',
                'खून बहना',
                'संक्रमण',
                'पेशाब करने में असमर्थता जो किडनी की समस्याओं का संकेत हो सकता है',
              ],
            },
          },
        ],
      },
      {
        question: 'स्टेपलर Haemorrhoidectomy',
        id: 'stapler-haemorrhoidectomy',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'यह प्रक्रिया आमतौर पर बड़े आकार के आंतरिक रक्तस्राव के लिए की जाती है। इस प्रक्रिया के माध्यम से दर्द में महत्वपूर्ण कमी होती है।',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'प्रक्रिया का प्रवाह:',
              description: '',
              points: [
                'रोगी को प्रक्रिया के लिए सामान्य संज्ञाहरण दिया जाता है',
                'गुदा क्षेत्र में एक छोटी सी खोखली नली डाली जाती है',
                'आंतरिक रक्तस्राव को खोखले ट्यूब में समायोजित किया जाता है',
                'बवासीर के ऊपर का क्षेत्र सुप्त होता है और खींचा जाता है जो बवासीर को काट देता है',
                'पूरी प्रक्रिया को पूरा होने में लगभग 30 मिनट लगते हैं',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'रिकवरी समय और आहार सलाह:',
              description: '',
              points: [
                'हल्के दर्द के साथ 1 दिन मे अस्पताल से छुट्टी',
                'अगले दिन से सामान्य दिन की दिनचर्या फिर से शुरू करें',
                'सर्जरी के 4 घंटे बाद सामान्य आहार। फाइबर युक्त भोजन की सलाह दी जाती है।',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'उपचार में शामिल जोखिम:',
              description: 'प्रक्रिया के कुछ जोखिम हो सकते हैं:',
              points: [
                'अधिकतम खून बहना',
                'सर्जिकल घाव का संक्रमण',
                'Anal fissure',
                'Scarring',
                'Trauma to rectal wall',
              ],
            },
          },
        ],
      },
      {
        question: 'पारंपरिक सर्जरी',
        id: 'traditional-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'पारंपरिक सर्जरी का उपयोग ज्यादातर आंतरिक रक्तस्राव के लिए किया जाता है। दो तरीके हैं - खुली और बंद सर्जरी, दोनों में कटौती और टांके शामिल हैं',
            },
          },

          {
            component: 'dottedPoints',
            data: {
              heading: 'प्रक्रिया का प्रवाह:',
              description: '',
              points: [
                'रोगी को प्रक्रिया के लिए सामान्य संज्ञाहरण दिया जाता है',
                'बवासीर गुदा क्षेत्र से एक स्केलपेल या कैंची का उपयोग करके काट दिया जाता है',
                'एक बंद सर्जरी के लिए, त्वचा को सुखाया जाता है जहां एक खुली सर्जरी में, प्राकृतिक चिकित्सा के लिए त्वचा को खुला छोड़ दिया जाता है',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'रिकवरी समय और आहार सलाह:',
              description: '',
              points: [
                '2- 4 दिन अस्पताल में रहना',
                'घाव को ठीक होने में 1-3 सप्ताह लगते हैं',
                'फाइबर युक्त भोजन की सलाह दी जाती है।',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'उपचार में शामिल जोखिम:',
              description: 'प्रक्रिया के कुछ जोखिम हो सकते हैं:',
              points: [
                'अधिकतम खून बहना',
                'सर्जिकल घाव का संक्रमण',
                'दर्द',
                'मूत्र मार्ग में संक्रमण',
                'असंयमिता',
              ],
            },
          },
        ],
      },
    ],
  },
  '27': {
    surgery: 'Carpal Tunnel Syndrome',
    questionsList: [
      {
        question: 'What is Carpal Tunnel Syndrome?',
        id: 'What-is-Carpal-Tunnel-Syndrome',
      },
      {
        question: 'What causes carpel tunnel syndrome?',
        id: 'What-causes-carpel-tunnel-syndrome',
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms',
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-see-doctor',
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
      },
      {
        question: 'Treatment for Carpal Tunnel Syndrome',
        id: 'treatment-for-Carpal-Tunnel-Syndrome',
      },
      {
        question: 'Types of treatments',
        id: 'Types-of-treatments',
        children: [
          {
            question: 'Endoscopic Surgery',
            id: 'Endoscopic-Surgery',
          },
          {
            question: 'Open Surgery',
            id: 'Open-Surgery',
          },
        ],
      },
    ],
    data: [
      {
        question: 'What is Carpal Tunnel Syndrome?',
        id: 'What-is-Carpal-Tunnel-Syndrome',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Carpal tunnel syndrome is a rather uncomplicated medical condition. People having this condition experience numbness, pain or tingling sensation in their hand and arm. This happens when a major nerve called median nerve in the hand is compressed.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_27_m.png',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_27_d.png',
              },
              alt: 'What are Ureter Stones',
            },
          },
        ],
      },
      {
        question: 'What causes carpel tunnel syndrome?',
        id: 'What-causes-carpel-tunnel-syndrome',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Carpal tunnel usually happens due to overuse of the hand using similar movements. For example, it is more common among musicians, carpenters etc. It is more common amongst women.',
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'If you have mild pain or numbness which disappears within 2 weeks, you can ignore it. It is best to seek doctor’s advice if:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Pain/ numbness does not go away even after trying home remedies for 2 weeks',
                'You are losing complete sensation in your fingers or your hand',
                'You are unable to work with the affected hand',
              ],
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-see-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'You should seek immediate help if you feel you are losing sensation of your hand or fingers. Ignoring these symptoms might cause permanent damage to the median nerve after which, working with the hand will become extremely difficult.',
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Usually, a simple physical examination of your hands and comparing the strengths of both hands is enough to diagnose carpal tunnel syndrome.',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'To understand the problem further, the doctor might suggest imaging tests such as ultrasound, Xray or even MRI.',
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Regular diet can be resumed after surgery. However, it’s always better to:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Include high fibre foods',
                'Drink plenty of fluids',
                'Avoid alcoholic and caffeinated drinks',
              ],
            },
          },
        ],
      },
      {
        question: 'Treatment for Carpal Tunnel Syndrome',
        id: 'treatment-for-Carpal-Tunnel-Syndrome',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Carpal tunnel syndrome in early stages can be treated by simple remedies like taking more rest, applying ice compression.',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'Using a splint or taking anti-inflammatory medication also helps in relieving the symptoms.',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'However, if the symptoms are very severe, it is best to undergo a simple surgery.',
            },
          },
        ],
      },
      {
        question: 'Types of treatments',
        id: 'Types-of-treatments',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'There are two types of surgeries which can help to relieve carpal tunnel syndrome. One of them is a minimally invasive procedure which is called endoscopic surgery and the other one is an open surgery.',
            },
          },
          {
            component: 'table',
            data: {
              heading: 'Types of treatments:',
              data: {
                headings: ['Specifics', 'Endoscopic Surgery', 'Open Surgery'],
                data: [
                  [
                    'Incision',
                    'Very small incision',
                    '2-inch incision in wrist',
                  ],
                  ['Pain', 'Lesser', 'More'],
                  ['Recurrence', 'Possible', 'Possible'],
                  ['Dietary Restriction', 'No', 'No'],
                  ['Recovery Time', 'Faster', 'Slower than endoscopic surgery'],
                ],
              },
            },
          },
        ],
      },
      {
        question: 'Endoscopic Surgery',
        id: 'Endoscopic-Surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'In this procedure, an endoscope which is a thin tube with a camera is used to perform the surgery. The surgery is performed referring to the image which the camera shows on a screen.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia or local anaesthesia for the procedure',
                'A small incision is made to insert the endoscope',
                'Observing the image on the screen from the camera, a ligament is cut to release pressure from the median nerve',
                'The incision is stitched',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Outpatient or overnight procedure with mild pain',
                'Complete recovery can take a few weeks or even a few months',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are very less complications through this treatment. Some of the risks may be:',
              points: [
                'allergic or adverse reaction to anaesthesia or other drugs',
                'bleeding',
                'nerve injury',
                'injury to nearby blood vessels',
                'infection',
              ],
            },
          },
        ],
      },
      {
        question: 'Open Surgery',
        id: 'Open-Surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This procedure involves opening up the wrist to expose the ligaments and median nerve. Due to the large incision, the healing time is longer.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'A large 2-inch incision is made at the wrist',
                'The ligament putting pressure on the median nerve is cut',
                'The incision is stitched up and thick bandages are put on the wrist',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'The heavy bandage is typically removed after 1-2 weeks',
                'It might take several months to completely recover from the surgery',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'The procedure involves a large incision. So, some of the risks of this surgery may be:',
              points: [
                'allergic or adverse reaction to anaesthesia or other drugs',
                'bleeding',
                'nerve injury',
                'injury to nearby blood vessels',
                'infection',
              ],
            },
          },
        ],
      },
    ],
  },
  '28': {
    surgery: 'Hydrocephalus (Ventriculoperitoneal Shunt)',
    questionsList: [
      {
        question: 'What is Hydrocephalus?',
        id: 'What-is-Hydrocephalus',
      },
      {
        question: 'What causes Hydrocephalus?',
        id: 'What-causes-Hydrocephalus',
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms',
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-see-doctor',
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
      },
      {
        question: 'Treatment for Hydrocephalus',
        id: 'Treatment-for-Hydrocephalus',
        children: [
          {
            question: 'Surgery',
            id: 'Surgery',
          },
        ],
      },
    ],
    data: [
      {
        question: 'What is Hydrocephalus?',
        id: 'What-is-Hydrocephalus',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Our brain has fluid in pockets called ventricles. This fluid helps to carry nutrients to the brain and remove wastes as well. Sometimes, there is an accumulation of fluid in the ventricles which puts pressure on the brain tissues. This is a dangerous condition called hydrocephalus.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_28_m.png',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_28_d.png',
              },
              alt: 'What is Hydrocephalus?',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'To remove the excess fluid, a device called Ventriculoperitoneal shunt is used. This device diverts the fluid from the brain and restores normal flow.',
            },
          },
        ],
      },
      {
        question: 'What causes Hydrocephalus?',
        id: 'What-causes-Hydrocephalus',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Many children are born with hydrocephalus. Some of the reasons for build up of the fluid are:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'excess production of the fluid',
                'blockages in the brain preventing proper flow of the fluid or',
                'improper absorption of the fluid by the blood vessels',
              ],
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'There are many symptoms which point to hydrocephalus. The most obvious ones are:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Seizures',
                'Memory loss',
                'Head which is large in size',
                'Headaches',
                'Problems in coordination',
              ],
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-see-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Hydrocephalus once identified should be treated immediately. This is a fatal condition and symptoms get worse as time progresses.',
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Imaging tests such as ultrasound, CT scans and MRIs are used to diagnose hydrocephalus.',
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'There are no dietary restrictions as such for this procedure. However, eating a healthy, well-balanced diet aids in quick recovery.',
            },
          },
        ],
      },
      {
        question: 'Treatment for Hydrocephalus',
        id: 'Treatment-for-Hydrocephalus',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Currently, the most widely used procedure to treat hydrocephalus is using a ventriculoperitoneal shunt.',
            },
          },
        ],
      },
      {
        question: 'Surgery',
        id: 'Surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'In this procedure, two catheters are placed to drain excess fluid from the ventricles. The entire procedure takes a short time to complete.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'A small incision is made near the ear and a hole is drilled in the skull',
                'Two catheters are placed at each of these openings',
                'The catheter placed at the ear drains the fluid into the abdominal cavity which is absorbed',
                'The incisions and the hole in the skull are closed',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'You’ll need to stay in the hospital for a week after the surgery',
                'Complete recovery can take about 6 weeks',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'Though short, this is a brain surgery and hence, there are risks involved in the procedure. Some of them are:',
              points: [
                'Infection',
                'Allergic reaction to the anaesthesia',
                'Damage to the brain',
                'Bleeding or blood clots',
              ],
            },
          },
        ],
      },
    ],
  },
  '29': {
    surgery: 'Varicose Veins',
    questionsList: [
      {
        question: 'What are Varicose Veins?',
        id: 'What-are-Varicose-Veins',
      },
      {
        question: 'What causes varicose veins to form?',
        id: 'What-causes-varicose-veins-to-form',
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms',
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-see-doctor',
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
      },
      {
        question: 'Treatment for Varicose Veins',
        id: 'Treatment-for-Varicose-Veins',
      },
      {
        question: 'Types of treatments',
        id: 'Types-of-treatments',
        children: [
          {
            question: 'Surgery',
            id: 'Surgery',
          },
          {
            question: 'Ligation and Stripping',
            id: 'Ligation-and-Stripping',
          },
          {
            question: 'Sclerotherapy',
            id: 'Sclerotherapy',
          },
          {
            question: 'Radio Frequency Ablation',
            id: 'Radio-Frequency-Ablation',
          },
          {
            question: 'EVLA Treatment',
            id: 'EVLA-Treatment',
          },
          {
            question: 'Transilluminator Powered Phlebectomy',
            id: 'Transilluminator-Powered-Phlebectomy',
          },
        ],
      },
    ],
    data: [
      {
        question: 'What are Varicose Veins?',
        id: 'What-are-Varicose-Veins',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Usually occurring in the leg, varicose veins appear blue or black in colour, lying just under the skin. These are swollen or twisted and might or might not cause pain.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_29_m.png',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_29_d.png',
              },
              alt: 'What are Varicose Veins',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'In some people, varicose veins do turn very painful. Treatment is important for such cases. Otherwise, varicose veins can be very well ignored.',
            },
          },
        ],
      },
      {
        question: 'What causes varicose veins to form?',
        id: 'What-causes-varicose-veins-to-form',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Varicose veins form due to several different reasons. Some of them are:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Obesity',
                'Pregnancy',
                'Injury to veins',
                'Leading a sedentary lifestyle',
                'Aging',
              ],
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Varicose veins can be ignored if they don’t cause discomfort or pain. However, when there is swelling or blood clots form, you should seek immediate treatment.',
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-see-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Usually, the blood clots formed due to varicose veins lie near the surface of the skin. However, in some cases, they break off and travel to other parts of the body. If they travel to the lungs, the problem turns very serious and might even lead to death.',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'Hence, if you see blood clots forming at the site of the varicose veins, you must see a doctor about it.',
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'A simple physical examination of the legs is enough to diagnose varicose veins.',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'Imaging tests such as ultrasound might also be needed to check for blood clots.',
            },
          },
        ],
      },
      {
        question: 'Dietary Restrictions',
        id: 'dietary-restrictions',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'There are no dietary restrictions as such after varicose veins treatment. However, having high fibre food and drinking plenty of fluids helps in quick recovery.',
            },
          },
        ],
      },
      {
        question: 'Treatment for Varicose Veins',
        id: 'Treatment-for-Varicose-Veins',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'When varicose veins do not cause any discomfort, they can be ignored. Simple lifestyle changes can help in treating them. Maintaining a healthy weight, elevating legs while sitting and avoiding tight clothes might resolve the issue.',
            },
          },
        ],
      },
      {
        question: 'Types of treatments',
        id: 'Types-of-treatments',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'There are various treatments available to treat varicose veins. All of them are simple procedures that you put you out of discomfort and pain. Let’s take a look at them one at a time.',
            },
          },
        ],
      },
      {
        question: 'Surgery',
        id: 'Surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Sometimes, the varicose veins cannot be cured by lifestyle changes alone. To treat them, the best way is to remove the affected veins. This does not affect blood flow to the leg.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia for the procedure',
                'Based on where the varicose veins are present, the incision is made',
                'The affected veins are completely removed so that the problem does not recur',
                'The incision is sutured',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Outpatient or 1 Day procedure with mild pain',
                'Resume to normal routine after 1- 3 weeks',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are very less complications through this treatment. Some of the risks may be:',
              points: [
                'allergic or adverse reaction to anaesthesia or other drugs',
                'bleeding',

                'nerve injury',
                'infection',
              ],
            },
          },
        ],
      },
      {
        question: 'Ligation and Stripping',
        id: 'Ligation-and-Stripping',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This is a short procedure lasting just 60 – 90 minutes. It is often recommended for people who are active and healthy. This procedure is not advisable for pregnant women, people who are overweight or having skin diseases.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given general anaesthesia or a spinal anaesthesia for the procedure',
                'A few incisions are made- one in the groin, others at the site of the varicose veins',
                'A flexible, thin plastic wire is threaded through the incision',
                'The wire is then pulled out of the other end thereby removing the vein',
                'The incisions are taped or sutured',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Outpatient procedure',
                'Resume normal day routine after 1-3 weeks',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'The procedure involves several incisions. So, some of the risks may be:',
              points: [
                'Excessive bleeding',
                'Infection of the surgical wound',
                'Nerve damage',
                'Blood clots',
                'Deep vein thrombosis',
              ],
            },
          },
        ],
      },
      {
        question: 'Sclerotherapy',
        id: 'Sclerotherapy',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This procedure involves injecting a chemical substance which closes them. This procedure can be used only for small or medium sized varicose veins.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_29_1_m.png',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_29_1_d.png',
              },
              alt: 'Sclerotherapy',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is made to lie back with legs slightly elevated',
                'Using a fine needle, the solution is injected into the varicose veins one at a time',
                'After injecting the solution, the doctor massages the area and applies compression',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Outpatient procedure',
                'Resume normal day routine after 1-2 weeks',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'The procedure involves several incisions. So, some of the risks may be:',
              points: [
                'Itching',
                'Swelling',
                'Allergic reactions',
                'Veins might become lumpy and hard',
                'Air bubbles',
              ],
            },
          },
        ],
      },
      {
        question: 'Radio Frequency Ablation',
        id: 'Radio-Frequency-Ablation',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'For larger varicose veins, this procedure is preferred. Higher radio frequencies are used to seal the veins.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_29_2_m.png',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_29_2_d.png',
              },
              alt: 'Sclerotherapy',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given local anaesthesia for this procedure',
                'A small incision is made with the help of an ultrasound machine',
                'A narrow tube is threaded into the vein',
                'High radio frequencies are passed through the tube which heat up the veins and close them',
                'The incision is sutured',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Outpatient procedure',
                'Resume normal day routine after 1-2 weeks',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'Though rare, some of the risks associated with this procedure are:',
              points: [
                'Skin burns',
                'Nerve damage',
                'Blood clots',
                'Pain and burning sensation',
              ],
            },
          },
        ],
      },
      {
        question: 'EVLA Treatment',
        id: 'EVLA-Treatment',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Endovenous laser ablation, otherwise known as the EVLA treatment is just like the radio frequency ablation procedure apart from the fact that this procedure uses laser to seal off the varicose veins. The entire procedure takes about 20-30 minutes for each leg.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/m/img_29_3_m.png',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/s/d/img_29_3_d.png',
              },
              alt: 'Sclerotherapy',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given local anaesthesia for this procedure',
                'A small incision is made with the help of an ultrasound machine',
                'A catheter is threaded into the vein',
                'Short energy bursts are passed into the vein using laser which burns and seals it',
                'The incision is sutured',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Outpatient procedure',
                'Resume normal day routine after 3-4 days',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'Risks from this procedure are rare. However, some of the risks can be:',
              points: [
                'Thrombophlebitis',
                'Nerve Damage',
                'Burns',
                'Deep vein thrombosis',
              ],
            },
          },
        ],
      },
      {
        question: 'Transilluminator Powered Phlebectomy',
        id: 'Transilluminator-Powered-Phlebectomy',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This is a procedure in which varicose veins are identified, cut and removed rather than sealing them shut. It is a minimally invasive procedure and is supposed to be a quicker process to remove varicose veins.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure:',
              description: '',
              points: [
                'Patient is given local anaesthesia for the procedure',
                'Using a surgical marker, the site of the varicose veins is marked',
                'Using an antiseptic solution, the area is cleaned',
                'A small incision is made to insert an endoscopic transilluminator',
                'A second incision is made through which a suction device is inserted',
                'As soon as the transilluminator cuts the vein, the suction device removes the damaged vein',
                'The incisions are sutured or taped once all the varicose veins are removed',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Outpatient procedure',
                'Resume normal day routine the next day',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description: 'The side effects of this procedure are:',
              points: [
                'Bleeding',
                'Infection',
                'Brown spots around the area',
                'Bruising',
                'Tingling sensation at the site',
              ],
            },
          },
        ],
      },
    ],
  },
  '30': {
    surgery: 'Fertility',
    questionsList: [
      {
        question: 'What is IVF?',
        id: 'What-is-IVF',
      },
      {
        question: 'What impacts IVF success rates?',
        id: 'What-impacts-IVF-success-rates',
      },
      {
        question: 'What is Fertility?',
        id: 'What-is-fertility',
      },
      {
        question: 'Female Infertility',
        id: 'female-infertility',
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms',
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-see-doctor',
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
      },
      {
        question: 'Treatment for Female Infertility',
        id: 'treatment-for-female-infertility',
      },
      {
        question: 'Types of treatments',
        id: 'Types-of-treatments',
        children: [
          {
            question: 'Intrauterine Insemination',
            id: 'intrauterine-insemination',
          },
          {
            question: 'In vitro Fertilization',
            id: 'in-vitro-fertilization',
          },
        ],
      },
      {
        question: 'Male Infertility',
        id: 'male-infertility',
      },
      {
        question: 'Diagnosis',
        id: 'how-male-infertility-diagnosed',
      },
      {
        question: 'Treatment',
        id: 'how-male-infertility-treated',
      },
    ],
    data: [
      {
        question: 'What is IVF?',
        id: 'What-is-IVF',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'IVF is the process of fertilisation by extracting eggs, retrieving a sperm sample, and then manually combining an egg and sperm in a laboratory. The embryos are then transferred to the uterus.',
            },
          },
        ],
      },
      {
        question: 'What impacts IVF success rates?',
        id: 'What-impacts-IVF-success-rates',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Some of the main factors for IVF success are the age of the woman and the sperm quality. While younger women have higher chances of success, the chances reduce with age-related decline in the quality as well as the quantity of eggs.',
            },
          },
        ],
      },
      {
        question: 'What is Fertility?',
        id: 'What-is-fertility',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'In cases where the male and female reproductive systems are functioning well, the female ovum is fertilized by the male sperm which forms an embryo. This embryo in 40 weeks’ time in a mother’s womb, is delivered as a baby.',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'However, if either the male or the female reproductive system is not functioning well, the embryo does not form. So, the couple cannot have a baby without the help of fertility treatments.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/Fertility_img_3_mobile.png',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/Fertility_img_3_desktop.png',
              },
              alt: 'what is fertilty',
            },
          },
          {
            component: 'description',
            data: {
              value:
                'Some of the problems and treatments related to fertility are listed below.',
            },
          },
        ],
      },
      {
        question: 'Female Infertility',
        id: 'female-infertility',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'A woman is considered to have fertility problems if she is not able to conceive naturally even after trying for a year or has frequent miscarriage. The most common reasons for female infertility are:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'not ovulating (releasing eggs)',
                'blocked fallopian tubes so sperm can’t meet the egg',
                'eggs are of poor quality',
                'shape of the uterus makes it hard for a fertilized egg to implant',
                'endometriosis',
              ],
            },
          },
        ],
      },
      {
        question: 'Symptoms / when to call your doctor',
        id: 'symptoms',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'A couple can seek the help of a doctor if they are not able to conceive even after trying for a year.',
            },
          },
        ],
      },
      {
        question: 'Why you should see a doctor?',
        id: 'why-see-doctor',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'If the woman has fertility problems, she may not be able to conceive without seeking a doctor’s advice.',
            },
          },
        ],
      },
      {
        question: 'How is it diagnosed?',
        id: 'how-is-it-diagnosed',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'There are various tests that the doctor does to find the exact reason as to why the woman is not able to conceive. Some of them are:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: '',
              description: '',
              points: [
                'Pelvic examination',
                'Ultrasound',
                'Ovulation tests',
                'Testing the cervical mucus',
              ],
            },
          },
        ],
      },

      {
        question: 'Treatment for Female Infertility',
        id: 'treatment-for-female-infertility',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Depending on the cause of infertility, the doctor will suggest an appropriate treatment. If there is a hormonal problem, it can be resolved using medication.',
            },
          },
        ],
      },
      {
        question: 'Types of treatments',
        id: 'Types-of-treatments',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'There are two treatments which are most popular. They are:',
            },
          },
        ],
      },
      {
        question: 'Intrauterine Insemination',
        id: 'intrauterine-insemination',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This is a simple procedure which allows the sperm to reach the egg more easily.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/Fertility_img_2_mobile.png',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/Fertility_img_2_desktop.png',
              },
              alt: 'What is Intrauterine Insemination',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure',
              description: '',
              points: [
                'Semen is collected from the man',
                '‘Sperm washing’ is done to separate healthy sperm',
                'The sperm is directly put into the uterus',
                'The sperm then, fertilizes the egg to form an embryo',
              ],
            },
          },
          {
            component: 'description',
            data: {
              heading: 'Recovery Time',
              value: 'It’s an outpatient procedure taking just over an hour',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description: 'Some of the risks of this treatment may be:',
              points: [
                'Infection',
                'Spotting or light bleeding',
                'Multiple pregnancies',
              ],
            },
          },
        ],
      },
      {
        question: 'In vitro Fertilization',
        id: 'in-vitro-fertilization',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'In this procedure, the eggs and sperm are placed together and the embryo formation happens in a lab.',
            },
          },
          {
            component: 'image',
            data: {
              link: {
                m:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/Fertility_img_1_mobile.png',
                d:
                  'https://ayu-images.s3.ap-south-1.amazonaws.com/surgery/edu/Fertility_img_1_desktop.png',
              },
              alt: 'What is vitro Fertilization',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure',
              description: '',
              points: [
                'Eggs are retrieved from the woman and sperms from the man',
                'They are placed together in a dish and in a favourable atmosphere',
                'Usually, multiple embryos form',
                'These embryos are planted back into the uterus of the woman',
                'When, one of the embryos sticks to the wall of the uterus, the process is successful',
              ],
            },
          },
          {
            component: 'description',
            data: {
              heading: 'Recovery Time',
              value:
                'The entire process takes about 3 weeks’ time. Both egg retrieval and placing embryos into the uterus are outpatient procedures taking about 20 minutes each.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description: 'Some of the risks of this treatment may be:',
              points: [
                'Miscarriage',
                'Birth defects in the baby',
                'Premature delivery',
                'Low birth weight of the baby',
                'Multiple births',
              ],
            },
          },
        ],
      },
      {
        question: 'Laparoscopic Surgery',
        id: 'laparoscopic-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This surgery is performed to resolve abnormalities like scar tissue, fibroids or endometriosis in the female reproductive system. It is performed using a laparoscope with minimal incisions and hence, you can expect a quick recovery.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure',
              description: '',
              points: [
                'Patient is given general or local anaesthesia',
                'Few small incisions are made in the abdomen',
                'A laparoscope is inserted through one of the incisions',
                'Observing the images appearing on the screen from the laparoscope camera, the doctor removes the scar tissue, fibroids or endometriosis.',
                'The incisions are sutured or taped',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Outpatient procedure or overnight stay at the hospital',
                'Complete recovery takes about a couple of weeks',
                'No dietary restrictions as such for this procedure',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description: 'The procedure may lead to few risks like:',
              points: [
                'Allergic reactions',
                'Blood clots',
                'Infection',
                'Nerve damage',
                'Swelling due to blood outside a blood vessel',
              ],
            },
          },
        ],
      },
      {
        question: 'Hysteroscopic Surgery',
        id: 'hysteroscopic-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This surgery is also done to correct any abnormalities in the female reproductive system like removing polyps, scar tissue or fibroids. In this procedure, a thin long instrument called hysteroscope is inserted through the vagina to perform the procedure.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure',
              description: '',
              points: [
                'Patient is given general or local anaesthesia',
                'A hysteroscope is inserted through the vagina',
                'The abnormalities are removed using small instruments',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'Outpatient procedure or overnight stay at the hospital',
                'Complete recovery takes about a couple of weeks',
                'No dietary restrictions as such for this procedure',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description: 'The procedure may lead to few risks like:',
              points: [
                'Damage to the cervix',
                'Damage to other nearby organs like ovaries, bladder or bowel',
                'Infection',
                'Allergic reaction to anaesthesiae',
              ],
            },
          },
        ],
      },
      {
        question: 'Tubal Surgery',
        id: 'tubal-surgery',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'This procedure is done when there is a problem in the fallopian tubes. Based on the problem, different surgeries are performed. They are:',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              points: [
                'Fallopian Tube Recanalization: This is done when there is a blockage in the fallopian tube. Using a catheter, a dye is inserted into the tubes to remove the blockage.',
                'Tubal Ligation Reversal Surgery: If the fallopian tubes had been tied previously to avoid pregnancy, this procedure reconnects the tubes to allow the egg to pass thereby, making it possible for the woman to get pregnant again.',
                'Salpingostomy: This procedure is done when one or both the fallopian tubes are blocked and swollen with fluid. The doctor operates on the tubes and removes the fluid and thereby, the blockage and swelling.',
                'Salpingectomy: This procedure is done to improve the efficiency of the in vitro fertilization process. In this, the fallopian tubes are removed by putting a loop around them and tightening it so as to cut them off.',
                'Fimbrioplasty: If the blockage in the fallopian tube is close to the ovary, this procedure is used. Fimbriae are finger like projections in the tube. These pick up the egg once it is released. The doctor will clear the blockage and rebuild the fimbriae during this procedure.',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Flow of the procedure',
              description: '',
              points: [
                'Patient is given local anaesthesia for this procedure',
                'All these surgeries can be performed by opening up the abdomen or using a laparoscope',
                'The doctor reaches the fallopian tubes through the incision',
                'The required correction in done',
                'The incision is closed',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Recovery Time and Dietary Advice:',
              description: '',
              points: [
                'An open surgery takes time to heal requiring a hospital stay of 2-3 days whereas for a laparoscopic surgery, 1-2 days of hospital stay is required',
                'Resuming normal routine takes a couple of weeks',
              ],
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Risks involved in the treatment:',
              description:
                'There are some risks associated with this procedure. They may be:',
              points: [
                'Pelvic infection',
                'Ectopic pregnancy',
                'Scarring',
                'Infection',
              ],
            },
          },
        ],
      },
      {
        question: 'Male Infertility',
        id: 'male-infertility',
        answers: [
          {
            component: 'description',
            data: {
              value:
                'Male infertility is another reason why some couples can’t conceive naturally. Hormonal imbalances, lifestyle choices like smoking and infections can be causes of infertility.',
            },
          },
          {
            component: 'dottedPoints',
            data: {
              heading: 'Diagnosis:',
              description: 'Male fertility can be diagnosed by tests like:',
              points: [
                'Semen analysis',
                'Scrotal ultrasound',
                'Genetic tests',
                'Biopsy',
                'Urinalysis',
              ],
            },
          },
          {
            component: 'description',
            data: {
              heading: 'Treatment:',
              value:
                'For infections and hormonal imbalances, medication is given to resolve the infertility issue. Lifestyle changes are also recommended to improve fertility of the sperm.',
            },
          },
        ],
      },
    ],
  },
};

