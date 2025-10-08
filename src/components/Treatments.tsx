import {
  BeakerIcon,
  SparklesIcon,
  UserGroupIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

interface TreatmentCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TreatmentCard = ({ title, description, icon }: TreatmentCardProps) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
      <div className="w-8 h-8 text-primary">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const Treatments = () => {
  const treatments = [
    {
      title: "Hair Transplant",
      description:
        "Advanced FUE technique for natural-looking results with minimal recovery time in NYC.",
      icon: <BeakerIcon />,
    },
    {
      title: "PRP Treatment",
      description:
        "Stimulate natural hair growth using platelet-rich plasma from your own blood.",
      icon: <SparklesIcon />,
    },
    {
      title: "Consultation",
      description:
        "Personalized treatment plans tailored to your specific needs and goals.",
      icon: <UserGroupIcon />,
    },
    {
      title: "Progress Tracking",
      description:
        "Advanced monitoring system to track and ensure optimal results.",
      icon: <ChartBarIcon />,
    },
  ];

  return (
    <section id="treatments" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Hair Transplant Treatments in NYC</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide world-class hair transplant treatments using the latest
            technologies and techniques to ensure the best possible results for
            our patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((treatment, index) => (
            <TreatmentCard
              key={index}
              title={treatment.title}
              description={treatment.description}
              icon={treatment.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
