import heroImage from "../assets/images/hero.jpeg";

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Peak Hair Turkey Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Look with Premium Hair Transplant
          </h1>
          <p className="text-xl mb-8">
            Experience world-class hair restoration in NYC with cutting-edge
            techniques and personalized care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Get Free Consultation
            </button>
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              View Our Results
            </button>
          </div>

          {/* Featured Badges */}
          <div className="mt-12">
            <p className="text-sm text-gray-300 mb-4">Featured in:</p>
            <div className="flex items-center gap-6">
              <span className="text-white font-semibold">METRO</span>
              <span className="text-white font-semibold">EXPRESS</span>
              <span className="text-white font-semibold">The SUN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
