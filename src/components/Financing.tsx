import { useState } from "react";
import {
  CreditCardIcon,
  ClockIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";
import ConsultationModal from "./ConsultationModal";
import cherryFinancing from "../assets/images/Cherry-financing.jpg";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-12 h-12 text-golden mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-navy">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Financing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const features = [
    {
      icon: <CreditCardIcon />,
      title: "Instant Approval",
      description:
        "Get approved in minutes without a hard credit check affecting your score.",
    },
    {
      icon: <ClockIcon />,
      title: "Flexible Monthly Plans",
      description:
        "Choose the payment schedule that best fits your budget and lifestyle.",
    },
    {
      icon: <ShieldCheckIcon />,
      title: "Transparent Pricing",
      description:
        "No hidden fees or surprise charges - know exactly what you'll pay.",
    },
    {
      icon: <DocumentCheckIcon />,
      title: "Simple Process",
      description: "Easy application process with minimal paperwork required.",
    },
  ];

  return (
    <>
      <section id="financing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Affordable Hair Restoration with Flexible Financing
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          {/* Split Section */}
          <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Left Side - Image */}
            <div className="lg:w-1/2">
              <img
                src={cherryFinancing}
                alt="Cherry Financing"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
              <div className="max-w-lg">
                <h3 className="text-3xl font-bold text-navy mb-8">
                  Cherry Financing Options
                </h3>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We understand that every patient has unique financial needs.
                  That's why we provide Cherry Financing, including short-term
                  interest-free plans and longer-term monthly payment options.
                  You can begin treatment now and pay over time — without the
                  financial stress.
                </p>

                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-6 h-6 text-golden flex-shrink-0" />
                    <span className="text-gray-700">
                      Instant approval process
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-6 h-6 text-golden flex-shrink-0" />
                    <span className="text-gray-700">
                      Flexible monthly payment plans
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-6 h-6 text-golden flex-shrink-0" />
                    <span className="text-gray-700">
                      No hidden fees or surprises
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-700">
                    Call us today at{" "}
                    <a
                      href="tel:+1-646-667-3919"
                      className="text-golden font-semibold hover:underline"
                    >
                      +1-646-667-3919
                    </a>
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-golden text-white px-8 py-4 rounded-lg font-medium hover:bg-golden/90 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Schedule Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default Financing;
