import { useState } from "react";
import sapphireFue from "../assets/images/sapphirefuefoto.png";
import dhi from "../assets/images/choipenphoto.webp";
import stemCell from "../assets/images/Stemcelltehrapy.jpeg";
import hairTransplant from "../assets/images/Hair-Transplant.png";
import ConsultationModal from "./ConsultationModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const treatments = [
    {
      title: "Sapphire FUE Hair Transplant",
      description:
        "At Peak, we use the Sapphire FUE method — the latest evolution of the FUE (Follicular Unit Extraction) technique. In this advanced approach, micro-channels are created using real sapphire blades instead of traditional metal slits. This innovation allows for higher graft density, faster healing, and a more natural, seamless hairline.",
      image: sapphireFue,
      features: [
        "Smaller and smoother micro-channels compared to traditional tools",
        "Denser hair implantation for fuller appearance",
        "Natural 40–45° growth angle",
        "Minimized trauma and faster healing",
        "Reduced risk of scarring and irritation",
      ],
    },
    {
      title: "DHI Hair Transplant",
      description:
        "Experience one of the most advanced hair restoration techniques with DHI (Direct Hair Implantation)—a revolutionary method designed to deliver natural, dense, and long-lasting results. Using the specialized Choi pen, we implant hair follicles directly into the scalp, eliminating the need for pre-made channels.",
      image: dhi,
      features: [
        "Simultaneous extraction and implantation",
        "Natural hairline with perfect angle and depth",
        "Minimal scarring (0.6-0.9mm incisions)",
        "Unshaven option available",
        "Maximum graft survival rate",
      ],
    },
    {
      title: "Stem Cell Hair Transplant",
      description:
        "Step into the future of hair restoration with Stem Cell Hair Therapy. This innovative treatment harnesses your body's own healing power to stimulate new hair growth, revitalize existing follicles, and enhance the success of hair transplant procedures. Unlike traditional transplants, stem cell therapy reawakens inactive follicles and repairs the scalp's natural environment from within.",
      image: stemCell,
      features: [
        "Natural hair regeneration",
        "Boosts transplant success rate",
        "Strengthens existing hair",
        "Minimally invasive, no scarring",
        "Long-lasting, progressive results",
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
          backgroundImage: `url(${hairTransplant})`,
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
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-golden text-white px-8 py-4 rounded-lg hover:bg-golden/90 transition-colors"
            >
              Schedule Your Free Consultation
            </button>
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

export default Treatments;
