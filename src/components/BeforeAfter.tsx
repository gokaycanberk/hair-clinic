import beforeafter from "../assets/images/beforeafter.jpeg";
import beforeafter1 from "../assets/images/beforeafter1.jpeg";
import beforeafter2 from "../assets/images/beforeafter2.jpeg";

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
    <div className="relative group">
      {/* Main Container */}
      <div className="rounded-3xl overflow-hidden shadow-2xl">
        {/* Image Container */}
        <div className="relative">
          <img
            src={image}
            alt={`${method} ${grafts} Grafts - ${month} Months After`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  const results = [
    {
      id: "001",
      image: beforeafter,
      month: 8.5,
      grafts: 3700,
      method: "DHI" as const,
    },
    {
      id: "002",
      image: beforeafter1,
      month: 6,
      grafts: 3500,
      method: "DHI" as const,
    },
    {
      id: "003",
      image: beforeafter2,
      month: 6,
      grafts: 2600,
      method: "FUE" as const,
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {results.map((result) => (
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
          <button className="bg-navy hover:bg-navy/90 text-white px-10 py-4 rounded-xl font-medium transition-colors">
            View More Results
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
