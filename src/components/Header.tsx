import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BookAppointmentModal from "./BookAppointmentModal";
import { doctorsBySpecialty } from "../constants/medicalData";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = location.pathname === '/';

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

  useEffect(() => {
    if (!isHomePage) return;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <header className={`${
      isHomePage 
        ? (isScrolled ? 'bg-white shadow-md sm:absolute' : 'bg-transparent') 
        : 'bg-white shadow-md'
    } ${
      isHomePage ? 'fixed' : 'relative'
    } top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center`}>
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/VAH+Logo+Symbol+final+(1)_page-0001.jpg"
                alt="Vikram Aura Logo"
                className={`object-contain grow shrink-0 max-w-full aspect-[1.8] w-[215px] transition-opacity duration-300 ${
                  isHomePage ? (isScrolled ? 'opacity-100' : 'opacity-0') : 'opacity-100'
                }`}
              />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className={`md:hidden ${
            isHomePage ? (isScrolled ? 'text-zinc-600' : 'text-white') : 'text-zinc-600'
          }`}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center space-x-8 text-base ${
            isHomePage ? (isScrolled ? 'text-zinc-600' : 'text-white') : 'text-zinc-600'
          }`}>
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
          </nav>

          <div className="hidden md:flex items-center w-[18%] justify-center">
            <div className={`flex gap-3.5 self-stretch my-auto text-base font-semibold ${
              isHomePage ? (isScrolled ? 'text-zinc-600' : 'text-white') : 'text-zinc-600'
            }`}>
              <a
                href="tel:+917022400800"
                aria-label="Call us at +91-7022 400 800"
                className={`flex items-center justify-center shrink-0 rounded-full border border-solid ${
                  isHomePage ? (isScrolled ? 'border-zinc-600 bg-white' : 'border-white bg-transparent') : 'border-zinc-600 bg-white'
                } h-[50px] w-[50px] hover:bg-orange-50 transition-colors`}
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
                className={`my-auto basis-auto hover:text-orange-500 transition-colors ${
                  isHomePage ? (isScrolled ? 'text-zinc-600' : 'text-white') : 'text-zinc-600'
                }`}
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
        </div>
      </div>

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
              href="#have-more"
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
