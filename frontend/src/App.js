import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import PopularPage from "./pages/PopularPage";
import HelpUsPage from "./pages/HelpUsPage";
import MuseumDetailPage from "./pages/MuseumDetailPage";
import MapPage from "./pages/MapPage";

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
        </Routes>
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default App;
