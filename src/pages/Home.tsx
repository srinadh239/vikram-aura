import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BookAppointmentModal from "../components/BookAppointmentModal";
import { doctorsBySpecialty, specialties } from "../constants/medicalData";
import { blogPosts } from "../constants/blogData";
import { doctorSchedules } from "../constants/doctorSchedules";
import { getDoctorImageSrc } from "../constants/images";
import "../styles/homeDesign.css";

const SITE_URL = "https://vikramaurahospitals.com";
const OG_IMAGE = "https://website-va.s3.ap-south-1.amazonaws.com/VAH+Logo+Symbol+final+(1)_page-0001.jpg";
const LOGO = "/home/logo.png";
const HERO_IMG = "/home/hero-visual.jpg";
const STORY_IMG = "/home/story-founder.jpg";
const BOOK_PHONE = "tel:+917022400800";
const ALT_PHONE = "tel:+918884481414";
const EQUAL_PHONE = "tel:+917022300800";
const getNavOffset = () => (window.innerWidth <= 900 ? 120 : 80);

/** Ease-in-out cubic for smooth section scrolls */
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const animateScrollTo = (targetY: number, duration = 750) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) return;
  const start = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const SPECIALTY_BLURBS: Record<string, string> = {
  cardiology: "Cath lab · Angiography · Heart failure",
  orthopaedics: "Joint replacement · Sports injury · Spine",
  "gynaecology-obstetrics": "High-risk pregnancy",
  neurology: "Stroke care · Epilepsy · Neurological disorders",
  pulmonology: "Lung health · Sleep apnoea · COPD",
  "urology-nephrology": "Kidney stones · Prostate · Minimally invasive",
  oncology: "Cancer diagnosis · Chemo · Surgical oncology",
  "general-surgery": "Laparoscopic · Bariatric · Day-care",
  dermatology: "Skin conditions · Cosmetology · Aesthetics",
  // "paediatrics-neonatology": "Child healthcare · Neonatology · Development",
  ent: "Ear, nose, throat · Eye care · Microsurgery",
  gastroenterology: "Endoscopy · ERCP · Digestive disorders",
  neurosurgery: "Brain & spine surgery · Neurointervention",
  "plastic-surgery": "Reconstructive · Cosmetic · Trauma",
  "internal-medicine": "Fever · Infections · Chronic disease . Diabetes · Thyroid · Hormone care",
  radiology: "Imaging · Interventional radiology",
  psychology: "Counselling · Behaviour therapy · Stress care",
  dental: "Oral care · Dental surgery",
};

const FEATURED_DOCTOR_IDS = [
  "dr-mohan-murali-j",
  "dr-shobha-rani-rao",
  "dr-sai-krishna-b-naidu",
  "dr-cherin-josi-champannoor",
];

const DESIGN_REVIEWS = [
  {
    featured: true,
    name: "Ehasan Shaik",
    date: "Verified Google Review",
    text: "I am writing to express my heartfelt appreciation for the exceptional care provided during my mother's knee surgery. The expertise and dedication of the team played a pivotal role in her successful recovery. Your commitment to excellence has made a lasting impression on our family.",
    color: undefined as string | undefined,
  },
  {
    featured: false,
    name: "Rakesh M.",
    date: "Google Review · Emergency Care",
    text: "I recently visited the hospital's emergency service and was impressed by the well-maintained facility. The staff treated my situation promptly and with great care, providing all necessary services. The overall service was commendable.",
    color: "var(--blue)",
  },
  {
    featured: false,
    name: "Priya K.",
    date: "Google Review · General Surgery",
    text: "Hospital hygiene was very clear and staff also so caring about the patients. Excellent hospital and treatment. Doctors and staff were so kind — they did not delay procedures. Everything went far better than I expected.",
    color: "var(--green)",
  },
  {
    featured: false,
    name: "Suman B.",
    date: "Google Review · Surgical Ward",
    text: "Staff was very supportive and Dr. Harish performed the surgery very well. Excellent service throughout my stay. Got cured in just 2 days — all thanks to the wonderful team here.",
    color: "var(--cyan)",
  },
  {
    featured: false,
    name: "Anu R.",
    date: "Google Review · Plastic Surgery",
    text: "In a field where compassion and competence are paramount, the team here exemplified exactly those qualities. Visited Dr. Neha Chauhan for a complex procedure and couldn't be more grateful for the level of care and attention I received.",
    color: "var(--magenta)",
  },
];

