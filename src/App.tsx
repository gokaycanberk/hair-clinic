import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Treatments from "./components/Treatments";
import Reviews from "./components/Reviews";
import Packages from "./components/Packages";
import BeforeAfter from "./components/BeforeAfter";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Financing from "./components/Financing";
import SapphireFue from "./pages/SapphireFue";
import DHI from "./pages/DHI";
import StemCell from "./pages/StemCell";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import TermsOfService from "./pages/TermsOfService";

function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <AboutUs />
        <Treatments />
        <BeforeAfter />
        <Packages />
        <Financing />
        <Reviews />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/treatments/sapphire-fue" element={<SapphireFue />} />
          <Route path="/treatments/dhi" element={<DHI />} />
          <Route path="/treatments/stem-cell" element={<StemCell />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
