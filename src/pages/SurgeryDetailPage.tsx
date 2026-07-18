import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getDetails } from "../constants/surgeryData";
import FooterImage from "../components/FooterImage";
import BookAppointmentModal from "../components/BookAppointmentModal";
import { doctorsBySpecialty } from "../constants/medicalData";

const SITE_URL = "https://vikramaurahospitals.com";
const HOSPITAL_NAME = "Vikram Aura Hospital";

// Generate URL slug: "Kidney Stones", "7" → "kidney-stones-7"
export const toSurgerySlug = (name: string, id: string | number): string => {
  const nameSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `${nameSlug}-${id}`;
};

// Extract numeric ID from slug: "kidney-stones-7" → "7"
const idFromSlug = (slug: string): string => {
  const match = slug.match(/-(\d+)$/);
  return match ? match[1] : "";
};

// Map numeric surgery ID → specialty slug + display name
const SURGERY_SPECIALTY: Record<string, { slug: string; label: string }> = {
  "9":  { slug: "urology",          label: "Urology & Nephrology" },
  "1":  { slug: "urology",          label: "Urology & Nephrology" },
  "7":  { slug: "urology",          label: "Urology & Nephrology" },
  "15": { slug: "urology",          label: "Urology & Nephrology" },
  "11": { slug: "cardiology",       label: "Cardiology" },
  "6":  { slug: "cardiology",       label: "Cardiology" },
  "2":  { slug: "general-surgery",  label: "General Surgery" },
  "3":  { slug: "general-surgery",  label: "General Surgery" },
  "4":  { slug: "general-surgery",  label: "General Surgery" },
  "5":  { slug: "general-surgery",  label: "General Surgery" },
  "10": { slug: "general-surgery",  label: "General Surgery" },
  "14": { slug: "general-surgery",  label: "General Surgery" },
  "27": { slug: "general-surgery",  label: "General Surgery" },
  "8":  { slug: "orthopaedics",     label: "Orthopaedics" },
  "13": { slug: "orthopaedics",     label: "Orthopaedics" },
  "16": { slug: "orthopaedics",     label: "Orthopaedics" },
  "17": { slug: "orthopaedics",     label: "Orthopaedics" },
  "18": { slug: "orthopaedics",     label: "Orthopaedics" },
  "19": { slug: "orthopaedics",     label: "Orthopaedics" },
  "20": { slug: "orthopaedics",     label: "Orthopaedics" },
  "24": { slug: "orthopaedics",     label: "Orthopaedics" },
  "28": { slug: "orthopaedics",     label: "Orthopaedics" },
  "21": { slug: "obg-gynaecology",  label: "OBG & Gynaecology" },
  "22": { slug: "obg-gynaecology",  label: "OBG & Gynaecology" },
  "23": { slug: "obg-gynaecology",  label: "OBG & Gynaecology" },
  "26": { slug: "obg-gynaecology",  label: "OBG & Gynaecology" },
  "29": { slug: "neurosurgery",     label: "Neurosurgery" },
  "30": { slug: "vascular-surgery", label: "Vascular Surgery" },
};

// ─── Component Renderers ────────────────────────────────────────────────────

const DescriptionBlock: React.FC<{ value: string }> = ({ value }) => (
  <p className="text-gray-700 leading-relaxed text-base mb-4">{value}</p>
);

const DottedPointsBlock: React.FC<{ heading: string; description: string; points: string[] }> = ({
  heading,
  description,
  points,
}) => (
  <div className="mb-4">
    {heading && <h4 className="font-semibold text-gray-900 mb-2">{heading}</h4>}
    {description && <p className="text-gray-600 text-sm mb-2">{description}</p>}
    <ul className="space-y-1.5">
      {points.map((pt, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
          <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-orange-500" />
          {pt}
        </li>
      ))}
    </ul>
  </div>
);

const ImageBlock: React.FC<{ link: { m: string; d: string }; alt: string }> = ({ link, alt }) => (
  <div className="my-5 rounded-xl overflow-hidden border border-gray-100">
    <picture>
      <source media="(min-width: 768px)" srcSet={link.d} />
      <img
        src={link.m}
        alt={alt}
        className="w-full object-cover"
        loading="lazy"
      />
    </picture>
    {alt && <p className="text-xs text-gray-400 text-center py-2 px-3">{alt}</p>}
  </div>
);

