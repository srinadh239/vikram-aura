import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import DoctorList from "./pages/DoctorList";
import DoctorProfile from "./pages/DoctorProfile";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctors" element={<DoctorList />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/doctor/:id" element={<DoctorProfile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
