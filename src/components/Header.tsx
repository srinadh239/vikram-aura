import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BookAppointmentModal from "./BookAppointmentModal";
import { doctorsBySpecialty } from "../constants/medicalData";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate("/", { replace: false });
      setTimeout(() => scrollToSection(id), 100); // Wait for navigation
    }
  };

  const handleMobileNavClick = (e: React.MouseEvent, id: string) => {
    handleNavClick(e, id);
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  // Gather all doctor names from all specialties
  const doctorList = Object.values(doctorsBySpecialty).flat().map(doc => doc.name);

  return (
    <header className="relative px-8 py-5 w-full bg-white shadow-[0px_1px_0px_rgba(255,255,255,0.3)] max-md:px-5 max-md:max-w-full">
      <nav className="flex gap-5 max-md:flex-col max-md:gap-5">
        <div className="flex justify-between items-center w-full md:w-1/5">
          <Link to="/" aria-label="Home">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b29964cb62b437cff6665d66056a56be827b29f5?placeholderIfAbsent=true"
              alt="Logo"
              className="object-contain grow shrink-0 max-w-full aspect-[2.69] w-[215px]"
            />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-zinc-600 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-zinc-600 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-zinc-600 transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-[39%] items-center justify-center">
          <nav className="flex gap-10 self-stretch my-auto text-base uppercase text-zinc-600">
            <a
              href="#why-choose-us"
              className="grow hover:text-orange-500 transition-colors"
              onClick={e => handleNavClick(e, "why-choose-us")}
            >
              Who we are
            </a>
            <Link
              to="/doctors"
              className="basis-auto hover:text-orange-500 transition-colors"
            >
              Our Doctors
            </Link>
            <a
              href="#have-more"
              className="basis-auto hover:text-orange-500 transition-colors"
              onClick={e => handleNavClick(e, "have-more")}
            >
              Our Investors
            </a>
          </nav>
        </div>

        <div className="hidden md:flex items-center w-[18%] justify-center">
          <div className="flex gap-3.5 self-stretch my-auto text-base font-semibold uppercase text-zinc-600">
            <a
              href="tel:+917022400800"
              aria-label="Call us at +91-7022 400 800"
              className="flex items-center justify-center shrink-0 rounded-full border border-solid border-zinc-600 h-[50px] w-[50px] bg-white hover:bg-orange-50 transition-colors"
            >
              <img
                src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/call-icon.svg"
                alt="Call Icon"
                className="object-contain w-7 h-7"
                role="presentation"
              />
            </a>
            <a
              href="tel:+917022400800"
              className="my-auto basis-auto hover:text-orange-500 transition-colors"
              aria-label="Call us at +91-7022 400 800"
            >
              +91-7022 400 800
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center w-[23%]">
          <button
            className="overflow-hidden gap-2.5 self-stretch px-8 py-2.5 my-auto w-full text-base leading-8 text-white uppercase bg-orange-500 border-orange-500 border-solid border-[length:var(--sds-size-stroke-border)] rounded-[50px] hover:bg-[#58595B] hover:border-[#58595B] transition-colors duration-300"
            onClick={() => setModalOpen(true)}
          >
            Book an appointment
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6">
          <div className="flex justify-end">
            <button
              className="p-2"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.body.style.overflow = "unset";
              }}
              aria-label="Close mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-base uppercase text-zinc-600">
            <a
              href="#why-choose-us"
              className="hover:text-orange-500 transition-colors"
              onClick={e => handleMobileNavClick(e, "why-choose-us")}
            >
              Who we are
            </a>
            <Link
              to="/doctors"
              className="hover:text-orange-500 transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.body.style.overflow = "unset";
              }}
            >
              Our Doctors
            </Link>
            <a
              href="#have-more"
              className="hover:text-orange-500 transition-colors"
              onClick={e => handleMobileNavClick(e, "have-more")}
            >
              Our Investors
            </a>
          </nav>

          <div className="flex gap-3.5 items-center text-base font-semibold uppercase text-zinc-600">
            <a
              href="tel:+917022400800"
              aria-label="Call us at +91-7022 400 800"
              className="flex items-center justify-center shrink-0 rounded-full border border-solid border-zinc-600 h-[50px] w-[50px] bg-white hover:bg-orange-50 transition-colors"
            >
              <img
                src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/call-icon.svg"
                alt="Call Icon"
                className="object-contain w-7 h-7"
                role="presentation"
              />
            </a>
            <a
              href="tel:+917022400800"
              className="hover:text-orange-500 transition-colors"
              aria-label="Call us at +91-7022 400 800"
            >
              +91-7022 400 800
            </a>
          </div>

          <button
            className="w-full px-8 py-2.5 text-base leading-8 text-white uppercase bg-orange-500 border-orange-500 border-solid rounded-[50px] hover:bg-[#58595B] hover:border-[#58595B] transition-colors duration-300"
            onClick={() => {
              setModalOpen(true);
              setIsMobileMenuOpen(false);
              document.body.style.overflow = "unset";
            }}
          >
            Book an appointment
          </button>
        </div>
      </div>
      <BookAppointmentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        doctorList={doctorList}
      />
    </header>
  );
};

export default Header;
