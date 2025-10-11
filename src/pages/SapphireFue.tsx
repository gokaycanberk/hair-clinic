import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import sapphireFueImage from "../assets/images/sapphirefuefoto.png";

const SapphireFue = () => {
  const stages = [
    {
      title: "Consultation & Preparation",
      description:
        "After blood tests and medical evaluation, our experts design your new hairline and plan your graft distribution.",
      icon: "🔍",
    },
    {
      title: "Graft Extraction",
      description:
        "Healthy hair follicles are gently collected from the donor area at the back of the head for the most natural match.",
      icon: "🎯",
    },
    {
      title: "Channel Opening",
      description:
        "Using sapphire blades, we create micro-channels that perfectly fit each graft, ensuring precision and natural direction.",
      icon: "💎",
    },
    {
      title: "Implantation",
      description:
        "Each graft is carefully placed one by one into the prepared channels to achieve optimal density and alignment.",
      icon: "🎨",
    },
    {
      title: "Aftercare & Recovery",
      description:
        "On Day 2, the first wash is performed at our clinic. You'll receive detailed guidance for home care.",
      icon: "✨",
    },
  ];

  const advantages = [
    "Smaller and smoother micro-channels compared to traditional tools",
    "Denser hair implantation for fuller appearance",
    "Natural 40–45° growth angle maintenance",
    "Faster healing and recovery time",
    "Reduced scarring and irritation risk",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={sapphireFueImage}
            alt="Sapphire FUE Treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/40" />
        </motion.div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Sapphire FUE
                <span className="block text-golden mt-2">Hair Transplant</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Experience the latest evolution in hair transplantation with our
                Sapphire FUE technique, delivering unparalleled precision and
                natural-looking results.
              </p>
              <a
                href="https://en.wikipedia.org/wiki/Follicular_unit_extraction"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-golden hover:bg-golden/90 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105"
              >
                Learn More About FUE
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Different Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy mb-6">
              What Makes Sapphire FUE Different?
            </h2>
            <p className="text-xl text-gray-600">
              Unlike classical FUE, which uses steel blades, Sapphire FUE
              utilizes sapphire-tipped micro instruments to open ultra-fine
              channels on the scalp. These smaller, smoother incisions minimize
              tissue damage and allow for precise placement of more grafts,
              resulting in denser and more natural-looking outcomes.
            </p>
          </motion.div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <ChevronRightIcon className="w-6 h-6 text-golden flex-shrink-0" />
                  <p className="text-gray-700">{advantage}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Stages */}
      <section className="py-20 bg-navy/5">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-navy text-center mb-16"
          >
            Treatment Stages
          </motion.h2>

          <div className="max-w-5xl mx-auto">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex items-center gap-8 mb-12"
              >
                <div className="w-20 h-20 flex-shrink-0 bg-white rounded-full shadow-lg flex items-center justify-center text-4xl">
                  {stage.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-navy mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-gray-600">{stage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy/90 via-navy/80 to-navy/70 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Take the first step towards a fuller, natural-looking head of hair
              with our Sapphire FUE treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-golden hover:bg-golden/90 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105">
                Schedule Free Consultation
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105">
                View Before & After Gallery
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SapphireFue;
