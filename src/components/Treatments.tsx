import ad5 from "../assets/images/ad5.jpeg";
import ad7 from "../assets/images/ad7.jpeg";
import ad9 from "../assets/images/ad9.jpeg";
import ad10 from "../assets/images/ad10.jpeg";

interface TreatmentSectionProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  isImageRight?: boolean;
}

const TreatmentSection = ({
  title,
  description,
  image,
  features,
  isImageRight = false,
}: TreatmentSectionProps) => (
  <div className="flex flex-col lg:flex-row items-center gap-12 py-10">
    {!isImageRight && (
      <div className="lg:w-1/2">
        <div className="relative group">
          <img
            src={image}
            alt={title}
            className="rounded-2xl w-full object-cover shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
            style={{ height: "500px" }}
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-golden/10 rounded-full blur-2xl" />
        </div>
      </div>
    )}

    <div className="lg:w-1/2 space-y-6 px-4 lg:px-8">
      <h3 className="text-3xl font-bold text-navy">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <span className="w-6 h-6 rounded-full bg-golden/20 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-4 h-4 text-golden"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="bg-navy text-white px-8 py-4 rounded-lg hover:bg-golden transition-colors mt-8">
        Learn More
      </button>
    </div>

    {isImageRight && (
      <div className="lg:w-1/2">
        <div className="relative group">
          <img
            src={image}
            alt={title}
            className="rounded-2xl w-full object-cover shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
            style={{ height: "500px" }}
          />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-golden/10 rounded-full blur-2xl" />
        </div>
      </div>
    )}
  </div>
);

const Treatments = () => {
  const treatments = [
    {
      title: "FUE Hair Transplant",
      description:
        "Experience the most advanced FUE (Follicular Unit Extraction) technique that ensures natural-looking results with minimal recovery time. Our expert surgeons use state-of-the-art technology to transplant individual hair follicles for the most natural hairline design.",
      image: ad5,
      features: [
        "Minimally invasive procedure",
        "No linear scarring",
        "Quick recovery time",
        "Natural-looking results",
        "Permanent solution",
      ],
    },
    {
      title: "Sapphire FUE Method",
      description:
        "The Sapphire FUE method represents the latest innovation in hair transplantation. Using specially designed sapphire blades, we create more precise and smaller incisions, leading to faster healing and better results.",
      image: ad7,
      features: [
        "Enhanced precision",
        "Faster healing process",
        "Minimal tissue damage",
        "Better graft survival rate",
        "Superior aesthetic results",
      ],
    },
    {
      title: "DHI Technique",
      description:
        "Direct Hair Implantation (DHI) is a revolutionary technique that allows for simultaneous extraction and implantation of hair follicles. This advanced method provides more precise placement and better angles for the most natural look.",
      image: ad9,
      features: [
        "No shaving required",
        "Precise implantation",
        "Minimal trauma to scalp",
        "Dense packing possible",
        "Faster recovery time",
      ],
    },
  ];

  return (
    <>
      <section id="treatments" className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Our Treatment Methods
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We offer the most advanced hair transplant techniques, providing
              natural-looking results with minimal recovery time.
            </p>
          </div>

          <div className="space-y-24">
            {treatments.map((treatment, index) => (
              <TreatmentSection
                key={index}
                {...treatment}
                isImageRight={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Call to Action */}
      <section
        className="relative h-[400px] bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${ad10})`,
        }}
      >
        <div className="absolute inset-0 bg-navy/40" />
        <div className="relative container h-full flex items-center justify-center text-center">
          <div className="max-w-3xl">
            <h3 className="text-4xl font-bold text-white mb-6">
              Transform Your Look Today
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of satisfied patients who have restored their
              confidence with our expert hair transplant procedures.
            </p>
            <button className="bg-golden text-white px-8 py-4 rounded-lg hover:bg-golden-dark transition-colors">
              Schedule Your Free Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Treatments;
