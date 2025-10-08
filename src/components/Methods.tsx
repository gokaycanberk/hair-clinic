import {
  CircleStackIcon,
  CursorArrowRaysIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

interface MethodCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const MethodCard = ({
  title,
  description,
  icon,
  features,
}: MethodCardProps) => (
  <div className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl">
    <div className="flex items-center mb-6">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
        <div className="w-6 h-6 text-primary">{icon}</div>
      </div>
      <h3 className="text-2xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <svg
            className="w-5 h-5 text-primary mr-3"
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
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const Methods = () => {
  const methods = [
    {
      title: "FUE Method",
      description:
        "Follicular Unit Extraction is a minimally invasive technique that leaves no linear scar.",
      icon: <CircleStackIcon />,
      features: [
        "Minimal scarring",
        "Quick recovery time",
        "Natural-looking results",
        "Local anesthesia only",
      ],
    },
    {
      title: "DHI Method",
      description:
        "Direct Hair Implantation uses a specialized tool for precise placement of hair follicles.",
      icon: <CursorArrowRaysIcon />,
      features: [
        "No need for channel creation",
        "Higher density possible",
        "Minimal trauma to scalp",
        "Faster implantation",
      ],
    },
    {
      title: "Sapphire FUE",
      description:
        "An advanced version of FUE using sapphire blades for more precise incisions.",
      icon: <SparklesIcon />,
      features: [
        "Faster healing process",
        "Less tissue damage",
        "More natural results",
        "Minimal scarring",
      ],
    },
  ];

  return (
    <section id="methods" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Treatment Methods</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We use the latest and most advanced hair transplant techniques to
            ensure the best possible results for our patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <MethodCard
              key={index}
              title={method.title}
              description={method.description}
              icon={method.icon}
              features={method.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methods;
