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
        <div className="absolute inset-0 bg-navy/60" />{" "}
        {/* Daha açık overlay */}
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
            <button className="bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-golden transition-colors">
              Get Free Consultation
            </button>
            <button className="bg-white text-navy px-8 py-4 rounded-lg font-medium hover:bg-golden hover:text-white transition-colors">
              View Our Results
            </button>
          </div>

          {/* Featured Badges */}
          <div className="mt-12">
            <p className="text-sm text-golden mb-4">Featured in:</p>
            <div className="flex items-center gap-6">
              <span className="text-white font-semibold hover:text-golden transition-colors cursor-pointer">
                METRO
              </span>
              <span className="text-white font-semibold hover:text-golden transition-colors cursor-pointer">
                EXPRESS
              </span>
              <span className="text-white font-semibold hover:text-golden transition-colors cursor-pointer">
                The SUN
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-navy/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-golden/10 rounded-full blur-3xl -translate-y-1/2" />
    </div>
  );
};

export default Hero;
