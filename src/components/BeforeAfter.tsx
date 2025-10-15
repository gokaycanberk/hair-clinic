import { useState, useEffect } from "react";

// Before-After görselleri - 1'den 14'e kadar TÜM görseller
import ba1 from "../assets/images/before-afters/1/1.png";
import ba2 from "../assets/images/before-afters/2/1.png";
import ba3 from "../assets/images/before-afters/3/1.png";
import ba4 from "../assets/images/before-afters/4/1.png";
import ba5 from "../assets/images/before-afters/5/1.png";
import ba6 from "../assets/images/before-afters/6/1.png";
import ba7 from "../assets/images/before-afters/7/1.png";
import ba8 from "../assets/images/before-afters/8/1.png";
import ba9 from "../assets/images/before-afters/9/1.png";
import ba10 from "../assets/images/before-afters/10/1.png";
import ba11 from "../assets/images/before-afters/11/1.png";
import ba12 from "../assets/images/before-afters/12/1.png";
import ba13 from "../assets/images/before-afters/13/1.png";
import ba14 from "../assets/images/before-afters/14/1.png";

const BeforeAfter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Window resize listener
  useEffect(() => {
    const handleResize = () => {
      const newSlidesPerView =
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      setSlidesPerView(newSlidesPerView);
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Görseller listesi - 14 adet before-after
  const results = [
    { image: ba1, month: 8, title: "Case Study 1" },
    { image: ba2, month: 7, title: "Case Study 2" },
    { image: ba3, month: 6.5, title: "Case Study 3" },
    { image: ba4, month: 9, title: "Case Study 4" },
    { image: ba5, month: 8, title: "Case Study 5" },
    { image: ba6, month: 9, title: "Case Study 6" },
    { image: ba7, month: 6.5, title: "Case Study 7" },
    { image: ba8, month: 8, title: "Case Study 8" },
    { image: ba9, month: 7, title: "Case Study 9" },
    { image: ba10, month: 8.5, title: "Case Study 10" },
    { image: ba11, month: 9, title: "Case Study 11" },
    { image: ba12, month: 7.5, title: "Case Study 12" },
    { image: ba13, month: 8, title: "Case Study 13" },
    { image: ba14, month: 8.5, title: "Case Study 14" },
  ];

  // Sonraki slide - Infinite loop
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % results.length);
  };

  // Önceki slide - Infinite loop
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length);
  };

  return (
    <section
      id="before-after"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Before & After
            <span className="block text-golden mt-2">Real Results</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See the amazing transformations of our satisfied patients. Real
            results, real confidence.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons - Her zaman aktif (infinite) */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full shadow-xl transition-all duration-300 -translate-x-6 bg-white hover:bg-golden hover:text-white text-navy"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full shadow-xl transition-all duration-300 translate-x-6 bg-white hover:bg-golden hover:text-white text-navy"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slides Wrapper - Classic Carousel */}
          <div className="overflow-hidden px-4 md:px-0">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / slidesPerView)
                }%)`,
                gap: slidesPerView === 1 ? "0" : "24px",
              }}
            >
              {results.map((result, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-3 md:px-0"
                  style={{
                    width:
                      slidesPerView === 1
                        ? "100%"
                        : `calc(${100 / slidesPerView}% - ${
                            ((slidesPerView - 1) * 24) / slidesPerView
                          }px)`,
                  }}
                >
                  {/* Card Container */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl mx-auto max-w-md md:max-w-none">
                    {/* Image - Tam görünüm, info section yok */}
                    <div className="relative w-full">
                      <img
                        src={result.image}
                        alt={result.title || `Before & After Result ${idx + 1}`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center items-center gap-2 mt-12">
            {results.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? "bg-golden w-8 h-2"
                    : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to start your own transformation journey?
          </p>
          <button className="bg-golden hover:bg-golden/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
