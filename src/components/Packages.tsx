import { CheckCircleIcon } from "@heroicons/react/24/outline";

interface PackageFeature {
  text: string;
}

interface PackageProps {
  title: string;
  price: string;
  features: PackageFeature[];
  isPopular?: boolean;
}

const Package = ({
  title,
  price,
  features,
  isPopular = false,
}: PackageProps) => (
  <div
    className={`bg-white rounded-2xl shadow-xl p-8 ${
      isPopular ? "ring-2 ring-primary relative" : ""
    }`}
  >
    {isPopular && (
      <span className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm">
        Most Popular
      </span>
    )}
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <div className="mb-8">
      <span className="text-4xl font-bold text-primary">{price}</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0" />
          <span className="text-gray-600">{feature.text}</span>
        </li>
      ))}
    </ul>
    <button className="w-full bg-primary text-white py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors">
      Book Consultation
    </button>
  </div>
);

const Packages = () => {
  const packages = [
    {
      title: "FUE Sapphire Hair Transplant",
      price: "$3,000",
      features: [
        {
          text: "Comprehensive Hair Consultation with Peak Specialist Surgeon",
        },
        { text: "Pre-operative health checks and detailed scalp assessment" },
        { text: "Sapphire Blade Technique" },
        { text: "Up to 5,000 Grafts depending on donor area availability" },
        { text: "Painless Anesthesia and advanced comfort protocols" },
        { text: "Multilingual Medical Advisors" },
        { text: "Post Operative Check-up and Washing" },
        { text: "Pre Operative Health Checks" },
        { text: "VIP Transport" },
        { text: "3 Nights of 5 star Accommodation" },
        { text: "1-Month Aftercare Products" },
        { text: "12 Months of Aftercare Assistance" },
      ],
    },
    {
      title: "DHI Hair Transplant",
      price: "$3,750",
      features: [
        {
          text: "Comprehensive Hair Consultation with Peak Specialist Surgeon",
        },
        { text: "Pre-operative health checks and detailed scalp assessment" },
        { text: "Up to 5,000 Grafts" },
        { text: "Multilingual Medical Advisors" },
        { text: "Post Operative Check-up and Washing" },
        { text: "Pre Operative Health Checks" },
        { text: "VIP Transport" },
        { text: "3 Nights of 5 star Accommodation" },
        { text: "1-Month Aftercare Products" },
        { text: "18 Months of Aftercare Assistance" },
      ],
      isPopular: true,
    },
    {
      title: "Stem Cell Hair Transplant",
      price: "$4,750",
      features: [
        { text: "DHI or FUE" },
        { text: "Stem Cell Hair Treatment" },
        { text: "Up to 5,000 Grafts" },
        { text: "Multilingual Medical Advisors" },
        { text: "Post Operative Check-up and Washing" },
        { text: "Pre Operative Health Checks" },
        { text: "VIP Transport" },
        { text: "3 Nights of 5 star Accommodation" },
        { text: "1-Month Aftercare Products" },
        { text: "18 Months of Aftercare Assistance" },
      ],
    },
    {
      title: "Sapphire FUE in NYC",
      price: "$6,500",
      features: [
        { text: "Personalized Consultation with Peak Hair Specialist" },
        { text: "Advanced FUE Hair Transplant Technique" },
        { text: "Sapphire Blade Technology" },
        { text: "1 Free PRP Therapy Session" },
        { text: "Comprehensive Blood Tests" },
        { text: "Complete 1 month Aftercare Kit" },
        { text: "1-Year Post-Operative Follow-Up & Support" },
        { text: "Painless Local Anesthesia" },
        { text: "Dedicated Multilingual Interpreter & Medical Advisor" },
      ],
    },
  ];

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Treatment Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive treatment packages, each designed to
            provide you with the best possible results and care throughout your
            hair restoration journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <Package key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
