import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { specialtyProcedures } from "../constants/specialtyData";
import FooterImage from "../components/FooterImage";
import BookAppointmentModal from "../components/BookAppointmentModal";
import { doctorsBySpecialty } from "../constants/medicalData";

const HOSPITAL_NAME = "Vikram Aura Hospital";
const HOSPITAL_CITY = "Bangalore";
const SITE_URL = "https://vikramaurahospitals.com/";

const SpecialtyPage: React.FC = () => {
  const { specialtySlug } = useParams<{ specialtySlug: string }>();
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  const specialtyData = specialtySlug ? specialtyProcedures[specialtySlug] : null;

  if (!specialtyData) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Specialty not found</h1>
        <Link to="/doctors" className="text-orange-500 underline">Back to Doctors</Link>
      </main>
    );
  }

  const allDoctorNames = Object.values(doctorsBySpecialty).flat().map((d) => d.name);

  const filtered = specialtyData.procedures.filter(
    (p) =>
      p.medicalName.toLowerCase().includes(search.toLowerCase()) ||
      p.commonName.toLowerCase().includes(search.toLowerCase())
  );

  const metaTitle = `${specialtyData.name} Treatments & Procedures | ${HOSPITAL_NAME}, ${HOSPITAL_CITY}`;
  const metaDescription = `Expert ${specialtyData.name} treatments at ${HOSPITAL_NAME}, ${HOSPITAL_CITY}. Browse ${specialtyData.procedures.length} specialised procedures performed by our experienced consultants. Affordable costs, advanced care.`;
  const canonicalUrl = `${SITE_URL}/specialties/${specialtyData.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: HOSPITAL_NAME,
    url: SITE_URL,
    medicalSpecialty: specialtyData.name,
    availableService: specialtyData.procedures.map((p) => ({
      "@type": "MedicalProcedure",
      name: p.medicalName,
      alternateName: p.commonName,
      url: `${canonicalUrl}/${p.slug}`,
    })),
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`${specialtyData.name}, ${specialtyData.procedures.slice(0, 8).map((p) => p.commonName).join(", ")}, ${HOSPITAL_CITY}`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="overflow-hidden bg-white">
        {/* Hero */}
        <section
          className="w-full py-16 px-4 text-white"
          style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 60%, #3a3a3a 100%)" }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm mb-6 opacity-70" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 flex-wrap">
                <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
                <li className="opacity-50">/</li>
                <li><Link to="/doctors" className="hover:text-orange-400 transition">Specialties</Link></li>
                <li className="opacity-50">/</li>
                <li className="text-orange-400">{specialtyData.name}</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {specialtyData.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
              Expert {specialtyData.name.toLowerCase()} care at {HOSPITAL_NAME}, {HOSPITAL_CITY}. Our consultants perform{" "}
              <strong className="text-white">{specialtyData.procedures.length} specialised procedures</strong> with advanced technology and compassionate care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-3 rounded-md font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: "#F26522" }}
              >
                Book Appointment
              </button>
              <a
                href="tel:+917022400800"
                className="px-8 py-3 rounded-md font-semibold border border-white text-white hover:bg-white hover:text-black transition-all duration-200 text-center"
              >
                Call Us: +91 7022 400 800
              </a>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="w-full border-b border-gray-100" style={{ background: "#fafafa" }}>
          <div className="max-w-6xl mx-auto px-4 py-6 flex flex-wrap gap-8 items-center justify-center md:justify-start">
            <div className="text-center">
              <span className="text-3xl font-bold" style={{ color: "#F26522" }}>{specialtyData.procedures.length}+</span>
              <p className="text-sm text-gray-500 mt-1">Procedures</p>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden md:block" />
            <div className="text-center">
              <span className="text-3xl font-bold" style={{ color: "#F26522" }}>Expert</span>
              <p className="text-sm text-gray-500 mt-1">Consultants</p>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden md:block" />
            <div className="text-center">
              <span className="text-3xl font-bold" style={{ color: "#F26522" }}>Advanced</span>
              <p className="text-sm text-gray-500 mt-1">Technology</p>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden md:block" />
            <div className="text-center">
              <span className="text-3xl font-bold" style={{ color: "#F26522" }}>Bangalore</span>
              <p className="text-sm text-gray-500 mt-1">Location</p>
            </div>
          </div>
        </section>

        {/* Procedure list */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              All {specialtyData.name} Procedures
            </h2>
            {/* Search */}
            <div className="relative max-w-xs w-full">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search procedures..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          {filtered.length === 0 && (
            <p className="text-gray-500 text-center py-10">No procedures match your search.</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((procedure) => (
              <Link
                key={procedure.slug}
                to={`/specialties/${specialtyData.slug}/${procedure.slug}`}
                className="group block bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-orange-300 transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "#FFF0E8" }}
                  >
                    <svg className="w-4 h-4" style={{ color: "#F26522" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors leading-snug text-sm">
                      {procedure.medicalName}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-2">
                      {procedure.commonName}
                    </p>
                    {procedure.cost && (
                      <span className="inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded-full bg-orange-50 text-orange-600 border border-orange-100">
                        {procedure.cost}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-end text-xs font-medium text-orange-500 group-hover:gap-2 gap-1 transition-all">
                  Learn more
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-14 px-4" style={{ background: "#F26522" }}>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Need a {specialtyData.name} Consultation?
            </h2>
            <p className="text-base opacity-90 mb-6">
              Our specialists at {HOSPITAL_NAME} are here to help. Book an appointment today and receive expert, personalised care.
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

export default SpecialtyPage;
