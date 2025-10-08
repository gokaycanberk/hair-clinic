import beforeafter from "../assets/images/beforeafter.png";
import beforeafter1 from "../assets/images/beforeafter1.png";
import beforeafter2 from "../assets/images/beforeafter2.png";

interface BeforeAfterImageProps {
  image: string;
  patientId: string;
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
        <div className="relative h-[400px]">
          <img
            src={image}
            alt={`Patient transformation after ${month} months`}
            className="h-full w-full object-cover"
          />

          {/* Method & Grafts Badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-navy/80 rounded-full py-2 px-6 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="text-white">{method}</span>
              <span className="text-golden font-medium">{grafts} Grafts</span>
            </div>
          </div>
        </div>

        {/* Info Bar */}
        <div className="bg-[#1a2234] py-4 px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-white font-medium">{method}</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-300">{month} Months After</span>
            </div>
            <div className="flex items-center">
              <span className="text-golden font-medium">{grafts} Grafts</span>
            </div>
          </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {results.map((result) => (
            <BeforeAfterImage
              key={result.id}
              image={result.image}
              patientId={result.id}
              month={result.month}
              grafts={result.grafts}
              method={result.method}
            />
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#1a2234] hover:bg-[#1a2234]/90 text-white px-10 py-4 rounded-xl font-medium transition-colors">
            View More Results
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
