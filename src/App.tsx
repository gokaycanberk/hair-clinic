import Header from "./components/Header";
import Hero from "./components/Hero";
import Treatments from "./components/Treatments";
import Reviews from "./components/Reviews";
import Packages from "./components/Packages";
import BeforeAfter from "./components/BeforeAfter";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <main>
        <Treatments />
        <Packages />
        <BeforeAfter />
        <AboutUs />
        <Reviews /> {/* Reviews section moved to bottom */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
