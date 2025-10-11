import { useState } from "react";
import case1 from "../assets/images/before-afters/1/1.png";
import case2 from "../assets/images/before-afters/2/1.png";
import case3 from "../assets/images/before-afters/3/1.png";
import case4 from "../assets/images/before-afters/4/1.png";
import case5 from "../assets/images/before-afters/5/1.png";
import case6 from "../assets/images/before-afters/6/1.png";
import case7 from "../assets/images/before-afters/7/1.png";
import case8 from "../assets/images/before-afters/8/1.png";
import case9 from "../assets/images/before-afters/9/1.png";

interface BeforeAfterImageProps {
  image: string;
  month: number;
  grafts: number;
  method: "FUE" | "DHI";
}

const BeforeAfterImage = ({
  image,
  month,
  grafts,
  method,
}: BeforeAfterImageProps) => {
  return (
    <div className="relative group animate-fadeIn">
      {/* Main Container */}
      <div className="rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform hover:scale-[1.02] hover:shadow-3xl">
        {/* Image Container */}
        <div className="relative">
          <img
            src={image}
            alt={`${method} ${grafts} Grafts - ${month} Months After`}
            className="w-full h-full object-cover"
          />
          {/* Info Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p className="font-semibold">{method} Treatment</p>
              <p>{grafts} Grafts</p>
              <p>{month} Months After</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  const [expandLevel, setExpandLevel] = useState(0); // 0: initial 3, 1: 6 items, 2: all 9 items

  const allResults = [
    {
      id: "001",
      image: case1,
      month: 8,
      grafts: 3700,
      method: "DHI" as const,
    },
    {
      id: "002",
      image: case2,
      month: 7,
      grafts: 3500,
      method: "DHI" as const,
    },
    {
      id: "003",
      image: case3,
      month: 6,
      grafts: 2600,
      method: "FUE" as const,
    },
    {
      id: "004",
      image: case4,
      month: 9,
      grafts: 3200,
      method: "DHI" as const,
    },
    {
      id: "005",
      image: case5,
      month: 8,
      grafts: 3800,
      method: "FUE" as const,
    },
    {
      id: "006",
      image: case6,
      month: 7,
      grafts: 3400,
      method: "DHI" as const,
    },
    {
      id: "007",
      image: case7,
      month: 8,
      grafts: 3600,
      method: "FUE" as const,
    },
    {
      id: "008",
      image: case8,
      month: 9,
      grafts: 3300,
      method: "DHI" as const,
    },
    {
      id: "009",
      image: case9,
      month: 7,
      grafts: 3500,
      method: "FUE" as const,
    },
  ];

  const getVisibleResults = () => {
    switch (expandLevel) {
      case 0:
        return allResults.slice(0, 3);
      case 1:
        return allResults.slice(0, 6);
      case 2:
        return allResults;
      default:
        return allResults.slice(0, 3);
    }
  };

  const handleExpandClick = () => {
    setExpandLevel((prevLevel) => {
      if (prevLevel === 2) return 0; // If fully expanded, collapse to initial state
      return prevLevel + 1; // Otherwise expand to next level
    });
  };

  const getButtonText = () => {
    if (expandLevel === 2) return "Show Less";
    return "View More Results";
  };

  return (
    <section id="before-after" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Before & After Results
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the amazing transformations of our satisfied patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform-gpu">
          {getVisibleResults().map((result) => (
            <BeforeAfterImage
              key={result.id}
              image={result.image}
              month={result.month}
              grafts={result.grafts}
              method={result.method}
            />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleExpandClick}
            className="bg-navy hover:bg-navy/90 text-white px-10 py-4 rounded-xl font-medium transition-colors"
          >
            {getButtonText()}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
