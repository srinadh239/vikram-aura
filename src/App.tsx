import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Option01 from "./components/Option01";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctors" element={<Option01 />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
);

export default App;
