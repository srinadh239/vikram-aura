import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/doctors", label: "Our Doctors" },
  { to: "/about", label: "About Us" },
];

const Header = () => {
  const location = useLocation();
  return (
    <header className="w-full bg-white shadow-sm mb-8">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/17d03a30af8e94f24ad57282588f5e1e86ca1ee5?placeholderIfAbsent=true&apiKey=003a4bc7d72843b88f405864f9e7fccf"
            alt="Vikram Aura Logo"
            className="h-10 w-10 rounded-full object-cover border border-orange-200"
          />
          <span className="font-bold text-xl text-orange-500">Vikram Aura</span>
        </Link>
        {/* Icons */}
        {/* <div className="flex items-center gap-4">
          <a href="tel:+911234567890" title="Call us" className="p-2 rounded-full hover:bg-orange-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15 .621 0 1.125-.504 1.125-1.125v-2.625a1.125 1.125 0 0 0-1.125-1.125c-1.636 0-3.21-.26-4.687-.75a1.125 1.125 0 0 0-1.09.21l-2.25 1.8a12.042 12.042 0 0 1-5.25-5.25l1.8-2.25a1.125 1.125 0 0 0 .21-1.09c-.49-1.477-.75-3.051-.75-4.687A1.125 1.125 0 0 0 4.875 2.25H2.25A1.125 1.125 0 0 0 1.125 3.375z" />
            </svg>
          </a>
          <Link to="/doctors" title="Book an appointment" className="p-2 rounded-full hover:bg-orange-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3.75 7.5h16.5M4.5 21h15a1.5 1.5 0 0 0 1.5-1.5V7.5a1.5 1.5 0 0 0-1.5-1.5h-15A1.5 1.5 0 0 0 3 7.5v12A1.5 1.5 0 0 0 4.5 21z" />
            </svg>
          </Link>
        </div> */}
      </div>
    </header>
  );
};

export default Header; 