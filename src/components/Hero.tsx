import heroImage from "../assets/images/hero.jpeg";

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Peak Hair Transplant"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-0">
          <div className="max-w-3xl text-white">
            {/* Headline Section */}
            <div className="mb-10">
              <h1 className="text-6xl md:text-7xl font-bold mb-3 leading-tight">
                Peak Hair
                <span className="block">Transplant</span>
              </h1>
              <div className="h-0.5 w-24 bg-golden mb-6"></div>
              <h2 className="text-2xl md:text-3xl text-white/90 font-light tracking-wide">
                Where Expertise Meets Excellence
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-2xl text-white/90">
                Rediscover your confidence with natural, permanent results.
              </p>
              <p className="text-lg text-gray-200">
                At Peak Hair Transplant, we combine Turkish surgical expertise
                with world class care offering cutting edge techniques in
                Istanbul, and personalized consultations in New York and Berlin.
              </p>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 right-0 mb-24">
            <div className="container px-0">
              <div className="flex flex-col md:flex-row justify-between items-center">
                {/* CTA Buttons */}
                <div className="flex gap-4 md:pl-0">
                  <button className="bg-golden text-white px-3 py-3 rounded-lg font-medium hover:bg-golden/90 transition-colors w-40 text-base">
                    Free Consultation
                  </button>
                  <button className="bg-white/10 text-white border border-white/20 px-3 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors w-40 text-base backdrop-blur-sm">
                    Our Treatments
                  </button>
                </div>

                {/* Trust Line */}
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-2xl">
                  <p className="text-lg text-white/90 italic">
                    "Your journey starts with trust, innovation, and artistry."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
