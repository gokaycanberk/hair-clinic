import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

interface ContactFormProps {
  onClose: () => void;
  packageName: string;
}

const ContactForm = ({ onClose, packageName }: ContactFormProps) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
      <h3 className="text-2xl font-bold text-navy mb-4">
        Enquire About {packageName}
      </h3>
      <form
        action="https://formsubmit.co/your-email@peakhairturkey.com" // Bu email adresini gerçek email ile değiştirin
        method="POST"
        className="space-y-4"
      >
        <input
          type="hidden"
          name="_subject"
          value={`New ${packageName} Package Enquiry`}
        />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://peakhairturkey.com/thank-you" // Teşekkür sayfası URL'si
        />

        <div>
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea
            name="message"
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
            defaultValue={`I'm interested in the ${packageName} package. Please provide more information.`}
          />
        </div>

        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            className="flex-1 bg-navy text-white px-6 py-3 rounded-lg hover:bg-golden transition-colors"
          >
            Send Enquiry
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 border-2 border-navy text-navy rounded-lg hover:bg-navy hover:text-white transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
);

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = [
    {
      name: "Basic Package",
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
      name: "Premium Package",
      price: "3000",
      features: [
        "Everything in Basic Package",
        "DHI or Sapphire FUE method",
        "PRP treatment included",
        "3 follow-up sessions",
        "Premium hair care products",
        "Priority scheduling",
      ],
      isPopular: true,
    },
    {
      name: "VIP Package",
      price: "4500",
      features: [
        "Everything in Premium Package",
        "Stem cell therapy",
        "Lifetime follow-up care",
        "Custom hair care regime",
        "Priority scheduling",
        "24/7 personal care assistant",
      ],
    },
  ];

  return (
    <section id="packages" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Treatment Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package that suits your needs. All our packages
            include comprehensive care and natural-looking results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                pkg.isPopular ? "border-2 border-golden" : ""
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-golden text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-gray-500 text-2xl mr-1">$</span>
                  <span className="text-4xl font-bold">{pkg.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-golden mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedPackage(pkg.name)}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  pkg.isPopular
                    ? "bg-golden text-white hover:bg-golden-dark"
                    : "bg-navy text-white hover:bg-golden"
                }`}
              >
                Contact for {pkg.name}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            * Prices are in USD. Additional costs may apply based on individual
            requirements.
          </p>
          <p>* All packages include free initial consultation.</p>
        </div>
      </div>

      {selectedPackage && (
        <ContactForm
          packageName={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </section>
  );
};

export default Packages;