const SEO_KEYWORDS = [
  { label: "Best hospital in Bangalore", to: "/about" },
  { label: "Multispeciality hospital Richmond Town", to: "/" },
  { label: "Gynaecologist hospital Bangalore", to: "/specialties/obg-gynaecology" },
  { label: "Painless labour Bangalore", to: "/specialties/obg-gynaecology" },
  { label: "Knee replacement surgery Bangalore", to: "/blog/knee-replacement-surgery-bangalore" },
  { label: "24/7 emergency hospital Bangalore", to: "/" },
  { label: "NABH hospital Bangalore", to: "/about" },
  { label: "Gynaecologist Richmond Town", to: "/specialties/obg-gynaecology" },
  { label: "Coronary angiography Bangalore", to: "/specialties/cardiology" },
  // { label: "Level III NICU Bangalore", to: "/doctors#paediatrics-neonatology" },
  { label: "Transparent pricing hospital", to: "/#equal-card" },
  { label: "Laparoscopic surgery Bangalore", to: "/specialties/general-surgery" },
  { label: "High-risk pregnancy specialist", to: "/specialties/obg-gynaecology" },
  { label: "Bariatric surgery Bangalore", to: "/specialties/general-surgery" },
  { label: "Nephrologist Richmond Town", to: "/doctors#urology-nephrology" },
  { label: "Best orthopaedic surgeon Bangalore", to: "/specialties/orthopaedics" },
];

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [defaultDoctor, setDefaultDoctor] = useState<string | undefined>();
  const [kmFilter, setKmFilter] = useState<"all" | "blog" | "news" | "social">("all");

  const openBooking = (doctorName?: string) => {
    setDefaultDoctor(doctorName);
    setModalOpen(true);
  };

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - getNavOffset();
    animateScrollTo(top, 800);
    el.classList.remove("section-flash");
    void el.offsetWidth;
    el.classList.add("section-flash");
    window.setTimeout(() => el.classList.remove("section-flash"), 1200);
    if (window.history.replaceState) {
      window.history.replaceState(null, "", `#${id}`);
    }
  }, []);

  const onAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      scrollToSection(id);
    },
    [scrollToSection]
  );

  // Handle /#section deep links from other pages
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const t = window.setTimeout(() => scrollToSection(hash), 80);
    return () => window.clearTimeout(t);
  }, [scrollToSection]);

  const featuredDoctors = useMemo(() => {
    const all = Object.entries(doctorsBySpecialty).flatMap(([sectionId, docs]) =>
      docs.map((d) => ({ ...d, sectionId }))
    );
    const picked = FEATURED_DOCTOR_IDS.map((id) => all.find((d) => d.id === id)).filter(Boolean) as Array<
      (typeof all)[number]
    >;
    if (picked.length >= 4) return picked.slice(0, 4);
    return all.slice(0, 4);
  }, []);

  const specialtyCards = useMemo(
    () =>
      specialties.map((s) => ({
        ...s,
        blurb: SPECIALTY_BLURBS[s.sectionId] ?? "Expert care · Advanced treatment · Compassionate team",
      })),
    []
  );

  const marqueeNames = useMemo(() => {
    const names = specialties.map((s) => s.name);
    return [...names, ...names];
  }, []);

  const knowMoreCards = useMemo(() => {
    const blogs = blogPosts.slice(0, 4).map((p, i) => ({
      id: `blog-${p.id}`,
      cat: "blog" as const,
      featured: i === 0,
      source: "Health Blog",
      date: new Date(p.publishedAt).toLocaleDateString("en-IN", { month: "short", year: "numeric" }),
      title: p.title,
      excerpt: p.excerpt,
      tag: p.category,
      image: p.coverImage,
      to: `/blog/${p.slug}`,
      color: i % 2 === 0 ? "var(--cyan)" : "var(--green)",
    }));

    const extras = [
      {
        id: "news-1",
        cat: "news" as const,
        featured: true,
        source: "Google My Business",
        date: "June 2025",
        title: "Vikram Aura Expands Cardiology Services with New Interventional Cath Lab",
        excerpt:
          "We're proud to announce our new state-of-the-art cardiac catheterisation laboratory, enabling same-day angiography and interventional procedures for patients across Richmond Town and Bangalore.",
        tag: "Latest Update",
        image: undefined as string | undefined,
        to: "/specialties/cardiology",
        color: "var(--orange)",
      },
      {
        id: "social-1",
        cat: "social" as const,
        featured: false,
        source: "Google Review",
        date: "This month",
        title: '"The team made a very stressful time feel manageable"',
        excerpt:
          "From diagnosis through dialysis setup — communicative, transparent about costs, and genuinely compassionate throughout the nephrology journey.",
        tag: "Verified Review",
        image: undefined,
        to: "https://share.google/f6d1TbTr3gmG9iXIs",
        color: "#4285F4",
      },
    ];

    return [...extras.slice(0, 1), ...blogs.slice(0, 3), ...extras.slice(1)];
  }, []);

  const filteredKm = knowMoreCards.filter((c) => kmFilter === "all" || c.cat === kmFilter);

  return (
    <>
      <Helmet>
        <title>Vikram Aura Hospitals | The Future of Care</title>
        <meta
          name="description"
          content="Transparent pricing. World-class specialists. Seamless care. Vikram Aura Hospital, Richmond Town, Bangalore — NABH accredited multi-speciality hospital. Book: +91 7022 400 800."
        />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:title" content="Vikram Aura Hospitals | The Future of Care" />
        <meta
          property="og:description"
          content="Healthcare reimagined — transparent pricing, world-class specialists, seamless care at Richmond Town, Bangalore."
        />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
      </Helmet>

      <div className="vah-home">
        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="dot" />
              <span>NABH Accredited · Richmond Town, Bangalore</span>
            </div>
            <h1>
              Healthcare<br />
              Reimagined for<br />
              <em>Your Future.</em>
            </h1>
            <p className="hero-sub">
              Transparent pricing. World-class specialists. Seamless care.
              Vikram Aura is where clinical excellence meets genuine compassion —
              built on a legacy of trust by Dr. Vikram, founder of Vikram Hospital Bangalore.
            </p>
            <div className="hero-actions">
              <button type="button" className="btn-primary" onClick={() => openBooking()}>
                📞 Book Appointment
              </button>
              <a href="#story" className="btn-ghost" onClick={(e) => onAnchorClick(e, "story")}>Our Story →</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-num">4.6<span>★</span></div>
                <div className="stat-label">Google Rating</div>
              </div>
              <div className="stat">
                <div className="stat-num">100<span>+</span></div>
                <div className="stat-label">Beds</div>
              </div>
              <div className="stat">
                <div className="stat-num">60<span>+</span></div>
                <div className="stat-label">Specialists</div>
              </div>
              <div className="stat">
                <div className="stat-num">24<span>/7</span></div>
                <div className="stat-label">Emergency Care</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <img src={HERO_IMG} alt="Vikram Aura Hospital – modern patient care" />
            <div className="rating-badge">
              <div><div className="stars">★★★★★</div></div>
              <div className="rating-text">
                <div className="big">4.6 / 5</div>
                <div className="small">1,500+ Google Reviews</div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee-bar" aria-hidden="true">
          <div className="marquee-inner">
            {marqueeNames.map((name, i) => (
              <React.Fragment key={`${name}-${i}`}>
                <span>{name}</span>
                <span className="sep">·</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* STORY */}
        <div className="story" id="story">
          <div className="story-image">
            <img src={STORY_IMG} alt="Dr. Vikram – Founder" />
          </div>
          <div className="story-content">
            <div className="founder-chip">Founder's Vision</div>
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">
              Built on a Legacy<br />of <em>Clinical Excellence</em>
            </h2>
            <p>
              <strong>Dr. Vikram</strong> is a name synonymous with hospital excellence in India.
              As the founder who built Vikram Hospital Bangalore into one of India's most trusted
              healthcare institutions, he understood that great care goes far beyond clinical skill —
              it demands systems, empathy, and a relentless commitment to the patient.
            </p>
            <p>
              Vikram Aura is his boldest reimagining yet. Partnered with Ayu Health — India's
              largest hospital network — Vikram Aura brings together clinical precision,
              cutting-edge technology, and a patient-first philosophy under one roof in
              Richmond Town, Bangalore.
            </p>
            <p>
              From the most advanced diagnostics to personalized recovery pathways,
              every detail at Vikram Aura is designed around one question:{" "}
              <em>what does the patient truly need?</em>
            </p>
            <div className="story-quote">
              <q>
                Our doctors don't just treat illnesses — they empower patients, support families,
                and redefine what it means to receive compassionate, world-class care.
              </q>
              <div className="attr">— Dr. Vikram, Founder, Vikram Aura Hospitals</div>
            </div>
          </div>
        </div>

        {/* VALUES */}
        <section className="values" id="values">
          <div className="values-header">
            <div>
              <span className="section-tag">Why Vikram Aura</span>
              <h2 className="section-title">
                The <em>Future of Care</em>
                <br />Has Four Pillars
              </h2>
            </div>
            <p style={{ color: "#808285", maxWidth: 280, fontSize: 15, lineHeight: 1.7, textAlign: "right" }}>
              Four commitments that define how we deliver care at Vikram Aura.
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card v1">
              <div className="vc-icon-wrap">
                <svg viewBox="0 0 48 48" className="vc-big-icon" fill="none">
                  <path d="M26 6l16 16-18 18L6 22V6h20z" stroke="#F26522" strokeWidth="2.5" strokeLinejoin="round" />
                  <circle cx="15" cy="15" r="3" stroke="#F26522" strokeWidth="2" />
                  <path d="M19 28l4 4 8-10" stroke="#F26522" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="vc-title">Transparent Pricing</h3>
              <div className="vc-detail">
                <p>Know exactly what you'll pay before you walk in. No hidden charges, no billing surprises. Healthcare the way it should always have been.</p>
                <ul className="vc-bullets">
                  <li>Upfront procedure costs</li>
                  <li>No hidden lab or OT fees</li>
                  <li>EMI &amp; insurance support</li>
                  <li>50% off consultations &amp; lab tests</li>
                </ul>
                <a href="#equal-card" className="vc-cta" onClick={(e) => onAnchorClick(e, "equal-card")}>Learn about Equal Card →</a>
              </div>
            </div>
            <div className="value-card v2">
              <div className="vc-icon-wrap">
                <svg viewBox="0 0 48 48" className="vc-big-icon" fill="none">
                  <circle cx="24" cy="14" r="5" stroke="#3EC2CF" strokeWidth="2.5" />
                  <path d="M14 40c0-5.52 4.48-10 10-10s10 4.48 10 10" stroke="#3EC2CF" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="38" cy="16" r="3.5" stroke="#3EC2CF" strokeWidth="2" />
                  <path d="M42 36c0-3.87-2.24-7-5-7" stroke="#3EC2CF" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="10" cy="16" r="3.5" stroke="#3EC2CF" strokeWidth="2" />
                  <path d="M6 36c0-3.87 2.24-7 5-7" stroke="#3EC2CF" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="vc-title">Best Clinical Teams</h3>
              <div className="vc-detail">
                <p>60+ specialists with 3–56 years of combined experience. Complex cases, precision diagnostics, multidisciplinary reviews — all under one roof.</p>
                <ul className="vc-bullets">
                  <li>Super-specialists in 15+ fields</li>
                  <li>Multidisciplinary case reviews</li>
                  <li>Continuous medical education</li>
                  <li>Formerly Fortis Hospital expertise</li>
                </ul>
                <a href="#doctors" className="vc-cta" onClick={(e) => onAnchorClick(e, "doctors")}>Meet our doctors →</a>
              </div>
            </div>
            <div className="value-card v3">
              <div className="vc-icon-wrap">
                <svg viewBox="0 0 48 48" className="vc-big-icon" fill="none">
                  <circle cx="22" cy="18" r="10" stroke="#39B54A" strokeWidth="2.5" />
                  <path d="M22 12v12" stroke="#39B54A" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16 18h12" stroke="#39B54A" strokeWidth="2" strokeLinecap="round" />
                  <path d="M29 25l6 6" stroke="#39B54A" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M12 40h24" stroke="#39B54A" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M24 28v12" stroke="#39B54A" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M18 36h12" stroke="#39B54A" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="vc-title">Modern Equipment</h3>
              <div className="vc-detail">
                <p>Advanced diagnostics, a fully-equipped interventional cath lab, Level III NICU, and state-of-the-art operating theatres — all in Richmond Town.</p>
                <ul className="vc-bullets">
                  <li>Interventional cath lab</li>
                  <li>Level III NICU</li>
                  <li>Advanced laparoscopic OT</li>
                  <li>Digital radiology &amp; pathology</li>
                </ul>
                <a href="#specialties" className="vc-cta" onClick={(e) => onAnchorClick(e, "specialties")}>Explore specialties →</a>
              </div>
            </div>
            <div className="value-card v4">
              <div className="vc-icon-wrap">
                <svg viewBox="0 0 48 48" className="vc-big-icon" fill="none">
                  <path d="M8 12h32" stroke="#17479E" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 4" />
                  <circle cx="8" cy="12" r="4" stroke="#17479E" strokeWidth="2.5" />
                  <path d="M7 11l2 2 3-4" stroke="#17479E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="24" cy="12" r="4" stroke="#17479E" strokeWidth="2.5" />
                  <path d="M23 11l2 2 3-4" stroke="#17479E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="40" cy="12" r="4" stroke="#17479E" strokeWidth="2.5" />
                  <path d="M39 11l2 2 3-4" stroke="#17479E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 20v14c0 4 4 6 8 6h16c4 0 8-2 8-6V20" stroke="#17479E" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M18 28h12" stroke="#17479E" strokeWidth="2" strokeLinecap="round" />
                  <path d="M18 34h8" stroke="#17479E" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="vc-title">Seamless Experience</h3>
              <div className="vc-detail">
                <p>From your first call to your last follow-up — coordinated care, clear communication, and a dedicated team that's with you every step of the way.</p>
                <ul className="vc-bullets">
                  <li>Dedicated care coordinator</li>
                  <li>Online appointment booking</li>
                  <li>WhatsApp health updates</li>
                  <li>Discharge-to-recovery support</li>
                </ul>
                <button type="button" className="vc-cta" onClick={() => openBooking()}>
                  Book an appointment →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALTIES */}
        <section className="specialties" id="specialties">
          <div className="spec-header">
            <div>
              <span className="section-tag">Medical Specialties</span>
              <h2 className="section-title">
                Every Specialty.<br /><em>One Address.</em>
              </h2>
            </div>
            <Link to="/doctors" className="btn-primary" style={{ whiteSpace: "nowrap" }}>
              Find a Specialist →
            </Link>
          </div>
          <div className="spec-grid">
            {specialtyCards.map((s) => {
              const to = s.procedurePageSlug
                ? `/specialties/${s.procedurePageSlug}`
                : `/doctors#${s.sectionId}`;
              return (
                <Link key={s.sectionId} to={to} className="spec-card">
                  <div className="spec-icon-wrap">
                    <img
                      src={s.iconSrc}
                      alt=""
                      width={28}
                      height={28}
                      style={{ filter: "brightness(0) invert(1)", opacity: 0.95 }}
                    />
                  </div>
                  <h3>{s.name}</h3>
                  <p>{s.blurb}</p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ACCREDITATION */}
        <div className="accreditation">
          {[
            ["🏅", "Accreditation", "NABH Certified"],
            ["🕐", "Availability", "24×7 Emergency"],
            ["👨‍⚕️", "Medical Team", "60+ Specialists"],
            ["🛏️", "Capacity", "100+ Beds"],
            ["⭐", "Patient Rating", "4.6 / 5 · 1,500+ Reviews"],
          ].map(([badge, label, value], i, arr) => (
            <React.Fragment key={label as string}>
              <div className="acc-item">
                <div className="acc-badge">{badge}</div>
                <div className="acc-text">
                  <div className="label">{label}</div>
                  <div className="value">{value}</div>
                </div>
              </div>
              {i < arr.length - 1 && <div className="acc-divider" />}
            </React.Fragment>
          ))}
        </div>

        {/* REVIEWS */}
        <section className="reviews" id="reviews">
          <div className="reviews-header">
            <div>
              <span className="section-tag">Patient Stories</span>
              <h2 className="section-title">
                Trusted by Thousands.<br /><em>Loved by Families.</em>
              </h2>
            </div>
            <div className="google-badge">
              <div className="g-logo">
                <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span>
              </div>
              <div className="g-rating">4.6 ★ · 1,500+ Reviews</div>
            </div>
          </div>
          <div className="reviews-grid">
            {DESIGN_REVIEWS.map((r) => (
              <div key={r.name} className={`review-card${r.featured ? " featured" : ""}`}>
                <div className="review-stars">★★★★★</div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-author">
                  <div className="author-avatar" style={r.color ? { background: r.color } : undefined}>
                    {r.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <div className="name" style={r.featured ? { color: "white" } : undefined}>{r.name}</div>
                    <div className="date">{r.date}</div>
                  </div>
                </div>
              </div>
            ))}
            <div
              className="review-card"
              style={{
                background: "var(--bg-warm)",
                borderColor: "rgba(242,101,34,.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 16,
                textAlign: "center",
                minHeight: 200,
              }}
            >
              <div style={{ fontSize: 40 }}>⭐</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "var(--black)" }}>4.6 / 5</div>
              <div style={{ fontSize: 14, color: "var(--light-grey)", fontWeight: 600 }}>
                Based on 1,500+ verified<br />Google reviews
              </div>
              <a
                href="https://share.google/f6d1TbTr3gmG9iXIs"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--orange)", fontSize: 13, fontWeight: 800 }}
              >
                Read all reviews →
              </a>
            </div>
          </div>
        </section>

        {/* EQUAL CARD */}
        <div className="equal-card-section" id="equal-card">
          <div className="equal-card-content">
            <span className="section-tag">Vikram Aura Exclusive</span>
            <h2>Introducing the<br />Equal Card</h2>
            <p>
              Quality care and smart savings. Now <strong style={{ color: "white" }}>equal</strong>.
              One card that gives every patient transparent pricing, real discounts, and priority access —
              no negotiations, no surprises.
            </p>
            <a href={EQUAL_PHONE} className="btn-white">Get Your Equal Card →</a>
          </div>
          <div className="equal-card-visual">
            <div className="eq-front">
              <div className="eq-front-name">Equal</div>
              <div className="eq-front-tagline">
                Quality care and smart savings. Now <strong>equal</strong>.
              </div>
              <ul className="eq-perks">
                <li>50% off on all specialist consultations for outpatients</li>
                <li>Unlimited free physician, dietitian &amp; psychologist teleconsultations</li>
                <li>50% off on all in-house lab tests &amp; radiology for outpatients</li>
                <li>Complimentary room upgrade for inpatients</li>
                <li>1 Complimentary health check-up</li>
                <li>10% discount on all subsequent health check-ups</li>
                <li>10% discount on pharmacy for outpatients</li>
              </ul>
              <div className="eq-front-footer">
                <div className="eq-front-phone">7022 300 800</div>
                <div className="eq-front-url">www.vikramaurahospitals.com</div>
              </div>
            </div>
            <div className="eq-back">
              <div className="eq-back-top">
                <div className="eq-back-name">Equal</div>
                <div className="eq-back-num">2201 2114 2026 0001</div>
              </div>
              <div className="eq-back-tagline">
                Quality care and smart savings. Now <strong>equal</strong>.
              </div>
              <div className="eq-back-footer">
                7022 300 800
                <span className="eq-back-url">· www.vikramaurahospitals.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* DOCTORS */}
        <section className="doctors" id="doctors">
          <div className="doctors-header">
            <div>
              <span className="section-tag">Our Specialists</span>
              <h2 className="section-title">
                Meet the <em>Team</em>
                <br />Behind Your Care
              </h2>
            </div>
            <Link to="/doctors" className="btn-primary">View All Doctors →</Link>
          </div>
          <div className="doctors-grid">
            {featuredDoctors.map((doc) => {
              const specialty = specialties.find((s) => s.sectionId === doc.sectionId);
              return (
                <div key={doc.id} className="doctor-card">
                  <img
                    className="doctor-img"
                    src={getDoctorImageSrc(doc.imageSrc)}
                    alt={doc.name}
                    loading="lazy"
                  />
                  <div className="doctor-info">
                    <div className="dept">{specialty?.name ?? "Specialist"}</div>
                    <div className="dname">{doc.name.replace(/^DR\s+/i, "Dr. ")}</div>
                    <div className="exp">{doc.credentials}</div>
                  </div>
                  <button
                    type="button"
                    className="doctor-appt"
                    onClick={() => openBooking(doc.name)}
                  >
                    Book Appointment
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* KNOW MORE */}
        <section className="know-more" id="know-more">
          <div className="know-more-header">
            <div>
              <span className="section-tag">Know More</span>
              <h2 className="section-title">
                Stay Informed.<br /><em>Stay Healthy.</em>
              </h2>
            </div>
            <div className="km-tabs">
              {(
                [
                  ["all", "All Updates"],
                  ["blog", "Health Tips"],
                  ["news", "News"],
                  ["social", "Social & Reviews"],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  className={`km-tab${kmFilter === key ? " active" : ""}`}
                  onClick={() => setKmFilter(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="km-grid">
            {filteredKm.map((card) => {
              const inner = (
                <>
                  <div className="km-img-wrap">
                    {card.image ? (
                      <img src={card.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      <div
                        className="km-img-placeholder"
                        style={{
                          background:
                            card.cat === "news"
                              ? "linear-gradient(135deg,#0e1e40,#162f6b)"
                              : "linear-gradient(135deg,#e8dafb,#c9adf7)",
                        }}
                      >
                        {card.cat === "news" ? "🏥" : "⭐"}
                      </div>
                    )}
                  </div>
                  <div className="km-body">
                    <div className="km-source">
                      <span className="km-source-dot" style={{ background: card.color }} />
                      <span className="km-source-label">{card.source}</span>
                      <span className="km-source-date">{card.date}</span>
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.excerpt}</p>
                    <span
                      className="km-tag"
                      style={{ background: "rgba(242,101,34,.15)", color: "var(--orange)" }}
                    >
                      {card.tag}
                    </span>
                  </div>
                </>
              );
              const className = `km-card${card.featured ? " feat" : ""}`;
              if (card.to.startsWith("http")) {
                return (
                  <a key={card.id} href={card.to} target="_blank" rel="noopener noreferrer" className={className}>
                    {inner}
                  </a>
                );
              }
              return (
                <Link key={card.id} to={card.to} className={className}>
                  {inner}
                </Link>
              );
            })}
          </div>
          <div className="km-seo">
            <h3>Explore health topics &amp; services at Vikram Aura</h3>
            <div className="keyword-cloud">
              {SEO_KEYWORDS.map((k) => {
                const hash = k.to.startsWith("/#")
                  ? k.to.slice(2)
                  : k.to.startsWith("#")
                    ? k.to.slice(1)
                    : null;
                if (hash) {
                  return (
                    <a
                      key={k.label}
                      href={`#${hash}`}
                      className="keyword-pill"
                      onClick={(e) => onAnchorClick(e, hash)}
                    >
                      {k.label}
                    </a>
                  );
                }
                return (
                  <Link key={k.label} to={k.to} className="keyword-pill">
                    {k.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <span className="section-tag">Get Started</span>
          <h2>
            Ready to Experience<br />the <em>Future of Care?</em>
          </h2>
          <p>
            Our care team is available 24×7. Book an appointment, consult a specialist,
            or visit us at Richmond Town, Bangalore.
          </p>
          <div className="cta-actions">
            <a href={BOOK_PHONE} className="btn-primary" style={{ fontSize: 18, padding: "18px 40px" }}>
              📞 +91 70224 00800
            </a>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--light-grey)", letterSpacing: ".5px" }}>
                ALSO REACH US
              </div>
              <a href={ALT_PHONE} style={{ fontSize: 16, fontWeight: 800, color: "var(--dark-grey)" }}>
                +91 88844 81414
              </a>
            </div>
          </div>
          <p style={{ marginTop: 32, fontSize: 14, color: "var(--light-grey)" }}>
            📍 #62, Richmond Road, Behind Sacred Heart Church, Mother Teresa Road,<br />
            Richmond Town, Bangalore – 560025
          </p>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo-mark">
                <img src={LOGO} alt="Vikram Aura Hospitals" className="footer-logo-img" />
              </div>
              <p>
                A bold vision in healthcare, built by Dr. Vikram — founder of Vikram Hospital Bangalore —
                partnered with Ayu Health. NABH-accredited, patient-first, and committed to
                transparent, world-class care.
              </p>
            </div>
            <div className="footer-col">
              <h4>Specialties</h4>
              {specialtyCards
                .filter((s) => s.procedurePageSlug)
                .slice(0, 6)
                .map((s) => (
                  <Link key={s.sectionId} to={`/specialties/${s.procedurePageSlug}`}>
                    {s.name}
                  </Link>
                ))}
            </div>
            <div className="footer-col">
              <h4>About</h4>
              <a href="#story" onClick={(e) => onAnchorClick(e, "story")}>Our Story</a>
              <Link to="/about">Leadership</Link>
              <a href="#equal-card" onClick={(e) => onAnchorClick(e, "equal-card")}>Equal Card</a>
              <Link to="/blog">Blogs</Link>
              <Link to="/doctors">Our Doctors</Link>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <a href={BOOK_PHONE}>📞 +91 70224 00800</a>
              <a href={ALT_PHONE}>📞 +91 88844 81414</a>
              <a href="mailto:info@vikramaura.com">✉️ info@vikramaura.com</a>
              <a href="https://maps.google.com/?q=Vikram+Aura+Hospital+Richmond+Town">
                📍 Richmond Town, Bangalore
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Vikram Aura Hospitals. All rights reserved. |{" "}
              <Link to="/privacy-policy" style={{ color: "rgba(255,255,255,.4)" }}>Privacy Policy</Link>
              {" · "}
              <Link to="/terms-of-service" style={{ color: "rgba(255,255,255,.4)" }}>Terms</Link>
            </p>
            <div className="color-strip">
              <span style={{ background: "#DA2128" }} />
              <span style={{ background: "#F26522" }} />
              <span style={{ background: "#FFDD00" }} />
              <span style={{ background: "#39B54A" }} />
              <span style={{ background: "#3EC2CF" }} />
              <span style={{ background: "#17479E" }} />
              <span style={{ background: "#ED2891" }} />
              <span style={{ background: "#B43092" }} />
              <span style={{ background: "#F48580" }} />
            </div>
          </div>
        </footer>

        {/* Mobile sticky book CTA (call uses the floating FAB) */}
        <div className="mobile-sticky">
          <button
            type="button"
            onClick={() => openBooking()}
            style={{ flex: 1, padding: "14px", background: "#F26522", color: "#fff", border: "none", fontWeight: 700, fontSize: 14 }}
          >
            Book Appointment
          </button>
        </div>

        <BookAppointmentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          doctorSchedules={doctorSchedules}
          defaultDoctor={defaultDoctor}
        />
      </div>
    </>
  );
};

export default Home;
