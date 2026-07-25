import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import BookAppointmentModal from "./BookAppointmentModal";
import { doctorSchedules } from "../constants/doctorSchedules";
import "../styles/homeDesign.css";

const LOGO = "/home/logo.png";
const getNavOffset = () => (window.innerWidth <= 900 ? 120 : 80);

const NAV_LINKS: { label: string; homeId?: string; to?: string }[] = [
  { label: "Our Story", homeId: "story" },
  { label: "Specialties", homeId: "specialties" },
  { label: "Doctors", to: "/doctors" },
  { label: "Reviews", homeId: "reviews" },
  { label: "Equal Card", homeId: "equal-card" },
  { label: "Blog", to: "/blog" },
];

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const animateScrollTo = (targetY: number, duration = 800) => {
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

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const scrollToHomeSection = (id: string) => {
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
  };

  const goToHomeSection = (id: string) => {
    setMenuOpen(false);
    if (isHome) {
      scrollToHomeSection(id);
      return;
    }
    navigate(`/#${id}`);
    // After route change, Home mounts — scroll once it's ready
    window.setTimeout(() => scrollToHomeSection(id), 120);
  };

  const openBooking = () => {
    setMenuOpen(false);
    setModalOpen(true);
  };

  return (
    <>
      <header className="site-header">
        <Link to="/" className="logo-mark" onClick={() => setMenuOpen(false)}>
          <img
            src={LOGO}
            alt="Vikram Aura Hospitals – The Future of Care"
            className="nav-logo-img"
          />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              {link.to ? (
                <Link to={link.to} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              ) : (
                <a
                  href={`/#${link.homeId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    goToHomeSection(link.homeId!);
                  }}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
          <li>
            <button type="button" className="nav-cta" onClick={openBooking}>
              📞 Book Appointment
            </button>
          </li>
        </ul>

        {/* Mobile backdrop */}
        {menuOpen && (
          <button
            type="button"
            className="nav-backdrop"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </header>

      <BookAppointmentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        doctorSchedules={doctorSchedules}
      />
    </>
  );
};

export default Header;
