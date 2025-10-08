import { CheckIcon } from "@heroicons/react/24/outline";

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  currency?: string;
}

const PriceCard = ({
  title,
  price,
  features,
  isPopular = false,
  currency = "$",
}: PriceCardProps) => (
  <div
    className={`bg-white rounded-2xl shadow-lg p-8 relative ${
      isPopular ? "border-2 border-primary" : ""
    }`}
  >
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      </div>
    )}
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="flex items-center justify-center">
        <span className="text-gray-500 text-2xl mr-1">{currency}</span>
        <span className="text-4xl font-bold">{price}</span>
      </div>
    </div>

    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckIcon className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>

    <button
      className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
        isPopular
          ? "bg-primary text-white hover:bg-primary/90"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      Choose Plan
    </button>
  </div>
);

const Pricing = () => {
  const packages = [
    {
      title: "Basic Package",
      price: "2000",
      features: [
        "Pre-operative consultation",
        "FUE hair transplant procedure",
        "Local anesthesia",
        "Post-operative care kit",
        "1 follow-up session",
        "Basic hair products package",
      ],
    },
    {
      title: "Premium Package",
      price: "3000",
      features: [
        "Everything in Basic Package",
        "DHI or Sapphire FUE method",
        "PRP treatment included",
        "3 follow-up sessions",
        "Premium hair care products",
        "Hotel accommodation",
        "Airport transfers",
      ],
      isPopular: true,
    },
    {
      title: "VIP Package",
      price: "4500",
      features: [
        "Everything in Premium Package",
        "Lifetime follow-up care",
        "Stem cell therapy",
        "Luxury hotel accommodation",
        "Private transfers",
        "Personal care assistant",
        "Custom hair care regime",
      ],
    },
  ];

  return (
    <section id="price" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Transparent Pricing Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package that suits your needs. All our packages
            include comprehensive care and natural-looking results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <PriceCard
              key={index}
              title={pkg.title}
              price={pkg.price}
              features={pkg.features}
              isPopular={pkg.isPopular}
            />
          ))}
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p className="text-sm">
            * Prices are in USD. Additional costs may apply based on individual
            requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
