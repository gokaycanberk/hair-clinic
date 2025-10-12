import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import peakLogo from "../assets/images/logo2.jpg";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const quickLinks = [
    { name: "Treatments", to: "treatments" },
    { name: "Methods", to: "methods" },
    { name: "Price", to: "price" },
    { name: "Before & After", to: "before-after" },
    { name: "About Us", to: "about" },
  ];

  const treatments = [
    { name: "Sapphire FUE", path: "/treatments/sapphire-fue" },
    { name: "DHI Hair Transplant", path: "/treatments/dhi" },
    { name: "Stem Cell Treatment", path: "/treatments/stem-cell" },
  ];

  const contactInfo = [
    {
      icon: <PhoneIcon className="w-5 h-5" />,
      text: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <EnvelopeIcon className="w-5 h-5" />,
      text: "info@peakhairturkey.com",
      link: "mailto:info@peakhairturkey.com",
    },
    {
      icon: <MapPinIcon className="w-5 h-5" />,
      text: "36 Madison Ave Suite 507 New York, Ny 10016",
      link: "https://maps.app.goo.gl/ABdBLjpQDp6j1r47A",
    },
    {
      icon: <ClockIcon className="w-5 h-5" />,
      text: "Mon - Sat: 9:00 AM - 7:00 PM",
    },
  ];

  return (
    <footer className="bg-[#1e2c4f] text-white pt-12 pb-6 px-4 md:px-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About Column */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <img
                src={peakLogo}
                alt="Peak Hair"
                className="h-20 md:h-24 w-auto rounded-lg"
              />
            </div>
            <p className="text-gray-300">
              Official consultation office of Istanbul’s leading hair transplant
              clinic. Free in-person consultations in NYC & Berlin for
              world-class, natural-looking results.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://www.instagram.com/peakhairturkey/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-golden transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-golden transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4 text-golden">
              Quick Links
            </h4>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  {isHomePage ? (
                    <ScrollLink
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="text-gray-300 hover:text-golden cursor-pointer transition-colors flex items-center gap-2"
                    >
                      <ChevronRightIcon className="w-4 h-4" />
                      {link.name}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to="/"
                      className="text-gray-300 hover:text-golden cursor-pointer transition-colors flex items-center gap-2"
                    >
                      <ChevronRightIcon className="w-4 h-4" />
                      {link.name}
                    </RouterLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments Column */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4 text-golden">
              Our Treatments
            </h4>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              {treatments.map((treatment) => (
                <li key={treatment.path}>
                  <RouterLink
                    to={treatment.path}
                    className="text-gray-300 hover:text-golden transition-colors flex items-center gap-2"
                  >
                    <ChevronRightIcon className="w-4 h-4" />
                    {treatment.name}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4 text-golden">
              Contact Info
            </h4>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </span>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-300 hover:text-golden transition-colors"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-gray-300">{info.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Peak Hair Turkey. All rights
              reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <RouterLink
                to="/privacy-policy"
                className="text-gray-300 hover:text-golden text-sm transition-colors"
              >
                Privacy Policy
              </RouterLink>
              <RouterLink
                to="/terms"
                className="text-gray-300 hover:text-golden text-sm transition-colors"
              >
                Terms of Service
              </RouterLink>
              <RouterLink
                to="/cookies"
                className="text-gray-300 hover:text-golden text-sm transition-colors"
              >
                Cookie Policy
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
