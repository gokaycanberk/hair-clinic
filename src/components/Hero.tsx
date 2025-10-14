import { useState, useEffect } from "react";
import heroImage from "../assets/images/hero.jpeg";
import ConsultationModal from "./ConsultationModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = heroImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="relative h-screen bg-navy">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Peak Hair Transplant"
          className={`w-full h-full object-cover object-top transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      {/* Loading placeholder - only shown until image loads */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/90 animate-pulse" />
      )}

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            {/* Headline Section */}
            <div className="mb-8 md:mb-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight">
                Peak Hair
                <span className="block">Transplant</span>
              </h1>
              <div className="h-0.5 w-16 md:w-24 bg-golden mb-4 md:mb-6"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light tracking-wide">
                Where Expertise Meets Excellence
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 md:space-y-6">
              <p className="text-xl sm:text-2xl text-white/90">
                Rediscover your confidence with natural, permanent results.
              </p>
              <p className="text-base sm:text-lg text-gray-200 max-w-2xl">
                At Peak Hair Transplant, we combine Turkish surgical expertise
                with world class care offering cutting edge techniques in
                Istanbul, and personalized consultations in New York and Berlin.
              </p>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 right-0 mb-12 sm:mb-16 md:mb-24">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-40 bg-golden text-white px-3 py-3 rounded-lg font-medium hover:bg-golden/90 transition-colors text-base"
                  >
                    Free Consultation
                  </button>
                  <button className="w-full sm:w-40 bg-white/10 text-white border border-white/20 px-3 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors text-base backdrop-blur-sm">
                    Our Treatments
                  </button>
                </div>

                {/* Trust Line */}
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-2xl w-full sm:w-auto text-center sm:text-left">
                  <p className="text-base sm:text-lg text-white/90 italic">
                    "Your journey starts with trust, innovation, and artistry."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Hero;