const TableBlock: React.FC<{ heading: string; data: { headings: string[]; data: string[][] } }> = ({
  heading,
  data,
}) => (
  <div className="my-5">
    {heading && <h4 className="font-semibold text-gray-900 mb-3">{heading}</h4>}
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm min-w-[480px]">
        <thead>
          <tr style={{ background: "#F26522" }}>
            {data.headings.map((h, i) => (
              <th key={i} className="px-4 py-3 text-white text-left font-semibold whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.data.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-orange-50"}>
              {row.map((cell, ci) => (
                <td key={ci} className={`px-4 py-2.5 text-gray-700 ${ci === 0 ? "font-medium" : ""}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const renderAnswer = (answer: any, idx: number) => {
  switch (answer.component) {
    case "description":
      return <DescriptionBlock key={idx} value={answer.data.value} />;
    case "dottedPoints":
      return (
        <DottedPointsBlock
          key={idx}
          heading={answer.data.heading}
          description={answer.data.description}
          points={answer.data.points}
        />
      );
    case "image":
      return <ImageBlock key={idx} link={answer.data.link} alt={answer.data.alt} />;
    case "table":
      return <TableBlock key={idx} heading={answer.data.heading} data={answer.data.data} />;
    default:
      return null;
  }
};

// ─── Main Page ───────────────────────────────────────────────────────────────

const SurgeryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const id = slug ? idFromSlug(slug) : "";
  const [modalOpen, setModalOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const contentRef = useRef<HTMLDivElement>(null);

  const details = getDetails(id);
  const allDoctorNames = Object.values(doctorsBySpecialty).flat().map((d) => d.name);
  const specialty = id ? SURGERY_SPECIALTY[id] : null;

  // Scroll-spy: track which section is in view
  useEffect(() => {
    if (!details.data?.length) return;
    const allIds = details.data.map((s: any) => s.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    allIds.forEach((sId: string) => {
      const el = document.getElementById(sId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [details]);

  if (!details.surgery) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Surgery information not found</h1>
        <Link to="/doctors" className="text-orange-500 underline">Back to Specialties</Link>
      </main>
    );
  }

  const metaTitle = `${details.surgery} — Treatment, Procedure & Recovery | ${HOSPITAL_NAME}, Bangalore`;
  const firstDesc = details.data?.[0]?.answers?.find((a: any) => a.component === "description");
  const metaDescription = firstDesc
    ? `${firstDesc.data.value.slice(0, 155).trim()}… Expert ${details.surgery} treatment at ${HOSPITAL_NAME}, Bangalore.`
    : `Learn about ${details.surgery} — causes, symptoms, treatment options and recovery. Expert care at ${HOSPITAL_NAME}, Bangalore.`;
  const canonicalUrl = `${SITE_URL}/surgery/details/${slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalCondition",
        name: details.surgery,
        description: firstDesc?.data.value ?? "",
        possibleTreatment: {
          "@type": "MedicalTherapy",
          name: details.surgery,
        },
        relevantSpecialty: specialty?.label ?? "General Surgery",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Specialties", item: `${SITE_URL}/doctors` },
          ...(specialty
            ? [{ "@type": "ListItem", position: 3, name: specialty.label, item: `${SITE_URL}/specialties/${specialty.slug}` }]
            : []),
          { "@type": "ListItem", position: specialty ? 4 : 3, name: details.surgery, item: canonicalUrl },
        ],
      },
    ],
  };

  const scrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 90;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`${details.surgery}, treatment Bangalore, surgery, ${specialty?.label ?? ""}, ${HOSPITAL_NAME}`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="overflow-hidden bg-white">
        {/* Hero */}
        <section
          className="w-full py-12 px-4 text-white"
          style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 60%, #3a3a3a 100%)" }}
        >
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-xs mb-4 opacity-60" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
                <li>/</li>
                <li><Link to="/doctors" className="hover:text-orange-400 transition">Specialties</Link></li>
                {specialty && (
                  <>
                    <li>/</li>
                    <li>
                      <Link to={`/specialties/${specialty.slug}`} className="hover:text-orange-400 transition">
                        {specialty.label}
                      </Link>
                    </li>
                  </>
                )}
                <li>/</li>
                <li className="text-orange-400 truncate max-w-[200px]">{details.surgery}</li>
              </ol>
            </nav>

            {specialty && (
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
                style={{ background: "#F26522" }}
              >
                {specialty.label}
              </span>
            )}

            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{details.surgery}</h1>
            <p className="text-gray-300 text-sm mb-6 max-w-xl">
              Expert {details.surgery} treatment at {HOSPITAL_NAME}, Bangalore — advanced care, compassionate doctors.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="px-7 py-3 rounded-md font-semibold text-white hover:opacity-90 transition"
                style={{ background: "#F26522" }}
              >
                Book Appointment
              </button>
              <a
                href="tel:+917022400800"
                className="px-7 py-3 rounded-md font-semibold border border-white text-white hover:bg-white hover:text-black transition text-center"
              >
                +91 7022 400 800
              </a>
            </div>
          </div>
        </section>

        {/* Body: TOC sidebar + content */}
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="flex gap-8 items-start">

            {/* Sticky TOC sidebar */}
            {details.questionsList?.length > 0 && (
              <aside className="hidden lg:block w-64 shrink-0 sticky top-24 self-start">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                    Contents
                  </h2>
                  <nav>
                    <ul className="space-y-1">
                      {details.questionsList.map((item: any) => (
                        <li key={item.id}>
                          <button
                            onClick={() => scrollTo(item.id)}
                            className={`w-full text-left text-xs px-2 py-1.5 rounded-md transition-all duration-150 leading-snug ${
                              activeId === item.id
                                ? "bg-orange-100 text-orange-700 font-semibold"
                                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            }`}
                          >
                            {item.question}
                          </button>
                          {/* Sub-items */}
                          {item.children?.length > 0 && (
                            <ul className="ml-3 mt-1 space-y-1 border-l border-gray-200 pl-2">
                              {item.children.map((child: any) => (
                                <li key={child.id}>
                                  <button
                                    onClick={() => scrollTo(child.id)}
                                    className={`w-full text-left text-xs px-2 py-1 rounded-md transition-all duration-150 leading-snug ${
                                      activeId === child.id
                                        ? "bg-orange-100 text-orange-700 font-semibold"
                                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                                    }`}
                                  >
                                    {child.question}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Quick CTA */}
                  <button
                    onClick={() => setModalOpen(true)}
                    className="mt-4 w-full py-2 rounded-md text-xs font-semibold text-white text-center transition hover:opacity-90"
                    style={{ background: "#F26522" }}
                  >
                    Book Appointment
                  </button>
                </div>
              </aside>
            )}

            {/* Main content */}
            <article ref={contentRef} className="flex-1 min-w-0">
              {details.data?.map((section: any) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="mb-10 scroll-mt-24"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    {section.question}
                  </h2>
                  <div>{section.answers?.map((ans: any, i: number) => renderAnswer(ans, i))}</div>
                </section>
              ))}

              {/* Back to specialty */}
              {specialty && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link
                    to={`/specialties/${specialty.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-orange-600 hover:text-orange-700 font-medium transition"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h16" />
                    </svg>
                    View all {specialty.label} procedures
                  </Link>
                </div>
              )}
            </article>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="w-full py-14 px-4" style={{ background: "#F26522" }}>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready for Expert {details.surgery} Treatment?
            </h2>
            <p className="text-base opacity-90 mb-6">
              Our specialists at {HOSPITAL_NAME} are here to guide you through every step. Schedule a consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-3 rounded-md font-semibold bg-white text-orange-600 hover:bg-gray-50 transition"
              >
                Book Appointment
              </button>
              <a
                href="tel:+917022400800"
                className="px-8 py-3 rounded-md font-semibold border-2 border-white text-white hover:bg-white hover:text-orange-600 transition text-center"
              >
                +91 7022 400 800
              </a>
            </div>
          </div>
        </section>

        <FooterImage />
        <BookAppointmentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          doctorList={allDoctorNames}
        />
      </main>
    </>
  );
};

export default SurgeryDetailPage;
