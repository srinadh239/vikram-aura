import React from "react";

const FooterImage: React.FC = () => {
  return (
    <footer className="bg-white text-white w-full pt-12 pb-6 px-4">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Brand & Tagline */}
        <div className="flex-1 flex flex-col items-start max-md:items-center max-md:text-center">
          <img src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/VAH+Logo+Symbol+final+(1)_page-0001.jpg" alt="Vikram Aura Logo" className="w-60 mb-4" />
        </div>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full h-10 w-[137px] flex items-center justify-center">
              <img src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/location-icon.svg" alt="Location" className={`flex items-center justify-center shrink-0 rounded-full border border-solid border-zinc-600 bg-white h-[50px] w-[50px] hover:bg-orange-50 transition-colors`} />
            </div>
            <span className="text-sm text-black">
              #62, Richmond Road, Behind Sacred Heart Church, Mother Teresa Road, Richmond Town, Bangalore, 560025
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className={`flex items-center justify-center shrink-0 rounded-full border border-solid border-zinc-600 bg-white h-[50px] w-[50px] hover:bg-orange-50 transition-colors`}>
              <img src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/call-icon.svg" alt="Call" className="h-6 w-6" />
            </div>
            <a href="tel:+917022400800" className="text-sm text-black hover:text-orange-400 transition">+91-7022 400 800</a>
          </div>
          <div className="flex items-center gap-3">
            <div className={`flex items-center justify-center shrink-0 rounded-full border border-solid border-zinc-600 bg-white h-[50px] w-[50px] hover:bg-orange-50 transition-colors`}>
              <img src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/message-icon.svg" alt="Email" className="h-6 w-6" />
            </div>
            <a href="mailto:info@vikramaura.com" className="text-sm text-black hover:text-orange-400 transition">info@vikramaura.com</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex flex-col gap-2 max-md:items-center max-md:text-center">
          <div className="font-semibold mb-2 text-black">Quick Links</div>
          <a href="/" className="text-sm text-black hover:text-orange-400 transition">Home</a>
          <a href="/doctors" className="text-sm text-black hover:text-orange-400 transition">Doctors</a>
        </div>

        {/* Social Media */}
        <div className="flex-1 flex flex-col items-start gap-2 max-md:items-center max-md:text-center">
          <div className="font-semibold mb-2 text-black">Connect with us</div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/vikramaurahospitals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/567b165fa8f0877246152b895393d5884e1db786?placeholderIfAbsent=true" alt="Instagram" className="h-8 w-8" />
            </a>
            <a href="https://www.facebook.com/people/Vikram-Aura-Hospitals/61575206666540/" target="_blank" rel="noopener noreferrer">
              <img src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram%2Baura/icons8-facebook.svg" alt="Facebook" className="h-8 w-8" />
            </a>
            <a href="https://twitter.com/VikramAura" target="_blank" rel="noopener noreferrer">
              <img src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/twitter-icon.svg" alt="Twitter" className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/company/vikram-aura-hospitals/" target="_blank" rel="noopener noreferrer">
              <img src="https://ayu-images.s3.ap-south-1.amazonaws.com/vikram+aura/linkedin-icon.svg" alt="LinkedIn" className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-600 mt-8 pt-4 text-center text-xs text-black">
        © {new Date().getFullYear()} Vikram Aura. All rights reserved. | <a href="/privacy" className="hover:text-orange-400">Privacy Policy</a> | <a href="/terms" className="hover:text-orange-400">Terms of Service</a>
      </div>
    </footer>
  );
};

export default FooterImage;
