import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./components/AboutUs";
import DoctorList from "./pages/DoctorList";
import DoctorProfile from "./pages/DoctorProfile";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <Router>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctors" element={<DoctorList />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/doctor/:id" element={<DoctorProfile />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  </Router>
);

export default App;
