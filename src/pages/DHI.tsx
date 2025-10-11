import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import choipenphoto from "../assets/images/choipenphoto.webp";

const DHI = () => {
  const features = [
    {
      title: "Maximum Graft Survival Rate",
      description:
        "Thanks to the Choi Implanter Pen, grafts are implanted directly after extraction — minimizing the time they spend outside the body.",
    },
    {
      title: "No Channel Opening Required",
      description:
        "Unlike traditional methods, DHI doesn't require pre-made incisions. Each follicle is implanted directly, ensuring greater precision.",
    },
    {
      title: "Natural and Dense Results",
      description:
        "Every hair follicle is placed at the correct angle, direction, and depth, creating a soft, natural hairline.",
    },
    {
      title: "Minimal Scarring",
      description:
        "With ultra-fine tools (0.6–0.9 mm), DHI leaves no visible scars and allows quick recovery.",
    },
    {
      title: "Unshaven Option Available",
      description:
        "DHI can be performed without shaving the entire head — ideal for discreet treatment.",
    },
    {
      title: "Controlled Implantation",
      description:
        "The Choi pen gives surgeons complete control over each graft's placement, ensuring perfect balance.",
    },
  ];

  const process = [
    {
      title: "Consultation & Design",
      description:
        "Our specialist evaluates your hairline, discusses goals, and plans the procedure.",
      color: "bg-blue-500",
    },
    {
      title: "Donor Extraction",
      description:
        "Hair follicles are gently harvested from the donor area under local anesthesia.",
      color: "bg-purple-500",
    },
    {
      title: "Choi Pen Implantation",
      description:
        "Using the Choi pen, grafts are implanted one by one directly into the scalp.",
      color: "bg-pink-500",
    },
    {
      title: "Recovery & Results",
      description:
        "Most patients return to normal life within days. Results become visible after 6–12 months.",
      color: "bg-golden",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={choipenphoto}
            alt="DHI Treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40" />
        </motion.div>

        <div className="relative h-full flex items-center z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="text-7xl font-bold text-white mb-6">
                DHI
                <span className="block text-golden">Hair Transplant</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Experience precision and innovation with Direct Hair
                Implantation, where each follicle is placed with microscopic
                accuracy for the most natural-looking results.
              </p>
              <motion.a
                href="https://en.wikipedia.org/wiki/Hair_transplantation#Direct_hair_implantation"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-golden text-white px-8 py-4 rounded-full font-medium hover:bg-golden/90 transition-all"
              >
                Learn More About DHI Method
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid with Hover Effects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Why Choose DHI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DHI represents the pinnacle of hair transplant technology,
              offering unparalleled precision and natural-looking results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CheckCircleIcon className="w-12 h-12 text-golden mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-navy text-center mb-16"
          >
            The DHI Process
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-8 mb-12"
              >
                <div
                  className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0`}
                >
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy/80 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Look?
            </h2>
            <p className="text-xl mb-8">
              Take the first step towards a fuller, more confident you with our
              advanced DHI treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-golden text-white px-8 py-4 rounded-full font-medium"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 text-white px-8 py-4 rounded-full font-medium"
              >
                View Results Gallery
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DHI;
