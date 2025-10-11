import { motion } from "framer-motion";
import { BeakerIcon, SparklesIcon } from "@heroicons/react/24/outline";
import stemCellImage from "../assets/images/Stemcelltehrapy.jpeg";
import processImage from "../assets/images/stemcellprocess.jpeg";

const StemCell = () => {
  const benefits = [
    {
      title: "Natural Hair Regeneration",
      description:
        "Uses your body's own regenerative cells to revive dormant hair follicles and stimulate new natural growth.",
    },
    {
      title: "Boosts Transplant Success",
      description:
        "When combined with FUE or DHI procedures, improves graft survival and enhances density.",
    },
    {
      title: "Strengthens Existing Hair",
      description:
        "Nourishes and fortifies existing hair follicles, reducing thinning and future loss.",
    },
    {
      title: "Minimally Invasive",
      description:
        "Simple micro-injections with no incisions, no stitches, and minimal downtime.",
    },
    {
      title: "Faster Healing",
      description:
        "Reduces inflammation and speeds up natural healing, helping transplanted grafts adapt effectively.",
    },
    {
      title: "Universal Suitability",
      description:
        "Ideal for both men and women experiencing early-stage hair loss or thinning.",
    },
  ];

  const process = [
    {
      title: "Consultation & Analysis",
      description:
        "Our specialists carefully examine your hair and scalp condition to design a personalized treatment plan.",
      icon: "🔍",
    },
    {
      title: "Stem Cell Extraction",
      description:
        "A small sample (usually from your fat tissue or blood) is collected under local anesthesia.",
      icon: "🧬",
    },
    {
      title: "Laboratory Processing",
      description:
        "The stem cells are isolated and enriched in a sterile, medical environment for maximum effectiveness.",
      icon: "🧪",
    },
    {
      title: "Activation & Injection",
      description:
        "Concentrated stem cells are gently injected into thinning areas to stimulate growth.",
      icon: "💉",
    },
    {
      title: "Recovery & Results",
      description:
        "Non-surgical procedure requires no downtime. Results improve over 2-12 months.",
      icon: "✨",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={stemCellImage}
            alt="Stem Cell Treatment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/60 to-transparent" />
        </motion.div>

        <div className="relative h-full flex items-center z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="text-7xl font-bold text-white mb-6">
                Stem Cell
                <span className="block text-golden">Hair Therapy</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Step into the future of hair restoration with our innovative
                Stem Cell Therapy, harnessing your body's natural regenerative
                power.
              </p>
              <motion.a
                href="https://en.wikipedia.org/wiki/Stem-cell_therapy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-golden text-white px-8 py-4 rounded-full font-medium hover:bg-golden/90 transition-all"
              >
                Learn More About Stem Cell Therapy
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Floating Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              The Power of Stem Cell Therapy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience a revolutionary approach that doesn't just relocate
              hair but awakens your scalp's natural ability to grow healthy
              hair.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <BeakerIcon className="w-12 h-12 text-golden mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <img
                src={processImage}
                alt="Stem Cell Process"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <div className="lg:w-1/2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-navy mb-8"
              >
                The Treatment Process
              </motion.h2>

              <div className="space-y-8">
                {process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-golden/10 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tip Section */}
      <section className="py-16 bg-navy/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-start gap-4">
              <SparklesIcon className="w-8 h-8 text-golden flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-navy mb-2">
                  Pro Tip
                </h3>
                <p className="text-gray-600">
                  Stem cell therapy is often used alongside FUE or DHI
                  techniques for even better success rates and denser results.
                  Ask our specialists about combining treatments for optimal
                  outcomes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy/90 to-navy/80 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Experience the Future of Hair Restoration
            </h2>
            <p className="text-xl mb-8">
              Join the growing number of patients who have discovered the
              regenerative power of stem cell therapy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-golden text-white px-8 py-4 rounded-full font-medium"
              >
                Schedule Your Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 text-white px-8 py-4 rounded-full font-medium"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StemCell;
