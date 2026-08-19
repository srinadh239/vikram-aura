// ─────────────────────────────────────────────────────────────────────────────
// Blog configuration — add new posts to the `blogPosts` array below.
//
// BLOCK TYPES:
//  { type: "paragraph", text: "..." }
//  { type: "heading",   level: 2|3,  text: "..." }
//  { type: "bullets",   heading?: "...", items: ["..."] }
//  { type: "numbered",  heading?: "...", items: ["..."] }
//  { type: "image",     src: "...", alt: "...", caption?: "..." }
//  { type: "quote",     text: "...", attribution?: "..." }
//  { type: "callout",   text: "...", variant?: "info"|"tip"|"warning" }
// ─────────────────────────────────────────────────────────────────────────────

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "bullets"; items: string[]; heading?: string }
  | { type: "numbered"; items: string[]; heading?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "callout"; text: string; variant?: "info" | "tip" | "warning" };

export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogFaqItem {
  q: string;
  a: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  metaTitle?: string; // if omitted, `${title} | Vikram Aura Hospital Blog`
  metaDescription?: string; // if omitted, excerpt is used for SEO
  content: BlogBlock[];
  author: BlogAuthor;
  category: string;
  tags: string[];
  publishedAt: string; // ISO date — e.g. "2026-06-01"
  updatedAt?: string;
  readTime: number; // estimated minutes
  coverImage: string;
  coverImageAlt: string;
  featured: boolean;
  faq?: BlogFaqItem[];           // renders as accordion + FAQPage JSON-LD
  followUpTopics?: string[];     // "Read next" suggestions shown at end of post
}

