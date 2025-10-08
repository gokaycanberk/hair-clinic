import Header from "./components/Header";
import Hero from "./components/Hero";
import Treatments from "./components/Treatments";
import Methods from "./components/Methods";
import Pricing from "./components/Pricing";
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
        <Methods />
        <Pricing />
        <BeforeAfter />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
