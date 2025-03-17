import React from "react";
import { Route, Routes } from "react-router-dom";

// Importing components
import Header from "./components/Header"; // Adjusting the import path for Header
import Footer from "./components/Footer"; // Adjusting the import path for Footer

// Importing pages
import HomePage from "./Pages/Home"; // Adjusting the import path for Home page
import ContactPage from "./Pages/Contact"; // Adjusting the import path for Contact page
import PopularPage from "./Pages/Popular"; // Adjusting the import path for Popular page
import HelpUsPage from "./Pages/HelpUs"; // Adjusting the import path for HelpUs page
import MuseumDetailPage from "./Pages/MuseumDetailPage"; // Adjusting the import path for MuseumDetail page
import MapPage from "./Pages/Map"; // Adjusting the import path for Map page
import Chatbot from "./Pages/Chatbot"; // Importing Chatbot page

const App = () => {
  return (
    <div className="app">
      {/* Header component */}
      <Header />

      <main>
        {/* Routing logic */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/helpus" element={<HelpUsPage />} />
          <Route path="/museum/:id" element={<MuseumDetailPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/chatbot" element={<Chatbot />} /> {/* Chatbot Route */}
          {/* ✅ New Explore Museum Route */}
        </Routes>
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default App;
