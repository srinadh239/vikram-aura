import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { specialtyProcedures } from "../constants/specialtyData";
import FooterImage from "../components/FooterImage";
import BookAppointmentModal from "../components/BookAppointmentModal";
import { doctorsBySpecialty } from "../constants/medicalData";
import { doctorSchedules } from "../constants/doctorSchedules";

const HOSPITAL_NAME = "Vikram Aura Hospital";
const HOSPITAL_CITY = "Bangalore";
const SITE_URL = "https://vikramaurahospitals.com";

interface SectionCardProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  highlight?: boolean;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, icon, items, highlight }) => {
  if (!items || items.length === 0) return null;
  return (
    <div className={`rounded-xl p-6 border ${highlight ? "border-orange-200 bg-orange-50" : "border-gray-100 bg-gray-50"}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-9 h-9 rounded-full flex items-center justify-center ${highlight ? "bg-orange-500" : "bg-gray-800"}`}>
          <span className="text-white w-5 h-5 flex items-center justify-center">{icon}</span>
        </div>
        <h2 className={`font-bold text-lg ${highlight ? "text-orange-700" : "text-gray-900"}`}>{title}</h2>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${highlight ? "bg-orange-500" : "bg-gray-400"}`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProcedurePage: React.FC = () => {
  const { specialtySlug, procedureSlug } = useParams<{ specialtySlug: string; procedureSlug: string }>();
  const [modalOpen, setModalOpen] = useState(false);

  const specialtyData = specialtySlug ? specialtyProcedures[specialtySlug] : null;
  const procedure = specialtyData?.procedures.find((p) => p.slug === procedureSlug) ?? null;

  

  if (!specialtyData || !procedure) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Procedure not found</h1>
        <Link to="/doctors" className="text-orange-500 underline">Back to Specialties</Link>
      </main>
    );
  }

  const canonicalUrl = `${SITE_URL}/specialties/${specialtyData.slug}/${procedure.slug}`;
  const metaTitle = `${procedure.commonName} (${procedure.medicalName}) | ${specialtyData.name} | ${HOSPITAL_NAME}`;
  const metaDescription = `${procedure.commonName} — ${procedure.whatIs.slice(0, 160).trim()}… Expert ${specialtyData.name} care at ${HOSPITAL_NAME}, ${HOSPITAL_CITY}.`;

  const faqStructured = procedure.faqs.map((faq) => {
    const [q, ...aParts] = faq.split("?");
    return {
      "@type": "Question",
      name: q ? q.trim() + "?" : faq,
      acceptedAnswer: {
        "@type": "Answer",
        text: aParts.join("?").trim() || "Please contact us for more information.",
      },
    };
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalProcedure",
        name: procedure.medicalName,
        alternateName: procedure.commonName,
        description: procedure.whatIs,
        url: canonicalUrl,
        relevantSpecialty: {
          "@type": "MedicalSpecialty",
          name: specialtyData.name,
        },
        followup: procedure.recovery.join(". "),
        howPerformed: procedure.types.join(". "),
        preparation: procedure.prevention.join(". "),
        procedureType: {
          "@type": "MedicalProcedureType",
          name: specialtyData.name,
        },
        provider: {
          "@type": "MedicalOrganization",
          name: HOSPITAL_NAME,
          url: SITE_URL,
          address: {
            "@type": "PostalAddress",
            addressLocality: HOSPITAL_CITY,
            addressCountry: "IN",
          },
        },
      },
      ...(faqStructured.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faqStructured,
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Specialties", item: `${SITE_URL}/doctors` },
          { "@type": "ListItem", position: 3, name: specialtyData.name, item: `${SITE_URL}/specialties/${specialtyData.slug}` },
          { "@type": "ListItem", position: 4, name: procedure.medicalName, item: canonicalUrl },
        ],
      },
    ],
  };

  // Find adjacent procedures for prev/next nav
  const procIndex = specialtyData.procedures.findIndex((p) => p.slug === procedure.slug);
  const prevProc = procIndex > 0 ? specialtyData.procedures[procIndex - 1] : null;
  const nextProc = procIndex < specialtyData.procedures.length - 1 ? specialtyData.procedures[procIndex + 1] : null;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`${procedure.medicalName}, ${procedure.commonName}, ${specialtyData.name}, ${HOSPITAL_CITY}, treatment, hospital`} />
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
          className="w-full py-14 px-4 text-white"
          style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 60%, #3a3a3a 100%)" }}
        >
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            {/* <nav className="text-xs mb-5 opacity-60" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
                <li>/</li>
                <li><Link to="/doctors" className="hover:text-orange-400 transition">Specialties</Link></li>
                <li>/</li>
                <li>
                  <Link to={`/specialties/${specialtyData.slug}`} className="hover:text-orange-400 transition">
                    {specialtyData.name}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-orange-400 truncate max-w-[200px]">{procedure.medicalName}</li>
              </ol>
            </nav> */}

            {/* Specialty badge */}
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{ background: "#F26522", color: "white" }}
            >
              {specialtyData.name}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
              {procedure.medicalName}
            </h1>
            <p className="text-lg text-orange-300 font-medium mb-5">{procedure.commonName}</p>

            {procedure.cost && (
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2 mb-6">
                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a5 5 0 00-10 0v2M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="text-sm font-medium">Cost in Bangalore: <strong className="text-orange-300">{procedure.cost}</strong></span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="px-7 py-3 rounded-md font-semibold text-white transition hover:opacity-90"
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

        {/* Main content */}
        <article className="max-w-5xl mx-auto px-4 py-12">
          {/* What is the procedure */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What is {procedure.commonName}?
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed text-base">{procedure.whatIs}</p>
            </div>
          </section>

          {/* 2-col grid of info cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            <SectionCard
              title="Signs & Symptoms"
              icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              items={procedure.symptoms}
            />
            <SectionCard
              title="Causes & Risk Factors"
              icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              items={procedure.causes}
            />
            <SectionCard
              title="Types of Procedures"
              icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>}
              items={procedure.types}
            />
            <SectionCard
              title="Treatment Options Compared"
              icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
              items={procedure.comparison}
            />
            <SectionCard
              title="Recovery & Post-Procedure"
              icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
              items={procedure.recovery}
            />
            <SectionCard
              title="Prevention & Lifestyle"
              icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
              items={procedure.prevention}
            />
          </div>

          {/* Treatment outcomes */}
          {procedure.outcomes.length > 0 && (
            <section className="mb-10">
              <SectionCard
                title="Treatment Outcomes"
                icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
                items={procedure.outcomes}
              />
            </section>
          )}

          {/* Why choose us */}
          {procedure.whyUs.length > 0 && (
            <section className="mb-10">
              <SectionCard
                title={`Why Choose ${HOSPITAL_NAME} for ${procedure.commonName}`}
                icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>}
                items={procedure.whyUs}
                highlight
              />
            </section>
          )}

          {/* FAQs */}
          {procedure.faqs.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {procedure.faqs.map((faq, i) => {
                  const qMark = faq.indexOf("?");
                  const question = qMark !== -1 ? faq.slice(0, qMark + 1).trim() : faq;
                  const answer = qMark !== -1 ? faq.slice(qMark + 1).trim() : "";
                  return (
                    <details key={i} className="border border-gray-200 rounded-lg overflow-hidden group">
                      <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer font-medium text-gray-900 hover:bg-gray-50 list-none select-none">
                        <span>{question}</span>
                        <svg className="w-4 h-4 text-gray-400 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      {answer && (
                        <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                          {answer}
                        </div>
                      )}
                    </details>
                  );
                })}
              </div>
            </section>
          )}

          {/* Prev / Next navigation */}
          {/* <nav className="flex flex-col sm:flex-row justify-between gap-4 border-t border-gray-100 pt-8">
            {prevProc ? (
              <Link
                to={`/specialties/${specialtyData.slug}/${prevProc.slug}`}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-orange-600 transition group"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-left">
                  <span className="block text-xs text-gray-400">Previous</span>
                  {prevProc.medicalName}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextProc && (
              <Link
                to={`/specialties/${specialtyData.slug}/${nextProc.slug}`}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-orange-600 transition group text-right"
              >
                <span className="text-right">
                  <span className="block text-xs text-gray-400">Next</span>
                  {nextProc.medicalName}
                </span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </nav> */}

          {/* Back to specialty */}
          <div className="mt-6 text-center">
            <Link
              to={`/specialties/${specialtyData.slug}`}
              className="inline-flex items-center gap-2 text-sm text-orange-600 hover:text-orange-700 font-medium transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h16" />
              </svg>
              View all {specialtyData.name} procedures
            </Link>
          </div>
        </article>

        {/* Bottom CTA */}
        <section className="w-full py-14 px-4" style={{ background: "#F26522" }}>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready for Expert Care?
            </h2>
            <p className="text-base opacity-90 mb-6">
              Our {specialtyData.name} specialists at {HOSPITAL_NAME} are ready to guide you through{" "}
              <strong>{procedure.commonName}</strong>. Schedule a consultation today.
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
          doctorSchedules={doctorSchedules}
        />
      </main>
    </>
  );
};

export default ProcedurePage;
