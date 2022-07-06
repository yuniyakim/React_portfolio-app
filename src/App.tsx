import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