export const BLOG_CATEGORIES = [
  "All",
  "Heart Health",
  "Orthopaedics",
  "Urology",
  "Oncology",
  "Diabetes & Metabolism",
  "Neurology",
  "Women's Health",
  "Preventive Care",
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// BLOG POSTS — add / edit posts here
// ─────────────────────────────────────────────────────────────────────────────
export const blogPosts: BlogPost[] = [
  // ── POST 7 ──────────────────────────────────────────────────────────────────
  {
    id: "7",
    slug: "can-partial-acl-tear-heal-without-surgery",
    title: "Can a Partial ACL Tear Heal Without Surgery?",
    excerpt:
      "Wondering if a partial ACL tear can heal without surgery? Learn about symptoms, treatment options, recovery, and when surgery may be needed.",
    metaTitle: "Can a Partial ACL Tear Heal Without Surgery? | Vikram Aura Hospital Bangalore",
    metaDescription:
      "Wondering if a partial ACL tear can heal without surgery? Learn about symptoms, treatment options, recovery, and when surgery may be needed from the Orthopaedics team at Vikram Aura Hospital, Bangalore.",
    category: "Orthopaedics",
    tags: [
      "ACL tear",
      "partial ACL tear",
      "ACL rehabilitation",
      "sports injury",
      "orthopaedics",
      "bangalore",
    ],
    publishedAt: "2026-08-19",
    readTime: 8,
    coverImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    coverImageAlt:
      "Orthopaedic doctor discussing a knee MRI with a patient after a sports injury",
    featured: true,
    author: {
      name: "Dr. Sai Krishna B Naidu",
      role: "Senior Consultant – Orthopaedics & Sports Injuries, Vikram Aura Hospital",
    },
    faq: [
      {
        q: "Can a Grade 2 ACL tear heal without surgery?",
        a: "Many Grade 2 (partial) ACL tears can be managed without surgery if the knee remains stable and responds well to physiotherapy. Your orthopaedic specialist will recommend the most appropriate treatment based on your condition.",
      },
      {
        q: "How do I know if my ACL tear is partial or complete?",
        a: "A physical examination along with imaging studies, such as an MRI, helps determine the extent of the injury. Your doctor will also assess knee stability and associated injuries.",
      },
      {
        q: "Is physiotherapy enough for a partial ACL tear?",
        a: "For many patients, physiotherapy plays a central role in recovery. A structured rehabilitation programme can improve strength, stability, and function, although outcomes vary depending on the severity of the injury and activity level.",
      },
      {
        q: "How long should I wait before returning to sports?",
        a: "Returning to sports depends on your recovery progress, knee stability, muscle strength, and your doctor's assessment. Returning too early may increase the risk of re-injury.",
      },
      {
        q: "Can a partial ACL tear become a complete tear?",
        a: "Yes. Continuing high-impact activities or returning to sports before adequate recovery may increase the risk of further injury. Following your rehabilitation plan and medical advice is important.",
      },
    ],
    followUpTopics: [
      "Complete Guide to Sports Injuries: Diagnosis, Treatment and Recovery (sports injury treatment Bangalore)",
      "ACL vs PCL Injury: How to Tell the Difference (ACL vs PCL injury)",
      "What Happens During ACL Reconstruction Surgery? (ACL reconstruction surgery procedure)",
      "How Long Does It Take to Return to Sports After ACL Surgery? (return to sports after ACL surgery)",
    ],
    content: [
      {
        type: "paragraph",
        text: "A sudden twist of the knee while playing cricket, football, badminton, or even during a workout can lead to an ACL injury. One of the first questions many patients ask is, \"**Can a partial ACL tear heal without surgery?**\"",
      },
      {
        type: "paragraph",
        text: "The answer depends on the severity of the tear, your activity level, knee stability, and overall health. In many cases, a **partial ACL tear** can be managed without surgery through a structured rehabilitation program, physiotherapy, and lifestyle modifications. However, some patients may eventually require surgical reconstruction if the knee remains unstable or they wish to return to high-impact sports.",
      },
      {
        type: "paragraph",
        text: "If you're looking for expert evaluation and **sports injury treatment in Bangalore**, an early diagnosis by an orthopaedic specialist is essential to determine the most appropriate treatment plan.",
      },
      { type: "heading", level: 2, text: "What Is the ACL?" },
      {
        type: "paragraph",
        text: "The Anterior Cruciate Ligament (ACL) is one of the four major ligaments of the knee. It connects the thigh bone (femur) to the shin bone (tibia) and plays an important role in keeping the knee stable during movement.",
      },
      { type: "paragraph", text: "The ACL helps control:" },
      {
        type: "bullets",
        items: [
          "Sudden changes in direction",
          "Jumping and landing",
          "Pivoting movements",
          "Running and sprinting",
          "Knee rotation",
        ],
      },
      {
        type: "paragraph",
        text: "Sports such as football, basketball, badminton, tennis, and skiing place significant stress on the ACL, making it one of the most commonly injured knee ligaments.",
      },
      { type: "heading", level: 2, text: "What Is a Partial ACL Tear?" },
      {
        type: "paragraph",
        text: "A **partial ACL tear** means that only some of the ligament fibres are damaged, while the remaining fibres continue to provide some stability to the knee.",
      },
      { type: "paragraph", text: "Doctors generally classify ACL injuries into three grades:" },
      {
        type: "bullets",
        items: [
          "**Grade 1:** The ligament is stretched but remains intact.",
          "**Grade 2:** The ligament is partially torn.",
          "**Grade 3:** The ligament is completely torn.",
        ],
      },
      {
        type: "paragraph",
        text: "A Grade 2 injury is commonly referred to as a partial ACL tear.",
      },
      { type: "heading", level: 2, text: "How Does a Partial ACL Tear Occur?" },
      { type: "paragraph", text: "Common causes include:" },
      {
        type: "bullets",
        items: [
          "Sudden twisting while running",
          "Landing awkwardly after a jump",
          "Rapid changes in direction",
          "Direct impact to the knee",
          "Road traffic accidents",
          "Sports-related collisions",
        ],
      },
      {
        type: "paragraph",
        text: "Many patients report hearing or feeling a \"pop\" at the time of injury, although this is more common with complete tears.",
      },
      { type: "heading", level: 2, text: "Symptoms of a Partial ACL Tear" },
      {
        type: "paragraph",
        text: "Symptoms can vary depending on the extent of the injury.",
      },
      { type: "paragraph", text: "Common signs include:" },
      {
        type: "bullets",
        items: [
          "Knee pain",
          "Swelling within a few hours",
          "Difficulty walking",
          "Feeling that the knee may \"give way\"",
          "Reduced range of motion",
          "Pain while climbing stairs",
          "Difficulty squatting",
          "Instability during sports activities",
        ],
      },
      {
        type: "paragraph",
        text: "Some people notice improvement after a few weeks, while others continue to experience instability that interferes with daily activities.",
      },
      { type: "heading", level: 2, text: "Can a Partial ACL Tear Heal Without Surgery?" },
      {
        type: "paragraph",
        text: "In many cases, yes—but the ligament itself does not completely regenerate to its original condition.",
      },
      {
        type: "paragraph",
        text: "Instead, the surrounding muscles, particularly the quadriceps and hamstrings, can be strengthened through rehabilitation to compensate for the injured ligament and improve knee stability.",
      },
      { type: "paragraph", text: "Non-surgical treatment may be appropriate when:" },
      {
        type: "bullets",
        items: [
          "The tear is small",
          "The knee remains stable",
          "Daily activities are not significantly affected",
          "The patient is not involved in competitive sports",
          "There are no associated injuries, such as meniscus tears or other ligament injuries",
        ],
      },
      {
        type: "paragraph",
        text: "Treatment decisions should always be individualised after assessment by an orthopaedic specialist.",
      },
      { type: "heading", level: 2, text: "When Is Surgery More Likely to Be Recommended?" },
      { type: "paragraph", text: "Surgery may be considered if:" },
      {
        type: "bullets",
        items: [
          "The knee repeatedly gives way",
          "There is a complete ACL tear",
          "Multiple ligaments are injured",
          "A meniscus tear is present",
          "Conservative treatment has not improved stability",
          "The patient wants to return to competitive sports or high-demand activities",
        ],
      },
      {
        type: "paragraph",
        text: "[ACL reconstruction](https://vikramaurahospitals.com/specialties/orthopaedics/anterior-cruciate-ligament-reconstruction) is a commonly performed procedure that aims to restore knee stability using a graft rather than repairing the torn ligament directly.",
      },
      { type: "heading", level: 2, text: "Non-Surgical Treatment Options" },
      {
        type: "paragraph",
        text: "Many patients recover well with a comprehensive rehabilitation plan.",
      },
      { type: "heading", level: 3, text: "Rest and Activity Modification" },
      {
        type: "paragraph",
        text: "Avoid activities that place excessive stress on the injured knee during the initial healing phase.",
      },
      { type: "heading", level: 3, text: "Ice Therapy" },
      {
        type: "paragraph",
        text: "Applying ice packs for 15–20 minutes several times a day during the first 48 hours may help reduce swelling and discomfort.",
      },
      { type: "heading", level: 3, text: "Compression" },
      {
        type: "paragraph",
        text: "A knee brace or compression bandage can provide support and help manage swelling, depending on your doctor's advice.",
      },
      { type: "heading", level: 3, text: "Elevation" },
      {
        type: "paragraph",
        text: "Keeping the leg elevated while resting can reduce swelling.",
      },
      { type: "heading", level: 3, text: "Medications" },
      {
        type: "paragraph",
        text: "Your doctor may recommend pain-relieving or anti-inflammatory medications when appropriate.",
      },
      { type: "heading", level: 3, text: "Physiotherapy" },
      {
        type: "paragraph",
        text: "Physiotherapy is one of the most important components of recovery.",
      },
      { type: "paragraph", text: "A rehabilitation programme may include:" },
      {
        type: "bullets",
        items: [
          "Range-of-motion exercises",
          "Muscle strengthening",
          "Balance training",
          "Gait correction",
          "Functional exercises",
          "Sport-specific rehabilitation when appropriate",
        ],
      },
      {
        type: "paragraph",
        text: "Consistent physiotherapy helps improve strength, stability, and confidence in the injured knee.",
      },
      { type: "heading", level: 2, text: "Recovery Timeline" },
      {
        type: "paragraph",
        text: "Recovery varies from person to person and depends on:",
      },
      {
        type: "bullets",
        items: [
          "Severity of the tear",
          "Age",
          "Overall fitness",
          "Adherence to physiotherapy",
          "Presence of other knee injuries",
        ],
      },
      {
        type: "paragraph",
        text: "While some individuals return to routine activities within weeks, returning to sports should only happen after medical clearance and completion of a structured rehabilitation programme.",
      },
      { type: "heading", level: 2, text: "Can You Play Sports Again?" },
      {
        type: "paragraph",
        text: "Many people return to recreational activities after successful non-surgical treatment. However, athletes participating in sports involving frequent pivoting, cutting, or jumping may have a higher risk of recurrent instability if the ACL remains insufficient.",
      },
      {
        type: "paragraph",
        text: "A sports medicine or orthopaedic specialist can assess your readiness to return safely.",
      },
      { type: "heading", level: 2, text: "How Can You Prevent Further Knee Injury?" },
      {
        type: "paragraph",
        text: "Whether you're recovering from a partial ACL tear or looking to reduce the risk of future injuries, these measures can help:",
      },
      {
        type: "bullets",
        items: [
          "Warm up before exercise",
          "Strengthen the muscles around the knee",
          "Improve balance and coordination",
          "Wear appropriate footwear",
          "Use proper sports techniques",
          "Avoid sudden increases in training intensity",
          "Follow your physiotherapist's guidance before returning to sports",
        ],
      },
      { type: "heading", level: 2, text: "When Should You See an Orthopaedic Specialist?" },
      {
        type: "paragraph",
        text: "Consult an orthopaedic specialist if you experience:",
      },
      {
        type: "bullets",
        items: [
          "Persistent knee pain",
          "Recurrent swelling",
          "Difficulty bearing weight",
          "A feeling that the knee is unstable",
          "Limited movement",
          "Inability to return to normal activities despite rehabilitation",
        ],
      },
      {
        type: "paragraph",
        text: "Early assessment can help identify associated injuries and guide appropriate treatment.",
      },
      { type: "heading", level: 2, text: "Why Choose Vikram Aura Hospital for ACL Care?" },
      {
        type: "paragraph",
        text: "At Vikram Aura Hospital, Richmond Road, Bangalore, our Orthopaedics team provides comprehensive care for ligament injuries—from clinical evaluation and imaging to personalised treatment plans and rehabilitation guidance.",
      },
      {
        type: "paragraph",
        text: "Whether your injury can be managed conservatively or requires surgical intervention, our specialists focus on helping you regain mobility safely and return to your daily activities with confidence.",
      },
      {
        type: "callout",
        variant: "info",
        text: "Learn more about our [Orthopaedics Department](https://vikramaurahospitals.com/specialties/orthopaedics), meet [Dr. Sai Krishna B Naidu](https://vikramaurahospitals.com/doctor/dr-sai-krishna-b-naidu), or [book a consultation](https://vikramaurahospitals.com/doctors).",
      },
    ],
  },

  // ── POST 6 ──────────────────────────────────────────────────────────────────
  {
    id: "6",
    slug: "knee-replacement-surgery-bangalore",
    title: "Knee Replacement Surgery in Bangalore: A Complete Guide",
    excerpt:
      "Wondering if knee replacement is right for you? Here's what the surgery involves, who needs it, recovery timelines, and what affects the cost.",
    metaDescription:
      "Considering Knee Replacement Surgery in Bangalore? Learn who needs it, what to expect, recovery timelines, and what affects the cost.",
    category: "Orthopaedics",
    tags: ["knee replacement", "orthopaedics", "joint pain", "arthritis", "surgery", "bangalore"],
    publishedAt: "2026-07-18",
    readTime: 7,
    coverImage:
      "https://images.unsplash.com/photo-1746842419697-03234f5ff03e?auto=format&fit=crop&w=1200&q=80",
    coverImageAlt:
      "Orthopaedic specialist examining and marking a patient's knee before surgery",
    featured: false,
    author: {
      name: "Dr. Suresh Babu",
      role: "Senior Consultant – Orthopaedics, Vikram Aura Hospital",
    },
    faq: [
      {
        q: "How long does it take to recover from knee replacement surgery?",
        a: "Most people walk with support within a day or two of surgery and return to routine activities in 6 to 12 weeks. Full recovery, including muscle strength and comfort on stairs, usually takes 3 to 6 months. Regular physiotherapy plays the biggest role in how quickly you recover.",
      },
      {
        q: "What is the cost of knee replacement surgery in Bangalore?",
        a: "The cost varies with the type of implant, whether one or both knees are replaced, the length of hospital stay, and your insurance cover. Rather than relying on generic figures online, ask the hospital for a detailed estimate after your consultation, so it reflects your specific condition and implant choice.",
      },
      {
        q: "At what age should you get knee replacement surgery?",
        a: "There is no fixed age. Doctors recommend it based on pain, joint damage seen on X-rays, and how much your daily life is affected. Most patients are between 55 and 75, but younger patients with severe arthritis or joint damage from injury can also benefit after careful evaluation.",
      },
      {
        q: "How long does an artificial knee last?",
        a: "Modern knee implants commonly last 15 to 20 years or longer, especially with a healthy body weight and regular low-impact activity. Avoiding high-impact sports, doing your physiotherapy, and attending follow-up check-ups all help extend the life of the implant and delay or avoid revision surgery.",
      },
      {
        q: "Is knee replacement surgery painful?",
        a: "The surgery itself is done under anaesthesia, so you feel nothing during the procedure. Some pain and swelling in the first few weeks is normal and is managed well with medicines, ice, and gentle exercise. Most patients say the arthritis pain they lived with earlier was far worse.",
      },
    ],
    followUpTopics: [
      "Early Signs of Knee Arthritis You Should Not Ignore (knee arthritis symptoms)",
      "Knee Replacement vs Physiotherapy: Which Is Right for You? (knee replacement vs physiotherapy)",
      "Total vs Partial Knee Replacement: What's the Difference? (total vs partial knee replacement)",
      "Recovery After Knee Replacement: A Week-by-Week Guide (knee replacement recovery time)",
      "How to Keep Your Knees Healthy After 40 (knee pain prevention exercises)",
    ],
    content: [
      {
        type: "paragraph",
        text: "If climbing the stairs to your flat, sitting cross-legged for meals, or walking through a crowded market has become painful, you are not alone. Knee pain from arthritis is one of the most common reasons adults over 35 visit an orthopaedic doctor. For many, medicines and physiotherapy bring relief. But when the joint is badly worn out, **Knee Replacement Surgery in Bangalore** is a safe, well-established option that can give you back a pain-free, active life. This guide explains what the surgery involves, who needs it, and what recovery really looks like.",
      },
      { type: "heading", level: 2, text: "What Is Knee Replacement Surgery?" },
      {
        type: "paragraph",
        text: "Knee replacement surgery — doctors call it knee arthroplasty — replaces the damaged surfaces of your knee joint with smooth artificial parts made of metal and medical-grade plastic. Think of it like resurfacing a badly worn road: the damaged layer is removed, and a new, smooth surface is fitted so the joint can move without bone rubbing painfully on bone.",
      },
      { type: "paragraph", text: "There are two main types:" },
      {
        type: "bullets",
        items: [
          "**Total knee replacement:** the entire joint surface is replaced. This is the most common option when arthritis affects the whole knee.",
          "**Partial knee replacement:** only the damaged portion of the knee is replaced. This suits a smaller group of patients whose damage is limited to one part of the joint.",
        ],
      },
      {
        type: "paragraph",
        text: "Your surgeon will recommend the right type after examining your knee and reviewing your X-rays or MRI scans.",
      },
      { type: "heading", level: 2, text: "Who Needs Knee Replacement Surgery?" },
      {
        type: "paragraph",
        text: "Most people who need this surgery have advanced **osteoarthritis** — the gradual wearing away of the cushioning cartilage inside the knee. Rheumatoid arthritis (where the body's immune system attacks the joints) and old injuries from accidents or sports can also damage the knee badly enough to need replacement.",
      },
      { type: "paragraph", text: "Surgery is usually considered when:" },
      {
        type: "bullets",
        items: [
          "Knee pain is severe on most days, even at rest or at night",
          "Walking, climbing stairs, or getting up from a chair has become difficult",
          "The knee looks visibly bent or bowed",
          "Medicines, injections, and physiotherapy no longer give lasting relief",
          "X-rays show significant joint damage",
        ],
      },
      {
        type: "paragraph",
        text: "Indian lifestyles put extra demand on the knees — squatting for household work, sitting cross-legged on the floor, and using Indian-style toilets all need deep knee bending. If these everyday movements have become impossible, it is worth getting your knee properly evaluated by the [Orthopaedics team at Vikram Aura Hospital](https://vikramaurahospitals.com/specialties/orthopaedics).",
      },
      { type: "heading", level: 2, text: "What Happens Before, During, and After the Surgery" },
      { type: "heading", level: 3, text: "Before the surgery" },
      {
        type: "paragraph",
        text: "You will undergo a fitness check-up — blood tests, heart evaluation, and a review of conditions like diabetes or high blood pressure. Controlling blood sugar well before surgery reduces the risk of infection and helps healing, so your doctor may adjust your medicines. You will also meet the physiotherapist, who will teach you exercises to start soon after the operation.",
      },
      { type: "heading", level: 3, text: "During the surgery" },
      {
        type: "paragraph",
        text: "The operation usually takes one to two hours and is done under spinal or general anaesthesia, so you feel no pain. The surgeon removes the damaged joint surfaces, shapes the bone, and fixes the artificial implant in place. Modern techniques focus on smaller incisions and careful soft-tissue handling, which supports faster recovery.",
      },
      { type: "heading", level: 3, text: "After the surgery" },
      {
        type: "paragraph",
        text: "Most patients stand and take a few steps with a walker within 24 to 48 hours — early movement is actually good for the new joint. A typical hospital stay is three to five days. Physiotherapy continues at home or at the hospital for several weeks, gradually building strength and bending ability.",
      },
      { type: "heading", level: 2, text: "Recovery: What to Realistically Expect" },
      {
        type: "paragraph",
        text: "Recovery is a journey of weeks, not days, and steady effort matters more than speed.",
      },
      {
        type: "bullets",
        items: [
          "**Weeks 1–2:** walking short distances with a walker, managing swelling with ice and leg elevation, gentle bending exercises.",
          "**Weeks 3–6:** walking longer distances, often moving from walker to stick, climbing a few stairs with support.",
          "**Weeks 6–12:** most daily activities return — walking in the park, light household work, short outings.",
          "**3–6 months:** strength and comfort keep improving; many patients forget which knee was operated on.",
        ],
      },
      {
        type: "paragraph",
        text: "A balanced diet helps healing — include protein sources like dal, paneer, eggs, curd, and sprouts, along with calcium-rich foods such as milk and ragi. Keeping your weight in a healthy range also protects the new joint, because every extra kilo of body weight puts several kilos of load on the knee.",
      },
      {
        type: "callout",
        variant: "warning",
        text: "After surgery, contact your doctor or go to the emergency department immediately if you notice fever with chills, increasing redness or discharge from the wound, sudden severe calf pain or swelling, chest pain, or breathlessness. These can signal infection or a blood clot and need urgent attention — do not wait for your next appointment.",
      },
      { type: "heading", level: 2, text: "Understanding Knee Replacement Surgery Cost" },
      {
        type: "paragraph",
        text: "One of the first questions families ask is about the **Knee Replacement Surgery cost**. The honest answer is that it varies from patient to patient, because several factors are involved:",
      },
      {
        type: "bullets",
        items: [
          "**Type of implant:** implants differ in design and material, and your surgeon will suggest what suits your age and activity level.",
          "**One knee or both:** some patients with arthritis in both knees choose to have them replaced in a single admission or in stages.",
          "**Hospital stay and room category:** the number of days and the room you choose affect the final bill.",
          "**Insurance cover:** most health insurance policies cover knee replacement; pre-authorisation and cashless facilities can simplify payment.",
        ],
      },
      {
        type: "paragraph",
        text: "Because of these variables, generic figures you find online for **Knee Replacement Surgery in Bangalore cost** can be misleading. The most reliable approach is a consultation, after which the hospital's team can give you a clear, itemised estimate and help you check your insurance eligibility. You can [book a consultation with our orthopaedic specialists](https://vikramaurahospitals.com/book-appointment) to get an assessment specific to your knee.",
      },
      { type: "heading", level: 2, text: "Life After a New Knee" },
      {
        type: "paragraph",
        text: "The goal of knee replacement is simple: a life where your knees no longer decide your plans. Most patients return to walking, swimming, cycling, yoga (with some modified poses), travel, and playing with grandchildren. High-impact activities like running and jumping are best avoided to protect the implant, and deep squatting may remain limited — your physiotherapist will guide you on safe movements.",
      },
      {
        type: "paragraph",
        text: "Regular follow-up visits let your surgeon confirm the implant is working well. With good care, modern implants commonly serve patients for 15 to 20 years or more. If knee pain has been shrinking your world, a detailed evaluation with [Dr. Suresh Babu](https://vikramaurahospitals.com/doctors/dr-suresh-babu) can tell you whether surgery — or a simpler treatment — is the right next step.",
      },
      {
        type: "callout",
        variant: "info",
        text: "Struggling with daily knee pain? Consult the Orthopaedics team at Vikram Aura Hospital, Richmond Road, Bangalore for a thorough evaluation and a treatment plan built around your life. Call our booking line or book an appointment online — our team will guide you through every step, from consultation to recovery.",
      },
      {
        type: "quote",
        text: "Knee replacement is not the last resort it once was. When done at the right time, with committed physiotherapy afterwards, it gives patients back years of active, independent living.",
        attribution: "Dr. Suresh Babu, Senior Consultant – Orthopaedics",
      },
    ],
  },
];

// Helper — look up a post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);

// Helper — featured posts for homepage
export const getFeaturedPosts = (count = 3): BlogPost[] =>
  blogPosts.filter((p) => p.featured).slice(0, count);

// Helper — related posts by category (excluding current post)
export const getRelatedPosts = (currentSlug: string, category: string, count = 3): BlogPost[] =>
  blogPosts
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, count);

const topicTitle = (topic: string) => topic.replace(/\s*\([^)]*\)\s*$/, "").trim();

// Helper — follow-up topics that already exist as published posts with body content
export const getFollowUpPosts = (topics: string[], currentSlug: string): BlogPost[] => {
  const seen = new Set<string>();
  const matches: BlogPost[] = [];

  for (const topic of topics) {
    const name = topicTitle(topic).toLowerCase();
    const post = blogPosts.find(
      (p) =>
        p.slug !== currentSlug &&
        p.content.length > 0 &&
        (p.title.toLowerCase() === name || topic.toLowerCase().startsWith(p.title.toLowerCase()))
    );
    if (post && !seen.has(post.slug)) {
      seen.add(post.slug);
      matches.push(post);
    }
  }

  return matches;
};
