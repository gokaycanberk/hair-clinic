import { useState } from "react";
import ba1 from "../assets/images/ba1.jpeg";
import ba2 from "../assets/images/ba2.jpeg";
import ad1 from "../assets/images/ad1.jpeg";
import ad2 from "../assets/images/ad2.jpeg";
import ad3 from "../assets/images/ad3.jpeg";
import ad4 from "../assets/images/ad4.jpeg";

interface BeforeAfterImageProps {
  beforeImage: string;
  afterImage: string;
  patientId: string;
  month: number;
}

const BeforeAfterImage = ({
  beforeImage,
  afterImage,
  patientId,
  month,
}: BeforeAfterImageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-w-4 aspect-h-3">
        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            isHovered ? "translate-x-0" : "-translate-x-1/2"
          }`}
        >
          <img
            src={beforeImage}
            alt={`Patient ${patientId} before`}
            className="absolute left-0 w-full h-full object-cover"
          />
        </div>
        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            isHovered ? "translate-x-full" : "translate-x-1/2"
          }`}
        >
          <img
            src={afterImage}
            alt={`Patient ${patientId} after`}
            className="absolute right-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="text-white">
          <p className="font-semibold">Patient #{patientId}</p>
          <p className="text-sm">{month} Months After</p>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
          Hover to compare
        </div>
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  const results = [
    {
      id: "001",
      beforeImage: ba1,
      afterImage: ba2,
      month: 12,
    },
    {
      id: "002",
      beforeImage: ad1,
      afterImage: ad2,
      month: 8,
    },
    {
      id: "003",
      beforeImage: ad3,
      afterImage: ad4,
      month: 10,
    },
  ];

  return (
    <section id="before-after" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Before & After Results</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the amazing transformations of our satisfied patients. Hover
            over each image to compare the before and after results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result) => (
            <BeforeAfterImage
              key={result.id}
              beforeImage={result.beforeImage}
              afterImage={result.afterImage}
              patientId={result.id}
              month={result.month}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            View More Results
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
